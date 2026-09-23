import React from 'react';
import { Utensils, Sparkles, Users, Lightbulb } from 'lucide-react';
import { WHY_VISIT_FEATURES } from '../data/bulbCafeData';

const iconMap = {
  Utensils: Utensils,
  Sparkles: Sparkles,
  Users: Users,
  Lightbulb: Lightbulb,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="relative bg-[#121216] py-20 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC837]">
            THE EXPERIENCE
          </span>
          <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] tracking-tight text-balance">
            Why You’ll Love Bulb Café
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D1C7BA] font-light">
            Every detail is designed to make your time in Mansarovar brighter, tastier, and more relaxing.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_VISIT_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName as keyof typeof iconMap] || Lightbulb;
            return (
              <div
                key={feature.id}
                className="group relative p-6 sm:p-7 rounded-xl bg-[#151519] border border-white/5 hover:border-[#FFC837]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FFC837]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1c1c22] border border-[#FFC837]/30 flex items-center justify-center text-[#FFC837] group-hover:bg-[#FFC837] group-hover:text-[#0e0e11] group-hover:border-[#FFC837] transition-all duration-300 shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className="mt-6 block text-[10px] font-mono font-bold tracking-widest text-[#FFC837]/80">
                    0{idx + 1}
                  </span>

                  <h3 className="mt-1 font-display font-black text-lg text-[#FAF7F2] tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#D1C7BA] font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[10px] uppercase font-bold tracking-wider text-[#FFC837] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Guaranteed Hospitality</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
