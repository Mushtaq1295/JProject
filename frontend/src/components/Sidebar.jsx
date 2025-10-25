// Sidebar.jsx
import React from "react"; // REMOVED: useState
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
import { NavLink } from "react-router-dom"; // IMPORT: NavLink

// --- Reusable NavItem ---
// CHANGED: Converted to NavLink, uses 'to' prop for path
// REMOVED: 'active' and 'onClick' props (NavLink handles this)
const NavItem = ({ icon, text, to, end = false }) => (
  <NavLink
    to={to}
    end={end} // 'end' prop ensures '/' only matches the root path
    // 'className' now takes a function to check if the link is active
    className={({ isActive }) =>
      `flex items-center space-x-3 px-3 py-2.5 rounded-lg ${
        isActive // Use 'isActive' from NavLink
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

export const Sidebar = () => {
  // REMOVED: const [activeItem, setActiveItem] = useState("Overview");

  // CHANGED: Added 'path' for each navigation item
  const navItems = [
    { icon: <HomeIcon />, text: "Overview", path: "/dashboard" }, // Root path
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
        <NavLink to="/dashboard" end className="flex items-center">
        <Logo 
          to="/dashboard"
          className="text-2xl! cursor-pointer"
           />
           </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {/* CHANGED: Mapping to NavItem with 'to' and 'end' props */}
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            to={item.path}
            end={item.path === "/"} // Add 'end' prop only for the "Overview" link
          />
        ))}
      </nav>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40x40.png?text=OR"
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