require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')

//crear el servidor express


//nombre mean_user
//password mJsXruOcTdvXIdVG
const app = express();


//configurar cors
app.use(cors());

//conexion base datos
dbConnection()


//rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: "exitoso"
    })
})

app.listen(3000, () => {
    console.log('corriendo en 3000')
})