import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';
const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, addNote } = context; //destructuring
    return (
        <div>
            <div className='row my-3'>
            <Addnote/>
                {notes.map((note) => {

                    return <Noteitem key={note._id} note={note}/>
                }


                )}
            </div>
        </div>
    )
}

export default Notes
