import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("default", shell.task(["npx parcel index.html"]));

gulp.task("test", shell.task(["npx mocha"]));

gulp.task("cypress", shell.task(["npx cypress run"]));

gulp.task("run-tests", gulp.series("test", "cypress"));
