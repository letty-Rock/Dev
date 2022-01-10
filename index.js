const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')
const Tabelas =require('./infraestrutura/tabelas')
conexao.connect(erro =>{
    if(erro){
        console.log(erro)
    } else{
        console.log('conectado com sucesso')
        const app = customExpress()
        Tabelas.init(conexao)
    app.listen(3000, ()=> console.log('servidor rodando na porta 3000'))
    
    }
})

    
 
