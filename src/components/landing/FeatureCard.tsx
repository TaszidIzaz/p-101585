import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#F78F29] to-[#E45837] rounded-full mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-[#322C29] text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#978A87]">{description}</p>
    </div>
  );
};
