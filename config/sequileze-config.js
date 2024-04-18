//importando sequilize
import Sequelize  from "sequelize";

//importando dados de conexao com o banco

const connection = new Sequelize({
    dialect: 'mysql',
    host : 'localhost',
    username :'root',
    password : 'admin',
    database : 'loja',
    timezone : '-03:00'
})

export default connection