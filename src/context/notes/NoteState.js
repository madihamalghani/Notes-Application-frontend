import { useState } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) => {
    const host = 'http://localhost:5000';
    // const authToken = localStorage.getItem('token');
    // console.log("Token found, fetching notes...", authToken);
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);
    // Get all notes
    const getNotes = async () => {
        // API call to fetch notes
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });

        const json = await response.json();  // Get the JSON response

        if (response.status === 200) {
            setNotes(json);  // Update state with fetched notes
        } else {
            console.error('Failed to fetch notes:', json.error);  // Log an error if request fails
        }

        // console.log(json);  // Log the fetched notes for debugging
    };


    // Add a note

    const addNote = async (title, description, tag) => {
        // Todo api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),

        });
        const note = await response.json();

        setNotes(notes.concat(note))




    }

    // delete a note
    const deleteNote = async (id) => {

        // Todo api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });

        const newNotes = notes.filter((note) => {
            return note._id !== id;
        })
        setNotes(newNotes)
    }
    // edit a note
    const editNote = async (id, title, description, tag) => {



        //  Api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
                "Cache-Control": "no-cache"

            },
            body: JSON.stringify({ title, description, tag }),

        });


        let newNotes = JSON.parse(JSON.stringify(notes))
        console.log('new notes:' + newNotes);
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

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;