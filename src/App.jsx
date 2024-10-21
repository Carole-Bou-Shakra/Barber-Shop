// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import TopList from './Components/TopList/TopList';
import background from '/public/background.jpg';
import Banner from './Components/Banner/Banner';
import OurServices from './Components/OurServices/OurServices';
import ReservePage from './Components/ReservePage/ReservePage';

const backgroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <Router>
      <div style={backgroundStyle} className="overflow-x-hidden">
        <div className="min-h-screen bg-white/70 backdrop-blur-3xl">
          <Navbar />
          {/* Use a component to determine the current path */}
          <MainContent />
        </div>
      </div>
    </Router>
  );
};

// Create a component to manage the routes and content rendering
const MainContent = () => {
  const location = useLocation();

  return (
    <>
      {/* Render Hero and Banner only on the homepage */}
      {location.pathname === '/' && <Hero />}
      
      <Routes>
        <Route path="/" element={<TopList />} />
        <Route path="/reserve" element={<ReservePage />} />
      </Routes>

      {/* Render Banner only on the homepage */}
      {location.pathname === '/' && <Banner />}
      <OurServices />
    </>
  );
};

export default App;
