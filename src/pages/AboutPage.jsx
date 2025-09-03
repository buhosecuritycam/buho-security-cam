export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <img src="/logo.jpg" className="mx-auto mb-4 h-38" alt="Logo Buhó Security" />
      <h1 className="text-3xl font-bold mb-4">Buhó Security</h1>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Misión</h2>
        <p>
          Proveer soluciones integrales en seguridad electrónica mediante la venta e instalación de sistemas CCTV de alta calidad, contribuyendo a la protección de hogares y negocios con tecnología de vanguardia y atención personalizada.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Visión</h2>
        <p>
          Ser la empresa líder en la región en sistemas de videovigilancia y seguridad electrónica, distinguiéndonos por la innovación, el profesionalismo y la satisfacción total de nuestros clientes.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Ubicación en tiempo real</h2>
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
        <p className="text-center">
          Paseo de los eucaliptos conjuntos sauces 2 casa 101, delegación San Diego de los padres, C.P. 50 210<br/>
          <a
            className="text-buhoAccent underline text-2xl"
            href="https://maps.app.goo.gl/bUcZdgEthLWEAdbU8"
            target="_blank"
            rel="noopener"
          >Ver en Google Maps</a>
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Contacto</h2>
        <p>
          <b>Correo:</b> <a href="mailto:buho.s.instalacion@outlook.com" className="text-buhoAccent underline">buho.s.instalacion@outlook.com</a><br/>
          <b>Teléfono:</b> <a href="tel:+527201191012" className="text-buhoAccent underline">+52 720 119 1012</a>
        </p>
      </section>
    </div>
  );
}
