import express from 'express'
const router = express.Router()
import Pedido from '../models/Pedido.js'
// ROTA PEDIDOS

router.get("/pedidos", (req, res) => {
    Pedido.findAll().then(pedidos => {
        res.render("pedidos", {
            pedidos: pedidos
        })
    })
})

router.post("/pedidos/new",(req,res)=>{
    const numero = req.body.npedido;
    const valor = req.body.valorpedido;

    Pedido.create({
        numero:numero,
        valor:valor,
    }).then(()=>{
        res.redirect("/pedidos")
    }).catch(erro => {
        console.log(erro)
    })
})

router.get("/pedidos/delete/:id",(req,res)=>{
    const id = req.params.id
    Pedido.destroy({
        where:{
            id : id
        }
    }).then(()=>{
        res.redirect("/pedidos")
    }).catch(erro =>{
        console.log(erro)
    })
})

router.get("/pedidos/edit/:id",(req,res)=>{
    const id = req.params.id
    Pedido.findByPk(id).then(pedido =>{
        res.render("pedidoEdit",{
            pedido : pedido
        })
    })
})

router.post("/pedidos/update/:id", (req, res) => {
    const id = req.params.id; // Mudança de req.body.id para req.params.id para obter o ID da URL
    const numero = req.body.numero;
    const valor = req.body.valor;

    Pedido.update(
        {
            numero: numero,
            valor: valor,
        },
        {
            where: { id: id }
        }
    ).then(() => {
        res.redirect("/pedidos");
    }).catch(error => {
        // Tratamento de erros, se necessário
        console.error('Erro ao atualizar o pedido:', error);
        res.status(500).send('Erro interno do servidor');
    });
});


export default router