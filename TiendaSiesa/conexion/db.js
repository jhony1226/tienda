import mongoose from "mongoose";

const dbConnection = async () =>{

    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser:true,
        useUnifiedTopology:true    
        })
        console.log("conexion con mogo dd");
    } catch (error) {
        console.log("no conexion con mongoDB \n"+error);
        
    } 
}
export default {dbConnection};