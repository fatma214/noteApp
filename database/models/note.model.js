import mongoose, { Schema,model } from "mongoose";

const notSchema = new Schema(
    {
        title: String,
        description: String,
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const noteModel = model("Note",notSchema);
export default noteModel;
