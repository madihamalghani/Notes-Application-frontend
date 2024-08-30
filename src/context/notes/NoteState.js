import { useState } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "66ca058cb6154eafa7ab6f3b",
            "user": "66c784757a4bf76cea1e5d7d",
            "title": "my Title",
            "description": "hi my name is unique and awesome",
            "tag": "personal",
            "date": "2024-08-24T16:08:44.196Z",
            "__v": 0
        },
        {
            "_id": "66ca058fb6154eafa7ab6f3d",
            "user": "66c784757a4bf76cea1e5d7d",
            "title": "my Title",
            "description": "hi my name is unique and awesome",
            "tag": "personal",
            "date": "2024-08-24T16:08:47.430Z",
            "__v": 0
        },
        {
            "_id": "66ca05a1b6154eafa7ab6f3f",
            "user": "66c784757a4bf76cea1e5d7d",
            "title": "my new note",
            "description": "hi my name is unique umberella and awesome",
            "tag": "personal",
            "date": "2024-08-24T16:09:05.307Z",
            "__v": 0
        },
        {
            "_id": "66ca0ca1634790e78c8d4167",
            "user": "66c784757a4bf76cea1e5d7d",
            "title": "my new note",
            "description": "hi my name is unique umberella and awesome",
            "tag": "personal",
            "date": "2024-08-24T16:38:57.926Z",
            "__v": 0
        },
        {
            "_id": "66ca0cb4634790e78c8d4169",
            "user": "66c784757a4bf76cea1e5d7d",
            "title": "my new note",
            "description": "hi my name is unique umberella and awesome",
            "tag": "personal",
            "date": "2024-08-24T16:39:16.350Z",
            "__v": 0
        },
        {
            "_id": "66ca0cb4634790e78c8d416b",
            "user": "66c784757a4bf76cea1e5d7d",
            "title": "my new note",
            "description": "hi my name is unique umberella and awesome",
            "tag": "personal",
            "date": "2024-08-24T16:39:16.991Z",
            "__v": 0
        },
        {
            "_id": "66ca0cd2634790e78c8d416d",
            "user": "66c784757a4bf76cea1e5d7d",
            "title": "my new note",
            "description": "hi my name is unique umberella and awesome",
            "tag": "personal",
            "date": "2024-08-24T16:39:46.204Z",
            "__v": 0
        },
        {
            "_id": "66caebd91a701e27093dae07",
            "user": "66c784757a4bf76cea1e5d7d",
            "title": "my new note",
            "description": "hi my name is unique umberella and awesome",
            "tag": "personal",
            "date": "2024-08-25T08:31:21.566Z",
            "__v": 0
        }
    ]
    const [notes,setNotes]=useState(notesInitial);
// Add a note
const addNote=(title,description,tag)=>{
    // Todo api call
    console.log('Adding a new note');
const note={
    "_id": "66caebd9134a701e27093dae07",
"user": "66c784757a4bf76cea1e5d7d",
"title": title,
"description": description,
"tag": tag,
"date": "2024-08-25T08:31:21.566Z",
"__v": 0
};
setNotes(notes.concat(note))
}

// delete a note
const deleteNote=(id)=>{
    console.log("deleting note with id: "+ id);
   const newNotes=notes.filter((note)=>{
       return note._id!==id;
    })
    setNotes(newNotes)
}
// edit a note
const editNote=(id,title,description,tag)=>{
}
    return (
        <NoteContext.Provider value={{ notes,setNotes,addNote,editNote,deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;