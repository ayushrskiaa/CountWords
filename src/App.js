// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'

// import "./styles.css";
import About from './components/About.js'
// import { useState } from 'react';
import React, { useState } from 'react';
import Alert from './components/Alert.js';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const [Mode, setMode] = useState('light');

  const router=createBrowserRouter([
      {
        path:"/",
        element:<TextForm />
      },
      {
        path:"./about",
        element:<About/>
      }
    
  ])
  
  return (
  <>
      <SpeedInsights />
      <Analytics /> 
      <Navbar title="CountYourWords" mode={Mode} About="ABOUT" />
      {/* <RouterProvider router={router} /> */}
      <Alert Alert={Alert} />
      <div className="container"> <TextForm email="Email" /></div>
     {/* <RouterProvider router={router} /> */}
      <About/>
     
  
</>
  );
}

export default App;
