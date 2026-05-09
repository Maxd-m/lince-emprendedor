// types/product.ts

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number; // 1 al 5
  comment: string;
  date: string;
}

export interface Vendor {
  id: string;
  name: string;
  image: string;
  rating: number;
  description: string;
  categories: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[]; // Arreglo para el carrusel
  vendor: Vendor;
  reviews: Review[];
}
