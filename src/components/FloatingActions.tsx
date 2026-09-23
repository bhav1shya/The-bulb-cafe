import React from 'react';
import { Phone, Utensils, Calendar, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bulbCafeData';

interface FloatingActionsProps {
  onReserveClick: () => void;
  onMenuClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onReserveClick,
  onMenuClick,
}) => {
  return (
    <>
      {/* Mobile Sticky Bottom Action Bar (Visible only on mobile / small screens) */}
      <aside aria-label="Quick Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e0e11]/95 backdrop-blur-xl border-t border-[#FFC837]/20 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#1c1c22] border border-white/5 active:bg-[#25252e] text-[#FAF7F2] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FFC837]" />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
              Call Now
            </span>
          </a>

          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#1c1c22] border border-white/5 active:bg-[#25252e] text-[#FAF7F2] transition-colors cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#FFC837]" />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
              Menu
            </span>
          </button>

          {/* Reserve Button */}
          <button
            onClick={onReserveClick}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#FFC837] active:bg-[#F5A623] text-[#0e0e11] font-bold transition-all shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0e0e11]" />
            <span className="text-[10px] uppercase tracking-wider mt-1">
              Reserve
            </span>
          </button>
        </div>
      </aside>

      {/* Desktop Quick Floating Call Button (Bottom-Right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col space-y-3">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="group p-3.5 rounded-full bg-[#1c1c22] hover:bg-[#FFC837] text-[#FFC837] hover:text-[#0e0e11] border border-[#FFC837]/40 hover:border-[#FFC837] shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
          title={`Call ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
            {BUSINESS_INFO.phone}
          </span>
        </a>
      </div>
    </>
  );
};
