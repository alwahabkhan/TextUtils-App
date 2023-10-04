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

  const handleClearText = () =>{
    setText("");
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => console.log('Text copied to clipboard'))
      .catch(err => console.error('Unable to copy text to clipboard', err));
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container' 
      style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            style={{backgroundColor : props.mode === 'dark'?'grey':'white',color : props.mode === 'dark'?'white':'black'}}
            // backgroundColor : props.redmode === 'red'?'grey':'white',color : props.redmode === 'red'?'white':'yellow'}} 
            id="mybox" rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>  Convert to Upper Case </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}> Convert to Lower Case </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}> Copy Text </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}> Clear Text </button>
      </div>
      <div className='container my-3' style={{color : props.mode === 'dark'?'white':'black' }}>
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
