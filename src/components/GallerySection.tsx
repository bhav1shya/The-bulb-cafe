import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/bulbCafeData';
import { GalleryPhoto } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Ambience' | 'Food' | 'Drinks' | 'Exterior'>('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedFilter === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedFilter || (selectedFilter === 'Food' && p.category === 'Dessert'));

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  const handleNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, filteredPhotos.length]);

  return (
    <section id="gallery" className="relative bg-[#121216] py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC837] mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL STORIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#FAF7F2] tracking-tight text-balance">
            The Bulb Café Ambience & Moments
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D1C7BA] font-light max-w-xl mx-auto">
            Glow under warm vintage filaments, unwind with artisan bites and capture memories that last.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex justify-center items-center gap-2 mb-10 flex-wrap">
          {(['All', 'Ambience', 'Food', 'Drinks', 'Exterior'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setSelectedFilter(tab);
                setActivePhotoIndex(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-[#FFC837] text-[#0e0e11] font-bold shadow-md'
                  : 'bg-[#1c1c22] text-[#D1C7BA] hover:text-[#FAF7F2] hover:bg-[#25252e]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer bg-[#1c1c22] border border-white/5 hover:border-[#FFC837]/60 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#FFC837]/10"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-all duration-700 ease-out brightness-[0.88] group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11]/90 via-[#0e0e11]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Maximize Icon Cue */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0e0e11]/70 border border-white/20 text-[#FAF7F2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                <Maximize2 className="w-3.5 h-3.5 text-[#FFC837]" />
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#FFC837]">
                  {photo.category}
                </span>
                <h3 className="font-display font-bold text-sm sm:text-base text-[#FAF7F2] leading-snug">
                  {photo.title}
                </h3>
                <p className="text-[11px] text-[#D1C7BA] font-light line-clamp-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#0e0e11]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#1c1c22] border border-[#FFC837]/40 text-[#FAF7F2] hover:text-[#FFC837] flex items-center justify-center transition-colors cursor-pointer z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-w-full max-h-[75vh] object-contain"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0e0e11]/80 border border-white/20 text-[#FAF7F2] hover:text-[#FFC837] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0e0e11]/80 border border-white/20 text-[#FAF7F2] hover:text-[#FFC837] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Caption */}
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FFC837]">
                {activePhoto.category} · {activePhotoIndex! + 1} of {filteredPhotos.length}
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#FAF7F2] mt-1">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D1C7BA] font-light mt-1">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
