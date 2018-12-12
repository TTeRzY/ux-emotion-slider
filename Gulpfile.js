var gulp       = require('gulp'),
  sass       = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps');

var minifyJS 	= require("gulp-uglify");

gulp.task('build-css', function() {
  return gulp.src('data/sass/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('data/css/'));
});
gulp.task('build-js', function() {
    return gulp.src('data/js/**/*.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('data/js/'));
});

//Watch task
gulp.task('default',function() {
  gulp.watch('data/sass/**/*.scss',['build-css']);
  gulp.watch('data/js/**/*.js',['build-js']);
});