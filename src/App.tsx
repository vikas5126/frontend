import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';

import './App.css'
import  Contact  from './pages/Contact.tsx';
import  About  from './pages/About.tsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bulkorder' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App