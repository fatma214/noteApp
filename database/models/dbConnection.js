import mongoose from "mongoose"

 

export const dbConnection = mongoose.connect(`mongodb://127.0.0.1:27017/nodeTest`)
.then(()=>console.log("db connected"))
.catch((error)=>console.log(error))