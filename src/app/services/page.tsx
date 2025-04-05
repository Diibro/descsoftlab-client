/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ServiceCard from "./ServiceCard";
import ClientPage from "@/components/wrappers/ClientPage";
import { MainServices } from "@/data/services";

export const metadata = {
  title: "Our Services | Desc Softlab Ltd - Expert IT Solutions",
  description:
    "Discover our professional IT services at Desc Softlab Ltd: Web & Mobile Development, Deployment, IT Consulting, Graphic Design, Computer Maintenance, and more.",
  keywords: [
    "Web Development",
    "Mobile App Development",
    "IT Services",
    "Software Development",
    "Cloud Deployment",
    "Graphic Design",
    "IT Consultation",
  ].join(", "),
  openGraph: {
    title: "Our Services - Desc Softlab Ltd",
    description:
      "Providing expert IT services including Web Development, Mobile Apps, IT Consultation, Graphic Design, and more.",
    url: "https://descsoftlab.com/services",
  },
};

const ServicesPage = () => {
  return (
     <ClientPage>
          <div className="bg-gray-50 min-h-screen w-full">
      {/* Header Section */}
      <div className="bg-main-blue-950 text-white text-center py-12">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-2 text-lg">Comprehensive digital solutions tailored to meet your business needs and drive growth</p>
      </div>

      {/* Services Grid */}
      <div className="mx-auto py-12 px-[5%] lg:px-[10%] grid grid-cols-1 gap-6">
        {MainServices.map((service) => (
          <ServiceCard
            key={service.title}
            service={service}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-10 w-full">
        <h2 className="text-3xl font-semibold text-main-blue-950">
          Let&lsquo;s Work Together
        </h2>
        <p className="text-gray-600 mt-4 text-2xl">
          Contact us today to discuss how we can help your business grow.
        </p>
        <a
          href="/contact-us"
          className="mt-6 inline-block px-10 py-5 bg-main-blue-800 text-white font-semibold rounded-md shadow-md transition hover:bg-main-blue-950 text-xl"
        >
          Get in Touch
        </a>
      </div>
    </div>
     </ClientPage>
    
  );
};

export default ServicesPage;
