const res = require("express/lib/response")

module.exports = app =>{

app.get('/atendimentos',(req, res) => res.send('Você está na rota de atendimentos'))


app.post('/atendimentos', (req, res) =>{console.log(req.body)
     res.send('Você está na rota de atendimento e está realizando um POST')})

}
