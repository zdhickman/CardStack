var gulp = require('gulp');
var del = require('del');
var concatCss = require('gulp-concat-css');
var babel = require('gulp-babel');

var $ = require('gulp-load-plugins')();

var src = 'src/';
var lib = 'lib/';

var autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts', function() {
  return gulp.src([
      '!' + src + '/css/**',
      src + '/**'
    ])
    .pipe(babel({
      presets: ['react', 'es2015']
    }))
    .pipe(gulp.dest(lib));
});

gulp.task('styles', function() {
  return gulp.src(src + 'css/**/*.styl')
    .pipe($.stylus({
      compress: true
    }))
    .pipe($.autoprefixer({browsers: autoprefixerBrowsers}))
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest(lib + 'css/'));
});

gulp.task('build', function() {
  gulp.start(['scripts', 'styles']);
});

gulp.task('default', ['build']);
