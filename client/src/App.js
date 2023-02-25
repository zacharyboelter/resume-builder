import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Resume from './Resume'

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
