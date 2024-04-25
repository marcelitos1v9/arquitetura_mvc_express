// Importando o Express com ES6 Modules
import express from 'express'
// Iniciando o Express na variável app
const app = express()
//importando o arquivo de conexao

import connection from './config/sequileze-config.js'

// Importando os Controllers (onde estão as rotas) 
import PedidosController from "./controllers/PedidosController.js" 
import ClientesController from "./controllers/ClientesController.js" 
import ProdutosController from "./controllers/ProdutosController.js"

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

// Definindo o uso das rotas dos Controllers
app.use("/", PedidosController)
app.get("/pedidos",function(req,res){
    res.render("pedidos")
})

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// ROTA CLIENTES

app.use("/",ClientesController)
app.get("/clientes",function(req,res){
    res.render("clientes")
})


// ROTA PRODUTOS

app.use('/',ProdutosController)
app.get("/produtos",function(req,res){
    res.render("produtos")
})


// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})