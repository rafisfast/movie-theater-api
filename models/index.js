const { Show } = require('./Show')
const { User } = require('./User')
const { User_show } = require("./user_show");

Show.belongsToMany(User , { through : 'user_shows'});
User.belongsToMany(Show, { through : 'user_shows'});

module.exports = {Show, User, User_show}
