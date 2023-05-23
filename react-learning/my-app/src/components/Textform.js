import React, { useState } from "react";

export default function Textform(props) {
  const changeUpCase = () => {
    let txt = text.toLocaleUpperCase();
    setText(txt);
  };

  const handleOnChnage = (event) => {
    setText(event.target.value);
  };

  const resetText = () => {
    setText("");
  };

  // text is a string value and setTest is a function
  const [text, setText] = useState("Enter text here");

  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChnage}
          id="my-box"
          rows="6"
        ></textarea>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn btn-primary mr-2" onClick={changeUpCase}>
          Change to uppercase
        </button>
        <button className="btn btn-primary" onClick={resetText}>
          Reset
        </button>
      </div>
    </div>
  );
}
