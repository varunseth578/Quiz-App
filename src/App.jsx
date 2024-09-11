import React from 'react';
import Quiz from './Quiz';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Quiz />
      </div>
      <Footer />
    </div>
  );
}

export default App;
