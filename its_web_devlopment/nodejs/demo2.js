const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`this is a port number : ${port}`);
});

app.get("/", (req, res) => {
    console.log(`this is a port number : ${port}`);
    res.send("this is root directory");
});
app.get("/app", (req, res) => {
    console.log(`this is a port number : ${port}`);
    res.send("this is app directory");
});
app.get("/info", (req, res) => {
    console.log(`this is a port number : ${port}`);
    res.send("this is info directory");
});
