import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import Chatbot from './components/Chatbot'; // Added Chatbot import
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Education from './pages/Education';
import Connect from './pages/Connect';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to Home */}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  // Ensure that after loading is complete, the page scrolls to the top
  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);  // Scroll to top of the page
    }
  }, [loading]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnimatePresence mode="wait">
          {/* Show LoadingScreen until loading is false */}
          {loading ? (
            <LoadingScreen onFinish={() => setLoading(false)} />
          ) : (
            <>
              <Navigation />
              <main className="page-transition">
                <AnimatedRoutes />
              </main>
              <Chatbot /> {/* Ensure Chatbot is rendered after routes */}
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;