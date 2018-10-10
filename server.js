var express = require("express");
var compression = require("compression");
var shrinkRay = require("shrink-ray-current");
var mime = require("mime");

var app = express();

// app.use(compression());
app.use(shrinkRay({
    cache: function (req, res) {
        return false;
    }
}));
app.use(express.static("dist", {
    setHeaders(res, path) {
        var fileType = mime.getType(path);

        switch (fileType) {
            case "text/html":
                res.setHeader("Cache-Control", "max-age=30");
                break;
            case "text/css":
            case "text/javascript":
            case "application/javascript":
            case "font/woff":
            case "font/woff2":
            case "image/png":
            case "image/jpeg":
            case "image/svg+xml":
            case "image/webp":
                res.setHeader("Cache-Control", "max-age=" + (30 * 24 * 60 * 60));
                break;
        }
    }
}));

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on ", port);
});
