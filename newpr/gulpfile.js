let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync =require("browser-sync");

gulp.task('default',function(done){
    console.log('gulp works');
    done();
});
gulp.task('html',function(done){
   gulp.src('./app/src/*.html').pipe(gulp.dest('./app')); 
done();
});
gulp.task('browser-sync',function(){
    browserSync({server:{
        baseDir:"app"
    }});
});
gulp.task('compile',function(done){
    gulp.src('app/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('app/css')).pipe(browserSync.reload({stream:true}));
done();
});
gulp.task('watch',function(done){
gulp.watch('./app/scss/**/*scss',gulp.series('compile'));
gulp.watch('./app/*html',browserSync.reload);
done();
});

