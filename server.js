const http = require("http");

const server = http.createServer(function (req, res) {
    console.log(`user visited ${req.url}`);
    res.end("hello");
});
console.log("listening on http://localhost:5500");
server.listen(5500);
