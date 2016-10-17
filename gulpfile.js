var gulp = require('gulp'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglify');

//, 'app/controllers/*.js', 'app/app.js'

gulp.task('js-concat', function () {

  gulp.src('app/directives/*.js')
                    .pipe(concat('directives.js'))
    	              .pipe(uglify())
    	              .pipe(gulp.dest('app/'));

  gulp.src('app/controllers/*.js')
                    .pipe(concat('controllers.concat.js'))
                    .pipe(uglify())
                    .pipe(gulp.dest('app/'));
});


gulp.task('default', ['js-concat']);
