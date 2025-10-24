import React from "react";
import { ArrowRightIcon } from "../components/IconWrapper"; // Removed SearchIcon
import { Link } from "react-router";

// --- Reusable Components ---

const FormLabel = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider"
  >
    {children}*
  </label>
);

// CHANGED: Modified to accept a 'type' prop for email and password
const TextInput = ({ id, placeholder, type = "text" }) => (
  <input
    type={type}
    id={id}
    name={id}
    placeholder={placeholder}
    className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-[#6941C6] focus:border-[#6941C6] outline-none"
  />
);

// REMOVED: SearchInput and RadioInput components are no longer needed

// --- Main Page Component ---
export const SignUpPage = () => {
  // REMOVED: radioDescOptions and radioSkuOptions arrays

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white text-gray-900">
      {/* Left Section (Purple Background) */}
      <div className="w-full lg:w-1/2 bg-[#6941C6] text-white p-8 lg:p-12 flex flex-col justify-between lg:rounded-r-3xl">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center">
            <span>The</span>
            <span
              className="relative mx-1"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px white",
              }}
            >
              Unity
            </span>
            <span>Ware</span>
          </h1>
        </div>

        {/* Hero Text */}
        <div className="my-12 lg:my-0">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Engineered to handle all your inventory needs
          </h2>
          <p className="text-lg text-gray-200 max-w-md">
            Your complete inventory management software to track inventory,
            streamline sales, fulfill orders, and oversee warehouses from a
            single window.
          </p>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-300">© TheUnityWare 2024</div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-lg">
          {/* CHANGED: Title updated */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Create your account
          </h2>

          {/* CHANGED: Form fields replaced */}
          <form className="space-y-6">
            {/* Name */}
            <div>
              <FormLabel htmlFor="name">Name</FormLabel>
              <TextInput id="name" placeholder="Enter your full name" />
            </div>

            {/* Email */}
            <div>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextInput
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextInput
                id="password"
                type="password"
                placeholder="Create a password"
              />
            </div>

            {/* confirm Password */}
            <div>
              <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
              <TextInput
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6941C6] hover:bg-[#52339d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6941C6]"
              >
                {/* CHANGED: Button text updated */}
                Create Account
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