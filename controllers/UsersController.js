import express from "express"
const router = express.Router()
import User from "../models/User.js"
import bcrypt from "bcrypt"
import { where } from "sequelize"
//rota login

router.get("/login",(req,res)=>{
    res.render("login")
})

router.get("/cadastro",(req,res)=>{
    res.render("cadastro")
})

router.post("/createUser",(req,res)=>{
    //coletando informações do corpo da requisição

    const email = req.body.email
    const password = req.body.senha

    //verificando usuario ja esta cadastrado

    User.findOne({where :{email:email}}).then(user=>{
        if(user == undefined){
            //aqui sera feito o hash da senha
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password,salt)

            //aqui sera criado o usuario
            User.create({
                email:email,
                password:hash
            }).then(()=>{
                res.redirect("/login")
            })
        }else{
            res.send(`Usuario ja cadastrado! <br> <a href="/login">Tentar novamente.</a>`)
        }
    })
})

router.post("/authenticate",(req,res)=>{
    const email = req.body.email
    const password = req.body.password

    User.findOne({where:{email:email}}).then(user =>{
        if(user != undefined){
            //valida a senha
            const correct = bcrypt.compareSync(password,user.password)
            //se a senha for valida 
            if(correct){
                //autoriza o login
                res.redirect("/")
            }else{
                res.send(`Senha invalida <br><a href="/login>Tentar novamente</a>`)
            }
            //se a senha não for valida 
        }else{
            res.send(`usuario nao cadastrado <br><a href="/cadastro>Tentar novamente</a>`)
        }
    })
})

export default router