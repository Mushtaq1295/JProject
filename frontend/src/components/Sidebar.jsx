// Sidebar.jsx
import React from "react";
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
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // Keep these imports
import { useAuth } from "../context/AuthContext"; // Keep this import

// --- Reusable NavItem ---
const NavItem = ({ icon, text, to, end = false }) => (
 <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `flex items-center space-x-3 px-3 py-2.5 rounded-lg ${
        isActive
          ? "bg-purple-50 text-[#6941C6]"
          : "text-gray-600 hover:bg-gray-100"
      }`
    }
  >
    {React.cloneElement(icon, {
      className: "w-5 h-5",
    })}
    <span className="font-medium text-sm">{text}</span>
  </NavLink>
);

// REMOVED HOOKS AND HANDLER FROM HERE

export const Sidebar = () => {
  // --- MOVED HOOK CALLS AND HANDLER INSIDE THE COMPONENT ---
  const { logoutAction, user } = useAuth(); // Also get user if needed for display
  const navigate = useNavigate();
  // const location = useLocation(); // Keep if you need it elsewhere

  const handleLogout = () => { // Removed async as logoutAction isn't async
    try {
      logoutAction(); // Call the context action
      // Redirect to login page after logout
      // Using /login instead of / ensures logged-out users land there
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally show an error message to the user
    }
  };
  // --------------------------------------------------------

  const navItems = [
    { icon: <HomeIcon />, text: "Overview", path: "/dashboard" },
    { icon: <BoxIcon />, text: "Products", path: "/products" },
    { icon: <TruckIcon />, text: "Supplier", path: "/supplier" },
    { icon: <TagIcon />, text: "Category", path: "/category" },
    { icon: <WarehouseIcon />, text: "Warehouse", path: "/warehouse" },
    { icon: <CreditCardIcon />, text: "Payment", path: "/payment" },
    { icon: <UsersIcon />, text: "Roles", path: "/roles" },
    { icon: <SupportIcon />, text: "Support", path: "/support" },
    { icon: <SettingsIcon />, text: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white flex flex-col shadow-sm fixed top-0 left-0 h-full z-10">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200 h-20 flex items-center">
        {/* Make logo navigate to dashboard */}
        <NavLink to="/dashboard">
          {/* Ensure className prop doesn't have syntax error `!text-2xl` -> `!text-2xl` */}
          <Logo className="!text-2xl cursor-pointer" />
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            to={item.path}
            // Correct logic for 'end' prop: only true for the EXACT root path if needed
            // If '/dashboard' is your main page, it might not need 'end'
            // If you had a '/' path, THAT would need 'end={item.path === "/"}'
            // Let's assume /dashboard doesn't need 'end' unless it's truly the root '/'
             end={item.path === "/dashboard"} // Added end prop for dashboard if it's the root/index
          />
        ))}
      </nav>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40x40.png?text=OR" // Placeholder src
              alt={user?.name || "User"} // Display user name if available
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="cursor-pointer">
              {/* Display actual user name */}
              <p className="font-semibold text-sm">{user?.name || 'User Name'}</p>
              <p className="text-xs text-gray-500">Admin</p> {/* Or user role */}
            </div>
          </div>
          {/* Changed div to button for better accessibility */}
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
            aria-label="Logout"
          >
            <LogoutIcon />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;