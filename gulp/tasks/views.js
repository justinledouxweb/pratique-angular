'use strict';

const config = require('../config');
const gulp = require('gulp');
const template = require('gulp-template-html');

gulp.task('views-modules', () => gulp
  .src(config.views.modules.src)
  .pipe(gulp.dest(config.views.modules.dest)));

gulp.task('views', () => gulp.src(config.views.meteo.src)
    .pipe(template(config.views.meteo.template))
    .pipe(gulp.dest(config.views.meteo.dest)));
