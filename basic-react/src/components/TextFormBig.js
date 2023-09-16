import React, { useState } from "react";


export default function TextFormBig(prop) {
    const [text, setText] = useState("enter text");
    return (
        <div className='container'>
            <h3>{prop.title} - {text}</h3>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="myTextBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary">Chnage to uppercase</button>
        </div>
    )
}

