'use strict';

const config = require('../config');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const watchify = require('watchify');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const handleErrors = require('../util/handleErrors');
const browserSync = require('browser-sync');
const babel = require('babelify');
const stringify = require('stringify');

function buildScript() {
  let bundler = browserify({
    entries: config.browserify.meteo.src,
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: config.environment !== 'prod',
  }, watchify.args)
  .transform(babel)
  .transform(stringify, {
    appliesTo: { includeExtensions: ['.html'] },
    minify: true,
  });

  bundler = watchify(bundler);
  bundler.on('update', () => {
    rebundle();
  });

  function rebundle() {
    const stream = bundler.bundle();

    gutil.log('Rebundle...');

    return stream.on('error', handleErrors)
      .pipe(source('meteo.js'))
      .pipe(buffer())
      .pipe(gulpif(config.environment !== 'prod', sourcemaps.init({
        loadMaps: false,
      })))
      .pipe(gulpif(config.environment === 'prod', uglify({
        mangle: true,
      })))
      .pipe(gulpif(config.environment !== 'prod', sourcemaps.write('./')))
      .pipe(gulp.dest(config.browserify.meteo.dest))
      .pipe(browserSync.stream({ once: true }));
  }

  return rebundle();
}

gulp.task('browserify', ['views', 'views-modules'], () => buildScript());
