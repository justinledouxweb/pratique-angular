'use strict';

const path = require('path');

const commandLineArguments = {};

// The 'yargs' plugin does not work when passing an argument value that starts
// with a zero. This is why we need to process the arguments by hand using
// node's process API.
process.argv.forEach((val, index) => {
  if (/^(--)/.test(val)) {
    commandLineArguments[val.replace('--', '')] = process.argv[index + 1];
  }
});

module.exports = {
  browserPort: 3000,
  UIPort: 3001,
  serverPort: 3002,
  environment: commandLineArguments.env || 'local',

  browserify: {
    meteo: {
      src: ['./src/apps/meteo/meteo.js'],
      dest: 'build/meteo/js',
    },
  },

  lint: {
    src: [
      'src/apps/**/*.js',
      '!src/apps/**/*.spec.js',
      '!src/apps/**/*.e2e.js',

      'src/modules/**/*.js',
      '!src/modules/**/*.spec.js',
      '!src/modules/**/*.e2e.js',
    ],
  },

  angularConfig: {
    meteo: {
      src: 'src/apps/meteo/meteo.config.json',
      dest: 'build/meteo',
      local: {
        baseUrl: '/',
      },
    },
  },

  styles: {
    meteo: {
      src: [
        'src/apps/meteo/**/*.scss',
        'src/modules/**/*.scss',
        'src/styles/**/*.scss',
      ],
      dest: 'build/meteo/css',
    },
  },

  libs: {
    meteo: {
      src: [
        // 'node_modules/jquery/dist/jquery.min.js',
        'node_modules/angular/angular.min.js',
        // 'node_modules/angular-i18n/angular-locale_fr-ca.js',
        // 'node_modules/angular-mocks/angular-mocks.js',
        // 'node_modules/angular-permission/dist/angular-permission.js',
        // 'node_modules/angular-permission/dist/angular-permission-ng.js',
        // 'node_modules/angular-sanitize/angular-sanitize.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-messages/angular-messages.min.js',
      ],
      dest: 'build/meteo/js',
    },
  },

  images: {
    src: 'src/images/**/*',
    dest: 'build/images',
  },

  views: {
    meteo: {
      src: 'src/apps/meteo/index.html',
      dest: 'build/meteo',
      template: 'src/apps/global.html',
      watch: [
        'src/apps/meteo/**/*.html',
        'src/modules/**/*.html',
      ],
    },

    modules: {
      src: 'src/**/*.html',
      dest: 'build',
    },

    watch: [
      'src/apps/**/*.html',
      'src/modules/**/*.html',
    ],
  },

  ngdocs: {
    src: [
      'src/apps/**/*.js',
      '!src/apps/**/*.spec.js',
      '!src/apps/**/*.e2e.js',

      'src/modules/**/*.js',
      '!src/modules/**/*.spec.js',
      '!src/modules/**/*.e2e.js',
    ],
    dest: 'documentation/',
    watchSrc: [
      'src/apps/**/*.js',
      'src/modules/**/*.js',
    ],
    server: {
      root: 'documentation',
      fallback: 'documentation/index.html',
      port: 8888,
    },
  },

  dist: {
    root: 'build',
  },

  test: {
    karma: path.resolve(`${__dirname}/../karma.conf.js`),
  },
};
