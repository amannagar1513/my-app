// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Services from './Services';
import About from './about';
import PayPerCall from './paypercall';
import Advertisers from './Advertisers';
import Publishers from './Publishers';
import PopupForm from './PopupForm'; // PopupForm import

function App() {
  return (
    <Router>
      <Header />

      {/* Show PopupForm globally, outside of routes */}
      <PopupForm />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/paypercall" element={<PayPerCall />} />
        <Route path="/advertisers" element={<Advertisers />} />
        <Route path="/publishers" element={<Publishers />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
