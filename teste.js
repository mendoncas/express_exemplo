const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json());

let vetor = []

app.get('/transaction', function (request, response){
	response.send(vetor)
})

app.post("/transaction",(request, res)=>{
	console.log(request.body)
	vetor.push(request.body)
	res.send("transação cadastrada")
})

app.listen(3000, ()=>{
	console.log("ouvindo...")
})

