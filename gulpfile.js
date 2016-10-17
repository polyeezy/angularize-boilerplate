var gulp = require('gulp'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglify');
    connect = require('gulp-connect');

gulp.task('concat', function () {

  gulp.src('app/directives/*.js')
      .pipe(concat('directives.concat.js'))
      .pipe(uglify())
    	.pipe(gulp.dest('app/'));

  gulp.src('app/controllers/*.js')
      .pipe(concat('controllers.concat.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/'));
});

gulp.task('serve', function() {
  connect.server();
});

gulp.task('default', ['js-concat', 'serve']);
