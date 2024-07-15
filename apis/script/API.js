import express, {json} from 'express'
const app = express();

app.get('/atributos', function(req, res){
    const name = req.query.name
    if(name == "leo" || name == "gabriel" ){
        res.status(200).json({Bonito:"não",Homem:"não sabe",
    inteligente: "Sim" })
    }else if(name == "marcos"){
        res.status(200).json({Bonito:"Sim",Homem:"sim sabe",
        inteligente: "Sim" })

    }
})



app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000")
})
