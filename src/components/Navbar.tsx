// import { Link } from "react-router-dom";
import { useAuthStore } from "../features/auth/store/authStore";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  // 1. Obtenemos el usuario y la función de logout del store
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  // Obtenemos la ubicación actual
  const location = useLocation();

  // Verificamos si la ruta es "/perfil"
  const isProfilePage = location.pathname === "/perfil";

  const items = [
    { name: "Productos", route: "/productos" },
    { name: "Colaboradores", route: "/vendors" },
    // user
    //   ? { name: "Mi cuenta", route: "/account" }
    //   : { name: "Iniciar sesión", route: "/login" },
  ];

  const categories = [
    { name: "Comida" },
    { name: "Bebida" },
    { name: "Snacks" },
    { name: "Ropa" },
    { name: "Accesorios" },
    { name: "Tecnologia" },
    { name: "Papeleria" },
    { name: "Servicios" },
    { name: "Otros" },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* 1. CONTENIDO PRINCIPAL */}
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-300 shadow-sm w-full">
          {/* START: Menú hamburguesa (Móvil) + Título (Desktop) */}
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            {/* Título en Desktop (oculto en móvil) */}
            {/* <a className="btn btn-ghost text-3xl hidden lg:flex"> */}
            <Link to="/" className="btn btn-ghost text-3xl hidden lg:flex">
              Lince-emprendedor
            </Link>
            {/* </a> */}
          </div>

          {/* CENTER: Título (Móvil) + Menú horizontal (Desktop) */}
          <div className="navbar-center">
            {/* Título en Móvil (oculto en desktop) */}
            <Link to="/" className="btn btn-ghost text-2xl lg:hidden">
              Lince-emprendedor
            </Link>
            {/* <a className="btn btn-ghost text-2xl lg:hidden">
              Lince-emprendedor
            </a> */}

            {/* Menú en Desktop (oculto en móvil) */}
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal p-0">
                {" "}
                {/* Añadimos p-0 para alinear perfectamente */}
                {/* 1. Items estáticos */}
                {items.map((item, index) => (
                  <li key={index}>
                    <a className="hover:bg-base-300 text-lg" href={item.route}>
                      {item.name}
                    </a>
                  </li>
                ))}
                {/* 2. Lógica condicional dentro de la misma lista <ul> */}
                {user ? (
                  /* MI CUENTA (Dropdown) */
                  <li className="dropdown dropdown-end">
                    {/* Usamos un label que se comporte como los otros links */}
                    <label
                      tabIndex={0}
                      className="hover:bg-base-300 text-lg cursor-pointer flex items-center gap-1"
                    >
                      Mi cuenta
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </label>

                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li className="menu-title text-xs opacity-50">
                        Hola, {user.name}
                      </li>
                      <li>
                        <Link to="/perfil">Mi Perfil</Link>
                      </li>
                      <li>
                        <Link to="/configuracion">Configuración</Link>
                      </li>
                      <li>
                        <button
                          onClick={() => logout()}
                          className="text-error mt-2"
                        >
                          Cerrar sesión
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  /* INICIAR SESIÓN */
                  <li>
                    <Link to="/login" className="hover:bg-base-300 text-lg">
                      Iniciar sesión
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* END: Iconos */}
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#fff"
                id="Map-Pin-Line--Streamline-Phosphor"
                height="20"
                width="20"
              >
                <desc>
                  Map Pin Line Streamline Icon: https://streamlinehq.com
                </desc>
                <path
                  d="M13.04 14.72h-3.4622c0.5816 -0.5193125 1.130075 -1.07456875 1.6422 -1.6625 1.9215 -2.2099 2.94 -4.5395 2.94 -6.7375 0 -4.74196875 -5.13333125 -7.7057 -9.24 -5.33471875C3.0140875 2.0856625 1.84 4.11924375 1.84 6.32c0 2.198 1.0157 4.5276 2.94 6.7375 0.512125 0.58793125 1.0606 1.1431875 1.6422 1.6625H2.96c-0.4310875 0 -0.70051875 0.46666875 -0.484975 0.84 0.10003125 0.17325625 0.2849125 0.27999375 0.484975 0.28h10.08c0.4310875 -0.00001875 0.700525 -0.4667 0.4849625 -0.84001875 -0.1000375 -0.17325625 -0.2849 -0.27998125 -0.4849625 -0.27998125ZM2.96 6.32c0 -3.87979375 4.2 -6.3046625 7.56 -4.36476875 1.55938125 0.9003125 2.52 2.56415 2.52 4.36476875 0 4.0061 -3.8829 7.35 -5.04 8.26 -1.1571 -0.91 -5.04 -4.2539 -5.04 -8.26Zm7.84 0c0 -2.15544375 -2.33333125 -3.50259375 -4.2 -2.42486875 -1.86666875 1.07771875 -1.86666875 3.77201875 0 4.8497375 0.42565625 0.24575625 0.9085 0.37513125 1.4 0.37513125 1.5464 0 2.8 -1.2536 2.8 -2.8Zm-4.48 0c0 -1.2932625 1.4 -2.10155625 2.52 -1.454925 1.12 0.6466375 1.12 2.2632125 0 2.90985 -0.25536875 0.1474375 -0.545125 0.2250625 -0.84 0.225075 -0.92786875 0.00004375 -1.68 -0.75213125 -1.68 -1.68Z"
                  strokeWidth="0.0625"
                ></path>
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  id="Shopping-Cart-Simple--Streamline-Phosphor"
                  height="20"
                  width="20"
                >
                  <desc>
                    Shopping Cart Simple Streamline Icon:
                    https://streamlinehq.com
                  </desc>
                  <path
                    d="M6.64823125 13.94754375c0 0.83244375 -0.90114375 1.35271875 -1.62205625 0.93649375 -0.72091875 -0.41621875 -0.72091875 -1.45676875 0 -1.8729875 0.1643875 -0.0949125 0.3508625 -0.144875 0.54068125 -0.144875 0.597225 0 1.081375 0.48414375 1.081375 1.08136875Zm5.94754375 -1.08136875c-0.8324375 0 -1.3527125 0.90114375 -0.93649375 1.62205625 0.41621875 0.7209125 1.45676875 0.7209125 1.8729875 0 0.0949125 -0.1643875 0.14488125 -0.35086875 0.14488125 -0.5406875 0 -0.597225 -0.48415 -1.08136875 -1.081375 -1.08136875Zm3.22451875 -8.50634375 -1.7329 6.2368125c-0.1957625 0.700025 -0.83233125 1.18510625 -1.55920625 1.18815625H5.84801875c-0.7291375 -0.00033125 -1.3689125 -0.4859625 -1.5652875 -1.18815625L1.911825 2.05245625H0.7006875c-0.41621875 0 -0.6763625 -0.450575 -0.46825 -0.81103125 0.0965875 -0.16729375 0.27506875 -0.27035 0.46825 -0.27034375h1.62205625c0.24295 -0.00004375 0.4561 0.16195625 0.5210875 0.39605625l0.6407125 2.307375h11.8146625c0.357575 -0.00006875 0.6167375 0.340775 0.5210875 0.68531875Zm-1.23276875 0.39605625H3.7853l1.54163125 5.5514875c0.0649875 0.2341 0.2781375 0.3961 0.5210875 0.39605625H12.5281875c0.24295 0.00004375 0.4561 -0.16195625 0.5210875 -0.39605625Z"
                    strokeWidth="0.0625"
                  ></path>
                </svg>
                <span className="badge badge-xs badge-primary indicator-item">
                  12
                </span>
              </div>
            </button>
          </div>
        </div>
        {!isProfilePage && (
          <div className="flex flex-row items-center w-full overflow-x-auto gap-6 px-4 mt-6 scrollbar-hide justify-around">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-none flex flex-col items-center gap-2"
              >
                <button className="flex flex-col items-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                        alt={category.name}
                      />
                    </div>
                  </div>
                  <p className="italic text-sm">{category.name}</p>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. SIDEBAR: Extraído del navbar para que funcione correctamente el overlay */}
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* {items.map((item, index) => (
            <li key={index}>
              <a className="text-lg">{item.name}</a>
            </li>
          ))} */}{" "}
          {/* Añadimos p-0 para alinear perfectamente */}
          {/* 1. Items estáticos */}
          {items.map((item, index) => (
            <li key={index}>
              <a className="hover:bg-base-300 text-lg" href={item.route}>
                {item.name}
              </a>
            </li>
          ))}
          {/* 2. Lógica condicional dentro de la misma lista <ul> */}
          {user ? (
            /* MI CUENTA (Dropdown) */
            <li className="dropdown dropdown-end">
              {/* Usamos un label que se comporte como los otros links */}
              <label
                tabIndex={0}
                className="hover:bg-base-300 text-lg cursor-pointer flex items-center gap-1"
              >
                Mi cuenta
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="menu-title text-xs opacity-50">
                  Hola, {user.name}
                </li>
                <li>
                  <Link to="/perfil">Mi Perfil</Link>
                </li>
                <li>
                  <Link to="/configuracion">Configuración</Link>
                </li>
                <li>
                  <button onClick={() => logout()} className="text-error mt-2">
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            /* INICIAR SESIÓN */
            <li>
              <Link to="/login" className="hover:bg-base-300 text-lg">
                Iniciar sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
