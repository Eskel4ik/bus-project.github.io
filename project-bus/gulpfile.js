var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./src/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/stylesheet/'));
});
gulp.task('watch', function(){
  gulp.watch('./src/**/*.scss', ['sass']);
});
//gulp sass:watch
gulp.task('watch', function() {
    gulp.watch('./src/**/*.scss', gulp.parallel('sass'));
});
