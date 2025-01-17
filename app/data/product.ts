// // Define the Product type
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Array of products with the defined type
const products: Product[] = [
  {
    id: 1,
    name: "Trekking Backpack",
    description: "A durable backpack for all your trekking needs.",
    price: 120.99,
    image: "/montane.jpg",
  },
  {
    id: 2,
    name: "Hiking Boots",
    description: "Waterproof boots for rough terrains.",
    price: 89.99,
    image: "/boots.jpg",
  },
  {
    id: 3,
    name: "Camping Tent",
    description: "Lightweight and easy to set up tent.",
    price: 199.99,
    image: "/tent.jpg",
  },
  {
    id: 4,
    name: "Trekking Poles",
    description: "Adjustable trekking poles for better stability.",
    price: 49.99,
    image: "/poles.jpg",
  },
];

export default products;
