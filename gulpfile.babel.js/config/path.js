const srcFolder = "./src/";
const destFolder = "./dist/";

export default {
    src:{
        files:      srcFolder + "files/**/*.*",
        html:        srcFolder + "pages/*.html",
        sass:       srcFolder + "scss/*.{scss,sass}",
        js:         srcFolder + "js/*.js",
        img:        srcFolder + "img/**/*.{jpeg,jpg,png,gif,ico,webp,webmanifest,xml,json}",
        svg:        srcFolder + "svg/**/*.svg",
        fonts:      srcFolder + "fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    },
    dest:{
        files:      destFolder + "files/",
        html:       destFolder,
        sass:       destFolder + "css/",
        js:         destFolder + "js/",
        img:        destFolder + "img/",
        svg:        destFolder + "svg/",
        fonts:      destFolder + "fonts/",
    },
    watch:{
        files:      srcFolder + "files/**/*.*",
        html:        srcFolder + "**/*.html",
        sass:       srcFolder + "**/*.{scss,sass}",
        js:         srcFolder + "**/*.js",
        img:        srcFolder + "img/**/*.{jpeg,jpg,png,gif,ico,webp,webmanifest,xml,json}",
        svg:        srcFolder + "svg/**/*.svg",
        fonts:      srcFolder + "fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    },
    clean:          destFolder,
    srcFolder:      srcFolder,
    destFolder:     destFolder,
    ftp: ``
}
