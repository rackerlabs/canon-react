#!/usr/bin/env python

import re
import os
from distutils.version import StrictVersion
import uuid

os.system("git checkout master")
os.system("git pull")

# get the initial version number
node_file = open(os.path.dirname(__file__) + '/../package.json', "r")
package_json_contents = node_file.readlines()
node_file.close()

for index, line in enumerate(package_json_contents):
    version_match = re.search('"version": "([0-9\.]*)"', line)
    if (version_match != None):
        version_line = index
        current_version = version_match.group(1)
        break

# get the new version number
new_version = raw_input("The current version is " + current_version + ". What should the new version number be? ")

if (StrictVersion(current_version) >= StrictVersion(new_version)):
    print "Cannot release with same or lower version number than the current one! Terminating."
    exit()

# get the changelog
print "Please enter a numbered list of changes below. Enter a blank line when finished."
change_lines = []
while True:
    line = raw_input()
    if line:
        change_lines.append(line)
    else:
        break

if (len(change_lines) < 1):
    print "A list of changes is required! Terminating."
    exit()

# warn user if list of changes will be edited
if '"' in ''.join(change_lines):
    should_continue = raw_input("Double-quotes will be removed from the change list commit. Continue? [Y/n] ")
    if (should_continue and should_continue[0].lower() == 'n'):
        exit()

# create a new branch
branch_uuid = str(uuid.uuid4().get_hex().upper()[0:4])
release_branch_name = "release_branch_" + new_version.replace('.', '_') + '_' + branch_uuid
os.system("git checkout -b " + release_branch_name)

# update package.json with the new version number
package_json_contents[version_line] = package_json_contents[version_line].replace(current_version, new_version)
node_file = open(os.path.dirname(__file__) + '/../package.json', "w")
package_json_contents = "".join(package_json_contents)
node_file.write(package_json_contents)
node_file.close()

# update CHANGELOG.md with the changelog
changelog = open(os.path.dirname(__file__) + '/../CHANGELOG.md', "r")
changelog_contents = changelog.readlines()
changelog.close()
new_changelog_contents = ['### Version ' + new_version + '\n'] + ['\n'.join(change_lines), '\n\n'] + changelog_contents
changelog = open(os.path.dirname(__file__) + '/../CHANGELOG.md', "w")
new_changelog_contents = "".join(new_changelog_contents)
changelog.write(new_changelog_contents)
changelog.close()

# commit the branch and push it
formatted_change_list = '\n'.join(change_lines).replace('"','')

os.system('git commit -am "chore(release): v ' + new_version + '\n' + formatted_change_list + '"')
os.system('git push origin ' + release_branch_name)
