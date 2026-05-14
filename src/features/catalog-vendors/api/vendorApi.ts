// src/features/catalog-vendors/api/vendorApi.ts
import { Vendor } from "@/types/vendor";
import { Product } from "@/types/product";
import { Review } from "@/types/review";

// Extendemos temporalmente el tipo Vendor para incluir productos y reseñas
export interface VendorDetail extends Vendor {
  products: Product[];
  reviews: Review[];
}

export const fetchVendorById = async (
  id: string,
): Promise<VendorDetail | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock de datos simulando la BD
      resolve({
        id: id,
        name: "Tech & Travel",
        image: "https://placehold.co/400x400",
        rating: 4.8,
        description:
          "Especialistas en accesorios para el día a día y viajes. Ofrecemos mochilas, organizadores y tecnología portátil de la más alta calidad. Nuestro compromiso es tu comodidad.",
        categories: ["Viajes", "Accesorios", "Mochilas", "Impermeable"],
        // Simulamos productos de este vendedor
        products: [
          {
            id: "1",
            name: "Mochila Urban Explorer",
            price: 850.5,
            image: "https://placehold.co/400x300",
            description:
              "Mochila resistente al agua ideal para estudiantes y viajeros. Cuenta con múltiples compartimentos, espacio para laptop de 15 pulgadas y diseño ergonómico para mayor comodidad durante todo el día.",
            stock: 24, // Asegúrate de ajustar según ProductCard
            // ... resto de propiedades necesarias para ProductCard
          } as any,
          {
            id: "2",
            name: "Mochila Urban Explorer",
            price: 850.5,
            image: "https://placehold.co/400x300",
            description:
              "Mochila resistente al agua ideal para estudiantes y viajeros. Cuenta con múltiples compartimentos, espacio para laptop de 15 pulgadas y diseño ergonómico para mayor comodidad durante todo el día.",
            stock: 24, // Asegúrate de ajustar según ProductCard
            // ... resto de propiedades necesarias para ProductCard
          } as any,
        ],
        // Simulamos reseñas HACIA el vendedor
        reviews: [
          {
            id: "rv1",
            userName: "Ana Gómez",
            userAvatar: "https://placehold.co/100x100",
            rating: 5,
            comment:
              "El vendedor envió todo muy rápido y súper bien empaquetado. Totalmente recomendado.",
            date: "2024-05-01",
          },
          {
            id: "rv2",
            userName: "Ana Gómez",
            userAvatar: "https://placehold.co/100x100",
            rating: 4,
            comment:
              "El vendedor envió todo muy rápido y súper bien empaquetado. Totalmente recomendado.",
            date: "2024-05-01",
          },
        ],
      });
    }, 800);
  });
};
