'use strict';

const config = require('../config');
const gulp = require('gulp');

gulp.task('watch', ['browserSync', 'server'], () => {
  // Scripts are automatically watched and rebundled by Watchify inside
  // Browserify task
  gulp.watch(config.lint.src, ['lint']);
  gulp.watch(config.styles.meteo.src, ['styles']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.views.meteo.watch, ['views']);
  gulp.watch(config.ngdocs.src, ['ngdocs']);
});

gulp.task('watch-unit-tests', () => {
  gulp.watch('src/**/*.js', ['unit']);
});
