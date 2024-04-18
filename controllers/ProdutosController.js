import express from 'express';
import Produto from '../models/Produto.js';
const router = express.Router();

// router.get("/produtos", (req, res) => {
//     const produtos = [
//         { nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis" },
//         { nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos" },
//         { nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores" },
//         { nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos" }
//     ];
//     res.render("produtos", {
//         produtos: produtos
//     });
// });

router.get("/produtos", (req, res) => {
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos: produtos
        })
    })
})

export default router;
