var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),

gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
      // .pipe(concat())
      .pipe(uglify())
      .pipe(rename('cfd.min.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function(){
  gulp.src('src/css/*.css')
      .pipe(minifyCSS().on('error', minifyCSS.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*.css', ['styles']);
});

// run all the tasks by simply typing "gulp"
gulp.task('default', ['scripts', 'styles', 'watch']);

var browserSync = require('browser-sync').create();
  browserSync.init({
    server: "./"
  });
  browserSync.stream();
