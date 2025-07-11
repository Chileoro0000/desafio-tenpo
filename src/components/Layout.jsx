import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Layout() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/beneficios", label: "Beneficios" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-black text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center">
            {/* Logo escritorio */}
            <img
              src="/images/logo_blanco_small.png"
              alt="Tenpo"
              className="h-14 hidden lg:block"
            />
            {/* Logo celular */}
            <img
              src="/images/logo_blanco_celular.png"
              alt="Tenpo"
              className="h-10 block lg:hidden"
            />
          </Link>

          {/* El menu */}
          <nav className="hidden lg:flex gap-12 font-bold">
            {navItems.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`transition ${isActive
                    ? "text-primary"
                    : "text-white/75 hover:text-primary"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Menu de celular */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu para celulares */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black px-6 pb-4">
            <nav className="flex flex-col gap-4 font-bold">
              {navItems.map(({ to, label }) => {
                const isActive = pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition ${isActive
                      ? "text-primary"
                      : "text-white/75 hover:text-primary"
                      }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-black text-center text-gray-400 text-sm py-4">
        © {new Date().getFullYear()} Tenpo. Todos los derechos reservados.
      </footer>
    </div>
  );
}
