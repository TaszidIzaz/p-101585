import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#322C29] px-[63px] py-[55px] rounded-3xl">
      <div className="flex justify-between items-start max-sm:flex-col max-sm:gap-10">
        <div className="max-w-[488px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/06bdbd14da4e5f68102188de789694dd6ce9eb53"
            className="w-[169px] h-[47px] mb-3"
            alt="Logo"
          />
          <p className="text-[rgba(255,255,255,0.60)] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="max-w-[488px]">
          <h3 className="text-white text-base font-semibold mb-1">
            Quick link
          </h3>
          <div className="w-12 h-1 mb-1" />
          <div className="flex flex-col gap-1">
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Community
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Exams
            </a>
          </div>
        </div>

        <div className="max-w-[488px]">
          <h3 className="text-white text-base font-semibold mb-1">Follow us</h3>
          <div className="w-12 h-1 mb-1" />
          <div className="flex flex-col gap-1">
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Linkedin
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="max-w-[488px]">
          <h3 className="text-white text-base font-semibold mb-1">Legal</h3>
          <div className="w-12 h-1 mb-1" />
          <div className="flex flex-col gap-1">
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Cookies Policy
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Copyrights
            </a>
            <a
              href="#"
              className="text-[rgba(255,255,255,0.60)] text-base hover:text-white transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
