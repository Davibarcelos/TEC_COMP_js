var mysql= require('mysql2');

var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'davi',
    port:3307
})

connection.connect();
//aqui são realizadas as operações
query= "DELETE FROM usuario WHERE login='davibarcelos503@gmail.com';"
connection.query(query, function (error, results, fields){
    if (error) throw error;
    console.log(results);
})

connection.end();