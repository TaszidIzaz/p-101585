import React, { useState } from "react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your API
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-[500px] bg-white p-8 rounded-2xl shadow-md">
      <h3 className="text-[#322C29] text-2xl font-bold mb-6">Get in Touch</h3>

      {isSubmitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-[#322C29] text-sm font-medium mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#F78F29] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[#322C29] text-sm font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#F78F29] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[#322C29] text-sm font-medium mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#F78F29] focus:border-transparent resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white font-semibold text-base px-6 py-3 rounded-lg bg-gradient-to-r from-[#F78F29] to-[#E45837] hover:opacity-90 transition-opacity mt-2"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};
