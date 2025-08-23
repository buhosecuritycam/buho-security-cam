import { useEffect } from "react";

export default function ImageCarousel({ images, currentIdx, open, onClose, onChange }) {
  useEffect(() => {
    if (!open) return;
    const handleKey = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChange(currentIdx - 1);
      if (e.key === "ArrowRight") onChange(currentIdx + 1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, currentIdx, onClose, onChange]);

  if (!open) return null;

  const prev = () => onChange(currentIdx - 1);
  const next = () => onChange(currentIdx + 1);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <button
        className="absolute top-8 right-8 text-white text-3xl font-bold z-20"
        onClick={onClose}
      >
        ✖
      </button>
      {currentIdx > 0 && (
        <button
          className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-20 bg-black bg-opacity-30 rounded-full px-2 py-1 hover:bg-opacity-60"
          onClick={e => { e.stopPropagation(); prev(); }}
        >
          &#8592;
        </button>
      )}
      <img
        src={`/${images[currentIdx]}`}
        className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg"
        alt={`Ampliada ${currentIdx + 1}`}
        onClick={e => e.stopPropagation()}
      />
      {currentIdx < images.length - 1 && (
        <button
          className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-20 bg-black bg-opacity-30 rounded-full px-2 py-1 hover:bg-opacity-60"
          onClick={e => { e.stopPropagation(); next(); }}
        >
          &#8594;
        </button>
      )}
    </div>
  );
}