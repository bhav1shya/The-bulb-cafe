import React from 'react';
import { Lightbulb, Phone, MapPin, Clock, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bulbCafeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#09090c] text-[#D1C7BA] border-t border-white/10 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & Story */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1c1c22] border border-[#FFC837]/40 flex items-center justify-center text-[#FFC837]">
                <Lightbulb className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-[#FAF7F2]">
                BULB <span className="text-[#FFC837]">CAFE</span>
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#D1C7BA] font-light max-w-sm leading-relaxed">
              {BUSINESS_INFO.description} Come for the food, soak in the warm filament glow, and stay for the memories.
            </p>

            <p className="mt-4 text-xs text-[#FFC837] font-script text-lg">
              {BUSINESS_INFO.tagline}
            </p>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#FAF7F2] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-[#FFC837] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu-categories" className="hover:text-[#FFC837] transition-colors">
                  Menu Categories
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FFC837] transition-colors">
                  Full Kitchen Menu
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#FFC837] transition-colors">
                  Must-Try Signatures
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFC837] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFC837] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFC837] transition-colors">
                  Contact & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Categories */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#FAF7F2] mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-[#FAF7F2]/90">Kurkure Paneer Momos</li>
              <li className="text-[#FAF7F2]/90">Nutella Brownie Shake</li>
              <li className="text-[#FAF7F2]/90">Cheese Vada Pav</li>
              <li className="text-[#FAF7F2]/90">Paneer Tikka Bruschetta</li>
              <li className="text-[#FAF7F2]/90">Kullad Adrak Chai</li>
              <li className="text-[#FAF7F2]/90">Sizzling Hot Brownie</li>
            </ul>
          </div>

          {/* Col 5: Location & Contact Summary */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#FAF7F2] mb-4">
              Reach Us
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFC837] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  75/04, Opp. Landscape Garden, Mansarovar Sector 7, Jaipur
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#FFC837] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-mono text-[#FAF7F2] hover:text-[#FFC837] transition-colors tabular-nums"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-[#FFC837] shrink-0" />
                <span>Open Daily: 10 AM – 11 PM</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-[#FFC837] hover:underline cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Zero-Pill Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D1C7BA]/70 gap-4">
          <p>© {new Date().getFullYear()} Bulb Café. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Pure Vegetarian Café</span>
            <span aria-hidden="true">·</span>
            <span>Mansarovar, Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
