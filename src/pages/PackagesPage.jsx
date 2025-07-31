import { useState } from "react";
import Gallery from "../components/Gallery";

const paquetes = [
  {
    nombre: "Paquete 1",
    resumen: (
      <>
        <span className="text-lg font-semibold text-buhoSecondary">2 cámaras expandible a 4 cámaras</span>
        <ul className="text-sm mt-2 mb-1 list-disc list-inside text-gray-700">
          <li>Precio sin mano de obra: <span className="font-bold text-buhoAccent">$1,800</span></li>
          <li>Con mano de obra: <span className="font-bold text-buhoAccent">$2,500</span></li>
        </ul>
        <div className="my-3 p-3 bg-yellow-50 rounded-lg shadow-inner border border-yellow-100">
          <p className="text-buhoPrimary mb-1">Este paquete te permite iniciar con 2 cámaras y expandir hasta 4, ideal para casas pequeñas o negocios en crecimiento.</p>
          <p className="text-xs text-gray-500">Incluye instalación profesional, soporte técnico y asesoría gratuita.</p>
        </div>
      </>
    ),
    images: [
      "paq1.jpg", "paq1-1.jpg", "paq1-2.jpg", "paq1-3.jpg", "paq1-4.jpg"
      // , "paq1-5.jpg"
    ]
  },
  {
    nombre: "Paquete 2",
    resumen: (
      <>
        <span className="text-lg font-semibold text-buhoSecondary">4 cámaras marca Hilook</span>
        <ul className="text-sm mt-2 mb-1 list-disc list-inside text-gray-700">
          <li>Precio sin mano de obra: <span className="font-bold text-buhoAccent">$2,000</span></li>
          <li>Con mano de obra: <span className="font-bold text-buhoAccent">$2,700</span></li>
        </ul>
        <div className="my-3 p-3 bg-blue-50 rounded-lg shadow-inner border border-blue-100">
          <p className="text-buhoPrimary mb-1">Obtén cobertura total en tu hogar o negocio con 4 cámaras Hilook, reconocidas por su calidad y durabilidad.</p>
          <p className="text-xs text-gray-500">Incluye grabación continua y acceso remoto desde cualquier dispositivo.</p>
        </div>
      </>
    ),
    images: [
      "paq2.jpg", "paq2-1.jpg", "paq2-2.jpg", "paq2-3.jpg", "paq2-4.jpg"
      //, "paq2-5.jpg"
    ]
  },
  {
    nombre: "Paquete 3",
    resumen: (
      <>
        <span className="text-lg font-semibold text-buhoSecondary">Cámaras Qigo</span>
        <ul className="text-sm mt-2 mb-1 list-disc list-inside text-gray-700">
          <li>Paquete una cámara: <span className="font-bold text-buhoAccent">$700</span></li>
          <li>Con mano de obra: <span className="font-bold text-buhoAccent">$1,000</span> por cámara</li>
        </ul>
        <div className="my-3 p-3 bg-green-50 rounded-lg shadow-inner border border-green-100">
          <p className="text-buhoPrimary mb-1">La opción flexible: agrega las cámaras que necesites a tu ritmo, con excelente calidad de imagen y fácil monitoreo desde tu celular.</p>
          <p className="text-xs text-gray-500">Configuración sencilla y soporte constante.</p>
        </div>
      </>
    ),
    images: [
      "paq3.jpg", "paq3-1.jpg", "paq3-2.jpg", "paq3-3.jpg"
    /*, "paq3-4.jpg",
      "paq3-5.jpg", "paq3-6.jpg", "paq3-7.jpg", "paq3-8.jpg", "paq3-9.jpg"*/
    ]
  },
  {
    nombre: "Paquete 4",
    resumen: (
      <>
        <span className="text-lg font-semibold text-buhoSecondary">Equipo Hilook expandible</span>
        <ul className="text-sm mt-2 mb-1 list-disc list-inside text-gray-700">
          <li>4 cámaras expandible a 8</li>
          <li>Memoria de 500GB, micrófono integrado, luz nocturna 24/7 (imagen a color todo el día)</li>
          <li>Precio sin mano de obra: <span className="font-bold text-buhoAccent">$2,800</span></li>
          <li>Con mano de obra: <span className="font-bold text-buhoAccent">$3,700</span></li>
        </ul>
        <div className="my-3 p-3 bg-purple-50 rounded-lg shadow-inner border border-purple-100">
          <p className="text-buhoPrimary mb-1">Solución premium para máxima cobertura, visión colorida incluso de noche y audio ambiental.</p>
          <p className="text-xs text-gray-500">Ideal para quien busca seguridad y tecnología avanzada en su propiedad.</p>
        </div>
      </>
    ),
    images: [
      "paq4.jpg", "paq4-1.jpg", "paq4-2.jpg", "paq4-3.jpg", "paq4-4.jpg", "paq4-5.jpg", "paq4-6.jpg"
    ]
  },
  {
    nombre: "Paquete 5",
    resumen: (
      <>
        <span className="text-lg font-semibold text-buhoSecondary">Kit premium: 8 cámaras full HD</span>
        <ul className="text-sm mt-2 mb-1 list-disc list-inside text-gray-700">
          <li>Acceso remoto, luz nocturna, instalación incluida</li>
          <li>Precio todo incluido: <span className="font-bold text-buhoAccent">$6,500</span></li>
        </ul>
        <div className="my-3 p-3 bg-pink-50 rounded-lg shadow-inner border border-pink-100">
          <p className="text-buhoPrimary mb-1">El paquete más completo: máxima seguridad, tecnología de punta y todo listo para usar.</p>
          <p className="text-xs text-gray-500">Ideal para empresas, negocios grandes o quien necesita monitoreo total.</p>
        </div>
      </>
    ),
    images: [
     // "paq5.jpg", "paq5-1.jpg", "paq5-2.jpg", "paq5-3.jpg", "paq5-4.jpg"
    ]
  },
];

export default function PackagesPage() {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-buhoPrimary">Paquetes de Instalación</h1>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {paquetes.map((paq, idx) => (
          <button
            key={paq.nombre}
            onClick={() => setSeleccionado(idx)}
            className={`px-6 py-3 rounded-full font-bold text-white transition
              ${seleccionado === idx ? "bg-buhoAccent text-buhoPrimary" : "bg-buhoSecondary hover:bg-buhoAccent hover:text-buhoPrimary"}
            `}
          >
            {paq.nombre}
          </button>
        ))}
      </div>
      {seleccionado !== null && (
        <div className="bg-white shadow-xl rounded-xl p-6 text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-buhoSecondary mb-2">{paquetes[seleccionado].nombre}</h2>
          <div className="mb-4">{paquetes[seleccionado].resumen}</div>
          <div>
            <Gallery images={paquetes[seleccionado].images} />
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.5s;
        }
      `}</style>
    </div>
  );
}