import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Services from './components/services/services';
import Gallery from './components/gallery';
import Booking from './components/booking';
import Contact from './components/contact';
import './styles.scss';
import Footer from './components/footer/footer';
import OurBrands from './components/ourBrands/ourBrands';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <OurBrands/>
      <Footer/>
    </Router>
  );
}

export default App;
