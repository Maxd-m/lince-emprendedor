// src/features/catalog-vendors/components/VendorCard.tsx
function VendorCard({ vendor }: { vendor: any }) {
  // Datos por defecto por si la API aún no los trae
  const rating = vendor.rating || 5;
  const categories = vendor.categories || ["cat 1", "cat 2", "cat 7", "cat 5"];
  const description =
    vendor.description ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus ultrices congue. Class aptent taciti sociosqu.";

  return (
    <div className="bg-base-200/70 p-5 rounded-xl shadow-sm flex flex-col gap-4 border border-base-300">
      {/* SECCIÓN SUPERIOR: Avatar y Detalles */}
      <div className="flex gap-5">
        {/* Avatar Circular */}
        <div className="avatar self-start">
          {/* <div className="w-24 md:w-28 rounded-full border border-base-content/20 bg-base-100"> */}
          <img
            className="mask mask-circle mt-4 w-24 md:w-28 scale-110 border border-base-content/20 bg-base-100"
            src={vendor.image || "https://placehold.co/400x400"}
            alt={vendor.name}
          />
          {/* </div> */}
        </div>

        {/* Info Derecha (Estrellas, Texto, Categorías) */}
        <div className="flex flex-1 flex-col">
          {/* Estrellas */}
          <div className="flex justify-end text-lg text-base-content">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>

          {/* Líneas de descripción */}
          <p className="text-sm text-base-content/80 mt-2 line-clamp-3">
            {description}
          </p>

          {/* Categorías (Píldoras) */}
          <div className="flex flex-wrap gap-2 mt-auto pt-3">
            {categories.map((cat: string, index: number) => (
              <div key={index} className="badge badge-soft badge-info">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: Nombre y Botones */}
      <div className="flex items-center justify-between mt-2">
        <h2 className="text-xl md:text-2xl font-medium text-base-content truncate pr-4">
          {vendor.name}
        </h2>
        <div className="flex gap-2 shrink-0">
          <button className="btn btn-sm p-2 btn-secondary rounded-none border-base-content hover:bg-base-content hover:text-base-100">
            Seguir
          </button>
          <button className="btn btn-sm p-2 btn-primary rounded-none border-base-content hover:bg-base-content hover:text-base-100">
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  );
}

export default VendorCard;
