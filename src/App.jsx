// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Quiz from './Quiz';
import Login from './Login';
import Signup from './Signup';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<ProtectedRoute element={<Quiz />} />} /> {/* Protected Quiz route */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
