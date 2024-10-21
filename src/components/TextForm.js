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

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpraces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-2">{props.heading}</h1>
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
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={() => {
            hanldeCvtCLick("Up");
          }}
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={() => {
            hanldeCvtCLick("Low");
          }}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpraces}
        >
          Clear Extra Spaces
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
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};
