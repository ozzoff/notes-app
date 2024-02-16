import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Notes from "./components/notesList";
import {nanoid} from "nanoid"
import { json } from "react-router-dom";


function Main(){
  let[notes,setnotes]=React.useState( JSON.parse(localStorage.getItem("notes")) ||  [
    {id:nanoid(),text:"Type you message", data:"27/44/44"},
    {id:nanoid(),text:"Type you message", data:"27/14/44"},
    {id:nanoid(),text:"Type you message", data:"27/94/44"}
  ])

  let[search,setsearch]=React.useState('')
  let[dark,setdark]=React.useState(false)


  function darkToggle(){
    setdark(prev=>!prev)
    {dark ? document.body.classList.add("dark") || document.querySelector(".header h1").classList.add("dark") : document.body.classList.remove("dark") || document.querySelector(".header h1").classList.remove("dark")}
  }
  React.useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))

  },[notes])

  
  function addNote(text){
    let data=new Date()
    let newNotes={
      id: nanoid() ,
      text:text,
      data:data.toLocaleDateString(),

    }

    setnotes(prev=>[...prev,newNotes])
  }

  function deleteNote(id){
    let newNotes=notes.filter((note)=>note.id !== id)
    setnotes(newNotes)
  }
  

  return (
    <div>
      <Navbar toggle={darkToggle}/>
      <Search handleSearchNote={setsearch} />
      <Notes handleAddNote={addNote} notes={notes.filter((note) =>
						note.text.toLowerCase().includes(search)
					)}  deleteNote={deleteNote}/>
    </div>

    
    
  )
}


ReactDOM.render(<Main />, document.getElementById("root"));