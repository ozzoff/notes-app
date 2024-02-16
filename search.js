import React from "react";

export default function Search(props){
    return(
     <input onChange={e=>props.handleSearchNote(e.target.value)} className="search" type="text" placeholder="search note....." />
    )
}