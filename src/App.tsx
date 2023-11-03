import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Social from './pages/Social';
import About from './pages/About';
import Invest from './pages/Invest';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* parsing the navbar component to our primary */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Social/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/invest' element={<Invest/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;