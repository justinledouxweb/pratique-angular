'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const concat = require('gulp-concat');
const config = require('../config');
const sourcemap = require('gulp-sourcemaps');

gulp.task('libs', () => gulp
  .src(config.libs.meteo.src)
  .pipe(gulpif(config.environment !== 'prod', sourcemap.init()))
  .pipe(concat('meteo-libs.js', { newLine: ';' }))
  .pipe(gulpif(config.environment !== 'prod', sourcemap.write('./')))
  .pipe(gulp.dest(config.libs.meteo.dest)));
