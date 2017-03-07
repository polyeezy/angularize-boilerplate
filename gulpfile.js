var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    clean       = require('gulp-clean'),
    connect     = require('gulp-connect');

gulp.task('concat-app', function() {
    return gulp .src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-cooies.js',
        'app/directives/*.js',
        'app/controllers/*.js',
        'app/services/*.js',
        'app/app.js',
      ])
          .pipe(concat('app.concat.js'))
          .pipe(gulp.dest('app/'));
});

gulp.task('concat-js', function() {
    return gulp .src([
      'node_modules/materialize-css/bin/materialize.js',
    ])
    .pipe(concat('javascript-concat.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('concat-css', function() {
  return gulp .src([
    'css/style.css',
    'node_modules/materialize-design-icons/iconfont/material-icons.css',
    'node_modules/materialize-css/bin/materialize.css'
  ])
  .pipe(concat('style.concat.css'))
  .pipe(gulp.dest('css/'));
});

gulp.task('clean', function() {
  return gulp.src(['css/style.concat.css', 'app/app.concat.js', 'node_modules'], {read: false})
      .pipe(clean());
});

gulp.task('serve', function() {
  connect.server();
});

gulp.task('default', ['concat-app', 'concat-js', 'concat-css']);
gulp.task('dev', ['default', 'serve']);
