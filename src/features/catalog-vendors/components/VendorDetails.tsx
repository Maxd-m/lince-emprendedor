// src/features/catalog-vendors/components/VendorDetails.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchVendorById, VendorDetail } from "../api/vendorApi";
// Importamos la tarjeta de producto para usarla en el carrusel
import { ProductCard } from "@/features/catalog-products/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";

export const VendorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [vendor, setVendor] = useState<VendorDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const loadData = async () => {
      setLoading(true);
      const data = await fetchVendorById(id);
      setVendor(data);
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

  if (!vendor)
    return (
      <div className="text-center mt-20 text-2xl font-bold">
        Vendedor no encontrado
      </div>
    );

  return (
    <>
      <NavBar />
      <main className="max-w-7xl mx-auto my-10 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* =========================================
              COLUMNA IZQUIERDA: Información del Vendedor
              ========================================= */}
          <div className="flex flex-col gap-12 justify-evenly">
            {/* CABECERA: Nombre, Avatar y Descripción */}
            <section className="flex flex-col items-center text-center gap-6">
              <h1 className="text-3xl md:text-4xl font-bold">{vendor.name}</h1>
              <div className="avatar">
                <div className="w-48 md:w-56 rounded-full bg-base-300 ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Líneas simuladas en el wireframe para la descripción */}
              <div className="max-w-xl text-base-content/80 mt-2">
                <p className="text-lg leading-relaxed">{vendor.description}</p>
              </div>
            </section>

            {/* CATEGORÍAS: Especializado en */}
            <section>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-base-content/60 text-center md:text-left">
                Especializado en:
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {vendor.categories.map((cat, index) => (
                  <span
                    key={index}
                    className="badge badge-lg badge-outline hover:bg-base-200 cursor-default"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* =========================================
              COLUMNA DERECHA: Productos destacados y Reseñas
              ========================================= */}
          <div className="flex flex-col gap-12">
            {/* PRODUCTOS DESTACADOS (Carrusel Horizontal) */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold uppercase tracking-wider text-base-content/60">
                  Productos destacados:
                </h3>
              </div>
              {/* Contenedor con scroll horizontal */}
              <div className="flex overflow-x-auto gap-6 pb-6 pt-2 pr-4 custom-scrollbar snap-x">
                {vendor.products.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-[280px] max-w-[300px] snap-start"
                  >
                    {/* Asegúrate de que tu ProductCard esté importado correctamente arriba */}
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RESEÑAS DEL VENDEDOR */}
          <section className="flex flex-col col-span-1 md:col-span-2 pt-4">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider text-base-content/60">
              Reseñas:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vendor.reviews.length > 0 ? (
                vendor.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))
              ) : (
                <p className="text-base-content/60 italic col-span-full">
                  Este vendedor aún no tiene reseñas.
                </p>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
