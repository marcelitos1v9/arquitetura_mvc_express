import express from "express"
const router = express.Router()
import Cliente from "../models/Cliente.js"

//rota clientes

router.get("/clientes", (req, res) => {
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes: clientes
        })
    })
})

export default router