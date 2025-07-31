import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 text-center">
      <img src="/logo.jpg" alt="Buhó Security" className="mx-auto mb-4 h-36" />
      <h1 className="text-4xl font-bold mb-4 text-buhoPrimary">Bienvenido a Búho Security</h1>
      <p className="text-lg mb-8">
        Expertos en venta e instalación de sistemas CCTV y videovigilancia.<br/>
        Seguridad, innovación, confianza. ¡Protegemos lo que más importa!
      </p>
      <Link to="/catalogo" className="px-8 py-3 bg-buhoAccent text-buhoPrimary font-bold rounded-full shadow hover:bg-buhoSecondary hover:text-white transition text-xl">
        Ver catálogo
      </Link>
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-10">
        <div className="bg-white shadow-lg rounded-xl p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2 text-buhoPrimary">Instalación profesional</h2>
          <p>Personal calificado y materiales de calidad. Soluciones a la medida.</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2 text-buhoPrimary">Paquetes flexibles</h2>
          <p>Elige entre varias opciones según tus necesidades y presupuesto.</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2 text-buhoPrimary">Atención personalizada</h2>
          <p>Te asesoramos en todo momento. Cotización sin costo.</p>
        </div>
      </div>
    </div>
  )
}
