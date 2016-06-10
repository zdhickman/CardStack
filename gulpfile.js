var gulp = require('gulp');
var del = require('del');
var concatCss = require('gulp-concat-css');
var babel = require('gulp-babel');

var $ = require('gulp-load-plugins')();

var src = 'src/';
var lib = 'lib/';

gulp.task('scripts', function() {
  return gulp.src('./src/js/**')
    .pipe(babel({
      presets: ['react']
    }))
    .pipe(gulp.dest(lib + 'js/'));
});

gulp.task('lint', function () {
  return gulp.src([src + 'js/**/*.{js,jsx}'])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

gulp.task('styles', function() {
  return gulp.src(src + 'css/**/*.styl')
    .pipe($.stylus({
      compress: true
    }))
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest(lib + 'css/'));
});

gulp.task('clean', function(cb) {
  del([dist], cb);
});

gulp.task('build', function() {
  gulp.start(['lint', 'scripts', 'styles']);
});

gulp.task('default', ['build']);
