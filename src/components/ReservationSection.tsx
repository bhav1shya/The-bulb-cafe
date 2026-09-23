import React from 'react';
import { Calendar, Phone, Lightbulb, Sparkles, Clock, Users } from 'lucide-react';
import { BULB_IMAGES, BUSINESS_INFO } from '../data/bulbCafeData';

interface ReservationSectionProps {
  onReserveClick: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onReserveClick }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0e0e11] overflow-hidden border-t border-white/5">
      {/* Background with warm cinematic overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={BULB_IMAGES.hero}
          alt="Bulb Cafe table reservation ambience"
          className="w-full h-full object-cover object-center brightness-[0.35] contrast-[1.1] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/80 to-[#0e0e11]/70" />
        <div className="absolute inset-0 bg-radial-[at_center] from-[#FFC837]/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC837] mb-4">
          <Lightbulb className="w-4 h-4 animate-bulb-pulse" />
          <span>RESERVATIONS & CELEBRATIONS</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] tracking-tight text-balance">
          Your Table Is <span className="text-[#FFC837]">Waiting</span>
        </h2>

        <p className="mt-4 font-script text-2xl sm:text-3xl text-[#FAF7F2] font-semibold">
          “Good food, great company and a brighter place to spend your evening.”
        </p>

        <p className="mt-4 text-sm sm:text-base text-[#D1C7BA] font-light max-w-xl mx-auto leading-relaxed">
          Whether you’re planning a birthday surprise, catching up with old friends, or enjoying a quiet evening coffee — reserve your table at Bulb Café in Mansarovar.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#FFC837] hover:bg-[#F5A623] text-[#0e0e11] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-[#FFC837]/30 hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0e0e11]" />
            <span>Reserve a Table Online</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#1c1c22] hover:bg-[#25252e] text-[#FAF7F2] hover:text-[#FFC837] border border-[#FFC837]/40 hover:border-[#FFC837] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-lg active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#FFC837]" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Small reassurance line */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#D1C7BA]">
          <span className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FFC837]" />
            <span>Instant confirmation</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <Users className="w-3.5 h-3.5 text-[#FFC837]" />
            <span>No reservation fee required</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC837]" />
            <span>Special decor on request</span>
          </span>
        </div>
      </div>
    </section>
  );
};
