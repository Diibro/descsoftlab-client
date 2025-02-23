import Image from "next/image";
import React from "react";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <Image width={500} height={500} src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-semibold text-main-blue-800 mt-3">{name}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

export default ProductCard;
