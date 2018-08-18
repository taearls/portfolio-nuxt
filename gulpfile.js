const gulp = require("gulp");
const scss = require("gulp-sass");

gulp.task("scss", () => {
	// find the file we want to convert
	// then we need to convert
	// then we need to send it to where we want
	gulp.src("./scss/style.scss")
		.pipe(scss())
		.pipe(gulp.dest("./css/"));
})

gulp.task("watch", () => {
	gulp.watch(["./scss/**/*.scss"], ["scss"]);
})

gulp.task("default", ["scss", "watch"]);