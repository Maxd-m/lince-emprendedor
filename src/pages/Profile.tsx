// src/pages/Profile.tsx
import { useState } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthStore } from "@/features/auth/store/authStore";
import { Chat } from "@/features/chat";
import { Purchase } from "@/features/purchases";
import { Sales } from "@/features/sales";
import { Dashboard } from "@/features/dashboard";
import { ManageUsers } from "@/features/manage-users";
import { ConfigUser } from "@/features/config-user";

type TabType =
  | "dashboard"
  | "compras"
  | "ventas"
  | "chats"
  | "config"
  | "users";

function Profile() {
  // Obtenemos el usuario del store
  const user = useAuthStore((state) => state.user);

  // Verificamos si tiene los roles (con protección opcional '?' por si no hay usuario)
  const isVendor = user?.roles.includes("vendor");
  const isBuyer = user?.roles.includes("buyer");
  const isAdmin = user?.roles.includes("admin");

  // Estado para la tab activa. Inicializamos según el rol primordial.
  const [activeTab, setActiveTab] = useState<TabType>(
    isAdmin
      ? "dashboard"
      : isBuyer
        ? "compras"
        : isVendor
          ? "ventas"
          : "config",
  );

  return (
    <>
      <NavBar />
      <main className=" mx-auto my-10 mb-20 p-6 bg-base-100 shadow-xl rounded-box">
        {/* Header con Foto, Info y KPIs */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 bg-base-200/50 p-6 rounded-2xl border border-base-300">
          {/* Izquierda: Foto de perfil */}
          <div className="avatar">
            <div className="w-24 md:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                alt={user?.name}
              />
            </div>
          </div>

          {/* Centro: Texto de bienvenida e email */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold">Bienvenido, {user?.name}</h1>
            <p className="text-base-content/70 mt-1">
              <strong>Email:</strong> {user?.email}
            </p>
          </div>

          {/* Derecha: Tarjetas de KPI (Stats) */}
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100">
            <div className="stat py-2 px-4">
              <div className="stat-title text-xs">Puntos</div>
              <div className="stat-value text-primary text-2xl">1,250</div>
              <div className="stat-desc">Nivel Lince Pro</div>
            </div>
            <div className="stat py-2 px-4">
              <div className="stat-title text-xs">Actividad</div>
              <div className="stat-value text-secondary text-2xl">85%</div>
              <div className="stat-desc">Este mes</div>
            </div>
            <div className="stat py-2">
              <div className="stat-title">Otro dato</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="divider">Módulos disponibles</div>
          <div role="tablist" className="tabs tabs-box w-fit">
            {isAdmin && (
              <a
                role="tab"
                className={`tab p-2 ${activeTab === "dashboard" ? "tab-active" : ""}`}
                onClick={() => setActiveTab("dashboard")}
              >
                Dashboard
              </a>
            )}
            {isAdmin && (
              <a
                role="tab"
                className={`tab p-2 ${activeTab === "users" ? "tab-active" : ""}`}
                onClick={() => setActiveTab("users")}
              >
                Usuarios
              </a>
            )}
            {isBuyer && (
              <a
                role="tab"
                className={`tab p-2 ${activeTab === "compras" ? "tab-active" : ""}`}
                onClick={() => setActiveTab("compras")}
              >
                Compras
              </a>
            )}
            {isVendor && (
              <a
                role="tab"
                className={`tab p-2 ${activeTab === "ventas" ? "tab-active" : ""}`}
                onClick={() => setActiveTab("ventas")}
              >
                Ventas
              </a>
            )}
            {isVendor || isBuyer ? (
              <a
                role="tab"
                className={`tab p-2 ${activeTab === "chats" ? "tab-active" : ""}`}
                onClick={() => setActiveTab("chats")}
              >
                Chats
              </a>
            ) : null}

            <a
              role="tab"
              className={`tab p-2 ${activeTab === "config" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("config")}
            >
              Configuración
            </a>
          </div>

          {/* Renderizado condicional basado en la tab activa */}

          {activeTab === "dashboard" && isAdmin && (
            <div className="mt-4 border border-base-300 rounded-box p-4 bg-base-200">
              <Dashboard />
            </div>
          )}

          {activeTab === "users" && isAdmin && (
            <div className="mt-4 border border-base-300 rounded-box p-4 bg-base-200">
              <ManageUsers />
            </div>
          )}

          {activeTab === "ventas" && isVendor && (
            <div className="mt-4 border border-base-300 rounded-box p-4 bg-base-200">
              <Sales />
            </div>
          )}

          {activeTab === "compras" && isBuyer && (
            <div className="mt-4 border border-base-300 rounded-box p-4 bg-base-200">
              <Purchase />
            </div>
          )}

          {activeTab === "chats" && (isVendor || isBuyer) && (
            <div className="mt-4 border border-base-300 rounded-box p-4 bg-base-200">
              <Chat />
            </div>
          )}

          {activeTab === "config" && (
            <div className="mt-4 border border-base-300 rounded-box p-4 bg-base-200">
              <ConfigUser />
            </div>
          )}

          {!isVendor && !isBuyer && !isAdmin && (
            <p className="text-error">No tienes roles asignados.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Profile;
