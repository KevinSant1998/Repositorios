import mongoose from 'mongoose';
import colors from 'colors'

export const db = async () => 
    {
        try {
            const db = await mongoose.connect(process.env.MONGO_URL)
            const URL = `${db.connection.host}:${db.connection.port}`
            console.log(colors.cyan(`conecto URL: ${URL}`))
        } catch (error) {
            console.log(`Error: ${error.messge}`)
            process.exit(1)
        }

    }