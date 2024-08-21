import userModel from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import sendEmail from "../../util/sendEmail.js";
const signUp = async (req, res) => {
    sendEmail(req.body.email);
    await userModel.insertMany(req.body);
    res.json({ message: "Added" });
};

const singnIn = async (req, res) => {
    let foundedUser = await userModel.findOne({ email: req.body.email });
    console.log(foundedUser);

    if (
        !foundedUser ||
        !bcrypt.compareSync(req.body.password, foundedUser.password)
    )
        return res.status(422).json({ message: "email or password is invalid " });
    if (foundedUser.isConfirmed == false) {
        return res.status(401).json({ message: "you should confirm your email first" });
    }
    res.status(200).json({ message: "Welcome" });
};

const verfiyAccount = async (req, res) => {
    console.log(req.params.email);
    let updatedUser = await userModel.findOneAndUpdate(
        { email: req.params.email },
        { isConfirmed: true },
        { new: true }
    );
    res.json({ message: "welcome", updatedUser });
};
export { signUp, singnIn, verfiyAccount };
