import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import About from './page/About'
import Home from './page/Home'
import Contact from './page/Contact'
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>


        </div>
    )
}

export default App