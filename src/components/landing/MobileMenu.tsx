import React, { useState } from "react";

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block w-6 h-0.5 bg-[#322C29] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#322C29] transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#322C29] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {isOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-white shadow-lg rounded-b-lg z-50 p-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-[#322C29] text-base py-2 px-4 hover:bg-[#F6F5F7] rounded-lg transition-colors"
            >
              Brain Board
            </a>
            <a
              href="#"
              className="text-[#322C29] text-base py-2 px-4 hover:bg-[#F6F5F7] rounded-lg transition-colors"
            >
              For Learners
            </a>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
              <button className="text-[#322C29] text-base bg-[#EEE] px-4 py-3 rounded-lg hover:bg-opacity-80 transition-colors">
                Sign In
              </button>
              <button className="text-white font-semibold text-base px-4 py-3 rounded-lg bg-gradient-to-r from-[#F78F29] to-[#E45837] hover:opacity-90 transition-opacity">
                Register
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};
