import React from "react";
import Sidebar from "../components/Sidebar";

// --- Main Dashboard Page Component ---
export const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <MainContent />
    </div>
  );
};


// --- Main Content Area ---
const MainContent = () => {
  return (
    <main className="flex-1 p-6 lg:p-8 overflow-y-auto ml-64">
      <DashboardHeader />
      <StatsGrid />
      <SalesChart />
      <SankeyChart />
      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
        <DonutChart />
        <BarChart />
      </div>
    </main>
  );
};

// --- Header ---
const DashboardHeader = () => {
  const timeFilters = ["1d", "7d", "1m", "3m", "6m", "1y", "3y"];
  return (
    <>
      {/* Row 1: Title and Actions */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, Olivia
        </h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
            <PlusIcon /> Add Metrics
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
            <CalendarIcon /> Select dates
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
            <FilterIcon /> Filters
          </button>
        </div>
      </div>

      {/* Row 2: Time Filter */}
      <div className="flex items-center border border-gray-200 bg-white rounded-lg p-1 text-sm w-full md:w-fit mb-6 overflow-x-auto">
        {timeFilters.map((filter, idx) => (
          <button
            key={filter}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
              filter === "1m" // Example of active
                ? "bg-gray-100 font-medium shadow-sm"
                : "hover:bg-gray-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </>
  );
};

// --- Stats Card Grid ---
const StatsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <StatCard
      title="Average Order Value"
      value="$208"
      change="+12%"
      changeType="positive"
    />
    <StatCard
      title="Transaction Count (Orders)"
      value="100"
      change="-2%"
      changeType="negative"
    />
    <StatCard
      title="Products Sold"
      value="270"
      change="+2%"
      changeType="positive"
    />
    <StatCard
      title="Gross Profit Margin"
      value="69.10%"
      change="+12%"
      changeType="positive"
    />
    <StatCard
      title="Gross Profit"
      value="$26.4k"
      change="-2%"
      changeType="negative"
    />
    <StatCard
      title="Total Net Revenue"
      value="$1.8M"
      change="-2%"
      changeType="negative"
    />
  </div>
);

// --- Reusable Stat Card ---
const StatCard = ({ title, value, change, changeType }) => {
  const isPositive = changeType === "positive";
  const changeColor = isPositive ? "text-green-600" : "text-red-600";
  const chartColor = isPositive ? "stroke-green-600" : "stroke-red-600";
  const points = isPositive
    ? "0,40 20,30 40,35 60,20 80,25 100,10"
    : "0,10 20,25 40,20 60,35 80,30 100,40";

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="flex justify-between items-end mt-2">
        <div>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className={`text-sm font-medium ${changeColor} mt-1`}>
            {change} <span className="text-gray-500">vs last month</span>
          </p>
        </div>
        {/* Mock Chart */}
        <div className="w-28 h-12">
          <svg
            viewBox="0 0 100 50"
            className="overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <polyline
              fill="none"
              strokeWidth="3"
              className={chartColor}
              points={points}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

// --- Sales Chart ---
const SalesChart = () => {
  // Mock data for 15 bars (Jan 2023 - Mar 2024)
  const mockBarData = [
    { h1: 40, h2: 30 }, { h1: 45, h2: 25 }, { h1: 50, h2: 35 },
    { h1: 30, h2: 20 }, { h1: 35, h2: 22 }, { h1: 42, h2: 30 },
    { h1: 48, h2: 32 }, { h1: 55, h2: 38 }, { h1: 50, h2: 30 },
    { h1: 45, h2: 28 }, { h1: 40, h2: 25 }, { h1: 42, h2: 30 },
    { h1: 48, h2: 35 }, { h1: 52, h2: 30 }, { h1: 45, h2: 25 },
  ];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
      {/* Header and Legend */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
        <h3 className="text-lg font-semibold">
          Monthly Sales Vs Inventory Analysis
        </h3>
        <div className="flex items-center gap-4 text-sm mt-2 md:mt-0">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" /> Gross Sales
          </span>
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-400" /> Transaction
          </span>
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" /> Inventory
          </span>
        </div>
      </div>

      {/* Mock Chart Area */}
      <div className="h-72 w-full relative">
        <p 
          className="absolute text-xs text-red-600 bg-red-100 px-2 py-1 rounded-md"
          style={{ top: '20px', left: '26%' }} // Positioned to match image
        >
          Inventory Moved: 215 units
        </p>
        <div className="h-full flex items-end justify-between border-b border-gray-200 px-2 pt-12">
          {mockBarData.map((bar, i) => (
            <div key={i} className="text-center w-[4%] group relative h-full">
              <div className="relative flex flex-col items-center justify-end h-full">
                <div style={{ height: `${bar.h1}%` }} className="w-full bg-orange-400 rounded-t-md group-hover:opacity-80" />
                <div style={{ height: `${bar.h2}%` }} className="w-full bg-blue-500 group-hover:opacity-80" />
              </div>
              <span className="text-xs text-gray-400 mt-1">{labels[i]}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs font-medium text-gray-500 mt-1">
          <span className="pl-[20%]">2023</span>
          <span className="pr-[10%]">2024</span>
        </div>
      </div>
    </div>
  );
};

// --- Sankey Chart (Mocked) ---
const SankeyChart = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
    <h3 className="text-lg font-semibold mb-4">Inventory Movement Landscape</h3>
    <p className="text-sm text-center text-gray-500 mb-4">
      This component (Sankey Diagram) is complex and requires a specialized
      charting library like Nivo or D3.
    </p>
    <div className="flex justify-between items-center text-sm">
      {/* Left Column */}
      <div className="space-y-2 w-1/3">
        <p>365 Smoke and Vape (Austin) <span className="text-purple-700 font-medium ml-2">59.7%</span></p>
        <p>365 Smoke and Vape (Crosby) <span className="text-purple-700 font-medium ml-2">1.3%</span></p>
        <p>365 Smoke and Vape (Killeen) <span className="text-purple-700 font-medium ml-2">12.7%</span></p>
        <p>365 Smoke and Vape (Muscot) <span className="text-purple-700 font-medium ml-2">7.3%</span></p>
        <p>365 Smoke and Vape (Clantury) <span className="text-purple-700 font-medium ml-2">5.2%</span></p>
      </div>
      {/* Center (Mock flow) */}
      <div className="flex-1 mx-4 h-48 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 font-bold opacity-70">
        WAREHOUSE
      </div>
      {/* Right Column */}
      <div className="space-y-2 w-1/3 text-right">
        <p><span className="text-purple-700 font-medium mr-2">13.9%</span> 365 Smoke and Vape (Baytown)</p>
        <p><span className="text-purple-700 font-medium mr-2">2.6%</span> 365 Smoke and Vape (Kirby)</p>
        <p><span className="text-purple-700 font-medium mr-2">1.8%</span> 365 Smoke and Vape (Wills)</p>
        <p><span className="text-purple-700 font-medium mr-2">1.3%</span> 365 Smoke and Vape (Irving)</p>
        <p><span className="text-purple-700 font-medium mr-2">4%</span> 365 Smoke and Vape (Huston)</p>
      </div>
    </div>
  </div>
);

// --- Donut Chart (Mocked) ---
const DonutChart = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
    <h3 className="text-lg font-semibold mb-4">Top Moving Category</h3>
    <div className="w-full h-48 flex items-center justify-center">
      {/* Mock Donut Chart */}
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="#E5E7EB" strokeWidth="4"></circle>
          <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="#F59E0B" strokeWidth="4" strokeDasharray="30, 70" strokeDashoffset="25"></circle>
          <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="#10B981" strokeWidth="4" strokeDasharray="20, 80" strokeDashoffset="95"></circle>
          <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="#3B82F6" strokeWidth="4" strokeDasharray="25, 75" strokeDashoffset="70"></circle>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">30%</span>
          <span className="text-xs text-gray-500">E-Vapes</span>
        </div>
      </div>
    </div>
  </div>
);

// --- Horizontal Bar Chart (Mocked) ---
const BarChart = () => {
  const mockProducts = [
    { name: "Stinzy Vapes", percent: 37 },
    { name: "Axten E-Cig", percent: 14 },
    { name: "Retro-T Joints", percent: 50 },
    { name: "Milzy Pouches", percent: 50 },
    { name: "Zoho Blunts", percent: 25 },
    { name: "Founkoko", percent: 50 },
    { name: "BasticBoyz", percent: 50 },
    { name: "Cultivator", percent: 50 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-3">
      <h3 className="text-lg font-semibold mb-4">Most Sold Products</h3>
      <div className="space-y-4">
        {mockProducts.map((product) => (
          <div key={product.name}>
            <div className="flex justify-between items-center text-sm mb-1">
              <span className="font-medium text-gray-700">{product.name}</span>
              <span className="text-gray-500">{product.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#6941C6] h-2 rounded-full"
                style={{ width: `${product.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- SVG Icons ---
// (Using paths from Heroicons)
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
const HomeIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></IconWrapper>;
const BoxIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></IconWrapper>;
const TruckIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5m-10.5-4.5v-4.875c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125V13.5M4.5 13.5L3 13.5m0 0l-1.5-1.5M3 13.5l1.5-1.5m15 1.5l1.5-1.5m0 0l-1.5-1.5m1.5 1.5l-1.5 1.5M15 11.25l-3-3m0 0l-3 3m3-3v7.5" /></IconWrapper>;
const TagIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.734.48l4.318-2.159a2.25 2.25 0 001.342-2.316l-2.16-9.58c-.188-.834-.86-1.506-1.694-1.694l-9.58-2.16a2.25 2.25 0 00-2.316 1.342L9.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></IconWrapper>;
const WarehouseIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12h6.75m-6.75 5.25h6.75M5.25 6h13.5v3.75H5.25V6zM5.25 15h13.5v3.75H5.25V15z" /></IconWrapper>;
const CreditCardIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m3-3.75H18a2.25 2.25 0 012.25 2.25v3.75A2.25 2.25 0 0118 19.5H6.75A2.25 2.25 0 014.5 17.25v-3.75a2.25 2.25 0 012.25-2.25z" /></IconWrapper>;
const UsersIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372m-10.75 0a9.38 9.38 0 002.625-.372M12 11.25a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM12.75 11.25a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM12 15.375a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375V15m11.25 0v.375a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375V15m-6.75 0v-.375a3.375 3.375 0 013.375-3.375h1.5a3.375 3.375 0 013.375 3.375z" /></IconWrapper>;
const SupportIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></IconWrapper>;
const SettingsIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.003 1.11-1.226m-2.22 0l-.337.202a8.25 8.25 0 00-3.423 2.673c-.368.53-.83.994-1.317 1.397l-.091.075c-.699.578-1.56 1.025-2.5 1.256V10.5c0 .552.448 1 1 1h.337c.094.002.187.005.28.007l.092.007c.703.05 1.39.223 2.03.498.64.275 1.234.64 1.77 1.08l.092.074c.699.578 1.56 1.025 2.5 1.256h.001c.64.162 1.248.38 1.8.63l.092.04a8.25 8.25 0 003.423 2.673l.337.202c.55.328 1.198.397 1.8.188.602-.21 1.04-.738 1.11-1.348l.044-.337a8.25 8.25 0 00-2.673-3.423c-.53-.368-.994-.83-1.397-1.317l-.075-.091c-.578-.699-1.025-1.56-1.256-2.5V13.5c0-.552-.448-1-1-1h-.337a11.25 11.25 0 01-.28-.007l-.092-.007c-.703-.05-1.39-.223-2.03-.498a8.25 8.25 0 01-1.77-1.08l-.092-.074a8.25 8.25 0 00-3.423-2.673l-.337-.202c-.55-.328-1.198-.397-1.8-.188-.602.21-1.04.738-1.11 1.348l-.044.337.044-.337zM12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" /></IconWrapper>;
const LogoutIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></IconWrapper>;
const PlusIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></IconWrapper>;
const CalendarIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></IconWrapper>;
const FilterIcon = () => <IconWrapper><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 12h9.75M10.5 18h9.75M3.75 6h.008v.008H3.75V6zm.008 6h.008v.008H3.758V12zm0 6h.008v.008H3.758V18z" /></IconWrapper>;

export default DashboardPage;