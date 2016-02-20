var gulp = require('gulp'),
  connect = require('gulp-connect'),
  uglify = require('gulp-uglify');

gulp.task('try', function() {
  connect.server({
    root: ['demo', './']
  });
});

gulp.task('build', function () {
   return gulp.src('./src/*.js')
       .pipe(uglify())
       .pipe(gulp.dest('./dist/'))
});