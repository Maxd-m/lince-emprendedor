// src/features/catalog-products/components/ProductCard.tsx
export const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <figure>
        <img
          src={product.image || "https://placehold.co/400x300"}
          alt={product.name}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h3 className="card-title text-lg font-bold">{product.name}</h3>
          <div className="rating rating-sm">
            <input
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              aria-label="1 star"
            />
            <input
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              aria-label="2 star"
              defaultChecked
            />
            <input
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              aria-label="3 star"
              aria-current="true"
            />
            <input
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              aria-label="4 star"
            />
            <input
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              aria-label="5 star"
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
          <button className="btn btn-primary btn-sm p-2 hover:btn-active">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};
