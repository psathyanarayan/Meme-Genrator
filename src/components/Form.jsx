import React from "react";
import "/src/styles/Form.css"
import memesData from "/src/memeData.js"
import Meme from "/src/components/Meme.jsx"
export default function Form(props) {

    const [meme,setMeme] = React.useState(
        {
            topText:"",
            bottomText:"",
            memeImage:"https://i.imgflip.com/1bij.jpg"
        }
    )
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevData => {
            return {
                ...prevData,
                [name]:value
            }
        })
    }
    function generateMeme(){
        console.log(memesData.data.memes.length)
        const randNum = Math.floor(Math.random() * memesData.data.memes.length)
        const randMemeImg = memesData.data.memes[randNum].url
        setMeme(prevData => {
            return {
                ...prevData,
                memeImage:randMemeImg
            }
        })
        console.log(meme)
        

    }
    return(
        <main>
            <div className="form" >
                <input value={meme.topText}  onChange={handleChange} className="ip1" type="text" name="topText" id="" placeholder="Top Text"/>
                <input value={meme.bottomText} onChange={handleChange} className="ip2" type="text" name="bottomText" id="" placeholder="Bottom Text" />
                <button class="btn" onClick={generateMeme}>
                Get a new meme image 🖼
                </button>
            </div>
            <Meme topText={meme.topText} bottomText={meme.bottomText} image={meme.memeImage} />


        </main>
    )
}