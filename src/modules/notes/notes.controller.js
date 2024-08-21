import noteModel from "../../../database/models/note.model.js"


const addNote = async(req,res) => {
   let addedNote=   await noteModel.insertMany(req.body);
   res.json({message:"note added",addedNote})
}

const getAllNotes =async (req,res) =>{
    let allNotes = await noteModel.find().populate("createdBy");
    res.json({message:"done",allNotes})
}





 
export {
    addNote,
    getAllNotes
}