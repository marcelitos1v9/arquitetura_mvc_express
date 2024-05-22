import express from "express"
const router = express.Router()
import User from "../models/User.js"
import bcrypt from "bcrypt"
import { where } from "sequelize"
//rota login

router.get("/login",(req,res)=>{
    res.render("login",{
        loggedOut: true,
        messages:req.flash()
    })
})

router.get("/cadastro",(req,res)=>{
    res.render("cadastro",{
        loggedOut: true,
        messages:req.flash()
    })
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
            req.flash("danger","Usuario ja cadastrado!")
            res.redirect("/cadastro")
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
                req.session.user ={
                    id : user.id,
                    email : user.email
                }
                // res.send(`Usuario logado <br> ID : ${req.session.user['id']}<br> Email: ${req.session.user['email']}`)

                //criando uma flash message
                req.flash('success','Login Efetuado com sucesso!')
                res.redirect("/")
            }else{
                req.flash("danger","Senha incorreta tente novamente")
                res.redirect("/login")
            }
            //se a senha não for valida 
        }else{
            req.flash("danger","Usuario nao cadastrado!")
            res.redirect("/login")
        }
    })
})

//rota de logout

router.get('/logout', (req, res) =>{
    req.session.user = undefined
    res.redirect("/")
})

export default router