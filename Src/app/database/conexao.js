//criando conexáo com banco de dados 

import mysql from "mysql"

const conexao = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "bdcopa",


})

conexao.connect()

export default conexao