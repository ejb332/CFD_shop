var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
      // .pipe(concat())
      .pipe(uglify())
      .pipe(rename('cfd.min.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function(){
  gulp.src('src/css/*.css')
      .pipe(minifyCSS())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*.css', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
