[![Build Status](https://travis-ci.org/rackerlabs/canon-react.svg)](https://travis-ci.org/rackerlabs/canon-react)
[![npm version](https://badge.fury.io/js/canon-react.svg)](http://badge.fury.io/js/canon-react)

CAUTION: This library is not ready for public use yet.

# canon-react
React components for Rackspace's Canon framework

## Instructions For Devs
Git clone and run `npm install` to install dependencies (may need to be run as sudo)

### Building
To build a bundled file for release run `npm run build`
To build a demo bundle for testing run `npm run demo-build` and open `canon-react/demo/index.html` in your browser

### Testing
To run tests with phantom run `npm run test`
To run tests in chrome and watch for changes run `npm run test-watch`

## Instructions For Including In Your Project
`npm install canon-react` will install the canon-react module inside of the `node_modules` directory of your current directory. `npm install canon-react -g` (may need sudo) will install the canon-react module globally.

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
## v 0.4.0
1. Action Button
2. Action Dropdown
