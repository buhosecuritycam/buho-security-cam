import { useState } from "react";
import ImageCarousel from "./ImageCarousel"; // Ajusta la ruta si tu carpeta es diferente

export default function Gallery({ images }) {
  const [open, setOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <img
            key={img}
            src={`/${img}`}
            alt={`Galería ${idx + 1}`}
            className="rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => {
              setCurrentIdx(idx);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <ImageCarousel
        images={images}
        currentIdx={currentIdx}
        open={open}
        onClose={() => setOpen(false)}
        onChange={idx => {
          if (idx >= 0 && idx < images.length) setCurrentIdx(idx);
        }}
      />
    </>
  );
}
