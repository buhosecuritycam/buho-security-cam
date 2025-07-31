import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import CatalogPage from './pages/CatalogPage'
import PackagesPage from './pages/PackagesPage'
import GalleryPage from './pages/GalleryPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <div className="font-buho min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/paquetes" element={<PackagesPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/testimonios" element={<TestimonialsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  )
}