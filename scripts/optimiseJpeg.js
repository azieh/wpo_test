var imagemin = require("imagemin");
var jpegRecompress = require("imagemin-jpeg-recompress");

imagemin(["images/original/*.{jpg,jpeg}"], "images", {
    plugins: [jpegRecompress({accurate: true, max: 70, progressive: true, strip: true})]
});