var express = require('express');
var Mahasiswa = require('../models/mahasiswaModels')
var router = express.Router();

/* GET users listing. */
router.get('/home', function(req, res, next) {
 Mahasiswa.selectAllMahasiswa((err, result) => {
    if(err) 
        console.log(err)
    else
        res.render('listmahasiswa', {title : 'List Mahasiswa', data : result})
 })
});

router.get('/add', (req,res, next) =>{
    // res.send('ini adalah bagian add')
    res.render('addmahasiswa', {title :'Tambah Mahasiswa'})
})

router.get('/:id/edit', (req, res) => {
    Mahasiswa.selectMahasiswa(req.params.id, (err,result) => {
        console.log('test')
        console.log('nilai id nya adalah ' + req.params.id)
        let data = result[0]
        res.render('editmahasiswa', { title : 'Edit Data Mahasiswa', data})
    })
    
})

router.post('/:id/edit', (req, res)=>{
    Mahasiswa.edit(req.params.id, req.body, (err, result)=>{
        if(err)
            console.log(err)
        else
            console.log(result)
    })
    res.redirect('/mahasiswa')
});

router.get('/:id/delete', (req, res) => {
    Mahasiswa.delete(req.params.id, (err, result)=>{
        if(err)
            console.log(err)
        else
            console.log(result)
    })
    res.redirect('/mahasiswa')
})

router.post('/add', (req, res) =>{
    console.log(req.body)
    console.log('test')
    Mahasiswa.insertIntoMahasiswa(req.body, (err, result) =>{
        if(err)
            console.log(err)
        else
            console.log(result)
    })
    // Mahasiswa.insertIntoMahasiswa()
    res.redirect('/mahasiswa')
})
module.exports = router;
