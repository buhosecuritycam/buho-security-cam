import ContactForm from "../components/ContactForm"

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-buhoPrimary">Contáctanos</h1>
      <ContactForm />
      <div className="mt-8 text-center">
        <p>
          <span className="font-bold">Dirección:</span><br />
          Paseo de los eucaliptos conjuntos sauces 2 casa 101,<br />
          delegación San Diego de los padres, C.P. 50 210<br />
          <a href="https://maps.app.goo.gl/bUcZdgEthLWEAdbU8" rel="noopener" target="_blank" className="text-buhoAccent underline text- 2xl">Ver en Google Maps</a>
        </p>
        <p className="mt-4">
          <span className="font-bold">Correo:</span> <a href="mailto:buho.s.instalacion@outlook.com" className="text-buhoAccent underline">buho.s.instalacion@outlook.com</a><br />
          <span className="font-bold">Teléfono:</span> <a href="tel:+527201191012" className="text-buhoAccent underline">+52 720 119 1012</a>
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2 text-buhoPrimary">Ubicación en tiempo real</h2>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3764.2876328017746!2d-99.593!3d19.3566944!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIxJzI0LjEiTiA5OcKwMzUnMzQuOCJX!5e0!3m2!1ses-419!2smx!4v1753920294250!5m2!1ses-419!2smx"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Buhó Security"
          ></iframe>
        </div>
      </div>
    </div>
  )
}