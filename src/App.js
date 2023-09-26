import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';

function App() {
  return (
    <>  
    <Navbar title = "TextUtils" abouttext = "AboutUs" />
    
    <div className="container">
      
    <TextForm heading = "Enter text to Analyze" />
    {/* <About/> */}
    </div>
    </>
   ); 
}

export default App;
