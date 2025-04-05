import { IServiceCategory } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const ServiceCard = ({service}:{service:IServiceCategory}) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 shadow-sm shadow-gray-600 rounded-[20px] overflow-hidden">
      <Image src={service.image} alt={service.title} width={800} height={500} className="w-full aspect-video lg:aspect-auto lg:h-full object-cover" />
      <div className="w-full flex flex-col items-start justify-start gap-[10px] p-[20px]">
        <h3 className="text-[1.8rem] text-main-blue-950 font-bold ">{service.title}</h3>
        <p className="text-[1rem] text-gray-700">{service.intro}</p>
        <p className="text-[0.9rem] text-gray-700">{service.description}</p>
        <Link href={`/services/${service.id}`} className="text-main-blue-900 border border-gray-600 rounded-[50px] px-[20px] py-[10px] hover:border-main-blue-800" prefetch>View more</Link>
      </div>
    </div>
  );
  
};

export default ServiceCard;
