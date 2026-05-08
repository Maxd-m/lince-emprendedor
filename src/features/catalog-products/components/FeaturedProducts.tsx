// src/features/catalog-products/components/FeaturedProducts.tsx
import { ProductCard } from "./ProductCard.tsx"; // Un componente más pequeño dentro de la misma feature

interface Props {
  limit?: number;
}

export const FeaturedProducts = ({ limit = 4 }: Props) => {
  // 1. Aquí luego harás el fetch a tu API. Por ahora, datos de prueba:
  const products = [
    {
      id: "1",
      name: "Tenis Pro",
      price: 1200,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "2",
      name: "Gorra Urban",
      price: 450,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "3",
      name: "Sudadera Tech",
      price: 890,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "4",
      name: "Mochila Viaje",
      price: 1500,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "5",
      name: "Chaqueta Cortavientos",
      price: 1100,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "6",
      name: "Pantalón Jogger",
      price: 750,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "7",
      name: "Playera Dry-Fit",
      price: 350,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "8",
      name: "Lentes de Sol Sport",
      price: 600,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "9",
      name: "Reloj Inteligente",
      price: 2200,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "10",
      name: "Guantes de Gym",
      price: 250,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "11",
      name: "Cangurera Deportiva",
      price: 400,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "12",
      name: "Botella de Agua Inox",
      price: 320,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "13",
      name: "Calcetas Pack x3",
      price: 180,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "14",
      name: "Short de Entrenamiento",
      price: 550,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "15",
      name: "Malla de Compresión",
      price: 680,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "16",
      name: "Sandalias Slide",
      price: 490,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "17",
      name: "Muñequeras Pro",
      price: 150,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "18",
      name: "Bolsa de Gimnasio",
      price: 950,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "19",
      name: "Cuerda para Saltar",
      price: 290,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "20",
      name: "Bolsa de Gomitas",
      price: 25,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "21",
      name: "Barritas de Fresa",
      price: 15,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "22",
      name: "Rebanada Pastel Chocolate",
      price: 45,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "23",
      name: "Brownie Casero",
      price: 30,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
    {
      id: "24",
      name: "Bebida Energética",
      price: 35,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
    },
  ];

  // 2. Aplicamos el límite que viene por props
  const displayedProducts = products.slice(0, limit);

  return (
    // Usamos clases de daisyUI y Tailwind para la cuadrícula
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 mx-5 justify-around">
      {displayedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
