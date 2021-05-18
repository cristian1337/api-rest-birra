const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'buvkt76ef6xcgoriefct-mysql.services.clever-cloud.com',
    user: 'uwgcu3zp0fumhlyd',
    password: 'pmHL6u53Tuc5qVm2qyv4',
    database: 'buvkt76ef6xcgoriefct',
    insecureAuth : true
});

conexion.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }else {
        console.log('DB conectada');
    }
})


module.exports = conexion;