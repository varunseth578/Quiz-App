// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase'; // Import the auth object from your firebase configuration
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  if (isAuthenticated === null) {
    // While checking the authentication state, you can show a loading spinner or nothing
    return <div>Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
