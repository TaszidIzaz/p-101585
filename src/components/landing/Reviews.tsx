import React from "react";
import { ReviewCard } from "./ReviewCard";

export const Reviews: React.FC = () => {
  const reviewsData = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/406c248789d858b816f6fe12b188a4ede56e0339",
      name: "Rahim Ahmed",
      role: "College Student",
      review:
        "ELA is a game-changer for students like me. I joined a coding community through the platform and was able to connect with mentors who guided me throughout my journey.",
      rating: 5,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d6935406685b32e97f902ab3b31c7d6f5bc3e51",
      name: "Sumaiya Akter",
      role: "Job Holder",
      review:
        "As someone who struggled to find affordable courses online, Nexus has been a blessing. I enrolled in a digital marketing course through an institution on the platform and even received.",
      rating: 5,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8e044cb169d31e3b0312376f030accbb0eadcb12",
      name: "Tanvir Hossain",
      role: "Singer",
      review:
        "ELA helped me discover communities I didn't know existed. I joined a public speaking group, and it has improved my skills tremendously.",
      rating: 5,
    },
  ];

  return (
    <section className="mb-[120px] px-[97px] py-0 max-md:px-6 max-md:py-[60px]">
      <div className="text-center mb-[50px]">
        <h2 className="text-[#322C29] text-6xl font-bold leading-[72px] mb-2.5 max-sm:text-[40px]">
          Our Creator Review
        </h2>
        <p className="text-[#978A87] text-xl w-full max-w-[600px] mx-auto">
          See what our community members are saying
        </p>
      </div>
      <div className="flex justify-between gap-6 mt-[50px] max-md:flex-col max-md:items-center">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            imageSrc={review.imageSrc}
            name={review.name}
            role={review.role}
            review={review.review}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  );
};
