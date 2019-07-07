

var mysql = require('mysql');

module.exports = () => {
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node',
    port: 3306
    });
    connection.connect(function(error){
    if(error){
        throw error;
        console.log('Conexion Incorrecta.');
    }else{
        console.log('Conexion correcta.');
    }
    });
}