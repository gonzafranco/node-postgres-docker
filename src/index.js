
const express = require('express')
const bodyParser = require('body-parser')
const pool = require('./db')

const app = express()
const jsonParser = bodyParser.json()
const PORT = 3000;

app.get('/', async (req, res) => {
    try{
        const data = await pool.query("SELECT * FROM usuario")
        res.send(data.rows)
    } catch {
        res.status(500).send('Error al recuperar los datos de la tabla')
    }
})

app.post('/', jsonParser, async (req, res) => {
    try {
        await pool.query("insert into usuario (nombre,apellido,clave) VALUES ($1,$2,$3)",[req.body.nombre, req.body.apellido,req.body.clave])
        res.status(201).send("Datos ingresado")
    } catch (error) {
        res.status(500).send('Error en el ingreso de datos')
    }
})

app.get('/setup', async (req, res) => {
    try{
        await pool.query("CREATE TABLE usuario( id SERIAL PRIMARY KEY, nombre VARCHAR(50) NOT NULL, apellido VARCHAR(50) NOT NULL,  clave VARCHAR(25) NOT NULL, fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT now())")
        res.send('presentacionDB Creada')
    }catch(error){
        res.status(500).send('Error al crear la base de datos')
    }
})

app.listen(PORT, (req, res) => {
    console.log(`Escuchando en el puerto => ${PORT}`)
})