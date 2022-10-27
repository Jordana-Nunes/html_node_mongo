// console.log("Hello World")
// mongodb+srv://<username>:<password>@cluster0.sbfgcbi.mongodb.net/?retryWrites=true&w=majority

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())

// const Filme = mongoose.Model (nome, estrutura)
const Filme = mongoose.model ("Filme", mongoose.Schema({
    titulo: {type: String},
    sinopse: {type: String}
}))

async function conectarMongo () {
    await mongoose.connect(`mongodb+srv://<Jordana>:<bancodedados>@cluster0.sbfgcbi.mongodb.
    net/?retryWrites=true&w=majority`)
}


//antender uma req  GET no endereço http://localhost:3000/oi
// app.get('/oi',(req, res)=> res.send('oi'))

let filmes = [
    {
        titulo:" Forrest Gump -  O contador de Histórias",
        sinopse:" Quarenta anos da história dos Estados Unidos vistos pelos olhos de Forrest Gump(Tom Hanks), um rapaz de QI abaixo da média e cheio de boas intenções"
    },
    {
        titulo: "Um sonho de liberdade",
        sinopse: "Em 1946, Andy Dufresne (Tim Robins), um joven bem sucedido  banqueiro,tem sua vida radicalmente modificada ao ser condenado por um crime que não cometeu, o homicidio de sua esposa e do amante dela."
    }
]

app.get('/filmes', (req,res) => {
    res.json(filmes)
})

app.post('/filmes', (req, res) => {
    //capturar os dados que o cliente preencheu
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //monta um objeto json com os dados recebidos
    const filme = {titulo:titulo, sinopse: sinopse}
    //acrescentar um novo filme  a lista:
    filmes.push(filme)
    res.json(filmes)
})

app.listen(3000, () => {
    try{
        conectarMongo()
        console.log("up and running")
    }
    catch (e) {
        console.log("algo aconteceu: ", e)
    }
})