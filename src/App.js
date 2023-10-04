import React,{ useState } from 'react';
// import React, useState from 'react'

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';


function App() {
  const [mode, setMode] = useState('light');
  // const [redmode, setRedMode] = useState('light');
  // const [greenmode, setGreenMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 

  const toggleMode = () =>{
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#021c37';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode ('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }
  }
  // const toggleModeRed = () =>{
  //   if(mode ==='light'){
  //     setRedMode ('red');
  //     document.body.style.backgroundColor = '#DB4437';
  //     showAlert("red mode has been enabled","success");
  //   }else{
  //     setRedMode ('light');
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled","success");
  //   }
  // }
  // const toggleModeGreen = () =>{
  //   if(mode ==='light'){
  //     setGreenMode ('green');
  //     document.body.style.backgroundColor = '#0F9D58';
  //     showAlert("red mode has been enabled","success");
  //   }else{
  //     setGreenMode ('light');
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled","success");
  //   }
  // }
  return (
    <>  
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}   />
    <Alert alert={alert}/>
    <div className="container">
      
    <TextForm heading = "Enter text to Analyze" mode = {mode}  />
    {/* <About/> */}
    </div>
    </>
   ); 
}

export default App;
