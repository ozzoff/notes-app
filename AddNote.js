import React from "react";


export default function AddNote(props){
    let[text,settext]=React.useState('')

    function handleChange(e){
        settext(e.target.value)


    }

    function handleSaveClick(){
        if(text.trim().length>0){
            props.handleAddNote(text)
            settext('')
        }
        
    }
    return(
        <div className="add-note">
                <input onChange={handleChange} autoFocus type="text" placeholder="enter note...." className="note-input"/>
                <button onClick={handleSaveClick} className="save">Save</button>
        </div>

    )
}