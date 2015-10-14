# Contributing

If you have found an issue or would like to request a new feature, simply create a new issue detailing the request. We also welcome pull requests. See below for information on getting started with development and submitting pull requests.

## Submitting a Pull Request
If you wish to submit a pull request for a new feature or issue, you should start by forking this repository first. After you have forked and cloned the repository locally, create a new branch with a name that loosely describes the issue on which you will be working. Once you think you have the addressed the issue in question, submit a pull request. Here are some guidelines to follow when writing code for canon-react:

- Commit messages should follow Angular's [Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).
- Intermediate and work-in-progress commits should be rebased out.
- Keep pull requests tightly scoped to the issue or feature being addressed.
- All changes from every developer must go through code review before they will be merged.
- All changes must pass the CI build. Travis CI will automatically update your PR with the build status.
- All changes must have unit tests.
- All components must have a demo implementation in the `demo/` directory.

## Development
There are a few scripts in the `scripts/` directory to make developing in canon-react easy.
### `scripts/setup`
Run the `setup` script to install all dependencies needed to lint, build, test, and run the demo server.
### `scripts/server`
The `server` script will run a lightweight http server to server up react components in the `demo/` directory. This script will also watch for file changes while you are developing so you only need to refresh your browser to see your most recent changes. The demo web page can be viewed at `http://localhost:8080/demo/`.
### `scripts/test`
The `test` script will start a karma test runner that runs the entire suite of unit tests for this library and will stay alive and watch for file changes while you are developing.
### `scripts/cibuild`
The `cibuild` script is run by TravisCI for every pull request. This script runs linting, build tasks on the javascript, and unit tests. You can run this file locally to ensure your branch will pass on the CI environment. If you wish to run linting separately from these jobs, you can run `grunt lint`.
