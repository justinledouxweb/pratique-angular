'use strict';

const config = require('../config');
const browserSync = require('browser-sync');
const gulp = require('gulp');

function sync(_appName_) {
  const appName = _appName_ || '';

  browserSync({
    open: true,
    browser: 'google chrome',
    port: config.browserPort,
    ui: {
      port: config.UIPort,
    },
    proxy: `localhost:${config.serverPort}/${appName}`,
  });
}

gulp.task('browserSync', () => sync());  // defaults to dashboar
