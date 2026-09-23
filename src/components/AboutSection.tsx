import React from 'react';
import { Lightbulb, Heart, Users, Sparkles, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { BULB_IMAGES, ABOUT_HIGHLIGHTS, BUSINESS_INFO } from '../data/bulbCafeData';

interface AboutSectionProps {
  onReserveClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onReserveClick }) => {
  return (
    <section id="about" className="relative bg-[#0e0e11] py-20 lg:py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Multi-Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#FFC837]/30 shadow-2xl bg-[#1c1c22]">
              <img
                src={BULB_IMAGES.interior}
                alt="Bulb Cafe Mansarovar Jaipur warm cozy seating and glowing vintage Edison bulb lighting"
                className="w-full h-80 sm:h-96 object-cover object-center brightness-95 hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0e0e11]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#FFC837]">
                    MANSAROVAR · JAIPUR
                  </p>
                  <p className="text-xs font-medium text-[#FAF7F2]">
                    Opposite Landscape Garden, Sector 7
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FFC837]/20 border border-[#FFC837]/50 flex items-center justify-center text-[#FFC837]">
                  <Lightbulb className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Overlapping secondary photo */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-52 h-44 rounded-xl overflow-hidden border-2 border-[#FFC837]/40 shadow-2xl bg-[#151519]">
              <img
                src={BULB_IMAGES.breakfastThali}
                alt="Delicious fresh comfort food at Bulb Cafe Jaipur"
                className="w-full h-full object-cover object-center brightness-90 hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Ambient Warm Golden Halo Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFC837]/10 rounded-full filter blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Text & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC837] mb-3">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>OUR STORY & PHILOSOPHY</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] tracking-tight text-balance">
              More Than Just a Café
            </h2>

            <p className="mt-2 font-script text-2xl sm:text-3xl text-[#FFC837] font-semibold">
              “Good food, good company, and a brighter tomorrow.”
            </p>

            <p className="mt-5 text-sm sm:text-base text-[#D1C7BA] font-light leading-relaxed">
              At Bulb Café, we believe that great conversations happen in warm spaces. Nestled right opposite Landscape Garden in Mansarovar, our café was designed around the cozy glow of vintage filament bulbs, welcoming seating, and a kitchen that cooks with love.
            </p>

            <p className="mt-3 text-sm sm:text-base text-[#D1C7BA] font-light leading-relaxed">
              Whether it’s a quick morning cutting chai with poha, an evening reunion over loaded sandwiches and Kurkure Momos, or celebrating a special birthday with a sizzling hot brownie — our doors and kitchen are open for you.
            </p>

            {/* 5 Distinct Highlights (Clean unboxed check list) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ABOUT_HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-[#FAF7F2]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FFC837] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action CTA & Badge */}
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onReserveClick}
                className="px-6 py-3 rounded-lg bg-[#FFC837] hover:bg-[#F5A623] text-[#0e0e11] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Plan Your Visit
              </button>

              <div className="flex items-center space-x-2 text-xs text-[#D1C7BA]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Clean & Hygienic Kitchen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
