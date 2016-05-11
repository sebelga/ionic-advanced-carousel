
var gulp   = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var sass   = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
// var jshint = require('gulp-jshint');

gulp.task('watch', function() {
    gulp.watch(['src/**/*.js'], ['compile-js']);
    gulp.watch('src/**/*.scss', ['build-styles']);
    //gulp.watch(['src/custom-directives/**/*.*'], ['copy-items']);
});

gulp.task('compile-js', function() {
    return gulp.src(['src/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('advanced-carousel.min.js'))
            .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())  // gulp --type production
            .pipe(sourcemaps.write()) // Add the map to modified source.
            .pipe(gulp.dest('dist/'));
});

gulp.task('build-styles', function() {
    var outputStyle = gutil.env.type === 'production' ? 'compressed' : 'nested';
    return gulp.src(['src/**/*.scss'], {base:'src/'})
        .pipe(sourcemaps.init())  // Process the original sources
        .pipe(sass({outputStyle: outputStyle}))
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('dist/'));
});

//gulp.task('copy-items', function() {
//    gulp.src(['src/custom-directives/*.js', 'src/custom-directives/*.html', '!src/custom-directives/carousel-text-item.js'], {base:'src/'})
//        .pipe(gulp.dest('dist/'))
//});

gulp.task('default', ['watch']);

