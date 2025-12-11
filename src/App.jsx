// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import EnquiryPopup from './Components/Enquiryform';

import Home from './pages/Home';
import About from './pages/AboutUs';
import Magmist from './pages/MagmistPage';
import Tavarum from './pages/TavarumPage';
import Team from './pages/Teampage';
import Contact from './pages/Contact';
import Footer from './Components/Footer';

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
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <ScrollToTop />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/magmist" element={<Magmist />} />
            <Route path="/tavarum" element={<Tavarum />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Har baar page load hone pe popup dikhega – no condition */}
        <EnquiryPopup autoOpen={true} />
      </div>
    </Router>
  );
};

export default App;