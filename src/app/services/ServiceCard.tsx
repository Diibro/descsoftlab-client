import React from "react";
import { FaCode, FaMobileAlt, FaDesktop, FaCloud, FaCogs, FaPaintBrush, FaLightbulb } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

const icons = {
  web: <FaCode className="text-blue-600 text-3xl" />,
  mobile: <FaMobileAlt className="text-blue-600 text-3xl" />,
  desktop: <FaDesktop className="text-blue-600 text-3xl" />,
  deployment: <FaCloud className="text-blue-600 text-3xl" />,
  maintenance: <FaCogs className="text-blue-600 text-3xl"/>,
  design: <FaPaintBrush className="text-blue-600 text-3xl" />,
  consulting: <FaLightbulb className="text-blue-600 text-3xl" />,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg py-20 px-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-8">{icons[icon]}</div>
      
      <h3 className="text-2xl font-semibold text-[#1a2b5e]">{title}</h3>
      <p className="text-gray-600 text-l mt-6">{description}</p>
    </div>
  );
  
};

export default ServiceCard;
