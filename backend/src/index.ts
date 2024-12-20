import express from 'express'
import { config } from 'dotenv'
config();
const app = express(); //create app

//middlewares
app.use(express.json());

//connections and listeners
app.listen(5001, () => console.log("Server Open")); //listen to port 5001