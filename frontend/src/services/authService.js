// src/services/authService.js
import api from './api'; // Your Axios instance

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/user/login', credentials);
        // Assuming backend returns { message, data: { token, user } }
        return response.data.data; // Return { token, user }
    } catch (error) {
        // Axios wraps errors, the actual server response is in error.response
        throw error.response?.data || new Error("Login failed");
    }
};

export const signupUser = async (userData) => {
    try {
        const response = await api.post('/user/signup', userData);
        // Assuming backend returns { message, data: { token, user } }
        return response.data.data; // Return { token, user }
    } catch (error) {
        throw error.response?.data || new Error("Signup failed");
    }
};

// You might not need a backend logout call if just using Bearer tokens
// export const logoutUser = async () => {
//     try {
//         await api.post('/user/logout');
//     } catch (error) {
//         console.error("Logout failed:", error);
//         // Handle logout error if necessary
//     }
// };