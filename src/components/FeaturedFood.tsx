import React from 'react';
import { Sparkles, Star, Calendar, ArrowRight } from 'lucide-react';
import { FEATURED_DISHES } from '../data/bulbCafeData';

interface FeaturedFoodProps {
  onReserveClick: () => void;
}

export const FeaturedFood: React.FC<FeaturedFoodProps> = ({ onReserveClick }) => {
  return (
    <section id="featured" className="relative bg-[#0e0e11] py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC837] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHEF’S RECOMMENDATIONS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#FAF7F2] tracking-tight text-balance">
            Must-Try Signatures
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D1C7BA] font-light max-w-xl mx-auto">
            Handcrafted with bold flavors, high quality ingredients and the warm hospitality of Bulb Café.
          </p>
        </div>

        {/* 6 Signature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#151519] rounded-xl border border-white/5 hover:border-[#FFC837]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FFC837]/10"
            >
              {/* Dish Image */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#1c1c22]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-all duration-700 ease-out brightness-[0.9]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151519] via-transparent to-transparent opacity-70" />

                {/* Tag unboxed badge with subtle dark backdrop */}
                <div className="absolute top-3 left-3 bg-[#0e0e11]/85 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#FFC837] border border-[#FFC837]/30 flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{dish.tag}</span>
                </div>

                {/* Price Display */}
                <div className="absolute bottom-3 right-3 bg-[#FFC837] text-[#0e0e11] font-display font-black text-base px-3 py-1 rounded shadow-lg tabular-nums">
                  {dish.price}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D1C7BA]/70">
                    {dish.category}
                  </span>
                  <h3 className="mt-1 font-display font-bold text-xl text-[#FAF7F2] group-hover:text-[#FFC837] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#D1C7BA] font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Action CTA */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={onReserveClick}
                    className="text-xs font-bold uppercase tracking-wider text-[#FFC837] hover:text-[#FAF7F2] flex items-center space-x-1.5 transition-colors cursor-pointer group/btn"
                  >
                    <span>Reserve & Taste</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="w-3 h-3 rounded-sm border border-emerald-500/80 flex items-center justify-center p-0.5" title="Pure Veg">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
