var mysql =  require('mysql')

var connection =  mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'crudlatihan'
})

connection.connect((err => {
    if(err) throw err;
}))

module.exports = connection