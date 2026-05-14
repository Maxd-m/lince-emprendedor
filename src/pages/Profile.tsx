// src/pages/Profile.tsx
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthStore } from "@/features/auth/store/authStore";

function Profile() {
  // Obtenemos el usuario del store
  const user = useAuthStore((state) => state.user);

  // Verificamos si tiene los roles (con protección opcional '?' por si no hay usuario)
  const isVendor = user?.roles.includes("vendor");
  const isBuyer = user?.roles.includes("buyer");

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-box">
        <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

        <div className="flex flex-col gap-4">
          <p>
            <strong>Nombre:</strong> {user?.name}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <div className="divider">Módulos disponibles</div>

          {/* Renderizado condicional basado en roles */}

          {isVendor && (
            <div className="alert alert-info shadow-lg">
              <div>
                <h2 className="text-xl font-bold">Panel de Vendedor</h2>
                <p>Aquí puedes gestionar tus productos y ventas.</p>
              </div>
            </div>
          )}

          {isBuyer && (
            <div className="alert alert-success shadow-lg">
              <div>
                <h2 className="text-xl font-bold">Panel de Comprador</h2>
                <p>Consulta tus pedidos y lista de deseos.</p>
              </div>
            </div>
          )}

          {!isVendor && !isBuyer && (
            <p className="text-error">No tienes roles asignados.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
