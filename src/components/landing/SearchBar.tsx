import React, { useState } from "react";

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // In a real app, you would implement search functionality here
  };

  return (
    <div className="relative w-full max-w-[400px]">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          placeholder="Search courses, communities..."
          className={`w-full pl-10 pr-4 py-2 rounded-full border ${
            isActive
              ? "border-[#F78F29] ring-2 ring-[rgba(247,143,41,0.2)]"
              : "border-[#E5E5E5]"
          } focus:outline-none transition-all duration-200`}
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </div>
  );
};
