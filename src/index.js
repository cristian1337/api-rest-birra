const express = require('express');

const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//rutas
app.use(require('./rutas/productos'));

//iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server corriendo en el puerto', app.get('port'));
});

