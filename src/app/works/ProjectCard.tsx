import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image width={500} height={500} src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-main-blue-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-main-blue-600 font-semibold mt-3 inline-block">
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
