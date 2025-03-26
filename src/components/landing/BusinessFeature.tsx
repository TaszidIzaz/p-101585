
import React from "react";

export const BusinessFeature: React.FC = () => {
  return (
    <section className="mb-[120px] px-[97px] py-0 max-md:px-6 max-md:py-[60px]">
      <div className="flex justify-between items-center gap-[100px] max-md:flex-col">
        <div className="relative w-full max-w-[638px]">
          <img
            src="/lovable-uploads/29f264ca-293c-44ca-afcd-d2c88d8e3371.png"
            className="w-full rounded-[10px] border-[7px] border-solid border-white shadow-[0_2.783px_20.872px_0_rgba(0,0,0,0.25),0_1.236px_1.236px_0_rgba(0,0,0,0.25)]"
            alt="EduLink Academy Dashboard"
          />
        </div>
        <div className="max-w-[540px]">
          <h2 className="text-[#322C29] text-6xl font-bold leading-[72px] mb-2.5 max-sm:text-[40px]">
            ELA for Business
          </h2>
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-[#F78F29] to-[#E45837] text-white text-sm font-medium rounded-full mb-5">
            Enterprise Solution
          </div>
          <p className="text-[#978A87] text-xl leading-[26px] max-sm:text-base">
            An interactive community driven edtech platform helps you to develop
            your skills and get ready for your future.
          </p>
        </div>
      </div>
    </section>
  );
};
