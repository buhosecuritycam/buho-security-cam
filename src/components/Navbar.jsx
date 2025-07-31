import { Link, useLocation } from "react-router-dom"

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
  return (
    <nav className="bg-buhoPrimary shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3">
        <Link to="/">
          <img src="/logo.jpg" alt="Buhó Security" className="h-12" />
        </Link>
        <div className="flex gap-3 flex-wrap">
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
      </div>
    </nav>
  )
}