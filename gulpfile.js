var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task('build', function() {
    return gulp.src('history.js')
        .pipe(uglify())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['build']);
