import React from "react";

const Logo = ({ className = "" }) => {  // ✅ receive className prop
  const unityStyle = {
    color: "transparent",
    WebkitTextStroke: "1px black",
  };

  return (
    <div className={`flex items-baseline text-4xl font-extrabold -tracking-tight ${className}`}>
      {/* THE */}
      <span className="text-[#6941C6]">The</span>

      {/* UNITY (outlined) */}
      <span className="px-[0.2em] inline-flex items-center">
        <span className="relative inline-block">
          <span style={unityStyle} className="inline-block leading-none">
            <span className="inline-block relative">
              U
              {/* Eyes */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 -top-4"
                style={{ fontSize: "0.5em" }}
              >
                👀
              </span>
            </span>
            nity
          </span>
        </span>
      </span>

      {/* WARE */}
      <span className="text-[#6941C6]">Ware</span>
    </div>
  );
};

export default Logo;









