import React from "react";
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 ml-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);


const FormLabel = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider"
  >
    {children}*
  </label>
);

// Standard text input
const TextInput = ({ id, placeholder }) => (
  <input
    type="text"
    id={id}
    name={id}
    placeholder={placeholder}
    className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-[#6941C6] focus:border-[#6941C6] outline-none"
  />
);

// Input with a search icon
const SearchInput = ({ id, placeholder }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <SearchIcon />
    </div>
    <input
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-[#6941C6] focus:border-[#6941C6] outline-none"
    />
  </div>
);

// Radio button
const RadioInput = ({ id, name, label }) => (
  <div className="flex items-center">
    <input
      id={id}
      name={name}
      type="radio"
      className="h-4 w-4 text-[#6941C6] border-gray-300 focus:ring-[#6941C6]"
    />
    <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
      {label}
    </label>
  </div>
);

// --- Main Page Component ---
export const SignUpPage = () => {
  const radioDescOptions = [
    { id: "desc-stockiest", label: "Super-stockiest" },
    { id: "desc-distributor", label: "Distributor" },
    { id: "desc-retailer", label: "Retailer" },
    { id: "desc-brand", label: "Brand" },
  ];

  const radioSkuOptions = [
    { id: "sku-1", label: "<500 units" },
    { id: "sku-2", label: "501-1000 units" },
    { id: "sku-3", label: "1001-5000 units" },
    { id: "sku-4", label: "5001-10000 units" },
    { id: "sku-5", label: "10001-25000 units" },
    { id: "sku-6", label: ">25000 units" },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white text-gray-900">
      {/* Left Section (Purple Background) */}
      <div className="w-full lg:w-1/2 bg-[#6941C6] text-white p-8 lg:p-12 flex flex-col justify-between lg:rounded-r-3xl">
        {/* Logo */}
        <div>
          {/* Replace with your actual Logo component or image */}
          <h1 className="text-3xl font-bold text-white flex items-center">
            {/* Part 1: "The" */}
            <span>The</span>

            {/* Part 2: "Unity" (with outline and eyes) */}
            {/* 'relative' allows us to position the eyes 'absolutely' inside it */}
            <span 
                className="relative mx-1" 
                style={{ 
                color: 'transparent', 
                WebkitTextStroke: '1px white' // This creates the white outline
                }}
            >
                Unity
            </span>

            {/* Part 3: "Ware" */}
            <span>Ware</span>
            </h1>
        </div>

        {/* Hero Text */}
        <div className="my-12 lg:my-0">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Engineered to handle all your inventory needs
          </h2>
          <p className="text-lg text-gray-200 max-w-md">
            Your complete inventory management software to track inventory,
            streamline sales, fulfill orders, and oversee warehouses from a
            single window.
          </p>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-300">© TheUnityWare 2024</div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Tell us a little about your business
          </h2>

          <form className="space-y-6">
            {/* Business Name */}
            <div>
              <FormLabel htmlFor="businessName">Business Name</FormLabel>
              <TextInput id="businessName" placeholder="Brew & Bliss" />
            </div>

            {/* Industry */}
            <div>
              <FormLabel htmlFor="industry">Industry</FormLabel>
              <SearchInput id="industry" placeholder="FMCG" />
            </div>

            {/* Domain */}
            <div>
              <FormLabel htmlFor="domain">Domain</FormLabel>
              <SearchInput id="domain" placeholder="Coffee" />
            </div>

            {/* Product/Services Offered */}
            <div>
              <FormLabel htmlFor="services">
                Product/Services Offered
              </FormLabel>
              <SearchInput id="services" placeholder="PREMIUM" />
            </div>

            {/* Describes You */}
            <fieldset>
              <legend className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wider">
                Which of the following best describes you*
              </legend>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
                {radioDescOptions.map((opt) => (
                  <RadioInput
                    key={opt.id}
                    id={opt.id}
                    name="describes"
                    label={opt.label}
                  />
                ))}
              </div>
            </fieldset>

            {/* SKU Size */}
            <fieldset>
              <legend className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wider">
                Storage Keeping Unit(SKU) Size*
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 font-medium">
                {radioSkuOptions.map((opt) => (
                  <RadioInput
                    key={opt.id}
                    id={opt.id}
                    name="sku"
                    label={opt.label}
                  />
                ))}
              </div>
            </fieldset>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6941C6] hover:bg-[#52339d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6941C6]"
              >
                Get Started
                <ArrowRightIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;