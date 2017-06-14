var gulp = require('gulp');
var jsHint = require('gulp-jshint');

var jsfiles = ['*.js', 'src/**/*.js'];

gulp.task('style',function() {
  gulp.src(jsfiles)
      .pipe(jsHint())
      .pipe(jsHint.reporter('jshint-stylish', {
        verbose : true
      }));
});