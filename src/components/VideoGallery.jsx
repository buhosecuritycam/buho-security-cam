export default function VideoGallery() {
  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/9bZkp7q19f0"
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((src, i) => (
        <iframe
          key={i}
          src={src}
          className="w-full h-72 rounded-xl shadow-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`video${i}`}
        ></iframe>
      ))}
    </div>
  );
}