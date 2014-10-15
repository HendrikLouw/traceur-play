var gulp = require('gulp');
var karma = require('gulp-karma');
var build = require('./build');
var config = require('./../package.json').config;

var testFiles = [
  config.minFileRelativePath,
  config.testFiles
];

gulp.task('test', ['build-js'], function() {
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: './test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('test:watch', ['build-js:watch'], function() {
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: './test/karma.conf.js',
      action: 'watch'
    }))
});
