'use strict';

const stringify = require('stringify');
const babelify = require('babelify');

module.exports = (config) => {
  config.set({
    basePath: '',
    
    frameworks: ['browserify', 'jasmine'],

    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-permission/dist/angular-permission.js',
      'node_modules/angular-permission/dist/angular-permission-ng.js',
      'node_modules/angular-sanitize/angular-sanitize.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-messages/angular-messages.js',
      'src/apps/gouvernementales/app-gouvernementales.module.js',
      'src/apps/gouvernementales/bootstrap-test.js',
      'src/**/*.spec.js',
    ],

    preprocessors: {
      'src/apps/gouvernementales/app-gouvernementales.module.js': 'browserify',
      'src/apps/gouvernementales/bootstrap-test.js': 'browserify',
      'src/**/*.spec.js': 'browserify',
    },

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-browserify',
      'karma-coverage',
      'karma-mocha-reporter',
    ],

    browserify: {
      debug: true,
      transform: [
        babelify,
        stringify,
      ],
    },

    // reporters: [
    //   'mocha',
    // ],

    mochaReporter: {
      colors: {
        success: 'green',
        info: 'blue',
        warning: 'yellow',
        error: 'bgRed',
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x',
      },
      output: 'full',
    },

    phantomjsLauncher: {
      exitOnResourceError: true,
    },

    port: 9876,

    // logLevel: config.LOG_DEBUG,

    singleRun: true,

    colors: true,

    autoWatch: false,
  });
};
