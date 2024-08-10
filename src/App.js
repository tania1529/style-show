import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ConfigProvider, FloatButton } from "antd";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Services from "./components/services/services";
import Gallery from "./components/gallery/gallery";
import Booking from "./components/booking/booking";
import Contact from "./components/contactUs/contact";
import Footer from "./components/footer/footer";
// import OurBrands from "./components/ourBrands/ourBrands";
import "./styles.scss";
import About from "./components/about/about";
import ScrollToTop from "./generic/slideShow/scrollToTop";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#333",
          // colorBgContainer: "#F9F5F6",
          borderRadiusLG: 8
          
        },
      }}
    >
       <FloatButton.BackTop  />
      <Router>
        <Navbar />
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <OurBrands /> */}
        <Footer />
      </Router>
    </ConfigProvider>
  );
}

export default App;
