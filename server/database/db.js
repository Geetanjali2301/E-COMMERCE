import mongoose from "mongoose";



export const Connection=async(username,password)=>{

    const uri=`mongodb+srv://${username}:${password}@cluster0.ravblox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(uri);
        console.log("Database connected!");
    }
    catch(error){
        console.log("Error!",error.message)
    }
}

export default Connection;