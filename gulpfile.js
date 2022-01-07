const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const through2 = require('through2');
const browserSync = require('browser-sync').create();
   
//scss to css
function style() {
  return gulp.src('assets/scss/*.scss'
  // { sourcemaps: true }
  )
    // .pipe(sourcemaps.init())
    .pipe(sass({
      //   outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    // .pipe(sourcemaps.write())
    // .pipe(gulp.dest('assets/css', { sourcemaps: '.' }))
}

// Watch function
function watch() {
  browserSync.init({
    proxy: 'localhost/project-html/slidekit/index.html'
  });
  gulp.watch('assets/scss/**/*.scss', style);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('assets/css/*.css').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

const build = gulp.series(watch);
gulp.task('default', build, 'browser-sync');
