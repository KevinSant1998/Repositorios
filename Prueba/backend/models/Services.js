import mongoose from 'mongoose'

const servicesSchema = mongoose.Schema(
    {
        numeroPoliza:
        {
            type: String,
            required: true,
            trim: true,
            unique: true         
        },
        tipoSeguro:
        {
            type: String,
            required: true,
            trim: true,
            enum: ['Auto', 'Vida', 'Hogar', 'Salud']
        },
        titular:
        {
            type:String,
            require:true,
            trim:true
        },
        monto:
        {
            type:Number,
            require:true,
            trim:true
        }

    }
)

const Services = mongoose.model('Services',servicesSchema)
export default Services