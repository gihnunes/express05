const express = require('express')
const mysql = require('mysql2')

const mysql_config=require('./mysql_config')

const app=express()

//subir servidor
app.listen(3000,()=>{
    console.log("Servidor WEB em execução")
})

//criar conexão com o BD
const connection =mysql.createConnection(mysql_config)

//escrever rotas
app.get('/',(req,res)=>{
    //criar um objeto result  para todos os endpoint da api
    let result = {
        status: 'sucesso',
        message: null,
        data: null
    }
})

//executar a coneção 

    connection.query("SELECT * FROM tasks",(err,result)=>{
        if(err){
            result.status= "Erro";
            result.mensage = "Erro na obtenção das tarefas";
            result.data = [];
            //res.send(result);
            res.json(result);
        } else{
            result.status= "Sucesso";
            result.mensage = "tarefas obtidas com sucesso";
            result.data=results;
            //res.send(result);
            res.json(result)
        }
    })