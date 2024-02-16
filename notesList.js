import React from "react";
import Note from "./note";
import AddNote from "./AddNote";

export default function Notes(props){
    
    return(
        <div className="notes">
            {
                props.notes.map(note=>(
                    <Note id={note.id} text={note.text} data={note.data}  deleteNote={props.deleteNote} />
                ))
            }
            <AddNote handleAddNote={props.handleAddNote}></AddNote>
            
        </div>
    )
}