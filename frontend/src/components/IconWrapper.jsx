// IconWrapper.jsx
import React from "react";

// CHANGED: Added 'export' to all components
export const IconWrapper = ({ children }) => (
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

export const HomeIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </IconWrapper>
);

export const BoxIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    />
  </IconWrapper>
);

export const TruckIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5m-10.5-4.5v-4.875c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125V13.5M4.5 13.5L3 13.5m0 0l-1.5-1.5M3 13.5l1.5-1.5m15 1.5l1.5-1.5m0 0l-1.5-1.5m1.5 1.5l-1.5 1.5M15 11.25l-3-3m0 0l-3 3m3-3v7.5"
    />
  </IconWrapper>
);

export const TagIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.734.48l4.318-2.159a2.25 2.25 0 001.342-2.316l-2.16-9.58c-.188-.834-.86-1.506-1.694-1.694l-9.58-2.16a2.25 2.25 0 00-2.316 1.342L9.568 3z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </IconWrapper>
);

export const WarehouseIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12h6.75m-6.75 5.25h6.75M5.25 6h13.5v3.75H5.25V6zM5.25 15h13.5v3.75H5.25V15z"
    />
  </IconWrapper>
);

export const CreditCardIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m3-3.75H18a2.25 2.25 0 012.25 2.25v3.75A2.25 2.25 0 0118 19.5H6.75A2.25 2.25 0 014.5 17.25v-3.75a2.25 2.25 0 012.25-2.25z"
    />
  </IconWrapper>
);

export const UsersIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372m-10.75 0a9.38 9.38 0 002.625-.372M12 11.25a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM12.75 11.25a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM12 15.375a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375V15m11.25 0v.375a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375V15m-6.75 0v-.375a3.375 3.375 0 013.375-3.375h1.5a3.375 3.375 0 013.375 3.375z"
    />
  </IconWrapper>
);

export const SupportIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
    />
  </IconWrapper>
);

export const SettingsIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.343 3.94c.09-.542.56-1.003 1.11-1.226m-2.22 0l-.337.202a8.25 8.25 0 00-3.423 2.673c-.368.53-.83.994-1.317 1.397l-.091.075c-.699.578-1.56 1.025-2.5 1.256V10.5c0 .552.448 1 1 1h.337c.094.002.187.005.28.007l.092.007c.703.05 1.39.223 2.03.498.64.275 1.234.64 1.77 1.08l.092.074c.699.578 1.56 1.025 2.5 1.256h.001c.64.162 1.248.38 1.8.63l.092.04a8.25 8.25 0 003.423 2.673l.337.202c.55.328 1.198.397 1.8.188.602-.21 1.04-.738 1.11-1.348l.044-.337a8.25 8.25 0 00-2.673-3.423c-.53-.368-.994-.83-1.397-1.317l-.075-.091c-.578-.699-1.025-1.56-1.256-2.5V13.5c0-.552-.448-1-1-1h-.337a11.25 11.25 0 01-.28-.007l-.092-.007c-.703-.05-1.39-.223-2.03-.498a8.25 8.25 0 01-1.77-1.08l-.092-.074a8.25 8.25 0 00-3.423-2.673l-.337-.202c-.55-.328-1.198-.397-1.8-.188-.602.21-1.04.738-1.11 1.348l-.044.337.044-.337zM12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
    />
  </IconWrapper>
);

export const LogoutIcon = () => (
  <IconWrapper>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    />
  </IconWrapper>
);

// REMOVED: No longer need default export
// export default IconWrapper;