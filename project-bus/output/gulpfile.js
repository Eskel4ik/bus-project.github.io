const { src, dest } = require('gulp');

function streamTask() {
  return src('*.js')
    .pipe(dest('output'));
}

exports.default = streamTask;
var gulp = require('gulp');
var sass = require('gulp-sass');
 //и что-то выведем в консоль для подтверждения
gulp.task('default', function(){
 console.log("something");
});
