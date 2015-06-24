var gulp = require('gulp');
var del = require('del');
var imagemin = require('gulp-imagemin');
var inline = require('gulp-inline-source');
var sequence = require('gulp-sequence');

gulp.task('clean', function (cb) {
  del(['dist/**/*'], cb);
});

// ROOT DIR

gulp.task('root:html', function () {
  gulp.src('./*.html')
    .pipe(inline())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('root:images', function () {
  return gulp.src('./img/*')
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest('./dist/img/'));
});

// VIEWS DIR

gulp.task('views:html', function () {
  gulp.src('./views/*.html')
    .pipe(inline())
    .pipe(gulp.dest('./dist/views/'));
});

gulp.task('views:images', function () {
  return gulp.src('./views/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/views/images/'));
});


gulp.task('root', ['root:html','root:images']);
gulp.task('views', ['views:html','views:images']);
gulp.task('build', sequence('clean',['root','views']));