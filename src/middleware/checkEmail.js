import userModel from "../../database/models/user.model.js";
import bcrypt from "../../node_modules/bcrypt/bcrypt.js"

export const checkEmail=async (req,res,next)=>{

    let foundedUser = await userModel.findOne({ email: req.body.email });

    if (foundedUser)
        return res.status(409).json({ message: "Already registerd" });

    req.body.password=bcrypt.hashSync(req.body.password,8);
    next()

}