// shortcut rfc
import React, { useState } from "react";

export default function Textform(props) {
  const changeUpCase = () => {
    console.log("Upper case was clicked");
    setText("You have clicked on the changeUpCase button");
  };

  const handleOnChnage = () => {
    console.log("text area");
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
          onClick={handleOnChnage}
          id="my-box"
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={changeUpCase}>
        Save
      </button>
    </div>
  );
}
