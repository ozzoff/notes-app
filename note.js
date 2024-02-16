import React from "react";
import {Trash} from "phosphor-react"

export default function Note(props){
    return(
        <div className="note">
            <p>{props.text}</p>
            <p className="date">{props.data}</p>
            <Trash onClick={()=>props.deleteNote(props.id)} className="trash"></Trash>
        </div>
    )
}