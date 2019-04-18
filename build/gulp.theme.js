const gulp = require('gulp');
const less = require('gulp-less');
const autoprefix = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const del = require('del');

gulp.task('clean:theme', function(cb) {
    del(['../lib/theme-chalk/**/*'], {force: true});
    cb()
});

gulp.task(
	'default',
	gulp.series('clean:theme', function() {
		return gulp
			.src('../packages/theme-chalk/!(index|base|dvui).less')
			.pipe(less())
			.pipe(cssnano())
			.pipe(
				autoprefix({
					browsers: ['last 2 versions'],
					cascade: false
				})
			)
			.pipe(gulp.dest('../lib/theme-chalk/'));
	})
);