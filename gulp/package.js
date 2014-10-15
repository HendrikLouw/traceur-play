var gulp = require('gulp');
var test = require('./test');
var build = require('./build');

gulp.task('package', ['test', 'build-sass'], function () {

});
