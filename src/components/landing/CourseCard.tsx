import React from "react";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: string;
  imageSrc: string;
  category: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  students,
  price,
  imageSrc,
  category,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-3 left-3 bg-[#F78F29] text-white text-xs font-semibold px-2 py-1 rounded-full">
          {category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-[#322C29] font-semibold text-lg mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-[#978A87] text-sm mb-3">by {instructor}</p>

        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill={i < rating ? "url(#paint0_linear)" : "none"}
                stroke="#E5E5E5"
                className="mr-0.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.86493 4.056C7.81518 2.352 8.28993 1.5 9.00018 1.5C9.71043 1.5 10.1852 2.352 11.1354 4.056L11.3814 4.497C11.6514 4.9815 11.7864 5.22375 11.9964 5.3835C12.2064 5.54325 12.4689 5.6025 12.9939 5.721L13.4709 5.829C15.3159 6.24675 16.2377 6.45525 16.4574 7.161C16.6764 7.866 16.0479 8.60175 14.7902 10.0725L14.4647 10.4528C14.1077 10.8705 13.9284 11.0797 13.8482 11.3377C13.7679 11.5965 13.7949 11.8755 13.8489 12.4327L13.8984 12.9405C14.0882 14.9032 14.1834 15.8843 13.6089 16.32C13.0344 16.7558 12.1704 16.3582 10.4439 15.5632L9.99618 15.3577C9.50568 15.1312 9.26043 15.0187 9.00018 15.0187C8.73993 15.0187 8.49468 15.1312 8.00418 15.3577L7.55718 15.5632C5.82993 16.3582 4.96593 16.7557 4.39218 16.3207C3.81693 15.8842 3.91218 14.9032 4.10193 12.9405L4.15143 12.4335C4.20543 11.8755 4.23243 11.5965 4.15143 11.3385C4.07193 11.0798 3.89268 10.8705 3.53568 10.4535L3.21018 10.0725C1.95243 8.6025 1.32393 7.86675 1.54293 7.161C1.76193 6.45525 2.68518 6.246 4.53018 5.829L5.00718 5.721C5.53143 5.6025 5.79318 5.54325 6.00393 5.3835C6.21468 5.22375 6.34893 4.9815 6.61893 4.497L6.86493 4.056Z" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="9.00018"
                    y1="1.5"
                    x2="9.00018"
                    y2="16.4999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F78F29" />
                    <stop offset="1" stopColor="#E45837" />
                  </linearGradient>
                </defs>
              </svg>
            ))}
          </div>
          <span className="text-[#322C29] text-sm">{rating.toFixed(1)}</span>
          <span className="text-[#978A87] text-sm ml-2">
            ({students} students)
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#322C29] font-bold">{price}</span>
          <button className="bg-[#EEE] hover:bg-[#E5E5E5] text-[#322C29] text-sm font-medium px-3 py-1.5 rounded-lg transition-colors">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
};
