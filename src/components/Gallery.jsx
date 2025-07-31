import { useState } from "react";

export default function Gallery({ images }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

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
              setCurrent(img);
              setOpen(true);
            }}
          />
        ))}
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src={`/${current}`}
            className="max-w-3xl max-h-[90vh] rounded-lg"
            alt="Ampliada"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold"
            onClick={() => setOpen(false)}
          >
            ✖
          </button>
        </div>
      )}
    </>
  );
}