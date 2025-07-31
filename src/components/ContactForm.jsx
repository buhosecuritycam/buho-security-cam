import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const enviarWhatsApp = e => {
    e.preventDefault();
    const texto = `Hola, soy ${form.nombre}. Quiero información. Mi correo: ${form.correo}. Mensaje: ${form.mensaje}`;
    window.open(`https://wa.me/527201191012?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto" onSubmit={enviarWhatsApp}>
      <h2 className="text-2xl font-bold mb-4 text-buhoPrimary">Contacto</h2>
      <input required name="nombre" type="text" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
      <input required name="correo" type="email" placeholder="Tu correo" value={form.correo} onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
      <textarea required name="mensaje" placeholder="¿En qué podemos ayudarte?" value={form.mensaje} onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
      <button type="submit" className="w-full bg-buhoAccent text-buhoPrimary font-bold py-2 rounded hover:bg-buhoSecondary hover:text-white transition">Enviar por WhatsApp</button>
    </form>
  );
}