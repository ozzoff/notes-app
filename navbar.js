import React from "react";

export default function Navbar(props){
    return(
        <div className="header">
            <div>
                <h1 className="h1" >Notes App</h1>

            </div>

            <div>
                <button onClick={props.toggle}>Toggle Mode</button>
            </div>

        </div>

    )
}