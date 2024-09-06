import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';
const Notes = (props) => {
    const context = useContext(NoteContext);
    let navigate = useNavigate();


    const { notes, getNotes, editNote } = context; //destructuring

    useEffect(() => {
        if (localStorage.getItem('token')) {
            // console.log('Token found, fetching notes...');
            getNotes();
        } else {
            console.log('No token found, redirecting to login...');
            navigate("/login");



        }
        // eslint-disable-next-line
    }, [navigate]);
    // useEffect(() => {
    //     console.log('Testing navigation...');
    //     navigate("/login");
    // }, [navigate]);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" });


    const updateNote = (currentNote) => {
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
        ref.current.click();
    }

    const handleSubmit = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
        props.showAlert('Updated Successfully', "success");

    }
    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div>
                <div className='row my-3'>
                    <Addnote showAlert={props.showAlert} />
                    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3 my-3">
                                            <label htmlFor="etitle" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onchange} aria-describedby="emailHelp" minLength={5} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="edescription" className="form-label">Description</label>
                                            <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onchange} minLength={5} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="etag" className="form-label">Tags</label>
                                            <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onchange} />
                                        </div>

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleSubmit}>Update Note</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {Array.isArray(notes) && notes.length > 0 ? (
                        notes.map((note) => (
                            <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
                        ))
                    ) : (
                        <p>No notes available to display.</p>
                    )}

                </div>
            </div>
        </>
    )
}

export default Notes
