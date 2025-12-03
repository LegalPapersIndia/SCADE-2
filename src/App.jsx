import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';

// Import your page components
import Home from './pages/Home';
import About from './pages/AboutUs';
import Magmist from './pages/MagmistPage';
import Tavarum from './pages/TavarumPage';
import Team from './pages/Teampage';
import Contact from './pages/Contact';
import Footer from './Components/Footer';
import ProductChatbot from './Components/Chatbot';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* This ensures scroll to top on every route change */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/magmist" element={<Magmist />} />
          <Route path="/tavarum" element={<Tavarum />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ProductChatbot />
        <Footer />
      </div>
    </Router>
  );
};

export default App;