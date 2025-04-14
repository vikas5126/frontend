import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';

import './App.css'
import  Contact  from './pages/Contact.tsx';
import  About  from './pages/About.tsx';
import BulkOrder from './pages/bulkOrder.tsx';
import Category from './components/Category.tsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bulkorder' element={<BulkOrder/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/category/:id' element={<Category/>}/>
      </Routes>
    </div>
  )
}

export default App