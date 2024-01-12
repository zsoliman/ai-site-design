import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage';
import MenuSection from './components/MenuSection';


function App() {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuSection />} />
          {/* Add more routes for other pages */}
        </Routes>


      </div>
    </Router>
  );
}

export default App;

