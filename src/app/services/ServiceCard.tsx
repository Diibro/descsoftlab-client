import React from "react";
import { FaCode, FaMobileAlt, FaDesktop, FaCloud, FaCogs, FaPaintBrush, FaLightbulb } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

const icons = {
  web: <FaCode className="text-main-blue-500 text-4xl" />,
  mobile: <FaMobileAlt className="text-main-blue-500 text-4xl" />,
  desktop: <FaDesktop className="text-main-blue-500 text-4xl" />,
  deployment: <FaCloud className="text-main-blue-500 text-4xl" />,
  maintenance: <FaCogs className="text-main-blue-500 text-4xl" />,
  design: <FaPaintBrush className="text-main-blue-500 text-4xl" />,
  consulting: <FaLightbulb className="text-main-blue-500 text-4xl" />,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <div className="mb-4">{icons[icon]}</div>
      <h3 className="text-lg font-semibold text-main-blue-700">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
