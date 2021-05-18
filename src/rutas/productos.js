const express = require('express');
const router = express.Router();

const conexion = require('../database');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM producto', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    conexion.query('SELECT * FROM producto WHERE idproducto = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        }else {
            console.log(err);
        }
    })
});

/* router.post('/', (req, res) => {
    const query = `

    `
    conexion.query()
}); */

module.exports = router;