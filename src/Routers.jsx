import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import NewNavbar from './components/NewNavbar';

const Routers = () => {
    return (
        <BrowserRouter>
        <NewNavbar />
        <hr />

            <Routes>
                <Route path="/" element ={<Home/>}/> 
                <Route path="/about" element ={<About/>}/> 
                <Route path="/contact" element ={<Contact/>}/> 
                <Route path="/service" element ={<Service/>}/> 
                
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
