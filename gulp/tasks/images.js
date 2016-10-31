'use strict';

const config = require('../config');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');

const images = () => gulp
  .src(config.images.src)
  .pipe(changed(config.images.dest)) // Ignore unchanged files
  .pipe(imagemin()) // Optimize
  .pipe(gulp.dest(config.images.dest))
  .pipe(browserSync.stream({ once: true }));

gulp.task('images', () => images());
