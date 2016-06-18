var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

// start the browserSync server (localhost:3000)
  browserSync.init({
   server: "./"
  });

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
      .pipe(plumber())
      .pipe(uglify())
      .on('error', errorLog)
      .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function(){
  gulp.src('src/css/*.css')
      .pipe(plumber())
      .pipe(cleanCSS())
      .pipe(autoprefixer('last 2 versions'))
      .on('error', errorLog)
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream()); //figure out how to incorporate html changes into the reload too
});

gulp.task('image', function(){
  gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*.css', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'image', 'watch']);
