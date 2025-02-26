import Image from "next/image";
import React from "react";

interface ClientCardProps {
  name: string;
  logo: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, logo }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg px-4 py-10 space-y-4">
      <Image width={500} height={800} src={logo} alt={name} className="w-full h-60 object-cover rounded-md" />
      <p className="mt-3 font-semibold text-gray-700">{name}</p>
    </div>
  );
};

export default ClientCard;
