// src/features/catalog-products/components/ProductDetails.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchProductById } from "../api/productApi";
import { Product } from "@/types/product";
// Importamos el VendorCard desde tu feature de vendedores
import { VendorCard } from "@/features/catalog-vendors";
import { ReviewCard } from "@/components/ReviewCard";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const loadData = async () => {
      setLoading(true);
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    };
    loadData();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  if (!product)
    return (
      <div className="text-center mt-20 text-2xl font-bold">
        Producto no encontrado
      </div>
    );

  // Calculamos el promedio de las reseñas
  const averageRating =
    product.reviews.length > 0
      ? (
          product.reviews.reduce((sum, review) => sum + review.rating, 0) /
          product.reviews.length
        ).toFixed(1)
      : "0";

  return (
    <>
      <NavBar />
      <main className="max-w-max mx-auto my-10 p-4 md:p-8">
        {/* Contenedor Grid: 1 columna en móvil, 2 en escritorio (md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* =========================================
              COLUMNA IZQUIERDA: Imágenes, Stock, Precio
              ========================================= */}
          <div className="flex flex-col gap-6 justify-evenly">
            {/* Carrusel / Imagen Principal */}
            <div className="w-full bg-base-200 rounded-2xl aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden shadow-sm">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Indicadores de imágenes */}
            <div className="flex justify-center gap-3">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-16 h-2 rounded-full ${index === 0 ? "bg-primary" : "bg-base-300"}`}
                ></div>
              ))}
            </div>

            {/* Fila de Stock y Precio */}
            <div className="flex justify-between items-end mt-4 px-2">
              <span className="text-lg font-medium text-base-content/70">
                Stock: {product.stock}
              </span>
              <div className="text-right">
                <span className="block text-sm text-base-content/60 mb-1">
                  Precio unitario
                </span>
                <span className="text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Botón CTA */}
            <button className="btn btn-primary btn-block btn-lg mt-4">
              Añadir al carrito
            </button>
          </div>

          {/* =========================================
              COLUMNA DERECHA: Info, Vendedor, Reseñas
              ========================================= */}
          <div className="flex flex-col gap-10">
            {/* Título y Descripción */}
            <section>
              <h1 className="text-4xl font-black mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-base-content/80 text-lg leading-relaxed">
                {product.description}
              </p>
            </section>

            {/* Tarjeta del Vendedor */}
            <section>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-base-content/60">
                Vendido por
              </h3>
              <VendorCard vendor={product.vendor} />
            </section>

            {/* Reseñas */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold uppercase tracking-wider text-base-content/60 ">
                  Reseñas de clientes
                </h3>
                <div className="badge badge-lg badge-warning font-bold gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {averageRating} / 5
                </div>
              </div>

              {/* Lista de reseñas con scroll interno si hay muchas */}
              <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {product.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
