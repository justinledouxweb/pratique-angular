'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('dev', ['clean'], (cb) => {
  const callback = cb || function callback() {};

  runSequence([
    'styles',
    'libs',
    'images',
    'browserify',
    'ngdocs',
  ], 'watch', callback);
});
