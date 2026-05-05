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
