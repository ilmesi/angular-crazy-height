var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('try', function() {
  connect.server({
    root: ['demo', './']
  });
});