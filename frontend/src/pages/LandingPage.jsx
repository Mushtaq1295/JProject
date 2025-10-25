import React from "react";
// Put your image file at src/assets/hero.png (or adjust this import path)
// import HeroImage from "../assets/hero.png";
import Landing from "../assets/Landing-pic1.png";

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* =========================
          HEADER
         ========================== */}
      <header className="flex justify-between items-center px-6 py-6">
        <Logo className="cursor-pointer" />
        <p to="/login" aria-label="Sign in">
          <button
            className="px-4 py-2 rounded-full border transition
                       border-[#6941C6] text-[#6941C6]
                       hover:bg-[#6941C6] hover:text-white"
          >
            Sign In →
          </button>
        </p>
      </header>
      <main className="flex-1 relative overflow-hidden px-6">
        {/* ---------- Wavelet (decorative SVG) ---------- */}
        <div className="absolute inset-x-0 top-8 pointer-events-none z-0 flex justify-center">
          <svg
            className="w-auto max-w-none opacity-70"
            viewBox="0 0 1200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.45" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 C150,0 350,160 600,80 C850,0 1050,160 1200,80 L1200,200 L0,200 Z"
              fill="url(#g1)"
            />
            <path
              d="M0,100 C150,40 350,140 600,100 C850,60 1050,160 1200,100 L1200,200 L0,200 Z"
              fill="#ffffff"
              opacity="0.35"
            />
          </svg>
        </div>

        {/* ---------- HERO CONTENT (centered) ---------- */}
        <section className="relative z-10 max-w-6xl mx-auto py-20 flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            Technology doesn’t have to feel like a different language
          </h1>

          {/* Subheading / supporting paragraph */}
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl">
            Simplified inventory management to drive business growth and
            strategically scale operations.
          </p>
        </section>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          
          {/* ---------- FEATURE GRID (2x2) ---------- */}
          {/* This is now the LEFT side (takes 50% width on large screens) */}
          <section className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-md flex items-center justify-center">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#6941C6]">
                    Order Management
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Efficiently manage sales and purchasing activities. (Short
                    description placeholder)
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-md flex items-center justify-center">
                  <i className="fa-solid fa-clipboard-check"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#6941C6]">
                    Warehouse Management
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Centrally manage stock across multiple warehouses.
                    (Placeholder)
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-md flex items-center justify-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#6941C6]">
                    Order Management
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Efficiently manage sales and purchasing activities. (Short
                    description placeholder)
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-md flex items-center justify-center">
                  <i className="fa-solid fa-chart-simple"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#6941C6]">
                    Reports & Analytics
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Gain insights into sales and inventory with comprehensive
                    reports. (Short description placeholder)
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              aria-hidden="true"
          >
              <div className="w-full max-w-[760px] rounded-xl  overflow-hidden bg-white">
                  <img
                      src={Landing}
                      alt="App preview"
                      className="w-full h-[350px] object-cover"
                  />
              </div>
          </div>
        </div>
      </main>
      <p className="ml-5 mb-4 font-extralight">© TheUnityWare 2024</p>
    </div>
  );
};

export default LandingPage;
