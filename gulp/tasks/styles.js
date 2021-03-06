'use strict';

const config = require('../config');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const handleErrors = require('../util/handleErrors');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

gulp.task('styles', () => gulp
  .src(config.styles.meteo.src)
  .pipe(sourcemaps.init())
    .pipe(sass().on('error', handleErrors))
    .pipe(autoprefixer(['> 1%', 'ie 9']))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.styles.meteo.dest))
  .pipe(browserSync.stream({ once: false })));
