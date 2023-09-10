import React from "react";
import "/src/styles/Navbar.css"

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="left">
                <img src="images/troll-face.png" alt="" srcset="" />
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </div>
    )
}