import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FeaturedVendors } from "@/features/catalog-vendors";
function Vendors() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row my-10 gap-5 justify-start">
        <h1 className="text-3xl font-bold text-left mx-5">
          Vendedores verificados por Lince Emprendedor
        </h1>
        <div className="justify-evenly flex flex-row gap-4 w-8/12">
          <label className="input input-primary input-bordered w-full max-w-xs flex items-center gap-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" autoFocus />
          </label>
          <button className="btn btn-secondary ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-9.75 0h9.75"
              />
            </svg>
            Filtros
          </button>
          <button className="btn btn-secondary ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
            Ordenar por
          </button>
        </div>
      </div>

      <FeaturedVendors limit={20} />
      {/* Contenedor Flex para centrar el botón */}

      <Footer />
    </>
  );
}

export default Vendors;
