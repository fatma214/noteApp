import express from 'express';
import { addNote, getAllNotes } from './notes.controller.js';

const noteRouts = express.Router();



noteRouts.post("/note",addNote);
noteRouts.get("/note",getAllNotes)








export default noteRouts;


