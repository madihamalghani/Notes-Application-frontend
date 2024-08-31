import { useState } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) => {
    const host = 'http://localhost:5000';
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);
    // Get all notes
    const getNotes = async () => {
        // Todo api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjNzg0NzU3YTRiZjc2Y2VhMWU1ZDdkIn0sImlhdCI6MTcyNDQ5MjEwMH0.xLgRPC4-j5T9szc4FHrnE0lWQNdSx8aneQNnJwyAREk"
            },
        });
        const json = await response.json()
        // console.log(json);
        setNotes(json);

    }
    // Add a note

    const addNote = async (title, description, tag) => {
        // Todo api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            body: JSON.stringify({ title, description, tag }),
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjNzg0NzU3YTRiZjc2Y2VhMWU1ZDdkIn0sImlhdCI6MTcyNDQ5MjEwMH0.xLgRPC4-j5T9szc4FHrnE0lWQNdSx8aneQNnJwyAREk"
            },
        });
        const json = response.json()
        console.log(json);
        console.log('Adding a new note');
        const note = {
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
    const deleteNote = async (id) => {

        // Todo api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjNzg0NzU3YTRiZjc2Y2VhMWU1ZDdkIn0sImlhdCI6MTcyNDQ5MjEwMH0.xLgRPC4-j5T9szc4FHrnE0lWQNdSx8aneQNnJwyAREk"
            },
        });
        const json = await response.json()
        console.log(json);
        // setNotes(json);
        console.log("deleting note with id: " + id);
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        })
        setNotes(newNotes)
    }
    // edit a note
    const editNote = async (id, title, description, tag) => {
        console.log(id);
        //  Api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            body: JSON.stringify({ title, description, tag }),
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjNzg0NzU3YTRiZjc2Y2VhMWU1ZDdkIn0sImlhdCI6MTcyNDQ5MjEwMH0.xLgRPC4-j5T9szc4FHrnE0lWQNdSx8aneQNnJwyAREk"
            },
        });
        const json = await response.json()
        console.log(json);
        console.log(`Fetching URL: ${host}/api/notes/updatenote/${id}`);

        let newNotes = JSON.parse(JSON.stringify(notes))
        // logic to edit in client

        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }

        }
        setNotes(newNotes);
    }
//     const editNote = async (id, title, description, tag) => {
//         try {
//             const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//                 method: "PUT",
//                 body: JSON.stringify({ title, description, tag }),
//                 headers: {
//                     "Content-Type": "application/json",
//                 "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjNzg0NzU3YTRiZjc2Y2VhMWU1ZDdkIn0sImlhdCI6MTcyNDQ5MjEwMH0.xLgRPC4-j5T9szc4FHrnE0lWQNdSx8aneQNnJwyAREk"
// },
//             });
//             if (!response.ok) {
//                 const text = await response.text(); // Read response as text
//                 console.error(`HTTP error! status: ${response.status} - ${text}`);
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const json = await response.json();
//             console.log(json);
//             setNotes(notes.map(note => note._id === id ? { ...note, title, description, tag } : note));
//         } catch (error) {
//             console.error("Error editing note:", error);
//         }
//     }
    
    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;