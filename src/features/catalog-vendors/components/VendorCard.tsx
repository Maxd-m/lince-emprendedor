// src/features/catalog-vendors/components/VendorCard.tsx
import { Link } from "react-router-dom"; // 1. Importamos Link

function VendorCard({ vendor }: { vendor: any }) {
  const rating = vendor.rating || 5;
  const categories = vendor.categories || ["cat 1", "cat 2", "cat 7", "cat 5"];
  const description =
    vendor.description ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus ultrices congue. Class aptent taciti sociosqu.";

  return (
    <div className="bg-base-200/70 p-5 rounded-xl shadow-sm flex flex-col gap-4 border border-base-300">
      <div className="flex gap-5">
        <div className="avatar self-start">
          {/* 2. Opcional: Envolver la imagen en un Link para que sea clickeable */}
          <Link to={`/vendor/${vendor.id}`}>
            <img
              className="mask mask-circle mt-4 w-24 md:w-28 scale-110 border border-base-content/20 bg-base-100 hover:opacity-80 transition-opacity"
              src={vendor.image || "https://placehold.co/400x400"}
              alt={vendor.name}
            />
          </Link>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex justify-end text-lg text-base-content">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
          <p className="text-sm text-base-content/80 mt-2 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto pt-3">
            {categories.map((cat: string, index: number) => (
              <div key={index} className="badge badge-soft badge-info">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        {/* 3. Opcional: Título como Link */}
        <h2 className="text-xl md:text-2xl font-medium text-base-content truncate pr-4">
          <Link
            to={`/vendor/${vendor.id}`}
            className="hover:text-primary transition-colors"
          >
            {vendor.name}
          </Link>
        </h2>
        <div className="flex gap-2 shrink-0">
          {/* 4. Cambiamos el botón por un Link a la ruta del vendedor */}
          <Link
            to={`/vendor/${vendor.id}`}
            className="btn btn-sm p-2 btn-primary rounded-none border-base-content hover:bg-base-content hover:text-base-100"
          >
            Ver perfil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VendorCard;
