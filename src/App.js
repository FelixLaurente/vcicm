import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Youth from './components/pages/Youth'
import Churches from './components/pages/Churches';
import HeroMandaluyong from './components/HeroMandaluyong';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
          <Routes path='/'>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/youth' exact element={<Youth/>}/>
            <Route path='/churches' exact element={<Churches/>}/>
            <Route path='/mandaluyong' exact element={<HeroMandaluyong/>}/>
        
          </Routes>
    </BrowserRouter>
          
    </>
  );
}

export default App;
