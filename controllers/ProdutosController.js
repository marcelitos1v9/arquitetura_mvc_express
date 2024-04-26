import express from 'express';
import Produto from '../models/Produto.js';
const router = express.Router();

router.get("/produtos", (req, res) => {
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos: produtos
        })
    })
})

router.post("/produtos/new",(req,res)=>{
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;

    Produto.create({
        nome:nome,
        preco:preco,
        categoria : categoria
    }).then(()=>{
        res.redirect("/produtos")
    }).catch(erro => {
        console.log(erro)
    })
})

router.get("/produtos/delete/:id",(req,res)=>{
    const id = req.params.id
    Produto.destroy({
        where:{
            id : id
        }
    }).then(()=>{
        res.redirect("/produtos")
    }).catch(erro =>{
        console.log(erro)
    })
})


export default router;
