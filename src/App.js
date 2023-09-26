import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>  
    <Navbar title = "TextUtils" abouttext = "AboutUs" />
    
    <div className="container">
      
    <TextForm heading = "Enter text to Analyze" />
    </div>
    </>
   ); 
}

export default App;
