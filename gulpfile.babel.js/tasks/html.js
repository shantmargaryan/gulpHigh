import fileinclude from "gulp-file-include";
import gulpTypograf from "gulp-typograf";

export default () => {
    return $.gulp.src($.path.src.html)
    .pipe($.plugin.plumber({
        errorHandler: $.plugin.notify.onError(error => ({
            title: "html",
            message: error.message
        }))
    }))
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
		.pipe(gulpTypograf({
      locale: ['ru', 'en-US']
    }))
    .pipe($.gulp.dest($.path.dest.html))
}
