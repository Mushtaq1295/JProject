// Sidebar.jsx
import React, { useState } from "react"; // Import useState
import Logo from "./Logo";

// --- Reusable NavItem ---
// CHANGED: Added 'onClick' prop
const NavItem = ({ icon, text, active, onClick }) => (
  <a
    href="#"
    onClick={onClick} // Add onClick handler
    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg ${
      active
        ? "bg-purple-50 text-[#6941C6]"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {React.cloneElement(icon, {
      className: "w-5 h-5",
    })}
    <span className="font-medium text-sm">{text}</span>
  </a>
);

// --- Icon components (Your icon code here) ---
// (IconWrapper, HomeIcon, BoxIcon, etc. - paste all your icon components here)
const IconWrapper = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    {children}
  </svg>
);
const HomeIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </IconWrapper>
);
const BoxIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    />
  </IconWrapper>
);
const TruckIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5m-10.5-4.5v-4.875c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125V13.5M4.5 13.5L3 13.5m0 0l-1.5-1.5M3 13.5l1.5-1.5m15 1.5l1.5-1.5m0 0l-1.5-1.5m1.5 1.5l-1.5 1.5M15 11.25l-3-3m0 0l-3 3m3-3v7.5"
    />
  </IconWrapper>
);
const TagIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.734.48l4.318-2.159a2.25 2.25 0 001.342-2.316l-2.16-9.58c-.188-.834-.86-1.506-1.694-1.694l-9.58-2.16a2.25 2.25 0 00-2.316 1.342L9.568 3z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </IconWrapper>
);
const WarehouseIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12h6.75m-6.75 5.25h6.75M5.25 6h13.5v3.75H5.25V6zM5.25 15h13.5v3.75H5.25V15z"
    />
  </IconWrapper>
);
const CreditCardIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m3-3.75H18a2.25 2.25 0 012.25 2.25v3.75A2.25 2.25 0 0118 19.5H6.75A2.25 2.25 0 014.5 17.25v-3.75a2.25 2.25 0 012.25-2.25z"
    />
  </IconWrapper>
);
const UsersIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372m-10.75 0a9.38 9.38 0 002.625-.372M12 11.25a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM12.75 11.25a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM12 15.375a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375V15m11.25 0v.375a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375V15m-6.75 0v-.375a3.375 3.375 0 013.375-3.375h1.5a3.375 3.375 0 013.375 3.375z"
    />
  </IconWrapper>
);
const SupportIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
    />
  </IconWrapper>
);
const SettingsIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.343 3.94c.09-.542.56-1.003 1.11-1.226m-2.22 0l-.337.202a8.25 8.25 0 00-3.423 2.673c-.368.53-.83.994-1.317 1.397l-.091.075c-.699.578-1.56 1.025-2.5 1.256V10.5c0 .552.448 1 1 1h.337c.094.002.187.005.28.007l.092.007c.703.05 1.39.223 2.03.498.64.275 1.234.64 1.77 1.08l.092.074c.699.578 1.56 1.025 2.5 1.256h.001c.64.162 1.248.38 1.8.63l.092.04a8.25 8.25 0 003.423 2.673l.337.202c.55.328 1.198.397 1.8.188.602-.21 1.04-.738 1.11-1.348l.044-.337a8.25 8.25 0 00-2.673-3.423c-.53-.368-.994-.83-1.397-1.317l-.075-.091c-.578-.699-1.025-1.56-1.256-2.5V13.5c0-.552-.448-1-1-1h-.337a11.25 11.25 0 01-.28-.007l-.092-.007c-.703-.05-1.39-.223-2.03-.498a8.25 8.25 0 01-1.77-1.08l-.092-.074a8.25 8.25 0 00-3.423-2.673l-.337-.202c-.55-.328-1.198-.397-1.8-.188-.602.21-1.04.738-1.11 1.348l-.044.337.044-.337zM12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
    />
  </IconWrapper>
);
const LogoutIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    />
  </IconWrapper>
);
// ... (rest of your icon components)

export const Sidebar = () => {
  // --- State for active item ---
  const [activeItem, setActiveItem] = useState("Overview"); // "Overview" is the default

  // --- List of navigation items ---
  const navItems = [
    { icon: <HomeIcon />, text: "Overview" },
    { icon: <BoxIcon />, text: "Products" },
    { icon: <TruckIcon />, text: "Supplier" },
    { icon: <TagIcon />, text: "Category" },
    { icon: <WarehouseIcon />, text: "Warehouse" },
    { icon: <CreditCardIcon />, text: "Payment" },
    { icon: <UsersIcon />, text: "Roles" },
    { icon: <SupportIcon />, text: "Support" },
    { icon: <SettingsIcon />, text: "Settings" },
  ];

  return (
    // CHANGED: Added 'fixed', 'h-full'
    <aside className="w-64 flex-shrink-0 bg-white flex flex-col shadow-sm fixed top-0 left-0 h-full z-10">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200 h-20 flex items-center">
        {/* CHANGED: Passed text size class */}
        <Logo className="" />
      </div>

      {/* Navigation */}
      {/* CHANGED: Mapped over navItems array */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            active={activeItem === item.text} // Active state is now dynamic
            onClick={() => setActiveItem(item.text)} // Set active item on click
          />
        ))}
      </nav>

      {/* User Profile Footer */}
      {/* This is correctly at the bottom because <nav> has 'flex-1' */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="data:image/jpeg;base64,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"
              alt="Olivia Rhye"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="cursor-pointer">
              <p className="font-semibold text-sm">Olivia Rhye</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
            <LogoutIcon />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;