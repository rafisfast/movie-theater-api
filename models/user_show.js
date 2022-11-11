//import our db, Model, DataTypes
const { db, DataTypes } = require('../db/db')

//Creating a User child class from the Model parent class
const User_show = db.define("user_shows", {
    userId: DataTypes.INTEGER,
    showId: DataTypes.INTEGER
});

//exports
module.exports = { User_show }
