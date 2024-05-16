import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js"

const User = connection.define('user',{
    email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

User.sync({force:false});

export default User;
