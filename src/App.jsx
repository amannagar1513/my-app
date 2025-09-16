// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Hero from './Hero.jsx';
import Services from './Services.jsx';
import About from './about.jsx';
import PayPerCall from './PayPerCall.jsx';
import Advertisers from './Advertisers.jsx';
import Publishers from './Publishers.jsx';
import PopupForm from './PopupForm.jsx'; // PopupForm import

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
