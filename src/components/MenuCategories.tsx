import React from 'react';
import { ArrowRight, Utensils } from 'lucide-react';
import { MENU_CATEGORIES_PREVIEW } from '../data/bulbCafeData';
import { MenuCategoryId } from '../types';

interface MenuCategoriesProps {
  onSelectCategory: (categoryId: MenuCategoryId) => void;
  onViewFullMenu: () => void;
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  onSelectCategory,
  onViewFullMenu,
}) => {
  return (
    <section id="menu-categories" className="relative bg-[#0e0e11] py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC837] block">
              OUR MENU
            </span>
            <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] tracking-tight text-balance">
              Flavours for <span className="text-[#FFC837]">Every Mood</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#D1C7BA] font-light leading-relaxed">
              From comforting breakfasts to tasty bites, refreshing drinks and indulgent desserts — there is something for everyone.
            </p>
          </div>

          <button
            onClick={onViewFullMenu}
            className="self-start md:self-auto px-5 py-2.5 rounded-lg bg-[#1c1c22] border border-[#FFC837]/30 hover:border-[#FFC837] text-xs font-bold uppercase tracking-wider text-[#FAF7F2] hover:text-[#FFC837] flex items-center space-x-2 transition-all cursor-pointer group shadow-sm"
          >
            <span>View All Items</span>
            <ArrowRight className="w-4 h-4 text-[#FFC837] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 10 Category Cards Grid (Horizontal scroll on mobile, responsive grid on md/lg) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x">
          {MENU_CATEGORIES_PREVIEW.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group min-w-[260px] sm:min-w-[280px] md:min-w-0 snap-center bg-[#151519] border border-white/5 hover:border-[#FFC837]/60 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FFC837]/10 flex flex-col justify-between"
            >
              {/* Category Food Image with slow zoom on hover */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#1c1c22]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center brightness-[0.85] group-hover:brightness-95 group-hover:scale-108 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151519] via-transparent to-transparent opacity-80" />

                {/* Subtle category count unboxed */}
                <span className="absolute top-3 right-3 text-[10px] font-mono font-medium text-[#FAF7F2]/80 bg-[#0e0e11]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                  {cat.itemCount} items
                </span>
              </div>

              {/* Text info and arrow button */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#FAF7F2] group-hover:text-[#FFC837] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#D1C7BA] font-light leading-snug">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#FFC837]">
                  <span className="group-hover:underline">Explore dishes</span>
                  <div className="w-7 h-7 rounded-full bg-[#1c1c22] border border-[#FFC837]/20 flex items-center justify-center text-[#FFC837] group-hover:border-[#FFC837] group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
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
