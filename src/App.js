// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
// import "./styles.css";
import About from './components/About.js'
// import { useState } from 'react';
import React, {useState } from 'react';
import Alert from './components/Alert.js'


function App() {
  const[Mode,setMode]=useState('light');
  // const[Alert,setAlert]=useState('null');

//   const showAlert=(message,type)=>{
// showAlert(
//   {
//      msg:message,
//      type:type
//   }
// )
//   }


  return (
    <>
    
      <Navbar title="CountYourWords" mode={Mode} About="ABOUT"/>
      <Alert Alert={Alert}/>
      <div className="container"> <TextForm email="Email" /></div>
      <About/>
      
    </>
  );
}

export default App;
