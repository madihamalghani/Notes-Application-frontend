import { default as React, useContext, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';

const Addnote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context; //destructuring
    const [note, setNote] = useState({ title: "", description: "", tag: "default" });


    const handleSubmit = (e) => {
        e.preventDefault();

        addNote(note.title, note.description, note.tag); // Call addNote from context
        setNote({ title: "", description: "", tag: "" });
        props.showAlert('Added Successfully', "success");
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const minChar = (e) => {
        e.preventDefault();
        if (note.title.length >= 5 && note.description.length >= 5) {
            handleSubmit(e);
        }

        else if (note.title.length < 5 & note.description.length!==0) {
            props.showAlert('Title must be at least 5 characters long', "danger");
        }

        else if (note.description.length < 5 & note.title.length!==0) {
            props.showAlert('Description must be at least 5 characters long', "danger");
        }
        else {
            props.showAlert('Enter title and description', "danger");
        }
    };

    return (
        <div>
            <h1 className='text-center my-4'>Add a note</h1>
            <div className="container mt-3">
                <form>
                    <div className="mb-3 my-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" value={note.title} id="title" name="title" onChange={onchange} aria-describedby="emailHelp" minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={onchange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={onchange} />
                    </div>
                    {/* disabled={note.title.length<5 || note.description.length<5 } */}
                    {/* <button type="submit" disabled={note.title.length<5 || note.description.length<5 } className="btn " style={{ backgroundColor: 'black', color: 'white' }} onClick={handleSubmit}>Add Note</button> */}
                    <button type="submit" className="btn " style={{ backgroundColor: 'black', color: 'white' }} onClick={minChar}>Add Note</button>
                </form>
            </div>
            <h2 className='text-center my-4'>Your note</h2>

        </div>
    )
}

export default Addnote
