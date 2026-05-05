// src/components/FeaturedVendors.tsx
import VendorCard from "./VendorCard";

interface Props {
  limit?: number;
}

export const FeaturedVendors = ({ limit = 4 }: Props) => {
  // Datos de prueba ampliados para hacer match con la nueva tarjeta
  const vendors = [
    {
      id: "1",
      name: "Vend1",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Deportes", "Calzado", "Urbano"],
      description:
        "Especialistas en calzado deportivo de alto rendimiento y moda urbana para tu día a día.",
    },
    {
      id: "2",
      name: "Vend 2",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Accesorios", "Moda", "Unisex"],
      description:
        "Las mejores gorras de la ciudad. Diseños exclusivos y materiales de primera calidad.",
    },
    {
      id: "3",
      name: "Vend3",
      rating: 3,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Ropa", "Invierno"],
      description:
        "Ropa con tecnología térmica para mantenerte caliente sin perder el estilo minimalista.",
    },
    {
      id: "4",
      name: "Vend 4",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Viajes", "Accesorios", "Impermeable"],
      description:
        "Mochilas ultra resistentes pensadas para nómadas digitales y viajeros frecuentes.",
    },
  ];

  const displayedVendors = vendors.slice(0, limit);

  return (
    // Ajusté las columnas: 1 en móviles, 2 en pantallas grandes para evitar que la tarjeta se aplaste
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8 mx-5">
      {displayedVendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
};
