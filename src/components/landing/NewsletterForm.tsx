import React, { useState } from "react";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log("Subscribing email:", email);
      setIsSubmitted(true);
      setEmail("");

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-[428px]">
      <h3 className="text-[#322C29] text-xl font-semibold mb-4">
        Stay Updated
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#F78F29] focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white font-semibold text-base px-6 py-3 rounded-lg bg-gradient-to-r from-[#F78F29] to-[#E45837] hover:opacity-90 transition-opacity"
        >
          {isSubmitted ? "Thanks for subscribing!" : "Subscribe to Newsletter"}
        </button>
      </form>
    </div>
  );
};
