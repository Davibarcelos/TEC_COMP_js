var mysql= require('mysql2');
var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'davi',
    port: 3307
});

connection.connect();
//aqui são realizadas as operações
query= "INSERT INTO usuario(login, senha) VALUES ('davibarcelos503@gmail.com','12345678' );"
connection.query(query, function(error, results, fields){
    if (error) throw error;
    console.log(results);
});

connection.end();