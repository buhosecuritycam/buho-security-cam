import { useState, useEffect } from "react";
const testimonios = [
  { nombre: "Ana L.", opinion: "Excelente servicio, muy profesionales. Instalación rápida y limpia.", rating: 5 },
  { nombre: "Carlos G.", opinion: "Me asesoraron en todo momento. Ahora me siento seguro en mi casa.", rating: 5 },
  { nombre: "Valeria M.", opinion: "Muy buen trato y excelentes productos. ¡Recomendados!", rating: 5 },
  { nombre: "David R.", opinion: "La mejor opción en CCTV, atención personalizada y precios justos.", rating: 5 }
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setI((i) => (i + 1) % testimonios.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-buhoSecondary bg-gradient-to-bl from-buhoAccent to-buhoSecondary p-8 rounded-xl shadow-lg max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-white">Testimonios</h2>
      <div className="flex items-center gap-4 justify-center">
        <button
          onClick={() => setI((i - 1 + testimonios.length) % testimonios.length)}
          className="text-2xl text-white"
        >◀</button>
        <div>
          <p className="text-xl text-white">"{testimonios[i].opinion}"</p>
          <p className="mt-2 font-bold text-buhoPrimary">{testimonios[i].nombre}</p>
          <div className="flex">
            {Array.from({ length: testimonios[i].rating }).map((_, i) => (
              <span key={i} className="text-yellow-300">⭐</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setI((i + 1) % testimonios.length)}
          className="text-2xl text-white"
        >▶</button>
      </div>
    </div>
  );
}