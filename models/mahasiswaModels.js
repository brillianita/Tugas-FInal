var sql = require('../db')

var Mahasiswa = () =>{}

Mahasiswa.selectAllMahasiswa = (callback) =>{
    sql.query('select * from mahasiswa', (err, res) => {
        if(err) {
            console.log(err)
            callback(err, null)
        } else {
            callback(null, res)
        }

    })
}

Mahasiswa.selectMahasiswa = (id, callback) => {
    sql.query('select * from mahasiswa where id = ?', id, (err, res) => {
        if(err) {
            console.log(err)
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
}
Mahasiswa.insertIntoMahasiswa = (newData, callback) => {
    
    sql.query('insert into mahasiswa set ?', {Nim : newData.Nim, Nama : newData.Nama}, (err, res) => {
        if(err) {
            console.log(err)
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
}

Mahasiswa.edit = (id, newData, callback) => {
    sql.query('update mahasiswa set Nama=?, Nim=? where id=?', [newData.Nama, newData.Nim, id], (err, res)=>{
        if(err) {
            console.log("error: ", err);

            callback(null, err);
        }
        else {
            callback(null, res);
        }
    })

}

Mahasiswa.delete = (id, callback) => {
    sql.query('delete from mahasiswa where id =?', [id], (err, res)=>{
        if(err) {
            console.log("error : ", err);
            callback(null, err);
        }
        else {
            callback(null,res);
        }
    })
}

module.exports = Mahasiswa
