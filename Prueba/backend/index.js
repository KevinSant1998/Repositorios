//importaciones
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {db} from './confing/db.js'
import servicesRoutes from './routes/serviceRoutes.js'
//variables de entorno
dotenv.config()

//configuracion de la app
const app = express()

//leer datos via body
app.use(express.json())

//definicion de la ruta 
app.use('/api/services',servicesRoutes)

//conectar base
db()
//definicion del puerto
const PORT = process.env.PORT || 4001

//ejecutar del app
app.listen(PORT,()=>{
    console.log(colors.blue('El servidor puerto ', PORT))
})