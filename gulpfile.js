var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('js', function () {
  return gulp.src('./views/js/*.js')
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('css', function () {
  return gulp.src('./views/css/*.css')
    .pipe(minifyCss())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('build', ['js','css']);