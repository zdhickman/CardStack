var gulp = require('gulp');
var del = require('del');
var concatCss = require('gulp-concat-css');
var babel = require('gulp-babel');

var $ = require('gulp-load-plugins')();

var src = 'src/';
var lib = 'lib/';

gulp.task('scripts', function() {
  return gulp.src([
      '!' + src + '/css/**',
      src + '/**'
    ])
    .pipe(babel({
      presets: ['react']
    }))
    .pipe(gulp.dest(lib));
});

gulp.task('styles', function() {
  return gulp.src(src + 'css/**/*.styl')
    .pipe($.stylus({
      compress: true
    }))
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest(lib + 'css/'));
});

gulp.task('build', function() {
  gulp.start(['scripts', 'styles']);
});

gulp.task('default', ['build']);
