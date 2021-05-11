const gulp = require('gulp'); //引入模块
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')
const cssmin = require(' gulp-cssmin')
const uglify = require('gulp-uglify')
gulp.task('default', () => {
    return new Promise((resolve, reject) => {
        console.log('hello world');
        resolve();
    })
})
gulp.task('sayhello', () => {
    return new Promise((resolve, reject) => {
        console.log('hello')
        resolve();
    })
})
//复制文件js
gulp.task('copyjs', () => {
    return gulp.src(['./src/js/index.js'])
        .pipe(gulp.dest('./dist/js'));
})
//复制html
gulp.task('copyhtml', () => {
    return gulp.src('./src/html/注册.html')
        .pipe(gulp.dest('./dist/html'));
})
//压缩html
//gulp-htmlmin
//$cnpm i gulp-html -D
gulp.task('htmlmin', () => {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/html'))
})
//压缩css gulp-cssmin

gulp.task('cssmin', () => {
    return gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('jsmin',()=>{
    return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/js'))
})