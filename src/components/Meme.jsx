import React from "react";
import "/src/styles/Meme.css"

export default function Meme(props) {
    console.log(props.image)
    return(
        <div className="meme-card">
            <h1 className="top-text">{props.topText}</h1>
            <img src={props.image} alt="" srcset="" />
            <h1 className="bottom-text">{props.bottomText}</h1>
        </div>
    )
}