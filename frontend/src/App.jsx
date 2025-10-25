// src/App.jsx
import React from 'react'; // Removed unused useState
// Removed unused logos
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import Logo from './components/Logo'; // Likely not needed here
import { LandingPage } from './pages/LandingPage';
import {
  BrowserRouter as Router, // Renamed BrowserRouter to Router for consistency
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from './pages/Login'; // Ensure consistent naming (LoginPage vs Login)
import SignUpPage from './pages/Signup'; // Ensure consistent naming (SignUpPage vs Signup)
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';

// --- Authentication Imports ---
import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthProvider and useAuth
// Make sure these helper components exist in your project
import {ProtectedRoute} from './components/ProtectedRoute'; // Import ProtectedRoute
import {PublicRoute} from './components/ProtectedRoute';    // Import PublicRoute
// -----------------------------

function App() {
  // Removed unused count state
  // const [count, setCount] = useState(0);

  return (
    // Wrap the entire application with AuthProvider
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes - Only accessible when logged out */}
          <Route path="/landing" element={<PublicRoute><LandingPage /></PublicRoute>} />
          <Route path='/login' element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path='/signup' element={<PublicRoute><SignUpPage /></PublicRoute>} />

          {/* Protected Routes - Only accessible when logged in */}
          {/* Default route redirects to dashboard if logged in, else to login */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {/* Redirect to a default protected route, e.g., dashboard or products */}
                <Navigate to="/products" replace />
              </ProtectedRoute>
            }
          />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/products'
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
          {/* Add other protected routes here */}


          {/* Optional: Catch-all 404 route */}
          <Route path="*" element={<div>404 Not Found</div>} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
