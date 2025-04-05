import ClientPage from "@/components/wrappers/ClientPage";
import { Metadata } from "next";
import { ContactForm } from "./[components]/ContactForm";
import { IoLocation } from "react-icons/io5";
import { MdEmail, MdLocalPhone } from "react-icons/md";

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
      <div className="bg-gray-50 w-full">
        {/* Header Section */}
        <div className="bg-main-blue-950 text-white text-center py-12">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-lg">We are here to assist you with all your IT needs</p>
        </div>

        {/* Contact Section */}
        <div className="w-full px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-hidden ">
          {/* Contact Form */}
          <div className="w-full bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-main-blue-950">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 w-full">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-main-blue-950">Contact Information</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-main-blue-950 font-semibold flex items-center gap-[2.5px]"><IoLocation /> Address:</span>
                  <p className="text-gray-700">02 Tech Street, Kigali, Rwanda</p>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-main-blue-950 font-semibold flex items-center gap-[2.5px]"><MdLocalPhone /> Phone:</span>
                  <a href="tel:+250123456789" className="text-main-blue-950 hover:underline">
                    +250 780795232
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-main-blue-950 font-semibold flex items-center gap-[2.5px]"><MdEmail/> Email:</span>
                  <a href="mailto:info@descsoftlab.com" className="text-main-blue-950 hover:underline">
                    info@descsoftlab.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-main-blue-950">Business Hours</h2>
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
