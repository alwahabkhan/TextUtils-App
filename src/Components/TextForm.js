import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleCopyClick = () => {
    // Create a new textarea element to hold the text to be copied
    const copyText = document.createElement('textarea');
    copyText.value = text;

    // Append the textarea element to the DOM
    document.body.appendChild(copyText);

    // Select the text inside the textarea
    copyText.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea element from the DOM
    document.body.removeChild(copyText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'grey':'white',color : props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>  Convert to Upper Case </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}> Convert to Lower Case </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}> Copy Text </button>
      </div>
      <div className='container my-3' style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.trim() === '' ? '0 words' : `${text.split(/\s+/).length} words`} & characters are {text.length}
        </p>
        <p>{0.008 * text.split(/\s+/).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview here ..."}</p>
      </div>
    </>
  );
}
