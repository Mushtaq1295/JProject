// Sidebar.jsx
import React, { useState } from "react";
import Logo from "./Logo";
import {
  BoxIcon,
  CreditCardIcon,
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
  SupportIcon,
  TagIcon,
  TruckIcon,
  UsersIcon,
  WarehouseIcon,
} from "./IconWrapper";

// --- Reusable NavItem ---
const NavItem = ({ icon, text, active, onClick }) => (
  <a
    href="#"
    onClick={onClick}
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

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Overview");

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
    <aside className="w-64 bg-white flex flex-col shadow-sm fixed top-0 left-0 h-full z-10">
      {/* Logo */}
      {/* FIX 1 (ALIGNMENT): Added 'items-center' to this div
        to vertically center the logo in the h-20 container.
      */}
      <div className="p-4 border-b border-gray-200 h-20 flex items-center">
        {/* FIX 2 (SIZE): Added '!' before 'text-2xl'.
          This makes it '!text-2xl', which tells Tailwind
          this class is 'important' and should override the 'text-4xl'
          that is inside the Logo.jsx component.
        */}
        <Logo className="!text-2xl" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            active={activeItem === item.text}
            onClick={() => setActiveItem(item.text)}
          />
        ))}
      </nav>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40x40.png?text=OR" // Placeholder src
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