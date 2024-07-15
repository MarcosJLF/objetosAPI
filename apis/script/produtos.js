const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const db = require('./db.json')
app.get('/produtos', (req,res) => {
    const produtos = db.produtos
    res.status(200).json(produtos)
})

app.get('/produtos/nome/:nome', (req,res) => {
    const produtos = db.produtos
    const nomeProduto = req.params.nome
    const produto = produtos.filter((prod)=>prod.nome.toLowerCase()==nomeProduto)
    res.status(200).json(produto)
})

app.get('/produtos/:id', (req, res) => {
    const produtos = db.produtos;
    const _id = req.params.id;

    const produto = produtos.find((prod) => prod.id == _id);
    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(404).json({ error: "Produto not found" });
    }
});

app.listen(8000,()=> {
     console.log("Rodando na porta 8000");
})