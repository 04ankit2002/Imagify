import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
dotenv.config({})
import cors from 'cors'
import connectDB from "./config/mongodb.js"
import userRouter from './routes/userRoute.js'
import imageRouter from './routes/imageRoutes.js';

// App Config
const PORT = process.env.PORT || 4000
const app = express();


// Intialize Middlewares
app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(cors({
    origin:"*",
    credentials: true
}))

// API routes
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)


app.listen(PORT,()=>{
    connectDB(),
    console.log(`server runing on ${PORT}`)
} )