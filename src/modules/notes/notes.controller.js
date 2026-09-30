import { Router } from "express";
import * as NS from "./notes.service.js";
const notesrouter = Router();

notesrouter.post("/newnote",NS.createNote)
notesrouter.patch("/update",NS.updateNote)
notesrouter.put("/replace/:noteId", NS.replaceNote);
notesrouter.put("/updateall",NS.updateAllNotes);
notesrouter.delete("/deletenote:noteId", NS.deleteNote);
notesrouter.get("/paginate-sort", NS.paginateSortNotes);
notesrouter.get("/getbyid:id", NS.getNoteById);
notesrouter.get("/note-by-content", NS.getNoteByContent);
notesrouter.get("/with-user-info", NS.getNotesWithUserInfo);
notesrouter.get("/aggregate", NS.getNotesAggregate);
notesrouter.delete("/deleteall", NS.deleteAllNotes);





export default notesrouter;
