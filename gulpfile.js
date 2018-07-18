var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		sourcemap = require('gulp-sourcemaps'),
		browserSync = require('browser-sync'),
		plumber = require('gulp-plumber'),
		webpackConfig = require('./webpack.config.js'),
    webpack = require('webpack'),
		bourbon = require("node-bourbon"),
		cleanCss = require("gulp-clean-css"),
    webpackStream = require('webpack-stream');


const DIR = {
		ROOT   : "./docs/",
		PUBLIC : {
			JS  : "./docs/assets/js",
			CSS : "./docs/assets/css"
		},
		SOURCE : {
			ES6  : "./source/es6",
			SASS : "./source/sass"
		}
}

gulp.task('browsersync', function(){
  browserSync({
			server: { baseDir: DIR.ROOT, index: 'index.html' },
			port : 2000
		});
});

gulp.task('js', function(){
	gulp.src(DIR.SOURCE.ES6 + '/*.js')
      .pipe(plumber())
	    .pipe(webpackStream(webpackConfig, webpack))
			.pipe(gulp.dest(DIR.PUBLIC.JS))
});

gulp.task('sass',function(){
	gulp.src(DIR.SOURCE.SASS + '/*.scss')
		.pipe(plumber())
		.pipe(sourcemap.init())
		.pipe(autoprefixer())
		.pipe(sass({includePaths: bourbon.includePaths}))
		.pipe(cleanCss())
		.pipe(sourcemap.write())
		.pipe(gulp.dest(DIR.PUBLIC.CSS))
});

gulp.task('watch',function(){
  gulp.watch([DIR.SOURCE.ES6  + '/**/*.js'], ['js']);
  gulp.watch([DIR.SOURCE.SASS + '/**/*.scss'], ['sass']);
  gulp.watch(DIR.PUBLIC.JS + '/**/*.js', browserSync.reload);
  gulp.watch(DIR.PUBLIC.CSS + '/**/*.css', browserSync.reload);
  gulp.watch(DIR.ROOT + '**/*.html', browserSync.reload);
});

gulp.task('default',[
	'sass',
  'js',
  'watch',
  'browsersync'
]);
