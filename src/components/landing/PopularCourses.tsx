import React from "react";
import { CourseCard } from "./CourseCard";

export const PopularCourses: React.FC = () => {
  const courses = [
    {
      title: "Introduction to Web Development",
      instructor: "Rahim Ahmed",
      rating: 4.8,
      students: 1245,
      price: "$49.99",
      imageSrc: "URL_30",
      category: "Development",
    },
    {
      title: "Digital Marketing Fundamentals",
      instructor: "Sumaiya Akter",
      rating: 4.7,
      students: 987,
      price: "$39.99",
      imageSrc: "URL_31",
      category: "Marketing",
    },
    {
      title: "Public Speaking Mastery",
      instructor: "Tanvir Hossain",
      rating: 4.9,
      students: 1532,
      price: "$59.99",
      imageSrc: "URL_32",
      category: "Communication",
    },
  ];

  return (
    <section className="mb-[120px] px-[97px] py-0 max-md:px-6 max-md:py-[60px]">
      <div className="text-center mb-[50px]">
        <h2 className="text-[#322C29] text-6xl font-bold leading-[72px] mb-2.5 max-sm:text-[40px]">
          Popular Courses
        </h2>
        <p className="text-[#978A87] text-xl max-w-2xl mx-auto">
          Explore our most popular courses and start your learning journey today
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            instructor={course.instructor}
            rating={course.rating}
            students={course.students}
            price={course.price}
            imageSrc={course.imageSrc}
            category={course.category}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="text-white font-semibold text-base px-8 py-4 rounded-lg bg-gradient-to-r from-[#F78F29] to-[#E45837] hover:opacity-90 transition-opacity">
          View All Courses
        </button>
      </div>
    </section>
  );
};
