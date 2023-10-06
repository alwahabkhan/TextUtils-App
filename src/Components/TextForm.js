import React, { useState } from 'react';

export default function TextForm(props) {

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted into Upper Case","success");
  };

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted into Lower Case","success");
  };

  const handleClearText = () =>{
    let newtext ='';
    setText(newtext);
    props.showAlert("Text is Cleared","success");
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    document.getSelection().removeAllRanges();
    props.showAlert("Copy text to ClipBoard","success");
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

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
            style={{backgroundColor : props.mode === 'dark'?'#13466e':'white',color : props.mode === 'dark'?'white':'black'}}
            id="mybox" rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>  Convert to Upper Case </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}> Convert to Lower Case </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}> Copy Text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}> Clear Text </button>
      </div>
      <div className='container my-3' style={{color : props.mode === 'dark'?'white':'black' }}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & characters are {text.length}
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview here ..."}</p>
      </div>
    </>
  );
}
