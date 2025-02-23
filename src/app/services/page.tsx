/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ServiceCard from "./ServiceCard";
import ClientPage from "@/components/wrappers/ClientPage";

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

const services = [
  {
    title: "Web Development",
    description: "We build modern, scalable, and SEO-optimized websites tailored to your business needs.",
    icon: "web",
  },
  {
    title: "Mobile App Development",
    description: "Creating high-performance mobile applications for Android and iOS platforms.",
    icon: "mobile",
  },
  {
    title: "Desktop Applications",
    description: "Developing powerful and efficient desktop applications for Windows, macOS, and Linux.",
    icon: "desktop",
  },
  {
    title: "Deployment Services",
    description: "Secure and efficient cloud deployment solutions for your applications and websites.",
    icon: "deployment",
  },
  {
    title: "Computer Maintenance",
    description: "Reliable computer maintenance and troubleshooting services for businesses.",
    icon: "maintenance",
  },
  {
    title: "Graphic Design",
    description: "Creating visually stunning logos, branding, and digital assets for your company.",
    icon: "design",
  },
  {
    title: "IT Consultation",
    description: "Expert IT consulting to help optimize and scale your business operations.",
    icon: "consulting",
  },
];

const ServicesPage = () => {
  return (
     <ClientPage>
          <div className="bg-gray-50 min-h-screen w-full">
      {/* Header Section */}
      <div className="bg-main-blue-700 text-white text-center py-12">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-2 text-lg">Empowering businesses with innovative IT solutions</p>
      </div>

      {/* Services Grid */}
      <div className="mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon as any}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-main-blue-800">
          Let&lsquo;s Work Together
        </h2>
        <p className="text-gray-600 mt-2">
          Contact us today to discuss how we can help your business grow.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block px-6 py-3 bg-main-blue-600 text-white font-semibold rounded-md shadow-md transition hover:bg-main-blue-700"
        >
          Get in Touch
        </a>
      </div>
    </div>
     </ClientPage>
    
  );
};

export default ServicesPage;
