module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: [ 'jasmine' ],

    files: [
      'test/vendor/es5-shim.js',
      'node_modules/react/dist/react-with-addons.js',
      'test/jasmine-helpers.js',
      'test_bundle.js'
    ],

    reporters: ['spec', 'failed'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,

    singleRun: true
  });
};
