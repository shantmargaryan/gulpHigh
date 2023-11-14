import mediaGroupCss from "gulp-group-css-media-queries"
// import shorthand from "gulp-shorthand";
import autoPrefixer from "gulp-autoprefixer";
import gulpSass from "gulp-sass";
import dartSass from "sass"
const sass = gulpSass(dartSass)

export default () => {
    return $.gulp.src($.path.src.sass, {sourcemaps: $.isDev})
    .pipe($.plugin.plumber({
        errorHandler: $.plugin.notify.onError(error => ({
            title: "SCSS",
            message: error.message
        }))
    }))
    .pipe(autoPrefixer({
      cascade: false,
      grid: true,
      overrideBrowserslist: ["last 5 versions"]
    }))
    // .pipe(shorthand())
    .pipe( sass({
        outputStyle: $.isBuild ? "compressed" : "expanded"
    }))
    .pipe($.plugin.rename({
        suffix: ".min"
    }))

    // .pipe($.gulp.dest($.path.dest.sass, {sourcemaps: $.isDev}))
    .pipe($.plugin.gulpIf($.isBuild,mediaGroupCss()))
    .pipe($.gulp.dest($.path.dest.sass, {sourcemaps: $.isDev}))
}
