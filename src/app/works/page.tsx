import React from "react";
import ProjectCard from "./ProjectCard";
import ClientCard from "./ClientCard";
import ProductCard from "./ProductCard";
import ClientPage from "@/components/wrappers/ClientPage";

export const metadata = {
  title: "Our Projects & Clients | Desc Softlab Ltd",
  description:
    "Explore the top projects delivered by Desc Softlab Ltd. Discover our innovative solutions, clients, partners, and product samples that showcase our expertise.",
  keywords: [
    "Desc Softlab Projects",
    "Software Development Portfolio",
    "Our Clients and Partners",
    "Best IT Solutions",
    "Digital Transformation",
  ].join(", "),
  openGraph: {
    title: "Projects & Clients - Desc Softlab Ltd",
    description:
      "View our top projects, satisfied clients, trusted partners, and digital solutions delivered by Desc Softlab Ltd.",
    url: "https://descsoftlab.com/projects",
  },
};

const ProjectsPage = () => {
  // Sample Data
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Developed an advanced AI-driven e-commerce platform for seamless online shopping.",
      image: "/images/ecommerce-ai.jpg",
      link: "https://client-ecommerce.com",
    },
    {
      title: "Enterprise ERP Solution",
      description: "Built a scalable ERP system for optimizing business operations.",
      image: "/images/erp-solution.jpg",
    },
  ];

  const clients = [
    { name: "Tech Solutions Inc.", logo: "/images/tech-solutions.jpg" },
    { name: "Global Finance Ltd.", logo: "/images/global-finance.jpg" },
  ];

  const partners = [
    { name: "AWS Partner Network", logo: "/images/aws.webp" },
    { name: "Microsoft Azure", logo: "/images/azure.webp" },
  ];

  const products = [
    {
      name: "AI Chatbot Assistant",
      image: "/images/ai-chatbot.jpeg",
      description: "An advanced AI-powered chatbot for automating customer interactions.",
    },
    {
      name: "Cybersecurity Suite",
      image: "/images/cybersecurity-suite.webp",
      description: "A comprehensive security solution for businesses to protect against cyber threats.",
    },
  ];

  return (
    <ClientPage>
     <div className="bg-gray-50 min-h-screen w-full">
      {/* Hero Section */}
      <div className="bg-main-blue-950 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Our Projects & Clients</h1>
        <p className="mt-2 text-lg">Delivering Excellence, Innovation & Digital Transformation</p>
      </div>

      {/* Projects Section */}
      <div className="w-full mx-auto px-10 py-12">
        <h2 className="text-3xl font-semibold text-main-blue-950">🚀 Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Clients & Partners Section */}
      <div className="bg-transparent py-12 px-10">
        <div className="w-full mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-main-blue-950 text-center">🤝 Our Clients & Partners</h2>
          <div className="grid md:grid-cols-2 gap-6  py-12">
            {clients.map((client, index) => (
              <ClientCard key={index} {...client} />
            ))}
            {partners.map((partner, index) => (
              <ClientCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="w-full mx-auto px-10 py-12">
        <h2 className="text-3xl font-semibold text-main-blue-950 text-center">🛠️ Product Samples</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
    </ClientPage>
  );
};

export default ProjectsPage;
