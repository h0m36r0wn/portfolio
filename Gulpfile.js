var gulp  = require('gulp');
var sass = require('gulp-sass');
var nodemode = require('gulp-nodemon');

gulp.task('sass', function(){
   gulp.src('./public/scss/app.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./public/css/'));
})



gulp.task('nodemon',function(cb){
  var initialized = false;

  return nodemon({
    script:'./bin/www'
  }).on('start',function(){
     if(!started) {
       cb();
       started = true;
     }
  })
})



gulp.task('default',['sass','nodemon '], function(){
  gulp.watch('.public/scss/*.scss',['styles']);
})
