import ClientPage from "@/components/wrappers/ClientPage";
import React from "react";

export const metadata = {
  title: "Contact Us | Desc Softlab Ltd - Get in Touch",
  description:
    "Need expert IT solutions? Contact Desc Softlab Ltd for web development, mobile apps, IT consulting, and more. We are ready to assist you.",
  keywords: [
    "Contact Desc Softlab",
    "IT Services Contact",
    "Software Development Inquiry",
    "Web Development Support",
    "Mobile App Development Help",
    "IT Consulting Contact",
  ].join(", "),
  openGraph: {
    title: "Contact Us - Desc Softlab Ltd",
    description:
      "Reach out to Desc Softlab Ltd for top-tier IT solutions including web and mobile app development, consulting, and deployment services.",
    url: "https://descsoftlab.com/contact",
  },
};

const ContactPage = () => {
  return (
    <ClientPage>
     <div className="bg-gray-50 w-full min-h-screen">
      {/* Header Section */}
      <div className="bg-main-blue-700 text-white text-center py-12">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="mt-2 text-lg">We are here to assist you with all your IT needs</p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-main-blue-800">Contact Information</h2>
          <p className="text-gray-600 mt-2">
            Reach out to us via email or phone, or visit our office.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-main-blue-600 font-semibold">📍 Address:</span>
              <p className="text-gray-700">02 Tech Street, Kigali, Rwanda</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-main-blue-600 font-semibold">📞 Phone:</span>
              <a href="tel:+250123456789" className="text-main-blue-700 hover:underline">
                +250 780795232
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-main-blue-600 font-semibold">✉️ Email:</span>
              <a href="mailto:descsoftlab22@gmail.com" className="text-main-blue-700 hover:underline">
                descsoftlab22@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-main-blue-800">Send Us a Message</h2>
          <form action="/api/contact" method="POST" className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
              title="Client name"
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 p-2 rounded focus:border-main-blue-500 focus:ring-main-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
              title="Client email"
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 p-2 rounded focus:border-main-blue-500 focus:ring-main-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                 title="Client message"
                name="message"
                rows={4}
                required
                className="w-full border border-gray-300 p-2 rounded focus:border-main-blue-500 focus:ring-main-blue-500"
              ></textarea>
            </div>

            {/* Google reCAPTCHA */}
            <div className="mt-4">
              <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
            </div>

            <button
              type="submit"
              className="w-full bg-main-blue-600 text-white font-semibold py-2 rounded hover:bg-main-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-64">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31885.209932369295!2d30.0587!3d-1.9396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca19f45b4a3b9%3A0xa1b6a142edf53e99!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1624567890123"
          className="w-full h-full border-0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </ClientPage>
  );
};

export default ContactPage;
