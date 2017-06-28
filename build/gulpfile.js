'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function () {
  gulp.src('../src/styles/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('../dist/css'));
});

gulp.task('copyfont', function() {
  return gulp.src('../src/styles/font/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../dist/css/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);
