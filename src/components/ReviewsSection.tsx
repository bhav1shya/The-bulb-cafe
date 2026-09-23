import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/bulbCafeData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  return (
    <section id="reviews" className="relative bg-[#0e0e11] py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Overview Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC837] block">
              GUEST EXPERIENCES
            </span>
            <h2 className="mt-2 font-display font-black text-3xl sm:text-5xl text-[#FAF7F2] tracking-tight">
              Loved by Jaipur’s Café Lovers
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#D1C7BA] font-light">
              Real feedback from guests who visited for quick bites, romantic evenings, and group celebrations.
            </p>
          </div>

          {/* Google Verified Score Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#151519] border border-[#FFC837]/30 flex items-center space-x-4 shadow-lg shrink-0">
            <div className="flex flex-col items-center justify-center pr-4 border-r border-white/10">
              <span className="font-display font-black text-3xl text-[#FFC837] tabular-nums leading-none">
                {BUSINESS_INFO.rating.score}
              </span>
              <div className="flex items-center space-x-0.5 text-[#FFC837] mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-[#FAF7F2] uppercase tracking-wider">
                {BUSINESS_INFO.rating.count} Reviews
              </p>
              <p className="text-[11px] text-[#D1C7BA] flex items-center space-x-1 mt-0.5">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>{BUSINESS_INFO.rating.source}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review, i) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-xl bg-[#151519] border border-white/5 hover:border-[#FFC837]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-[#FFC837]">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#FFC837]/30" />
                </div>

                <h4 className="font-display font-bold text-base text-[#FAF7F2] mb-2">
                  “{review.theme}”
                </h4>

                <p className="text-xs sm:text-sm text-[#D1C7BA] font-light leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#D1C7BA]">
                <span className="font-medium text-[#FAF7F2]">{review.authorType}</span>
                <span className="text-[11px] text-[#FFC837] font-semibold">{review.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
