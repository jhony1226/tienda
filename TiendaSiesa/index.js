import express from "express";  //importamos express
import cors from "cors";   //reglas de conexion
import  db from "./conexion/db.js";
import producto from "./routers/producto.js"
import dotenv from "dotenv";

dotenv.config();  //para qe cuando se ejecute el servidor ejecuta el index y dedtecte lass variables de .env
const app =express();

app.use(express.json());
app.use(cors());     
app.use("/api/producto",producto);

app.listen(process.env.PORT, ()=> console.log("ejecutando en el puerto:  "+ process.env.PORT));

db.dbConnection();


