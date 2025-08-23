import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const links = [
  {to:"/", label:"Inicio"},
  {to:"/nosotros", label:"Nosotros"},
  {to:"/catalogo", label:"Catálogo"},
  {to:"/paquetes", label:"Paquetes"},
  {to:"/galeria", label:"Galería"},
  {to:"/testimonios", label:"Testimonios"},
  {to:"/contacto", label:"Contacto"},
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  // Cierra menú al navegar
  const handleLinkClick = () => setOpen(false)

  return (
    <nav className="bg-buhoPrimary shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3">
        <Link to="/" onClick={handleLinkClick}>
          <img src="/logo.jpg" alt="Buhó Security" className="h-12" />
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-3 flex-wrap">
          {links.map(link =>
            <Link key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-full font-bold transition ${
                pathname === link.to
                  ? "bg-buhoAccent text-buhoPrimary shadow"
                  : "bg-buhoSecondary text-white hover:bg-buhoAccent hover:text-buhoPrimary"
              }`}>
              {link.label}
            </Link>
          )}
        </div>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white text-3xl p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-[66px] left-0 w-full bg-buhoPrimary shadow-lg flex flex-col items-center py-4 gap-2 z-50 animate-fade-down">
          {links.map(link =>
            <Link key={link.to}
              to={link.to}
              onClick={handleLinkClick}
              className={`w-11/12 text-center px-4 py-2 rounded-full font-bold transition ${
                pathname === link.to
                  ? "bg-buhoAccent text-buhoPrimary shadow"
                  : "bg-buhoSecondary text-white hover:bg-buhoAccent hover:text-buhoPrimary"
              }`}>
              {link.label}
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
