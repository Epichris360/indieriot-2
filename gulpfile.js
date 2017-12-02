// including plugins
var gulp         = require('gulp')
var minifyCSS    = require('gulp-minify-css')
var autoprefixer =  require('gulp-autoprefixer')
var gp_concat    = require('gulp-concat')
var gp_rename    = require('gulp-rename')
var gp_uglify    = require('gulp-uglify')
// var less = require('gulp-less')
var to5          = require('gulp-6to5')
var path         = require('path')

gulp.task('css', function(){
    return gulp.src(
            [
                "./public/css/bootstrap.css",
                "./public/css/stack-interface.css",
                "./public/css/socicon.css",
                "./public/css/lightbox.min.css",
                "./public/css/flickity.css",
                "./public/css/iconsmind.css",
                "./public/css/jquery.steps.css",
                "./public/css/theme.css",
                "./public/css/custom.css",
                "./public/css/stripe.css"
            ]
        )
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
        .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('copy-fonts', function(){
    return gulp.src(
            ['./public/fonts/**']
        )
        .pipe(gulp.dest('./public/dist/fonts/'))
})

gulp.task('images', function(){
    return gulp.src(
        ['./public/img/**']
    )
    .pipe(gulp.dest('./public/dist/img/'))
})

gulp.task('style', ['css', 'copy-fonts', 'images'], function(){})


gulp.task('js', function(){
    return gulp.src( 
            [
                "./public/js/jquery-3.1.1.min.js",
                "./public/js/flickity.min.js",
                "./public/js/easypiechart.min.js",
                "./public/js/parallax.js",
                "./public/js/typed.min.js",
                "./public/js/datepicker.js",
                "./public/js/isotope.min.js",
                "./public/js/ytplayer.min.js",
                "./public/js/lightbox.min.js",
                "./public/js/granim.min.js",
                "./public/js/jquery.steps.min.js",
                "./public/js/countdown.min.js",
                "./public/js/twitterfetcher.min.js",
                "./public/js/spectragram.min.js",
                "./public/js/smooth-scroll.min.js",
                "./public/js/scripts.js"
            ]
        )
        .pipe(gp_concat('vendor.min.js'))
        .pipe(gulp.dest('./public/dist/js/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./public/dist/js/'))
});

gulp.task('es6-es5', ['js'], function(){
    return gulp.src([
                './src/*/**.js',
                './src/*/*/**.js'
            ]
        )
        .pipe(to5())
        .pipe(gulp.dest('./public/dist/es5/'))
});

gulp.task('watch', function() {
    gulp.watch(['./src/*/**.js', './src/*/*/**.js', './public/js/**.js'], ['es6-es5', 'images'])
})

gulp.task('prod', ['style', 'es6-es5'], function(){})

gulp.task('default', ['es6-es5', 'watch'], function(){})
