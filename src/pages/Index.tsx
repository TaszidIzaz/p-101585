
import React from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { BusinessDashboard } from "@/components/landing/BusinessDashboard";
import { BusinessFeature } from "@/components/landing/BusinessFeature";
import { Reviews } from "@/components/landing/Reviews";
import { ComingSoon } from "@/components/landing/ComingSoon";
import { Footer } from "@/components/landing/Footer";
import { NewsletterForm } from "@/components/landing/NewsletterForm";
import { ContactForm } from "@/components/landing/ContactForm";
import { SearchBar } from "@/components/landing/SearchBar";
import { PopularCourses } from "@/components/landing/PopularCourses";
import { Features } from "@/components/landing/Features";

const Index = () => {
  return (
    <div className="w-full max-w-[1440px] bg-[#F6F5F7] mx-auto my-0">
      <Header />

      <main>
        <div className="flex justify-between items-center px-[97px] pt-6 max-md:px-6">
          <SearchBar />
        </div>
        <Hero />
        <Features />
        <BusinessDashboard />
        <BusinessFeature />
        <PopularCourses />
        <Reviews />

        <div className="px-[97px] max-md:px-6">
          <ComingSoon />
        </div>

        <div className="px-[97px] mb-[120px] max-md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <NewsletterForm />
            <ContactForm />
          </div>
        </div>
      </main>

      <div className="px-[97px] pb-[120px] max-md:px-6">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
