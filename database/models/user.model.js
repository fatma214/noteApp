import mongoose from "mongoose"


const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    isConfirmed:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true,
    versionKey:false
})

let userModel= mongoose.model("User",userSchema)
export default userModel;