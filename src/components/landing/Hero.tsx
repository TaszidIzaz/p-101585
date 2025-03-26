import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="mt-[50px] px-[97px] py-0 max-md:px-6 max-md:py-[60px]">
      <div className="flex justify-between items-center">
        <div className="max-w-[599px]">
          <h1 className="text-[#322C29] text-6xl font-bold leading-[72px] mb-[30px] max-sm:text-[40px]">
            Your Gateway to Engaged Learning Communities
          </h1>
          <p className="text-[#978A87] text-xl leading-[26px] mb-[30px] max-sm:text-base">
            Connect with learners, share your knowledge, and grow your
            influence—all in one place.
          </p>
          <div className="flex flex-wrap gap-4 w-full max-w-[428px]">
            <button className="px-6 py-3 bg-gradient-to-r from-[#F78F29] to-[#E45837] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="px-6 py-3 bg-[#EEE] text-[#322C29] font-medium rounded-lg hover:bg-opacity-80 transition-colors flex items-center gap-2">
              <span>Watch Demo</span>
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
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
