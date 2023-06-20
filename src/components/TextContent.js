// import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'

export default function TextContent(props) {

    /*

Function :

TextArea  Of Find Words:
          value={fWord}
          onChange = {handleFindChange}
TextArea Of Replace Words :
          value={rWord}
          onChange = {handleReplaceChange}
add event on button  :
          onclick = {handleReplaceClick}
    */
    const [text, setText] = useState("");
    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState("");

    const handlefindChange = (event) => {
        findWord(event.target.value);


    };
    const handleReplaceChange = (event) => {
        replaceWord(event.target.value)

    };
    const handleReplaceClick = () => {
        let newText = text.replaceAll(fWord, rWord);
        setText(newText);
    };
    const convertToUppercase = () => {
        console.log("Upper case Button Clicked");
        setText(text.toUpperCase());
        props.showAlert("Text Converted To Upper Case","success")
    }
    const convertToLowercase = () => {
        console.log("Upper case Button Clicked");
        setText(text.toLowerCase());
        props.showAlert("Text Converted To Lower Case","success")

    }
    const convertToTitlecase = () => {
        let str = text;
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        console.log(str);
        let ans = "";
        str.forEach(element => {
            ans = ans + element + " ";
        });
        setText(ans);
        props.showAlert("Text Converted To Title Case","success")

    }
    const clearText = () => {
        setText('');
        props.showAlert("Text Cleared","success")

    }

    const changeText = (event) => {
        setText(event.target.value);
        console.log("Text is changed");

    }
    const noOfWords = () => {


        let arr = text.split(' ');
        let length = text.split(' ').length;
        arr.forEach(element => {
            if (element === '') {

                length--;
            }
        });
        return length;
    }

    let timeRequired = (noOfWords() * .192).toFixed(2);
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking......","success")

    }
    let textareaStyle = { color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'rgba(208,229,230,.6)', fontSize: '25px' }
    return (
        <>

            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className="text-styling" >Enter Your text Below </h1>
                <textarea className="form-control container my-3" id="exampleFormControlTextarea1" value={text} onChange={changeText} style={textareaStyle} rows="" placeholder='Enter Your Text here....'></textarea>
                <button className="btn btn-primary mx-1" onClick={convertToUppercase}>Convert to Uppercase </button>
                <button className="btn btn-primary mx-1" onClick={convertToLowercase}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-1" onClick={convertToTitlecase}>Convert to Titlecase </button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text </button>
                <button className="btn btn-primary mx-1 my-1" onClick={speak} >Speak </button>
                <textarea className="form-control  my-3" value={fWord} style={{ width: 'auto' }} onChange={handlefindChange} rows="1" placeholder='Search'></textarea>
                <textarea className="form-control  my-1" value={rWord} style={{ display: 'inline-block', width: 'auto' }} onChange={handleReplaceChange} rows="1" placeholder='Replace'></textarea>
                <button className="btn btn-primary mx-1 my-1" onClick={handleReplaceClick} style={{ display: 'block' }}>Replace All</button>

            </div>
            <div className="container text-infor" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <hr />
                <h3>No of words : {noOfWords()}</h3>
                <h3>No of characters : {text.length}</h3>
                <h3>Reading Time : {timeRequired}sec</h3>
                <hr />
                <div className="preview">
                    <h3 className="text-styling">Preview</h3>
                    <p>
                        {text.length === '' ? 'Enter text Above To see Preview ' : text}
                    </p>
                </div>
            </div>
        </>
    )
}
