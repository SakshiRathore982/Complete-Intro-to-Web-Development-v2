const express = require("express");

const app = express()

app.get("/", function (req, res) {
    res.end("welcome to my site");
});
app.get("/complement", function (req, res) {
    res.end("you look nice today");
});

app.listen(3000);
console.log("listening on http://localhost:3000");