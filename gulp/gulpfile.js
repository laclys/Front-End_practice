//引入一个模块
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
//编写任务
gulp.task('test-uglify', function () {
    gulp.src('js/1.js').pipe(uglify()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest('build/js'));
});
gulp.task('test-cssmin', function () {
    gulp.src('css/1.css').pipe(cssmin()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest('build/css'));
});
gulp.task('imagemin',()=>{
     gulp.src('img/1.JPG').pipe(imagemin()).pipe(gulp.dest('build/img'));
})
gulp.watch('css/1.css', ['test-cssmin']);
//添加默认任务
gulp.task('default', ['test-uglify', 'test-cssmin','imagemin']);