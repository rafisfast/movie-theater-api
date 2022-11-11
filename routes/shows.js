const express = require("express");
const router = express.Router();

/*

Shows

GET all shows

GET one show

GET shows of a particular genre (genre in req.params)

PUT update rating of a show that has been watched

PUT update the status of a show

DELETE a show

*/

router.get("/shows", (req,res) => {

})

router.get("/show/:id",(req,res) => {

})

router.get("/show/:genre", (req,res) => {

})

router.put("/show/:id/rating/:rating", (req,res) => {

})

router.put("/show/:id/status/:status", (req,res) => {

})

router.delete("/show/:id", (req,res) => {
    
})

module.exports = router;