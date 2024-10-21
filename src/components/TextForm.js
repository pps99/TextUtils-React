import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const hanldeCvtCLick = (convert) => {
    if (convert === "Up") {
      setText(text.toUpperCase());
      props.showAlert("Converted to uppercase", "success");
    } else if (convert === "Low") {
      setText(text.toLowerCase());
      props.showAlert("Converted to lowercase", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            hanldeCvtCLick("Up");
          }}
        >
          Convert To UpperCase
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => {
            hanldeCvtCLick("Low");
          }}
        >
          Convert To LowerCase
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something To Preview It"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};
