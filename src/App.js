import React,{ useState } from 'react';
// import React, useState from 'react'

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#021c37';
    }else{
      setMode ('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>  
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    
    <div className="container">
      
    <TextForm heading = "Enter text to Analyze" mode = {mode}/>
    {/* <About/> */}
    </div>
    </>
   ); 
}

export default App;
