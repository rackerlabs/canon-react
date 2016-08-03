[![Build Status](https://travis-ci.org/rackerlabs/canon-react.svg)](https://travis-ci.org/rackerlabs/canon-react)
[![npm version](https://badge.fury.io/js/canon-react.svg)](http://badge.fury.io/js/canon-react)

![canon-react-logo](images/canon_react_logo.png)
# Documentation

React components for Rackspace's Canon framework

## Contributing
For [issues](https://github.com/rackerlabs/canon-react/issues) or feature requests please [submit an issue](https://github.com/rackerlabs/canon-react/issues/new). For more information on contributing to canon-react, checkout the [Contributing Guide](CONTRIBUTING.md)

## Building
The latest stable release is available under the releases section of the repository. You can also generate a release from master if you wish to live on the edge.

To build a bundled file for release run `scripts/cibuild`

## Releasing
Publishing a new release involves three steps:
1. Create and merge a pull request which updates the changelog and version number. This may be done automatically by running the `create_release_branch.py` script.
2. Create a new release and upload a newly-created .tar.gz package. This may be done automatically by running `scripts/publish_new_release.py` from the main directory.
3. Publish the new version to npm by running `npm publish`.

## Instructions For Including In Your Project
`npm install canon-react` will install the canon-react module inside of the `node_modules` directory of your current directory. `npm install canon-react -g` will install the canon-react module globally.

### Using Components
After installation you can use canon react components.

```javascript
var Component = require('canon-react').Component;
```

ES6:

```javascript
import {Component} from 'canon-react';
```

An example of how to use canon-react components can be found in `node_modules/canon-react/demo/demo.jsx`

# Roadmap
This is a list of what is planned for the next release
## v 1.0.0
What would you like to see? [Request Features](https://github.com/rackerlabs/canon-react/issues/new)
