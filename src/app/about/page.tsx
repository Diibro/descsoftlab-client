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
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-[#1c2c3c] text-white text-center py-12">
          <h1 className="text-4xl font-bold">About Desc Softlab Ltd</h1>
          <p className="mt-2 text-lg">Desc Softlab Ltd is a technology-based company founded to provide innovative digital solutions to individuals and businesses of all sizes.</p>
        </div>

        {/* About Section */}
        <div className="w-full mx-auto px-16 py-12 text-gray-800 justify-between space-y-10">
          <h2 className="text-3xl font-semibold text-[#1c2c3c]">Who We Are</h2>
          <p className="mt-4 text-[1.1rem] leading-relaxed">
            Desc Softlab Ltd is a technology-driven company specializing in cutting-edge software
            development, IT consulting, cloud computing, and business automation solutions. Our mission
            is to drive digital transformation by creating scalable, secure, and innovative software
            solutions tailored to businesses of all sizes.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 shadow rounded">
              <h3 className="text-2xl font-semibold text-[#1c2c3c]">Our Vision</h3>
              <p className="mt-8 text-gray-700 text-[1.1rem] leading-relaxed">
              To become the leading technology company in Rwanda and beyond, 
                            known for our commitment to providing innovative and reliable 
                            digital products and services that meet the needs of our customers.
              </p>
            </div>
            <div className="bg-white p-8 shadow rounded">
              <h3 className="text-2xl font-semibold text-[#1c2c3c]">Our Mission</h3>
              <p className="mt-8 text-gray-700 text-[1.1rem] leading-relaxed">
              To utilize our expertise in software engineering and electronic 
                            engineering to provide top-notch digital products and services 
                            to people around the world, while ensuring their accessibility 
                            to everyone, especially in Rwanda.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white py-12">
          <div className="w-full mx-auto px-6">
            <h2 className="text-3xl font-semibold text-[#1c2c3c] text-center">Why Choose Us?</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white py-20 px-8 shadow rounded space-y-8">
                <h3 className="text-[1.5rem] font-semibold text-[#1c2c3c]">Expertise & Innovation</h3>
                <p className="mt-2 text-gray-700 text-[1.1rem] leading-relaxed">
                  We leverage cutting-edge technologies to deliver custom solutions tailored to your
                  business needs.
                </p>
              </div>
              <div className="bg-white py-20 px-8 shadow rounded space-y-8">
                <h3 className="text-[1.5rem] font-semibold text-[#1c2c3c]">Client-Centric Approach</h3>
                <p className="mt-2 text-gray-700 text-[1.1rem] leading-relaxed">
                  Your success is our priority, and we work closely with you to achieve your goals.
                </p>
              </div>
              <div className="bg-white py-20 px-8 shadow rounded space-y-8">
                <h3 className="text-[1.5rem] font-semibold text-[#1c2c3c]">Security & Scalability</h3>
                <p className="mt-2 text-gray-700 text-[1.1rem] leading-relaxed">
                  We build secure, scalable, and future-proof solutions that grow with your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-gray-50 py-12">
          <div className="w-full mx-auto px-6">
            <h2 className="text-4xl font-semibold text-[#1c2c3c] text-center">Meet Our Team</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Image
                  width={250}
                  height={250}
                  placeholder="blur"
                  src={ChairMainImage}
                  alt="Chairman"
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow"
                />
                <h3 className="mt-4 text-2xl font-semibold text-[#1c2c3c]">Dushime Brother</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="text-center">
                <Image
                  width={250}
                  height={250}
                  placeholder="blur"
                  src={UserIcon}
                  alt="Team Member"
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow"
                />
                <h3 className="mt-4 text-2xl font-semibold text-[#1c2c3c]">Jane Smith</h3>
                <p className="text-gray-600">CTO & Lead Developer</p>
              </div>
              <div className="text-center">
                <Image
                  width={250}
                  height={250}
                  placeholder="blur"
                  src={UserIcon}
                  alt="Team Member"
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow"
                />
                <h3 className="mt-4 text-2xl font-semibold text-[#1c2c3c]">Mark Johnson</h3>
                <p className="text-gray-600">Head of Operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white text-center py-20">
          <h2 className="text-4xl text-[#1c2c3c] font-semibold">Ready to Elevate Your Business?</h2>
          <p className="mt-2 text-2xl text-[#1c2c3c]">Let’s discuss how Desc Softlab Ltd can help you grow.</p>
          <a
            href="/contact-us"
            className="mt-4 inline-block bg-[#1c2c3c] text-white px-6 py-3 font-semibold rounded hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </ClientPage>
  );
};

export default AboutPage;
