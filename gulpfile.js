var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');


    gulp.task('styles', function() {
      return sass('sass/main.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('css'))
        .pipe(notify({ message: 'Styles task complete' }));
    });

    gulp.task('watch', function() {

      // Watch .scss files
      gulp.watch('sass/**/*.scss', ['styles']);

      // Watch .js files
      gulp.watch('src/scripts/**/*.js', ['scripts']);

      // Watch image files
      gulp.watch('src/images/**/*', ['images']);

    });
