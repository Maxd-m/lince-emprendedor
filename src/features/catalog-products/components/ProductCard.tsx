// src/features/catalog-products/components/ProductCard.tsx
import { Link } from "react-router-dom";

export const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      {/* 1. Envolvemos la imagen en un Link */}
      <figure>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image || "https://placehold.co/400x300"}
            alt={product.name}
            className="hover:scale-105 transition-transform duration-300" // Un toque extra de hover
          />
        </Link>
      </figure>

      <div className="card-body">
        <div className="flex justify-between">
          {/* 2. Envolvemos el título en un Link */}
          <h3 className="card-title text-lg font-bold">
            <Link
              to={`/product/${product.id}`}
              className="hover:text-primary transition-colors"
            >
              {product.name}
            </Link>
          </h3>

          <div className="rating rating-sm">
            <input
              name={`rating-${product.id}`} // Es buena práctica hacer el nombre único por tarjeta
              className="mask mask-star-2 bg-green-500"
              aria-label="1 star"
              readOnly
            />
            <input
              name={`rating-${product.id}`}
              className="mask mask-star-2 bg-green-500"
              aria-label="2 star"
              defaultChecked
              readOnly
            />
            <input
              name={`rating-${product.id}`}
              className="mask mask-star-2 bg-green-500"
              aria-label="3 star"
              aria-current="true"
              readOnly
            />
            <input
              name={`rating-${product.id}`}
              className="mask mask-star-2 bg-green-500"
              aria-label="4 star"
              readOnly
            />
            <input
              name={`rating-${product.id}`}
              className="mask mask-star-2 bg-green-500"
              aria-label="5 star"
              readOnly
            />
          </div>
        </div>

        <p>
          {" "}
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the ...{" "}
        </p>
        <p className="text-primary font-bold">${product.price}</p>

        <div className="card-actions justify-end">
          {/* 3. Cambiamos el botón por un Link que mantiene los estilos de DaisyUI */}
          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary btn-sm p-2 hover:btn-active"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};
