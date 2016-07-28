#!/usr/bin/env python

import os
import re
import subprocess
import json

RELEASES_ENDPOINT = "https://api.github.com/repos/rackerlabs/canon-react/releases"

# prepare for uploading the new release
os.system("git checkout master")
os.system("git pull")
os.system("sudo scripts/cibuild")

# get the version number
node_file = open(os.path.dirname(__file__) + '/../package.json', "r")
package_json_contents = node_file.readlines()
node_file.close()

for line in package_json_contents:
    version_match = re.search('"version": "([0-9\.]*)"', line)
    if (version_match != None):
        current_version = version_match.group(1)
        break

# get the changelog
changelog_file = open(os.path.dirname(__file__) + '/../CHANGELOG.md', "r")
changelog = changelog_file.readlines()
changelog_file.close()

for index, line in enumerate(changelog[1:]):
    version_match = re.search('"version": "([0-9\.]*)"', line)
    if (line[0] == '#'):
        second_version_line = index
        break

change_list = ''.join(changelog[1:second_version_line-1])[:-1]
change_list = change_list.replace('"', '\\u0022').replace("'", '\\u0027').replace('\n', '\\u000A')

release_data = """--data '{{ \
    "tag_name": "v{version}", \
    "target_commitish": "master", \
    "name": "v{version}", \
    "body": "{changes}", \
    "draft": false, \
    "prerelease": true \
}}'""".format(version=current_version, changes=change_list)

# set up Github auth
username_input = raw_input("Please enter your github username: ")
has_2fa_input = raw_input("Does your account have 2fa enabled? [y/N] ")

if (has_2fa_input[0].lower() == 'y'):
    user_otp = raw_input("Please enter your github auth code: ")
    otp_header = "-H 'X-GitHub-OTP: {0}'".format(user_otp)
else:
    print "Seriously? You should turn it on."
    otp_header = ""

# create release via Github API
create_release_command = "curl -X POST -u {0} {1} {2} {3}".format(
    username_input,
    otp_header,
    release_data,
    RELEASES_ENDPOINT
)

proc = subprocess.Popen([create_release_command], stdout=subprocess.PIPE, shell=True)
(curl_output, err) = proc.communicate()
print(curl_output)
print(err)
release_info = json.loads(curl_output)

#attach file to the release
raw_upload_url = release_info['upload_url']
upload_url = re.sub(r"{.*}", "", raw_upload_url) + '?name="canon-react-' + current_version.replace('.', '-') + '.tar.gz"'
attach_file_command = "curl -X POST -u {0} {1} {2} {3} {4}".format(
    username_input,
    otp_header,
    '-H "Content-Type: application/gzip"',
    upload_url,
    '-F "data=@canon-react.tar.gz"'
)
os.system(attach_file_command)
