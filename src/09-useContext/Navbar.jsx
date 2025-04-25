// Importamos Link y NavLink desde react-router-dom para navegación entre rutas sin recargar la página.
import { Link, NavLink } from "react-router-dom";

// Definimos y exportamos el componente Navbar
export const Navbar = () => {
  return (
    // Barra de navegación con clases de Bootstrap para estilo oscuro, expandible y bordes redondeados
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        {/* Logo o título que redirige al inicio ("/") usando Link */}
        <Link className="navbar-brand" to="/">
          UseContext
        </Link>

        {/* Botón tipo "hamburguesa" para mostrar u ocultar el menú en dispositivos pequeños */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav" // se asocia al div colapsable por ID
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenedor colapsable que contiene los enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Lista de enlaces alineados a la derecha (ms-auto) */}
          <ul className="navbar-nav ms-auto">
            {/* Enlace a la página de inicio */}
            <li className="nav-item">
              <NavLink
                className={
                  ({ isActive }) => `nav-link ${isActive ? "active" : ""}` // aplica clase 'active' si la ruta está activa
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>

            {/* Enlace a la página "about" */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                Acerca
              </NavLink>
            </li>

            {/* Enlace a la página de login */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
