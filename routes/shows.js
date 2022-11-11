const express = require("express");
const router = express.Router();
const {User, User_show, Show} = require("../models/index");

router.get("/shows", async (req,res) => {
    const shows = await Show.findAll();
    if (!shows) return res.status(400).end();
    res.status(200).send(shows)
})

router.get("/show/:id", async (req,res) => {
    const id    = req.params.id;
    if (!id) return res.status(400).end();
    const show = await Show.findByPk(id);
    if (!show) return res.status(400).end();
    res.status(200).send(show)
})

router.get("/shows/:genre", async (req,res) => {
    const genre  = req.params.genre;
    if (!genre) return res.status(400).end();
    const show = await Show.findAll({where: {genre: genre}});
    if (!show) return res.status(400).end();
    res.status(200).send(show)
})

router.put("/show/:id/rating/:rating", async (req,res) => {

    const id  = req.params.id;
    const rating  = req.params.rating;
    if (!id || !rating) return res.status(400).end();

    const show = await Show.findOne({where: {id: id}});

    if (!show) return res.status(400).end();

    const result = await show.update({rating : rating});

    res.status(200).send(result)

})

router.put("/show/:id/update", async (req,res) => {

    const id  = req.params.id;
    if (!id ) return res.status(400).end();

    const show = await Show.findOne({where: {id: id}});

    if (!show) return res.status(400).end();

    const result = await show.update({status : show.status === "cancelled" ? "on-going" : "cancelled"});

    res.status(200).send(result)

})

router.delete("/show/:id", async (req,res) => {

    const id  = req.params.id;
    if (!id) return res.status(400).end();

    const show = await Show.findByPk(id);

    if (!show) return res.status(400).end()

    const result = await show.destroy();

    res.status(200).send(result)

})

module.exports = router;