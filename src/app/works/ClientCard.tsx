import Image from "next/image";
import React from "react";

interface ClientCardProps {
  name: string;
  logo: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, logo }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
      <Image width={500} height={500} src={logo} alt={name} className="h-20 object-contain" />
      <p className="mt-3 font-semibold text-gray-700">{name}</p>
    </div>
  );
};

export default ClientCard;
