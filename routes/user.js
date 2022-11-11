const express = require("express");
const router = express.Router();
const {User, User_show, Show} = require("../models/index");

router.get("/users", async (req,res) => {
    const users = await User.findAll();
    if (!users) return res.status(400).end();
    res.status(200).send(users)
})

router.get("/user/:id", async (req,res) => {
    const id = req.params.id;
    if (!id) return res.status(400).end()
    const user = await User.findByPk(id);
    if (!user) return res.status(400).end();
    res.status(200).send(user);
})

router.get("/user/:id/shows", async (req,res) => {
    const id = req.params.id;
    // const data = await User_show.findAll({where: { userId: id }});
    // const data = await User.findByPk(id,{joinTableAttributes: [], include: { model: Show }});
    const data = await User.findByPk(id,
        {
            include: [
                {
                    model: Show,
                    through: {
                        attributes:[]
                    }
                }
            ]
        });

    console.log(JSON.stringify(data));
    // if (!user_show) return res.status(400).end();

    res.status(200).send(data);
})

router.put("update", (req,res) => {

})

module.exports = router;