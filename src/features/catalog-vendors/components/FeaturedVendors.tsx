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
      categories: ["Ropa", "Accesorios"],
      description:
        "Especialistas en calzado deportivo de alto rendimiento y moda urbana.",
    },
    {
      id: "2",
      name: "Vend 2",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Accesorios"],
      description: "Las mejores gorras de la ciudad con diseños exclusivos.",
    },
    {
      id: "3",
      name: "Vend3",
      rating: 3,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Ropa"],
      description:
        "Ropa con tecnología térmica para mantenerte caliente con estilo.",
    },
    {
      id: "4",
      name: "Vend 4",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Accesorios", "Otros"],
      description:
        "Mochilas ultra resistentes pensadas para viajeros frecuentes.",
    },
    {
      id: "5",
      name: "Dulces Momentos",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Snacks"],
      description: "Gomitas por gramo y dulces importados para tus clases.",
    },
    {
      id: "6",
      name: "The Bakery Spot",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Comida"],
      description: "Rebanadas de pastel y brownies horneados diariamente.",
    },
    {
      id: "7",
      name: "Sport Energy",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Bebida", "Snacks"],
      description:
        "Bebidas energéticas y barritas de proteína para rendir al máximo.",
    },
    {
      id: "8",
      name: "Tech Gear",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Tecnologia"],
      description: "Accesorios para dispositivos: cables, fundas y cargadores.",
    },
    {
      id: "9",
      name: "Eco-Friendly Hub",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Otros"],
      description: "Botellas reutilizables y productos sustentables.",
    },
    {
      id: "10",
      name: "Stationery Pro",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Papeleria"],
      description:
        "Todo lo que necesitas para tus apuntes: plumones y libretas.",
    },
    {
      id: "11",
      name: "Print & Design",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Servicios", "Papeleria"],
      description: "Servicio de impresión, engargolado y diseño de posters.",
    },
    {
      id: "12",
      name: "Healthy Bite",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Comida", "Snacks"],
      description: "Snacks saludables y opciones sin azúcar para el almuerzo.",
    },
    {
      id: "13",
      name: "Tutorías Express",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Servicios"],
      description: "Asesorías de matemáticas, física y programación.",
    },
    {
      id: "14",
      name: "Coffee & Go",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Bebida"],
      description:
        "Café artesanal caliente y frío para sobrevivir a los exámenes.",
    },
    {
      id: "15",
      name: "Vintage Thrift",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Ropa"],
      description: "Ropa de segunda mano seleccionada con estilo único.",
    },
    {
      id: "16",
      name: "Reparaciones Rápidas",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Servicios", "Tecnologia"],
      description: "Reparación de pantallas y limpieza de computadoras.",
    },
    {
      id: "17",
      name: "Gamer Corner",
      rating: 3,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Tecnologia"],
      description: "Periféricos y accesorios para mejorar tu setup gaming.",
    },
    {
      id: "18",
      name: "The Snack Shack",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Snacks"],
      description: "Papas preparadas y botanas picantes para el descanso.",
    },
    {
      id: "19",
      name: "Art Studio",
      rating: 5,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Otros", "Papeleria"],
      description: "Stickers e ilustraciones hechas por artistas locales.",
    },
    {
      id: "20",
      name: "Clean & Fresh",
      rating: 4,
      image:
        "https://bunchobagels.com/wp-content/uploads/2024/09/placeholder.jpg",
      categories: ["Otros"],
      description: "Productos de higiene personal y cuidado de la piel.",
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
