
		const gulp=require("gulp");
		const imagemin = require('gulp-imagemin');
		const uglify = require('gulp-uglify');
		const sass = require('gulp-sass');

//logs the message
//gulp('arg',function(){ return a statment})
	gulp.task('message',function(){
	return console.log("gulp is running...")
	})

	gulp.task('default',function(){
	return console.log("gulp is running via default method...")
})

//copying all html files from src and moving it into dist
		
		gulp.task("copyhtmlcontent",function(){
			gulp.src('src/*.html') 
			.pipe(gulp.dest('dist'))
		})
	
	//optimize images
	gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
	);

	//minify js
	gulp.task('minify',function(){
		gulp.src("src/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
	})

	//compile sass
	gulp.task("sasscompileer",function(){
		gulp.src('src/sass/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest("dist/css"))
	})