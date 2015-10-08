var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.src('styles/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('styles/*.scss', ['sass'])
})
