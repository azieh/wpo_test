console.log("SW script run at " + new Date());

self.addEventListener("fetch", function(event) {
    console.log("Fetching", event.request);
});