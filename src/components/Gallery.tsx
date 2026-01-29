import * as React from "react";

const IMAGES = [
  {
    src: "/1000016486.jpg",
    alt: "Construction progress - exterior framing",
  },
  {
    src: "/1000016489.jpg",
    alt: "Construction progress - interior framing",
  },
  {
    src: "/1000016490.jpg",
    alt: "Construction progress - rear elevation",
  },
  {
    src: "/21312 - Construction Plans_Page_07.jpg",
    alt: "Construction plans - site layout",
  },
  {
    src: "/Stokes Landing Phase II OM_Page_12.jpg",
    alt: "Site plan drawing",
  },
];

export const Gallery = () => {
  const [modal, setModal] = React.useState<null | number>(null);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Project Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            className="group relative rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition"
            onClick={() => setModal(i)}
            aria-label="Enlarge image"
            type="button"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              draggable={false}
            />
            <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-2 py-1">
              {img.alt}
            </span>
          </button>
        ))}
      </div>
      {modal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white dark:bg-background rounded-xl shadow-lg max-w-3xl w-full p-4 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 text-2xl font-bold"
              onClick={() => setModal(null)}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <img
              src={IMAGES[modal].src}
              alt={IMAGES[modal].alt}
              className="w-full max-h-[70vh] object-contain rounded"
              draggable={false}
            />
            <div className="mt-2 text-center text-gray-700 dark:text-gray-200 text-sm">
              {IMAGES[modal].alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};