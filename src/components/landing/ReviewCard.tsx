import React from "react";
import { StarRating } from "@/components/ui/StarRating";

interface ReviewCardProps {
  imageSrc: string;
  name: string;
  role: string;
  review: string;
  rating?: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  imageSrc,
  name,
  role,
  review,
  rating = 5,
}) => {
  return (
    <div className="relative w-[400px] bg-white pt-[85px] pb-[34px] px-[19px] rounded-3xl max-sm:w-full">
      <div className="absolute top-[-59px] -translate-x-2/4 w-[120px] h-[120px] flex justify-center items-center bg-white rounded-[91px] border-[5px] border-solid border-[#F6F5F7] left-2/4">
        <img
          src={imageSrc}
          className="h-[120px] w-auto"
          alt={`${name}'s profile`}
        />
      </div>
      <div className="text-center mb-6">
        <h3 className="text-[#322C29] text-xl font-semibold mb-1">{name}</h3>
        <p className="text-[#978A87] text-sm mb-6">{role}</p>
        <p className="text-[#322C29] text-sm">{review}</p>
      </div>
      <StarRating rating={rating} />
    </div>
  );
};
