var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var inline = require('gulp-inline');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');


gulp.task('clean', function (cb) {
  del(['dist/**/*'], cb);
});

gulp.task('root-html', function () {
  gulp.src('./*.html')
  .pipe(gulp.dest('./dist/'));
});

gulp.task('root-css', function () {
  gulp.src('./css/style.css')
  .pipe(minifyCss())
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('root-js', function () {
  gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('root-images', function () {
  return gulp.src('./img/*')
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest('./dist/img/'));
});

gulp.task('views-html', function () {
  gulp.src('./views/*.html')
    .pipe(gulp.dest('./dist/views/'));
});


gulp.task('views-images', function () {
  return gulp.src('./views/images/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./dist/views/images/'));
});


gulp.task('views-js', function () {
  return gulp.src('./views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/views/js/'));
});


gulp.task('views-css', function () {
  return gulp.src('./views/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/views/css/'));
});


gulp.task('root', ['root-html','root-js','root-css','root-images']);
gulp.task('views', ['views-html','views-js','views-css','views-images']);
gulp.task('build', ['root','views']);