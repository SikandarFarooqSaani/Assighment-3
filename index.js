const express = require("express");
const path = require("path");

console.log(__dirname);

const staticpath = path.join(__dirname,"../public");
console.log(staticpath);
const app = express();
const port = 5000;

app.use(express.static(staticpath));


app.get("/", (req,res) =>
{
    res.sendFile(path.join(staticpath, "/"/""))
})

app.get("/favper", (req,res) =>
{
    res.sendFile(path.join(staticpath, "/favper.html"))
})
app.get("/favcities", (req,res) =>
{
    res.sendFile(path.join(staticpath, "/favcities.html"))
})

app.get("/favdest", (req,res) =>
{
    res.sendFile(path.join(staticpath, "/favdest.html"))
})
app.get("/contact", (req,res) =>
{
    res.sendFile(path.join(staticpath, "/contact.html"))
})

app.listen(port, () => {
    console.log(`App is Running on http://localhost:${port}`)
})