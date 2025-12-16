import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Market from './pages/Market';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Partnership from './pages/Partnership';
import Team from './pages/Team';
import VerificationSuccess from './pages/VerificationSuccess';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/market" element={<Market />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/team" element={<Team />} />
          <Route path="/verification-success" element={<VerificationSuccess />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
