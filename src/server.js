const express = require('express')
const path = require('node:path')
const router = require('./routes')

const app = express()

// Configurando o EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração de arquivos estáticos
app.use(express.static('public'))

// Configuração para ler os dados da requisição
app.use(express.urlencoded({extended: true}))

// Rotas da Aplicação
app.use(router)

const PORT = process.env.PORT || 3000 //Váriavel de ambiente
app.listen(PORT, () => console.log(`Servidor iniciado\nRodando em http://localhost:${PORT}/`))