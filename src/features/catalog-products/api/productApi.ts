// productApi.ts
import { Product } from "@/types/product";

// Base de datos simulada basada en tu wireframe
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Mochila Urban Explorer",
    description:
      "Mochila resistente al agua ideal para estudiantes y viajeros. Cuenta con múltiples compartimentos, espacio para laptop de 15 pulgadas y diseño ergonómico para mayor comodidad durante todo el día.",
    price: 850.5,
    stock: 24,
    images: [
      "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    ],
    vendor: {
      id: "v1",
      name: "Tech & Travel",
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      rating: 4.8,
      description:
        "Especialistas en accesorios para el día a día y viajes. Calidad garantizada.",
      categories: ["Viajes", "Accesorios", "Mochilas", "Impermeable"],
    },
    reviews: [
      {
        id: "r1",
        userName: "Ana Gómez",
        userAvatar:
          "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
        rating: 5,
        comment:
          "Excelente calidad. Los cierres se sienten muy resistentes y cabe todo lo de la universidad.",
        date: "2024-04-15",
      },
      {
        id: "r2",
        userName: "Carlos Ruiz",
        userAvatar:
          "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
        rating: 4,
        comment:
          "Muy buena mochila, aunque el color es ligeramente más oscuro que en la foto. Cumple su función.",
        date: "2024-04-10",
      },
    ],
  },
];

/**
 * Simula el fetch de un producto por su ID
 * @param id El ID del producto a buscar
 * @returns Una promesa que resuelve con el Producto o null si no existe
 */
export const fetchProductById = async (id: string): Promise<Product | null> => {
  return new Promise((resolve) => {
    // Simulamos un retraso de red de 800ms
    setTimeout(() => {
      const product = mockProducts.find((p) => p.id === id);
      resolve(product || null);
    }, 800);
  });
};
