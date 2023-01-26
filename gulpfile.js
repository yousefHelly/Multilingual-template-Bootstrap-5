import gulp from 'gulp';
import htmlMin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sm from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import livereload from 'gulp-livereload';
import liveServer from 'live-server';

    livereload({ start: true })
    gulp.task('connect', function() {
        liveServer.start();
    });

    gulp.task('html',function(){
        return gulp.src('project/html/*.html')
        .pipe(htmlMin({removeComments:true,collapseWhitespace: true}))
        .pipe(gulp.dest('.'))
        .pipe(livereload())
    })

    gulp.task('sass',function(){
        return gulp.src('project/css/Sass/*.scss')
        .pipe(sm.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sm.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
    })

    gulp.task('imgs',function(){
        return gulp.src('project/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
        .pipe(livereload())
    })

    gulp.task('js',function(){
        return gulp.src('project/js/*.js')
        .pipe(sm.init())
        .pipe(uglify())
        .pipe(sm.write('.'))
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
    })

    gulp.task('watch',function(){
        livereload.listen();
        gulp.watch('project/html/*.html',gulp.series('html'));
        gulp.watch('project/css/Sass/**/*.scss',gulp.series('sass'));
        gulp.watch('project/js/*.js',gulp.series('js'));
    })

    gulp.task('default',gulp.parallel(['connect'],['watch']))