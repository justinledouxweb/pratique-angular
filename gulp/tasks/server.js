'use strict';

const config = require('../config');
const http = require('http');
const express = require('express');
const gulp = require('gulp');
const gutil = require('gulp-util');
const morgan = require('morgan');

gulp.task('server', () => {
  const server = express();

  // log all requests to the console
  server.use(morgan('dev'));
  server.use(express.static('build'));

  server.get('/favicon.ico', (req, res) => {
    console.log('favicon requested');
    res.status(404).end();
  });

  // Serve index.html for all routes to leave routing up to Angular
  server.all('/*', (req, res) => {
    res.sendFile('meteo/index.html', { root: 'build' });
  });

  // server.all('/*', (req, res) => {
  //   res.sendFile('privees/index.html', { root: 'build' });
  // });

  // server.all('/privees/*', (req, res) => {
  //   res.sendFile('privees/index.html', { root: 'build' });
  // });

  // server.all('/gouvernementales', (req, res) => {
  //   res.sendFile('gouvernementales/index.html', { root: 'build' });
  // });

  // server.all('/gouvernementales/*', (req, res) => {
  //   res.sendFile('gouvernementales/index.html', { root: 'build' });
  // });

  // Start webserver if not already running
  const s = http.createServer(server);

  s.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      gutil.log(`Development server is already started at port ${config.serverPort}`);
    } else {
      throw err;
    }
  });

  s.listen(config.serverPort);
});
