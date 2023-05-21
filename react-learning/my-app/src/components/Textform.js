// shortcut rfc
import React from "react";

export default function Textform(props) {
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="my-box" rows="6"></textarea>
      </div>
      <button className="btn btn-primary">Save</button>
    </div>
  );
}
