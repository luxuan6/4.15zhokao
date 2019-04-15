/*
 * @Author: 卢旋 
 * @Date: 2019-04-15 09:11:52 
 * @Last Modified by: 卢旋
 * @Last Modified time: 2019-04-15 09:15:19
 */
const gulp = require('gulp');
const css = require('gulp-clean-css');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const js = require('gulp-uglify');
const server = require('gulp-webserver');
// 执行devCss 压缩css 和并css
gulp.task('devCss', function() {
        return gulp.src('./src/css/*.css')
            .pipe(css())
            .pipe(concat('min.css'))
            .pipe(gulp.dest('./dist'))
    })
    // 执行devJs 压缩js和并js
gulp.task('devJs', function() {
        return gulp.src('./src/js/index.js')
            .pipe(js())
            .pipe(concat('min.js'))
            .pipe(gulp.dest('./dist'))
    })
    //执行server 开启服务器 端口号 8787 自动刷新
gulp.task('server', function() {
        return gulp.src('./src/')
            .pipe(server({
                open: true,
                prot: 8787,
                livereload: true
            }))
    })
    //执行watch 监听 css与js
gulp.task('watch', function() {
        gulp.watch('./src/css/*.css', gulp.series('devCss'))
        gulp.watch('./src/js/*.js', gulp.series('devJs'))
    })
    //执行语句 dev
gulp.task('dev', gulp.series('devCss', 'devJs', 'server', 'watch'));