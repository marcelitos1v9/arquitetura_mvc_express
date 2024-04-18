import  Sequelize  from "sequelize";
import connection from "../config/sequileze-config.js";

const Pedido = connection.define('pedidos', {
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

Pedido.sync({ force: false });

export default Pedido;
