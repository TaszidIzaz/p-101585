
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative mt-[50px] px-[97px] py-0 max-md:px-6 max-md:py-[60px]">
      <div className="flex justify-between items-center">
        <div className="max-w-[599px] z-10">
          <h1 className="text-[#322C29] text-6xl font-bold leading-[72px] mb-[30px] max-sm:text-[40px]">
            Your Gateway <span className="text-[#322C29]">To</span>
            <br />
            Engaged Learning
            <br />
            <span className="relative">
              Communities
              <span className="absolute left-0 bottom-2 w-full h-[10px] bg-gradient-to-r from-[#F78F29] to-[#E45837] -z-10"></span>
            </span>
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
        <div className="relative">
          <img 
            src="/lovable-uploads/c224451e-7381-4fd1-8102-deab5b0200fc.png" 
            alt="Professional educators" 
            className="max-w-[600px] z-10 relative"
          />
          <div className="absolute top-[15%] left-[5%] z-0">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,10 Q30,60 80,30" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              <path d="M80,30 L90,25" stroke="#CCCCCC" strokeWidth="2" fill="none" />
              <path d="M80,30 L85,40" stroke="#CCCCCC" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="absolute top-[10%] right-[10%] z-0">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100,10 Q60,40 40,70" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              <path d="M40,70 L30,65" stroke="#CCCCCC" strokeWidth="2" fill="none" />
              <path d="M40,70 L50,75" stroke="#CCCCCC" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#F6F5F7] via-[#E5E5E5] to-[#F6F5F7] mt-12"></div>
    </section>
  );
};
