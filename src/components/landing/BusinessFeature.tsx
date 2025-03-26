import React from "react";

export const BusinessFeature: React.FC = () => {
  return (
    <section className="mb-[120px] px-[97px] py-0 max-md:px-6 max-md:py-[60px]">
      <div className="flex justify-between items-center gap-[100px] max-md:flex-col">
        <div className="relative w-[638px] max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c489228a04a382a635e585b8171fe0d755a10a"
            className="shadow-[0_2.783px_20.872px_0_rgba(0,0,0,0.25),0_1.236px_1.236px_0_rgba(0,0,0,0.25)] w-[445px] h-[292px] absolute rounded-[10px] border-[7px] border-solid border-white right-0 bottom-0"
            alt="Dashboard Preview 1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f571921798cb1f4e107f59e73da2b3195da394c5"
            className="shadow-[0_2.783px_20.872px_0_rgba(0,0,0,0.25),0_1.236px_1.236px_0_rgba(0,0,0,0.25)] w-[445px] h-[333px] rounded-[10px] border-[7px] border-solid border-white"
            alt="Dashboard Preview 2"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b993f22a13a5e7706ab7e0a9bc319834718e9f43"
            className="w-[204px] h-[173px] -rotate-90 absolute right-[-50px] bottom-0"
            alt="Arrow"
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
