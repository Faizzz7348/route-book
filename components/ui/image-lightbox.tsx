"use client"

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  rowId: string;
}

export function ImageLightbox({ images, rowId }: ImageLightboxProps) {
  const galleryRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let gallery: any = null;

    const loadLightGallery = async () => {
      if (!containerRef.current || images.length === 0) return;

      try {
        // Dynamically import lightgallery
        const { default: lightGallery } = await import("lightgallery");
        const lgThumbnail = await import("lightgallery/plugins/thumbnail");
        const lgZoom = await import("lightgallery/plugins/zoom");
        const lgFullscreen = await import("lightgallery/plugins/fullscreen");

        gallery = lightGallery(containerRef.current, {
          licenseKey: "GPLv3",
          plugins: [lgThumbnail.default, lgZoom.default, lgFullscreen.default],
          speed: 500,
          download: false,
          selector: ".lightbox-item",
          thumbnail: true,
          animateThumb: true,
        });

        galleryRef.current = gallery;
      } catch (error) {
        console.error("Failed to load LightGallery:", error);
      }
    };

    loadLightGallery();

    return () => {
      if (galleryRef.current) {
        try {
          galleryRef.current.destroy();
        } catch (e) {
          console.warn("Error destroying lightGallery:", e);
        }
      }
    };
  }, [images, rowId]);

  if (images.length === 0) {
    return <span className="text-xs text-muted-foreground">No image</span>;
  }

  return (
    <div ref={containerRef} className="flex items-center justify-center">
      {/* First image as clickable preview with loading state */}
      <a
        href={images[0]}
        data-src={images[0]}
        className="lightbox-item cursor-pointer relative inline-block"
      >
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
          </div>
        )}
        <img
          src={images[0]}
          alt="Image"
          className={`w-10 h-8 object-cover rounded-lg border border-gray-200 dark:border-gray-700 hover:opacity-80 transition-all duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
        
        {/* Count badge inside image */}
        {images.length > 1 && (
          <span className="absolute bottom-0.5 right-0.5 bg-black/70 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded-md backdrop-blur-sm">
            +{images.length - 1}
          </span>
        )}
      </a>

      {/* Hidden images for gallery */}
      {images.slice(1).map((image, index) => (
        <a
          key={index + 1}
          href={image}
          data-src={image}
          className="lightbox-item"
          style={{ display: "none" }}
        >
          <img src={image} alt={`Image ${index + 2}`} />
        </a>
      ))}
    </div>
  );
}
