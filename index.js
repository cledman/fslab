const express = require('express')
const app = express()//aqui ele cria a aplicação
const bodyParser = require('body-parser')
const axios = require('axios')
const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded()) // ele utiliza para poder pegar os dados que são passados via URL

const port = process.env.PORT || 3000 //aqui ele consegue pegar a porta dinamicamente. É útil num projeto real, onde o provedor pode fornecer isso pra gente. Caso não consiga, usa a porta 3000

app.get('/', async(request, response) =>{

    response.render('index')
    /*
    i++
    response.send(`<h1>Olá Fullstack lab ${i}   </h1>`)//usando essa aspas, podemos incorporar variáveis ali. Isso é o chamado Template String.
    */
})

app.use('/categorias', categorias)// essas categorias vêm agrupadas daqui: const categorias = require('./routes/categorias')
app.use('/publicacoes', publicacoes)

app.listen(port, (err) =>{
    if(err){
        console.log('error')
    }
    else{
        console.log('Como fazer Server is runing on port: ', port)
    }
})