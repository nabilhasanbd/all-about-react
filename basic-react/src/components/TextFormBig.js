import React, { useState } from "react";
// import './components.css'; // Make sure the path to your CSS file is correct

export default function TextFormBig(prop) {
    const textToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const textOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText("");
    }

    const [text, setText] = useState("enter text");

    return (
        <>
        
        <div className='container'>
            <h3>{prop.title}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={textOnChange} id="myTextBox" rows="6"></textarea>
            </div>
            <div className="button-container">
                <button className="btn btn-primary" onClick={textToUpper}>Change to uppercase</button>
                <button className="btn btn-danger mx-2" onClick={clearText}>Clear Text</button>
            </div>
        </div>
        <div className="container my-5">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} worrd and {text.length} characters</p>
        </div>
        </>
    )
}
