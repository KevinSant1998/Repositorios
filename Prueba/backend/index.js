// Importaciones
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './confing/db.js'
import servicesRoutes from './routes/serviceRoutes.js'

// Variables de entorno
dotenv.config()

// Configuración de la app
const app = express()

// Configuración del CORS
const whitelist = [process.env.FRONTEND_URL]

if (process.argv[2] === '--postman') {
  whitelist.push(undefined)
}

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Error de CORS - Origen no permitido'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}

app.use(cors(corsOptions))

// Middleware para leer datos JSON en body
app.use(express.json())

// Rutas
app.use('/api/services', servicesRoutes)

// Conectar base de datos
db()

// Puerto
const PORT = process.env.PORT || 4001

// Ejecutar app
app.listen(PORT, () => {
  console.log(colors.blue('El servidor puerto ', PORT))
})
