import { useState } from "react";
import Gallery from "../components/Gallery";
import ImageCarousel from "../components/ImageCarousel";

const productos = [
  { nombre: "Cámara IP Exterior HD", img: "instal1.jpg", desc: "Visión nocturna, conexión WiFi, resistente a la intemperie." },
  { nombre: "Kit DVR 4 Canales", img: "instal2.jpg", desc: "Incluye 4 cámaras, grabación continua, acceso remoto." },
  { nombre: "Domos 360° Full HD", img: "instal3.jpg", desc: "Cobertura total, ideal para interiores y exteriores." },
  { nombre: "Cámara Bala IR", img: "instal4.jpg", desc: "Gran alcance de visión nocturna, carcasa metálica." },
  { nombre: "Kit Hilook 2 Cámaras", img: "instal5.jpg", desc: "Marca reconocida, instalación sencilla." },
  { nombre: "Kit Qigo 1 Cámara WiFi", img: "instal6.jpg", desc: "Fácil configuración y acceso vía app móvil." }
];

export default function CatalogPage() {
  // Estado para modal/carrusel de productos
  const [open, setOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Array de imágenes de los productos (para el carrusel)
  const productImages = productos.map(p => p.img);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-buhoPrimary">Catálogo de Productos</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {productos.map((p, idx) => (
          <div key={p.nombre} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
            <img
              src={`/${p.img}`}
              alt={p.nombre}
              className="h-40 object-contain mb-3 cursor-pointer hover:scale-105 transition"
              onClick={() => {
                setCurrentIdx(idx);
                setOpen(true);
              }}
            />
            <h3 className="font-bold text-buhoSecondary mb-1">{p.nombre}</h3>
            <p className="text-center text-gray-700">{p.desc}</p>
            <a
              href={`https://wa.me/527201191012?text=${encodeURIComponent(`Hola, me gustaría recibir información sobre el producto: ${p.nombre}`)}`}
              target="_blank"
              rel="noopener"
              className="mt-2 px-4 py-2 rounded-full bg-buhoAccent text-buhoPrimary font-bold shadow hover:bg-buhoSecondary hover:text-white transition"
            >
              Información
            </a>
          </div>
        ))}
      </div>
      {/* Modal/Carrusel para productos */}
      <ImageCarousel
        images={productImages}
        currentIdx={currentIdx}
        open={open}
        onClose={() => setOpen(false)}
        onChange={idx => {
          if (idx >= 0 && idx < productImages.length) setCurrentIdx(idx);
        }}
      />
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-buhoPrimary">Galería de Instalaciones</h2>
        <Gallery images={["instal1.jpg","instal2.jpg","instal3.jpg","instal4.jpg"]} />
      </div>
    </div>
  );
}
