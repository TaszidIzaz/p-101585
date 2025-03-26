import React from "react";

export const BusinessDashboard: React.FC = () => {
  return (
    <section className="px-[97px] py-[120px] max-md:px-6 max-md:py-[60px]">
      <div className="text-center mb-[50px]">
        <h2 className="text-[#322C29] text-6xl font-bold leading-[72px] mb-2.5 max-sm:text-[40px]">
          Business Dashboard
        </h2>
        <p className="text-[#978A87] text-xl w-full max-w-[600px] mx-auto">
          Powerful analytics and management tools to grow your educational
          business
        </p>
      </div>
      <div className="pt-14 pb-0 px-[42px] rounded-[35px] max-sm:p-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a494e40945539be5b42076a067f8989ac965876b"
          className="w-full rounded-[20px_20px_0_0] shadow-lg"
          alt="Business Dashboard"
        />
      </div>
    </section>
  );
};
