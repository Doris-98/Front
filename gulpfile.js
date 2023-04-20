var gulp = require('gulp');
var less = require('gulp-less');
// var sassLint = require('gulp-sass-lint');

//scss to css task
gulp.task('less', function() {
    return gulp.src('src/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

//scss lint
// gulp.task('scss-lint', function() {
//     return gulp.src('src/scss/*.scss')
//     .pipe(sassLint({
//         configFile: '.sass-lint.yml'
//     }))
//     .pipe(sassLint.format())
//     .pipe(sassLint.failOnError())
// });

//watch task
gulp.task('watch', gulp.series('less', function () {
  gulp.watch('src/**/*.less', gulp.series('less'));
}));