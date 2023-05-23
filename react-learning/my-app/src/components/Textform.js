import React, { useState } from "react";

export default function Textform(props) {
  const changeUpCase = () => {
    let txt = text.toLocaleUpperCase();
    setText(txt);
  };

  const handleOnChnage = (event) => {
    setText(event.target.value);
  };

  // text is a string value and setTest is a function
  const [text, setText] = useState("Enter text here");

  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChnage} id="my-box" rows="6"></textarea>
      </div>
      <button className="btn btn-primary" onClick={changeUpCase}>
        Save
      </button>
    </div>
  );
}
