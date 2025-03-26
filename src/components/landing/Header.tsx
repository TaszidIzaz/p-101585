import React from "react";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  return (
    <header className="relative px-[237px] py-6 max-md:p-6">
      <nav className="flex items-center justify-between gap-[199px] shadow-[0_0_10px_0_rgba(0,0,0,0.05)] backdrop-blur-[15px] h-[70px] bg-[rgba(255,255,255,0.80)] pl-0 pr-3 py-0 rounded-[70px] border-2 border-solid border-white max-md:gap-[100px] max-sm:gap-5 max-sm:p-0">
        <div className="flex w-[200px] h-[70px] justify-center items-center pl-[15px] pr-4 pt-3 pb-[11px] rounded-[70px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9ea4546da0c7e83093d78aab59912ad8dd6e67c"
            className="w-[169px] h-[47px]"
            alt="Logo"
          />
        </div>
        <div className="flex items-center gap-[38px] max-sm:hidden">
          <a
            href="#"
            className="text-[#322C29] text-base hover:text-opacity-80 transition-colors"
          >
            Brain Board
          </a>
          <a
            href="#"
            className="text-[#322C29] text-base hover:text-opacity-80 transition-colors"
          >
            For Learners
          </a>
          <div className="flex items-center gap-3">
            <button className="text-[#322C29] text-base bg-[#EEE] px-[43px] py-[13px] rounded-[70px] hover:bg-opacity-80 transition-colors">
              Sign In
            </button>
            <button className="text-white font-semibold text-base px-[35px] py-[13px] rounded-[70px] bg-gradient-to-r from-[#F78F29] to-[#E45837] hover:opacity-90 transition-opacity">
              Register
            </button>
          </div>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
};
