import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, Check, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bulbCafeData';

interface LocationSectionProps {
  onReserveClick: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onReserveClick }) => {
  return (
    <section id="contact" className="relative bg-[#121216] py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC837]">
            VISIT US IN JAIPUR
          </span>
          <h2 className="mt-2 font-display font-black text-3xl sm:text-5xl text-[#FAF7F2] tracking-tight">
            Location & Timings
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D1C7BA] font-light max-w-xl mx-auto">
            Conveniently located right opposite Landscape Garden in Mansarovar Sector 7, Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-xl bg-[#151519] border border-white/5 hover:border-[#FFC837]/30 transition-all">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1c1c22] border border-[#FFC837]/30 flex items-center justify-center text-[#FFC837] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFC837]">
                    Address & Landmark
                  </h4>
                  <p className="mt-1 font-display font-bold text-base text-[#FAF7F2]">
                    Bulb Café
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-[#D1C7BA] font-light leading-relaxed">
                    {BUSINESS_INFO.address.full}
                  </p>
                  <p className="mt-2 text-xs text-[#FFC837] font-semibold">
                    Landmark: Directly Opposite Landscape Garden
                  </p>
                </div>
              </div>
            </div>

            {/* Hours & Cost Card */}
            <div className="p-6 rounded-xl bg-[#151519] border border-white/5 hover:border-[#FFC837]/30 transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1c1c22] border border-[#FFC837]/30 flex items-center justify-center text-[#FFC837] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#FFC837]">
                      Cafe Timings
                    </h5>
                    <p className="text-xs sm:text-sm font-semibold text-[#FAF7F2] mt-0.5">
                      {BUSINESS_INFO.timings.hours}
                    </p>
                    <p className="text-[11px] text-[#D1C7BA]">
                      {BUSINESS_INFO.timings.days}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1c1c22] border border-[#FFC837]/30 flex items-center justify-center text-[#FFC837] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#FFC837]">
                      Contact Number
                    </h5>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-xs sm:text-sm font-mono font-semibold text-[#FAF7F2] hover:text-[#FFC837] transition-colors mt-0.5 block tabular-nums"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-[11px] text-emerald-400">
                      Line active for table bookings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-lg bg-[#1c1c22] hover:bg-[#25252e] border border-[#FFC837]/40 hover:border-[#FFC837] text-xs font-bold uppercase tracking-wider text-[#FAF7F2] hover:text-[#FFC837] flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#FFC837]" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onReserveClick}
                className="py-3 px-4 rounded-lg bg-[#FFC837] hover:bg-[#F5A623] text-xs font-bold uppercase tracking-wider text-[#0e0e11] flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#FFC837]/30 shadow-2xl relative min-h-[380px] bg-[#1c1c22]">
            <iframe
              title="Bulb Cafe Mansarovar Jaipur Map Location"
              src="https://maps.google.com/maps?q=Landscape%20Garden%20Mansarovar%20Sector%207%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 filter grayscale-[20%] contrast-[1.1]"
              loading="lazy"
              allowFullScreen
            />

            <div className="absolute top-4 left-4 p-3 rounded-lg bg-[#0e0e11]/90 backdrop-blur-md border border-white/10 shadow-lg pointer-events-none">
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#FFC837]">
                Live Map View
              </p>
              <p className="text-xs font-semibold text-[#FAF7F2] mt-0.5">
                Bulb Café · Mansarovar Sector 7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
