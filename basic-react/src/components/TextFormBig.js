import React, { useState } from "react";

export default function TextFormBig(prop) {
    const textToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const textOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        // Clear the text
        setText("");
    }

    const [text, setText] = useState("enter text");

    return (
        <div className='container'>
            <h3>{prop.title}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={textOnChange} id="myTextBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary" onClick={textToUpper}>Change to uppercase</button>
            <button className="btn btn-danger ml-2" onClick={clearText}>Clear Text</button>
        </div>
    )
}
