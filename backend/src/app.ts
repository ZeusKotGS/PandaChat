import express from 'express'
import { config } from 'dotenv'
config();
const app = express(); //create app

//middlewares
app.use(express.json());


export default app;