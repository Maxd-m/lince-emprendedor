// types/product.ts
import { Vendor } from "@/types/vendor";
import { Review } from "@/types/review";

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
