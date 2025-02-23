import Image from "next/image";
import React from "react";
import ChairMainImage from "../../../public/images/chairman.jpg";
import UserIcon from "../../../public/images/user-icon.png";
import ClientPage from "@/components/wrappers/ClientPage";

export const metadata = {
  title: "About Us | Desc Softlab Ltd - Leading IT Solutions Provider",
  description:
    "Learn about Desc Softlab Ltd, a trusted IT solutions provider specializing in web development, mobile apps, cloud computing, and IT consulting.",
  keywords: [
    "About Desc Softlab",
    "IT Company Rwanda",
    "Software Development Firm",
    "Tech Solutions Provider",
    "Web Development Experts",
    "Mobile App Development",
    "IT Consulting Services",
  ].join(", "),
  openGraph: {
    title: "About Us - Desc Softlab Ltd",
    description:
      "Desc Softlab Ltd is a leading IT solutions provider offering innovative software development, cloud solutions, and digital transformation services.",
    url: "https://descsoftlab.com/about",
  },
};

const AboutPage = () => {
  return (
    <ClientPage>
          <div className="bg-gray-50 w-full min-h-screen">
      {/* Hero Section */}
      <div className="bg-main-blue-700 text-white text-center py-12">
        <h1 className="text-4xl font-bold">About Desc Softlab Ltd</h1>
        <p className="mt-2 text-lg">Empowering businesses with innovative IT solutions</p>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h2 className="text-3xl font-semibold text-main-blue-800">Who We Are</h2>
        <p className="mt-4 text-lg leading-relaxed">
          Desc Softlab Ltd is a technology-driven company specializing in cutting-edge software
          development, IT consulting, cloud computing, and business automation solutions. Our mission
          is to drive digital transformation by creating scalable, secure, and innovative software
          solutions tailored to businesses of all sizes.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-main-blue-700">Our Vision</h3>
            <p className="mt-2 text-gray-700">
              To be the leading IT solutions provider in Africa and beyond, helping businesses achieve
              efficiency through technology.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-main-blue-700">Our Mission</h3>
            <p className="mt-2 text-gray-700">
              To deliver high-quality, scalable, and secure digital solutions that empower businesses
              to thrive in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-main-blue-800 text-center">Why Choose Us?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-main-blue-600 bg-gray-100 shadow rounded">
              <h3 className="text-xl font-semibold text-main-blue-700">Expertise & Innovation</h3>
              <p className="mt-2 text-gray-700">
                We leverage cutting-edge technologies to deliver custom solutions tailored to your
                business needs.
              </p>
            </div>
            <div className="p-6 border-l-4 border-main-blue-600 bg-gray-100 shadow rounded">
              <h3 className="text-xl font-semibold text-main-blue-700">Client-Centric Approach</h3>
              <p className="mt-2 text-gray-700">
                Your success is our priority, and we work closely with you to achieve your goals.
              </p>
            </div>
            <div className="p-6 border-l-4 border-main-blue-600 bg-gray-100 shadow rounded">
              <h3 className="text-xl font-semibold text-main-blue-700">Security & Scalability</h3>
              <p className="mt-2 text-gray-700">
                We build secure, scalable, and future-proof solutions that grow with your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-main-blue-800 text-center">Meet Our Team</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
               width={200}
               height={200}
               placeholder="blur"
                src={ChairMainImage}
                alt="Chairman"
                className="w-32 h-32 mx-auto rounded-full object-cover shadow"
              />
              <h3 className="mt-4 text-lg font-semibold text-main-blue-700">Dushime Brother</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <Image
              
              width={200}
              height={200}
                src={UserIcon}
               placeholder="blur"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover shadow"
              />
              <h3 className="mt-4 text-lg font-semibold text-main-blue-700">Jane Smith</h3>
              <p className="text-gray-600">CTO & Lead Developer</p>
            </div>
            <div className="text-center">
              <Image
              
              width={200}
              height={200}
                src={UserIcon}
               placeholder="blur"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover shadow"
              />
              <h3 className="mt-4 text-lg font-semibold text-main-blue-700">Mark Johnson</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-main-blue-700 text-white text-center py-10">
        <h2 className="text-3xl font-semibold">Ready to Elevate Your Business?</h2>
        <p className="mt-2 text-lg">Let’s discuss how Desc Softlab Ltd can help you grow.</p>
        <a
          href="/contact-us"
          className="mt-4 inline-block bg-white text-main-blue-700 px-6 py-3 font-semibold rounded hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
    </ClientPage>
  );
};

export default AboutPage;
