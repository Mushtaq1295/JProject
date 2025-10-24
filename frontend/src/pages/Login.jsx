// LoginPage.jsx
import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex text-gray-900 bg-white">
      {/* Left Section (Purple Background) */}
      <div className="w-1/2 bg-[#6941C6] text-white p-8 lg:p-12 flex flex-col justify-between lg:rounded-r-3xl">
        
        {/*
          REMOVED: The problematic 'absolute' div that was here
        */}
        
        {/* Logo and Tagline */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <div className="mb-6">
            <div className="bg-white rounded-full px-10 py-5 inline-block">
              <Logo className="text-5xl font-bold"></Logo>
            </div>
            <p className="text-xl mt-2">📊📦</p>
          </div>
          <p className="text-lg leading-relaxed max-w-sm">
            Re-imagining inventory management experience with advance data
            analytics for optimum performance
          </p>
        </div>

        {/* Footer Text */}
        <div className="relative z-10 text-center text-sm">
          © TheUnityWare 2024
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-gray-600 mb-8">
            Welcome back! Please enter your details.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#6941C6] focus:border-[#6941C6] outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="***********"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#6941C6] focus:border-[#6941C6] outline-none"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#6941C6] focus:ring-[#6941C6] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember for 30 days
                </label>
              </div>

              <a
                href="#"
                className="text-sm font-medium text-[#6941C6] hover:text-[#52339d]"
              >
                Forgot password
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6941C6] hover:bg-[#52339d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6941C6] cursor-pointer"
              >
                Sign in
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#6941C6] hover:text-[#52339d]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;