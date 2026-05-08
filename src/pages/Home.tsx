import Carousel from "@/components/Carousel";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FeaturedProducts } from "@/features/catalog-products";
import { FeaturedVendors } from "@/features/catalog-vendors";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
      <h1 className="text-3xl font-bold text-left my-10 mx-5">
        Productos destacados
      </h1>
      <FeaturedProducts limit={4} />
      {/* Contenedor Flex para centrar el botón */}
      <div className="flex justify-center w-full my-2">
        {/* <button className="btn btn-outline btn-accent btn-wide bg-green-800"> */}
        <Link
          to="/productos"
          className="hover:bg-base-300 text-lg btn btn-outline btn-accent btn-wide bg-green-800"
        >
          Ver mas
        </Link>
        {/* </button> */}
      </div>
      <h1 className="text-3xl font-bold text-left my-10 mx-5">
        Nuestros colaboradores
      </h1>
      <FeaturedVendors limit={4} />
      {/* <FeaturedProducts limit={4} /> */}
      <Footer />
    </>
  );
}

export default Home;
