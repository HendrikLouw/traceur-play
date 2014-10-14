var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var config = require('./../package.json').config;

gulp.task('build', function() {
  return gulp.src(config.srcFiles)
    .pipe(sourcemaps.init())
    .pipe(traceur())
    .pipe(concat(config.minFile))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.distPath));
});

gulp.task('build:watch', function() {
  return gulp.watch(config.srcFiles, ['build']);
});
