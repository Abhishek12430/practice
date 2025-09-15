import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mainRoutes from './routes/mainRoute.js'
dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api',mainRoutes);
 
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`the app is listining at port number ${PORT}`)
})