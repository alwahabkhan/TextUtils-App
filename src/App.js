import React,{ useState } from 'react';
// import React, useState from 'react'

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
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

  return (
    // <>
    //   <BrowserRouter>
    //     <Navbar
    //       title="TextUtils2"
    //       aboutText="About Us"
    //       mode={mode}
    //       toggleMode={toggleMode}
    //     />
    //     <Alert alert={alert} />
    //     <div className="container my-4" mode={mode}>
    //       <Routes>
    //         <Route exact path="/about" element={<About />}></Route>
    //         <Route
    //           exact path="/"
    //           element={
    //             <TextForm
    //               showAlert={showAlert}
    //               heading="Enter Text to analyze "
    //               mode={mode}
    //             />
    //           }
    //         ></Route>
    //       </Routes> 
    //     </div>
    //   </BrowserRouter>
    // </>

    <>  
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}   />
    <Alert alert={alert}/>
    <div className="container">
      
    <TextForm showAlert={showAlert} heading = "Enter text to Analyze" mode = {mode}  />
    {/* <About/> */}
    </div>
    </>
   ); 
}

export default App;
