var imagemin = require("imagemin");
var webp = require("imagemin-webp");

imagemin(["images/*.{jpg,jpeg}"], "images", {
    plugins: [webp({quality: 40})]
});