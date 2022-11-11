const express = require("express");
const app = express();
const router = express.Router();

const _user = require("routes/user");
const _shows = require("routes/shows");

app.use(_user);
app.use(_shows);

/*
Users

GET all users

GET one user

GET all shows watched by a user (user id in req.params)

PUT update and add a show if a user has watched it


Shows

GET all shows

GET one show

GET shows of a particular genre (genre in req.params)

PUT update rating of a show that has been watched

PUT update the status of a show

DELETE a show

*/




app.listen(3000, ()=> {
    console.log("running on 3000")
});