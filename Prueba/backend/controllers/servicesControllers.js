import Services from "../models/Services.js"
import {validateObjectId,handleNotFoundError} from '../utils/index.js'
//crear servicios
const crearServices= async(req,res)=>
{
    if(Object.values(req.body).includes(''))
    {
        const error = new Error("todos los campos son obligatorios")
        return res.status(400).json({
            msg:error.message
        })
    }
    try {
        const service = new Services(req.body)
        await service.save()
        res.json({
            msg:'Servicio Almacenado'
        })
    } catch (error) {
       console.log(error) 
    }
}

const getServices = async(req, res)=>{
    try {
        const services = await Services.find(); // Obtiene todos los documentos en la colección
        res.json(services);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al obtener los servicios" });
    }
}

const getServicesById = async(req,res)=>
{
    const {id}=req.params
    
    //validacion del objeto id
    if(validateObjectId(id,res))return
    
    //validar que exista ID
    const service = await Services.findById(id)
    if(!service)
    {
        return handleNotFoundError('El servicio no existe',res)
    }
    //mostrar el servicio
    res.json(service)
}

//Actualizar Servicio
const updateService = async(req,res)=>
{
    const {id}=req.params
    
    //validacion del objeto id
    if(validateObjectId(id,res))return
    
    //validar que exista ID
    const service = await Services.findById(id)
    if(!service)
    {
        return handleNotFoundError('El servicio no existe',res)
    }

    //Nuevos valores

    service.numeroPoliza = req.body.numeroPoliza||service.numeroPoliza
    service.tipoSeguro = req.body.tipoSeguro||service.tipoSeguro
    service.titular = req.body.titular||service.titular
    service.monto = req.body.monto||service.monto
    try {
        await service.save()
        res.json({
            msg:'Servicio Actualizado'
        })
    } catch (error) {
        console.log(error)
    }
}

//Eliminar Servicio
const eliminarService = async(req,res)=>
{
    const {id}=req.params
    
    //validacion del objeto id
    if(validateObjectId(id,res))return
    
    //validar que exista ID
    const service = await Services.findById(id)
    if(!service)
    {
        return handleNotFoundError('El servicio no existe',res)
    }

    try {
        await service.deleteOne()
        res.json({
            msg:'Servicio Eliminado'
        })
    } catch (error) {
        console.log(error)
    }
}


export {
    getServicesById,
    crearServices,
    getServices,
    updateService,
    eliminarService
}