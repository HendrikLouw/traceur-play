var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('./browserSync').browserSync;

var config = require('./../package.json').config;

gulp.task('build-js', function() {
  return gulp.src(config.srcFiles)
    .pipe(sourcemaps.init())
    .pipe(traceur())
    .pipe(concat(config.minFile))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.distPath));
});

gulp.task('build-js:watch', function() {
  return gulp.watch(config.srcFiles, ['build']);
});

gulp.task('build-sass', function() {
  return gulp.src(config.styleFiles)
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(concat(config.minStyleFile))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.distPath))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('build-sass:watch', ['browser-sync'], function() {
  return gulp.watch(config.styleFiles, ['build-sass']);
});
