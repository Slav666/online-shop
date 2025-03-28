// import Image from "next/image";
import Button from "../components/button";
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductProps {
  product: Product; // The product prop must match the Product interface
}
export default function Product({ product }: ProductProps) {
  return (
    <div className="border border-red-300 rounded-lg shadow-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-xl font-semibold text-[#2E8B57] mt-2">
          ${product.price}
        </p>
        <Button
          label="Buy Now"
          backgroundColor="#FF7F00"
          textColor="white"
          hoverColor="#FF4500"
        />
      </div>
    </div>
  );
}
