// src/pages/SignUpPage.jsx
import React, { useState } from "react";
import { ArrowRightIcon } from "../components/IconWrapper";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../context/AuthContext"; // Import useAuth
import { signupUser } from "../services/authService"; // Import signupUser

// --- Reusable Components (Keep FormLabel, TextInput) ---
const FormLabel = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">
        {children}*
    </label>
);
const TextInput = ({ id, placeholder, type = "text", value, onChange, name }) => (
    <input
        type={type}
        id={id}
        name={name || id} // Make sure name is set for handleChange
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-[#6941C6] focus:border-[#6941C6] outline-none"
        value={value}
        onChange={onChange}
        required // Add required attribute
    />
);
// ---

export const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { loginAction } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (formData.password.length < 6) { // Ensure frontend validation matches backend
             setError("Password must be at least 6 characters long.");
             return;
        }

        setLoading(true);

        try {
            // Destructure to remove confirmPassword before sending
            const { confirmPassword, ...signupData } = formData;
            const { token, user } = await signupUser(signupData);
            loginAction(user, token); // Log the user in immediately after signup
            navigate("/"); // Redirect to dashboard
        } catch (err) {
            setError(err.message || "Failed to sign up. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white text-gray-900">
            {/* Left Section (unchanged) */}
             <div className="w-full lg:w-1/2 bg-[#6941C6] text-white p-8 lg:p-12 flex flex-col justify-between lg:rounded-r-3xl">
               {/* ... (left section content) ... */}
               <div> <h1 className="text-3xl font-bold text-white flex items-center"> <span>The</span> <span className="relative mx-1" style={{ color: "transparent", WebkitTextStroke: "1px white", }} > Unity </span> <span>Ware</span> </h1> </div>
               <div className="my-12 lg:my-0"> <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"> Engineered to handle all your inventory needs </h2> <p className="text-lg text-gray-200 max-w-md"> Your complete inventory management software to track inventory, streamline sales, fulfill orders, and oversee warehouses from a single window. </p> </div>
               <div className="text-sm text-gray-300">© TheUnityWare 2024</div>
             </div>

            {/* Right Section (Form) */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                <div className="w-full max-w-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        Create your account
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <TextInput
                                id="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextInput
                                id="password"
                                type="password"
                                placeholder="Create a password (min. 6 characters)"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                           <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                            <TextInput
                                id="confirmPassword" // Use correct ID
                                name="confirmPassword" // Use correct name
                                type="password"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-sm text-red-600">{error}</p>}

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6941C6] hover:bg-[#52339d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6941C6] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Creating Account...' : 'Create Account'}
                                <ArrowRightIcon />
                            </button>
                        </div>
                        <div className="flex justify-center">
                             <p>Already have an account? <Link to="/login" className="font-medium text-[#6941C6] hover:text-[#52339d]">Log in</Link></p>
                         </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;