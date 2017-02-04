var gulp  = require('gulp');
var sass = require('gulp-sass');
var nodemode = require('gulp-nodemon');
/*
* sass compilation task
**********************/
gulp.task('sass', function(){
   gulp.src('./public/scss/app.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./public/css/'));
})


/*
* nodemon task
*********************************/
gulp.task('nodemon',function(cb){

  var initialized = false;
  return nodemon({
    script:'./bin/www'
  }).on('start',function(){
     if(!started) { // prevent nodemon to be called twice
       cb();
       started = true;
     }
  })
})


/*
* defaul task - run sass and nodemon 
*******************************************************/
gulp.task('default',['sass','nodemon '], function(){
  gulp.watch('.public/scss/*.scss',['styles']);
})
