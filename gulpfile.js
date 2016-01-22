var connect = require('gulp-connect');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function() {
  return connect.server({
    root: '.',
    port: 8080,
    livereload: true
  });
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['index.html', 'main.css'], ['reload']);
});

gulp.task('reload', function() {
  return gulp.src(['index.html', 'main.css'])
    .pipe(livereload());
});