export default function Footer() {
  return (
    <footer className="bg-buhoPrimary text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Buhó Security. Todos los derechos reservados.
      </div>
    </footer>
  )
}