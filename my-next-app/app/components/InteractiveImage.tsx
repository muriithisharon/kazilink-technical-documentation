'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface InteractiveImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function InteractiveImage({ src, alt, caption }: InteractiveImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative group cursor-zoom-in overflow-hidden rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-xl"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full max-w-2xl mx-auto h-auto object-contain transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 flex items-center justify-center transition-all">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        {caption && (
          <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs p-3 text-center">
            {caption}
          </p>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-full overflow-auto">
            <button
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1200}
              className="w-full h-auto object-contain"
            />
            {caption && <p className="text-center text-white text-sm mt-4 px-4">{caption}</p>}
          </div>
        </div>
      )}
    </>
  );
}