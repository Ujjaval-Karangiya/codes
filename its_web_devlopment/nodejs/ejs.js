const express = require("express");
const app = express();
const path = require("path");

let port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
    const igdata = require("./data.json");
    let data = igdata[username];
    console.log(igdata);
    res.render("ig.ejs",{data});
});
app.get("/hello", (req, res) => {
    res.send("hello");
});
app.listen(port, () => {
    console.log(`this is the port ${port}`);
});