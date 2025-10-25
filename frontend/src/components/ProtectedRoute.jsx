import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import React from "react";

export const ProtectedRoute = ({ children }) => {
    const { token, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Or a spinner component
    }

    return token ? children : <Navigate to="/login" replace />;
};

// src/components/PublicRoute.jsx
export const PublicRoute = ({ children }) => {
    const { token, loading } = useAuth();

     if (loading) {
        return <div>Loading...</div>; // Or a spinner component
    }

    // If user is logged in (has token), redirect away from public routes like login/signup
    return !token ? children : <Navigate to="/" replace />; // Redirect to dashboard or home
}