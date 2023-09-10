import React from "react";
import "/src/styles/Form.css"
import memesData from "/src/memeData.js"
import Meme from "/src/components/Meme.jsx"
export default function Form(props) {

    const [memeImage,setMemeImage] = React.useState("")
    function generateMeme(){
        console.log(memesData.data.memes.length)
        const randNum = Math.floor(Math.random() * memesData.data.memes.length)
        const randMemeImg = memesData.data.memes[randNum].url
        setMemeImage(randMemeImg)
        console.log(memeImage)
        

    }
    return(
        <main>
            <div className="form" >
                <input className="ip1" type="text" name="" id="" placeholder="Top Text"/>
                <input className="ip2" type="text" name="" id="" placeholder="Bottom Text" />
                <button class="btn" onClick={generateMeme}>
                Get a new meme image 🖼
                </button>
            </div>
            <Meme image={memeImage} />


        </main>
    )
}