const express = require("express");
const app = express();

const seed  = require("./db/seed");
seed();

const _user = require("./routes/user");
const _shows = require("./routes/shows");

app.use(_user);
app.use(_shows);

app.listen(3000, ()=> {
    console.log("running on 3000")
});