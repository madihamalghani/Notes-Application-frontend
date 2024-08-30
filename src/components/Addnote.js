import { default as React, useContext, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';

const Addnote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context; //destructuring
    const [note, setNote] = useState({ title: "", description: "", tag: "default" });
  

    const handleSubmit=(e)=>{
        e.preventDefault();

        addNote(note.title, note.description, note.tag); // Call addNote from context

    }
    const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <h1 className='text-center my-4'>Add a note</h1>
            <div className="container mt-3">
                <form>
                    <div className="mb-3 my-3">
                        <label htmlFor="title"  className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" onChange={onchange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={onchange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
                </form>
            </div>
            <h2 className='text-center my-4'>Your note</h2>
            
        </div>
    )
}

export default Addnote
