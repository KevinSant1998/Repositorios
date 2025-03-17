import express from 'express'
import { eliminarService,updateService,getServicesById,crearServices,getServices } from '../controllers/servicesControllers.js'

const router = express.Router()

router.post('/',crearServices)
router.get('/',getServices)
router.get('/:id',getServicesById)
router.put('/:id',updateService)
router.delete('/:id',eliminarService)

export default router