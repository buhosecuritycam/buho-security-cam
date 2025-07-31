import Gallery from "../components/Gallery"
import VideoGallery from "../components/VideoGallery"

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-buhoPrimary">Galería de Imágenes y Videos</h1>
      <h2 className="text-xl font-bold mb-2 text-buhoSecondary">Instalaciones Recientes</h2>
      <Gallery images={["instal1.jpg", "instal2.jpg", "instal3.jpg", "instal4.jpg"]} />
      <h2 className="text-xl font-bold mt-8 mb-2 text-buhoSecondary">Más trabajos</h2>
      <Gallery images={["instal5.jpg", "instal6.jpg", "instal7.jpg", "instal8.jpg"]} />
      <h2 className="text-xl font-bold mt-8 mb-2 text-buhoSecondary">Videos</h2>
      <VideoGallery />
    </div>
  )
}