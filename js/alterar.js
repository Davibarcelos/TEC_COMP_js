var mysql= require('mysql2');

var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'davi',
    port: 3307
})

connection.connect();
//aqui são realizadas as operações
query= "UPDATE usuario SET senha= '987654321' WHERE codigo= 1 ;"
connection.query(query, function(error, results, fields){
    if (error) throw error;
    console.log(results);
});

connection.end();