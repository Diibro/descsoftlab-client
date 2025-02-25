import ClientPage from "@/components/wrappers/ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
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
        <div className="bg-[#1c2c3c] text-white text-center py-12">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-lg">We are here to assist you with all your IT needs</p>
        </div>

        {/* Contact Section */}
        <div className="w-full mx-10 px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#1c2c3c]">Send Us a Message</h2>
            <form action="/api/contact" method="POST" className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  title="Client name"
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:border-[#1c2c3c] focus:ring-main-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email Address</label>
                <input
                  title="Client email"
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:border-[#1c2c3c] focus:ring-main-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Subject</label>
                <input
                  title="Subject"
                  type="text"
                  name="subject"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:border-main-blue-500 focus:ring-main-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  title="Client message"
                  name="message"
                  rows={4}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:border-main-blue-500 focus:ring-main-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1c2c3c] text-white font-semibold py-3 rounded-lg hover:bg-[#1c2c3c] transition flex items-center justify-center space-x-2"
              >
                <span>Send Message</span> <span>✈️</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 lg:col-span-1 mr-10">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#1c2c3c]">Contact Information</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-[#1c2c3c] font-semibold">📍 Address:</span>
                  <p className="text-gray-700">02 Tech Street, Kigali, Rwanda</p>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-[#1c2c3c] font-semibold">📞 Phone:</span>
                  <a href="tel:+250123456789" className="text-[#1c2c3c] hover:underline">
                    +250 780795232
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-[#1c2c3c] font-semibold">✉️ Email:</span>
                  <a href="mailto:descsoftlab22@gmail.com" className="text-[#1c2c3c] hover:underline">
                    descsoftlab22@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#1c2c3c]">Business Hours</h2>
              <ul className="mt-4 text-gray-700 space-y-1">
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 1:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#1c2c3c]">Find Us on Google Maps</h2>
              <div className="mt-4">
                <iframe
                  title="Google Map Location"
                  className="w-full h-60 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.030618648575!2d30.06241805!3d-1.94738005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7c88f5a69d1%3A0xd3f41a3bdfd6785!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1643813442217!5m2!1sen!2s"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientPage>
  );
};

export default ContactPage;
