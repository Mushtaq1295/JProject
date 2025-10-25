import React from 'react'


// --- Stats Card Grid ---
export const StatsGrid = () => (
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

export const StatCard = ({ title, value, change, changeType }) => {
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
export const SalesChart = () => {
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
export const SankeyChart = () => (
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
export const DonutChart = () => (
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
export const BarChart = () => {
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

// export const Cards = () => {
//   return (
//     <div>
//       {/* Reusable Stat Card example */}
//       <StatCard title="Revenue" value="$12,345" change="+5.2%" changeType="positive" />
//       <StatCard title="Expenses" value="$8,765" change="-3.1%" changeType="negative" />
//       {/* Add more StatCard instances as needed */}
//     </div>
//   )
// }
