// Importando o Express com ES6 Modules
import express from 'express'
// Iniciando o Express na variável app
const app = express()
//importando o arquivo de conexao

import connection from './config/sequelize-config.js'

// Importando os Controllers (onde estão as rotas) 
import PedidosController from "./controllers/PedidosController.js" 
import ClientesController from "./controllers/ClientesController.js" 
import ProdutosController from "./controllers/ProdutosController.js"
import userController from "./controllers/UsersController.js"

//importando gerador de seção do express
import session from "express-session"

//importando auth
import Auth from './middleware/Auth.js'

//importando express flash
import flash from 'express-flash'

//configurando express flash
app.use(flash())


//configurando a seção do usuario

app.use(session({
    secret: "lojasecret",
    cookie: {maxAge: 3600000000}, //seção expira em 2 minutos
    saveUninitialized: false,
    resave: false
}))

// realizando a conexao com o banco de dados

connection.authenticate().then(()=>{
    console.log('Conexao com o banco feita com sucesso')
}).catch((error)=>{
    console.log(error)
})

// criando o banco de dados se ele nao existir

connection.query(`CREATE DATABASE IF NOT EXISTS Loja;`).then(()=>{
    console.log("o banco de dados esta criado")
}).catch((error)=>{
    console.log(error)
})

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

//configurando o expresspara receber dados de formularios
app.use(express.urlencoded({extended:false}))



// ROTA PRINCIPAL
app.get("/",Auth,function(req,res){
    res.render("index",{
        messages:req.flash()
    })
    
})

app.use("/", PedidosController)
app.use("/",ClientesController)
app.use('/',ProdutosController)
app.use('/',userController)


// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})