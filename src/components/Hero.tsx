import React from 'react';
import {
  Lightbulb,
  Utensils,
  Calendar,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';
import { BULB_IMAGES, BUSINESS_INFO } from '../data/bulbCafeData';

interface HeroProps {
  onExploreMenuClick: () => void;
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenuClick,
  onReserveClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0e0e11] pt-28 lg:pt-32 pb-8 sm:pb-10"
    >
      {/* 1. Cinematic Background Image with Slow Zoom & Soft Left Dark Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={BULB_IMAGES.hero}
          alt="Bulb Cafe Jaipur warm ambience with glowing vintage Edison lightbulbs"
          className="w-full h-full object-cover object-right sm:object-center brightness-[0.85] contrast-[1.05] animate-slow-zoom scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Soft horizontal gradient: deep dark on the left for maximum text/logo contrast, opening up warmly on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e11] via-[#0e0e11]/85 md:via-[#0e0e11]/75 to-[#0e0e11]/25" />

        {/* Subtle top/bottom edge gradients to blend seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-[#0e0e11]/70" />

        {/* Ambient warm golden halo behind logo area */}
        <div className="absolute top-1/3 left-4 sm:left-12 w-80 h-80 bg-[#FFC837]/15 rounded-full filter blur-[110px]" />
      </div>

      {/* 2. Left Side Content: ONLY Logo of Bulb Cafe + One Tagline with Animation + CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-16">
        <div className="max-w-2xl flex flex-col justify-center">
          
          {/* Logo of Bulb Café (Animated Fade-Up) */}
          <div className="animate-fade-up">
            <div className="flex items-center space-x-3.5 sm:space-x-4 mb-4">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#151519]/90 border border-[#FFC837]/50 flex items-center justify-center text-[#FFC837] shadow-[0_0_25px_rgba(255,200,55,0.4)] backdrop-blur-md">
                <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFC837]" />
                <div className="absolute inset-0 rounded-2xl bg-[#FFC837]/20 filter blur-sm pointer-events-none" />
              </div>

              <div>
                <span className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#FAF7F2] leading-none block">
                  Bulb <span className="text-[#FFC837] text-glow-yellow">Café</span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#FFC837] mt-1 block">
                  Mansarovar · Jaipur
                </span>
              </div>
            </div>
          </div>

          {/* One Tagline with Warm Glow & Gentle Reveal Animation */}
          <div className="mt-4 sm:mt-6 animate-gentle-reveal">
            <h1 className="font-script text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-semibold tracking-wide leading-[1.2]">
              “Food tastes better when the vibe is right.”
            </h1>
            
            <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FFC837]">
              Good Food • Great Vibes • Always a Bright Idea
            </p>
          </div>

          {/* Clean Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md animate-gentle-reveal">
            {/* Explore Menu Button */}
            <button
              onClick={onExploreMenuClick}
              className="px-8 py-3.5 rounded-lg bg-[#FFC837] hover:bg-[#F5A623] text-[#0e0e11] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-[#FFC837]/30 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <Utensils className="w-4 h-4 text-[#0e0e11]" />
              <span>Explore Menu</span>
            </button>

            {/* Reserve a Table Button */}
            <button
              onClick={onReserveClick}
              className="px-8 py-3.5 rounded-lg bg-[#0e0e11]/80 hover:bg-[#1c1c22] text-[#FAF7F2] hover:text-[#FFC837] border border-[#FFC837]/50 hover:border-[#FFC837] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 backdrop-blur-md shadow-lg hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#FFC837]" />
              <span>Reserve a Table</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. Bottom Information Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto">
        <div className="py-3.5 px-5 sm:px-6 rounded-xl bg-[#0e0e11]/85 backdrop-blur-md border border-[#FFC837]/25 shadow-xl">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-2 text-xs sm:text-sm font-medium text-[#D1C7BA]">
            
            {/* Open until 11 PM */}
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#FFC837] shrink-0" />
              <span className="text-[#FAF7F2] font-semibold">Open until 11 PM</span>
            </div>

            {/* Separator */}
            <span className="hidden sm:inline text-white/20 select-none">|</span>

            {/* ₹200–₹400 per person */}
            <div className="flex items-center space-x-2">
              <Utensils className="w-4 h-4 text-[#FFC837] shrink-0" />
              <span>₹200–₹400 per person</span>
            </div>

            {/* Separator */}
            <span className="hidden sm:inline text-white/20 select-none">|</span>

            {/* Mansarovar, Jaipur */}
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#FFC837] shrink-0" />
              <span>Mansarovar, Jaipur</span>
            </div>

            {/* Separator */}
            <span className="hidden sm:inline text-white/20 select-none">|</span>

            {/* 097820 35098 */}
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#FFC837] shrink-0" />
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="font-mono font-bold text-[#FFC837] hover:underline tabular-nums transition-colors"
                title="Call Bulb Cafe"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
