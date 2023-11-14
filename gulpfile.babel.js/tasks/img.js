import imagemin from "gulp-imagemin";
import gulpWebp from "gulp-webp"

export default () => {
    return $.gulp.src($.path.src.img)
    .pipe($.plugin.plumber({
        errorHandler: $.plugin.notify.onError(error => ({
            title: "IMG",
            message: error.message
        }))
    }))
    .pipe($.plugin.newer($.path.dest.img))
    .pipe($.plugin.gulpIf($.isBuild,gulpWebp()))
    .pipe($.gulp.dest($.path.dest.img))
    .pipe($.gulp.src($.path.src.img))
    .pipe($.plugin.newer($.path.dest.img))
    .pipe($.plugin.gulpIf($.isBuild,imagemin([
      imagemin.mozjpeg({
        quality: 80,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 2
      }),
    ])))
    .pipe($.gulp.dest($.path.dest.img))
}
