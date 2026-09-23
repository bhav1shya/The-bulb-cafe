import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Sparkles,
  Utensils,
  Star,
  Flame,
  Calendar,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Coffee,
  Bookmark,
  Check,
} from 'lucide-react';
import { FULL_MENU_ITEMS } from '../data/bulbCafeData';
import { MenuCategoryId, MenuItem } from '../types';

interface FullMenuProps {
  activeCategory: MenuCategoryId;
  onCategoryChange: (category: MenuCategoryId) => void;
  onReserveClick: () => void;
}

// Defined Chapters of the Bulb Café Menu Book
interface MenuChapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  leftCategoryTitle: string;
  leftCategories: MenuCategoryId[];
  rightCategoryTitle: string;
  rightCategories: MenuCategoryId[];
}

const MENU_CHAPTERS: MenuChapter[] = [
  {
    id: 'breakfast-street',
    number: 1,
    title: 'Morning & Street',
    subtitle: 'Breakfast & Street Style Chaat',
    leftCategoryTitle: 'Morning Breakfast & Poha',
    leftCategories: ['breakfast'],
    rightCategoryTitle: 'Street Style & Quick Chaat',
    rightCategories: ['street-style'],
  },
  {
    id: 'maggi-bread',
    number: 2,
    title: 'Maggi & Toast',
    subtitle: 'Maggi Station & Garlic Breads',
    leftCategoryTitle: 'Maggi Station',
    leftCategories: ['maggi'],
    rightCategoryTitle: 'Garlic Bread & Cheesy Toast',
    rightCategories: ['garlic-bread'],
  },
  {
    id: 'sandwiches-burgers',
    number: 3,
    title: 'Sandwiches & Burgers',
    subtitle: 'Bombay Grilled & Crispy Burgers',
    leftCategoryTitle: 'Bombay Grilled Sandwiches',
    leftCategories: ['sandwich'],
    rightCategoryTitle: 'Fries & Signature Burgers',
    rightCategories: ['fries-burger'],
  },
  {
    id: 'rolls-chinese',
    number: 4,
    title: 'Rolls & Chinese',
    subtitle: 'Kathi Rolls & Ching Chang Chinese',
    leftCategoryTitle: 'Crispy Kathi Rolls',
    leftCategories: ['rolls'],
    rightCategoryTitle: 'Ching Chang Chinese & Momos',
    rightCategories: ['chinese'],
  },
  {
    id: 'shakes-beverages',
    number: 5,
    title: 'Shakes & Beverages',
    subtitle: 'Thick Shakes, Slush & Kullad Chai',
    leftCategoryTitle: 'Thick Shakes & Slush',
    leftCategories: ['shakes-slush'],
    rightCategoryTitle: 'Artisan Hot & Cold Beverages',
    rightCategories: ['beverages'],
  },
  {
    id: 'desserts-bowls',
    number: 6,
    title: 'Desserts & Bowls',
    subtitle: 'Sizzlers, Brownies & Meal Bowls',
    leftCategoryTitle: 'Sizzling Desserts & Waffles',
    leftCategories: ['desserts'],
    rightCategoryTitle: 'Bulbicious Meal Bowls',
    rightCategories: ['bulbicious-bowls'],
  },
  {
    id: 'tandoori-thali',
    number: 7,
    title: 'Tandoori & Thali',
    subtitle: 'Tikka Starters, Combos & Thalis',
    leftCategoryTitle: 'Tandoori Starters & Tikka',
    leftCategories: ['tandoori'],
    rightCategoryTitle: 'Café Combos & Executive Thali',
    rightCategories: ['combos', 'thali'],
  },
];

export const FullMenu: React.FC<FullMenuProps> = ({
  activeCategory,
  onCategoryChange,
  onReserveClick,
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [mustTryOnly, setMustTryOnly] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  // Sync activeCategory prop with chapter selection
  useEffect(() => {
    if (activeCategory === 'all') return;
    const foundChapterIdx = MENU_CHAPTERS.findIndex(
      (ch) =>
        ch.leftCategories.includes(activeCategory) ||
        ch.rightCategories.includes(activeCategory)
    );
    if (foundChapterIdx !== -1 && foundChapterIdx !== currentChapterIndex) {
      triggerPageFlip(foundChapterIdx);
    }
  }, [activeCategory]);

  const triggerPageFlip = (newIndex: number) => {
    setIsFlipping(true);
    setCurrentChapterIndex(newIndex);
    setTimeout(() => {
      setIsFlipping(false);
    }, 450);
  };

  const goToNextPage = () => {
    if (currentChapterIndex < MENU_CHAPTERS.length - 1) {
      triggerPageFlip(currentChapterIndex + 1);
    } else {
      triggerPageFlip(0); // loop to beginning
    }
  };

  const goToPrevPage = () => {
    if (currentChapterIndex > 0) {
      triggerPageFlip(currentChapterIndex - 1);
    } else {
      triggerPageFlip(MENU_CHAPTERS.length - 1); // loop to end
    }
  };

  const currentChapter = MENU_CHAPTERS[currentChapterIndex];

  // If search or mustTryOnly is active, filter all items
  const isSearchActive = searchQuery.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!isSearchActive && !mustTryOnly) return [];
    return FULL_MENU_ITEMS.filter((item) => {
      const matchesSearch =
        !isSearchActive ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMustTry = mustTryOnly ? item.isMustTry : true;

      return matchesSearch && matchesMustTry;
    });
  }, [searchQuery, isSearchActive, mustTryOnly]);

  // Current chapter items
  const leftPageItems = useMemo(() => {
    return FULL_MENU_ITEMS.filter(
      (item) =>
        currentChapter.leftCategories.includes(item.category) &&
        (!mustTryOnly || item.isMustTry)
    );
  }, [currentChapter, mustTryOnly]);

  const rightPageItems = useMemo(() => {
    return FULL_MENU_ITEMS.filter(
      (item) =>
        currentChapter.rightCategories.includes(item.category) &&
        (!mustTryOnly || item.isMustTry)
    );
  }, [currentChapter, mustTryOnly]);

  return (
    <section
      id="menu"
      className="relative bg-[#0e0e11] py-20 lg:py-28 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow & atmospheric float particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#FFC837]/10 rounded-full filter blur-[140px]" />
        
        {/* Floating background decorative badges */}
        <div className="hidden xl:block absolute top-24 left-10 animate-float-element">
          <div className="px-4 py-2 rounded-xl bg-[#151519]/90 border border-[#FFC837]/30 shadow-2xl backdrop-blur-md flex items-center space-x-2 text-xs text-[#FFC837]">
            <Sparkles className="w-4 h-4 text-[#FFC837]" />
            <span className="font-semibold tracking-wide">100% Pure Vegetarian</span>
          </div>
        </div>

        <div className="hidden xl:block absolute top-40 right-12 animate-float-element [animation-delay:2.5s]">
          <div className="px-4 py-2 rounded-xl bg-[#151519]/90 border border-[#FFC837]/30 shadow-2xl backdrop-blur-md flex items-center space-x-2 text-xs text-[#FAF7F2]">
            <Coffee className="w-4 h-4 text-[#FFC837]" />
            <span className="font-semibold tracking-wide">Artisan Kullad Chai & Shakes</span>
          </div>
        </div>

        <div className="hidden xl:block absolute bottom-28 left-16 animate-float-element [animation-delay:1.5s]">
          <div className="px-4 py-2 rounded-xl bg-[#151519]/90 border border-[#FFC837]/30 shadow-2xl backdrop-blur-md flex items-center space-x-2 text-xs text-[#FAF7F2]">
            <Star className="w-4 h-4 text-[#FFC837] fill-[#FFC837]" />
            <span className="font-semibold tracking-wide">Rated 4.7 ★ (610+ Reviews)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC837] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>BULB CAFÉ CULINARY JOURNAL</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#FAF7F2] tracking-tight">
            The Menu Book
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D1C7BA] font-light max-w-xl mx-auto">
            Flip through our handcrafted kitchen recipes, fresh comfort bites, and signature vintage brews.
          </p>
        </div>

        {/* Quick Search & Filter Controls */}
        <div className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full flex-1">
            <Search className="w-4 h-4 text-[#D1C7BA] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all pages (e.g., Kurkure Momo, Nutella Shake, Vada Pav)..."
              className="w-full bg-[#151519] border border-white/10 focus:border-[#FFC837] text-xs sm:text-sm text-[#FAF7F2] placeholder-[#D1C7BA]/50 rounded-xl pl-10 pr-4 py-3 outline-none transition-colors shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#D1C7BA] hover:text-[#FAF7F2] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <button
            onClick={() => setMustTryOnly(!mustTryOnly)}
            className={`w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg ${
              mustTryOnly
                ? 'bg-[#FFC837] text-[#0e0e11]'
                : 'bg-[#151519] border border-white/10 text-[#D1C7BA] hover:text-[#FAF7F2] hover:border-[#FFC837]/40'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${mustTryOnly ? 'fill-current' : ''}`} />
            <span>Must-Try Only</span>
          </button>
        </div>

        {/* Bookmark Tabs Along the Top (Table of Contents ribbons) */}
        {!isSearchActive && (
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none snap-x">
            {MENU_CHAPTERS.map((ch, idx) => {
              const isActive = currentChapterIndex === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => triggerPageFlip(idx)}
                  className={`px-3 py-2 rounded-t-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer snap-start flex items-center space-x-1.5 border-t border-x ${
                    isActive
                      ? 'bg-[#1c1c23] text-[#FFC837] border-[#FFC837]/60 shadow-lg -translate-y-1'
                      : 'bg-[#151519]/80 text-[#D1C7BA]/70 border-white/5 hover:text-[#FAF7F2] hover:bg-[#1a1a20]'
                  }`}
                >
                  <span className="text-[10px] text-[#FFC837] font-mono">0{ch.number}</span>
                  <span>{ch.title}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* ================= THE FLOATING MENU BOOK ================= */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Gentle Floating Shadow underneath the book */}
          <div className="absolute -bottom-6 left-8 right-8 h-10 bg-black/80 rounded-[50%] filter blur-xl animate-shadow-pulse pointer-events-none" />

          {/* Book Wrapper with Floating Animation */}
          <div className="relative animate-book-float transition-transform duration-700">
            
            {/* Outer Leather Hardcover Rim */}
            <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-[#18181f] via-[#121216] to-[#0c0c0f] border-2 border-[#FFC837]/35 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
              
              {/* Metallic Brass Corner Rivets */}
              <div className="absolute top-2 left-2 w-4 h-4 rounded-tl-lg border-t-2 border-l-2 border-[#FFC837]/80 pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 rounded-tr-lg border-t-2 border-r-2 border-[#FFC837]/80 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 rounded-bl-lg border-b-2 border-l-2 border-[#FFC837]/80 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-br-lg border-b-2 border-r-2 border-[#FFC837]/80 pointer-events-none" />

              {/* Golden Bookmark Ribbon Hanging Down from the Center Spine */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center pointer-events-none">
                <div className="w-5 h-14 bg-gradient-to-b from-[#FFC837] to-[#F5A623] shadow-md relative">
                  {/* Ribbon notch cut at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#18181f] [clip-path:polygon(0_100%,50%_0,100%_100%)]" />
                </div>
              </div>

              {/* Book Pages Spread Interior */}
              <div
                className={`relative rounded-xl sm:rounded-2xl bg-[#15151b] border border-white/5 overflow-hidden transition-all duration-300 ${
                  isFlipping ? 'animate-page-turn' : ''
                }`}
              >
                {/* Center Spine Crease / Fold Shadow (Generates 3D Open Book Impression) */}
                <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/40 via-black/70 to-black/40 z-20 pointer-events-none" />
                <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#FFC837]/20 z-20 pointer-events-none" />

                {/* SEARCH RESULTS VIEW (if searching across all pages) */}
                {isSearchActive ? (
                  <div className="p-6 sm:p-10 min-h-[460px]">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFC837]">
                          SEARCH RESULTS
                        </span>
                        <h3 className="font-display font-black text-xl sm:text-2xl text-[#FAF7F2]">
                          Found {searchResults.length} matching dishes
                        </h3>
                      </div>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-xs text-[#FFC837] hover:underline font-semibold cursor-pointer"
                      >
                        Back to Book Pages
                      </button>
                    </div>

                    {searchResults.length === 0 ? (
                      <div className="py-16 text-center">
                        <Utensils className="w-10 h-10 text-[#FFC837]/40 mx-auto mb-3" />
                        <p className="text-sm font-semibold text-[#FAF7F2]">No dishes match "{searchQuery}"</p>
                        <p className="text-xs text-[#D1C7BA] mt-1">Try another keyword or browse our chapters below.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {searchResults.map((item) => (
                          <MenuItemRow key={item.id} item={item} onOrderClick={onReserveClick} />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* REGULAR 2-PAGE SPREAD VIEW */
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
                    
                    {/* ===== LEFT PAGE ===== */}
                    <div className="p-6 sm:p-8 lg:p-10 lg:pr-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative bg-[#15151b]">
                      <div>
                        {/* Page Header */}
                        <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC837]/80">
                              PAGE {currentChapter.number * 2 - 1} · {currentChapter.title}
                            </span>
                            <h3 className="font-display font-black text-lg sm:text-xl text-[#FAF7F2] mt-0.5">
                              {currentChapter.leftCategoryTitle}
                            </h3>
                          </div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D1C7BA]/50">
                            BULB CAFÉ
                          </span>
                        </div>

                        {/* Left Page Items */}
                        <div className="space-y-4">
                          {leftPageItems.map((item) => (
                            <MenuItemRow key={item.id} item={item} onOrderClick={onReserveClick} />
                          ))}
                        </div>
                      </div>

                      {/* Left Page Footer Quote & Page Number */}
                      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D1C7BA]/60">
                        <span className="font-script text-sm text-[#FFC837]/80">“Handcrafted with warmth”</span>
                        <span className="font-mono tracking-widest text-[#FAF7F2]">-{currentChapter.number * 2 - 1}-</span>
                      </div>
                    </div>

                    {/* ===== RIGHT PAGE ===== */}
                    <div className="p-6 sm:p-8 lg:p-10 lg:pl-12 flex flex-col justify-between relative bg-[#16161d]">
                      <div>
                        {/* Page Header */}
                        <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC837]/80">
                              PAGE {currentChapter.number * 2} · {currentChapter.title}
                            </span>
                            <h3 className="font-display font-black text-lg sm:text-xl text-[#FAF7F2] mt-0.5">
                              {currentChapter.rightCategoryTitle}
                            </h3>
                          </div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D1C7BA]/50">
                            JAIPUR
                          </span>
                        </div>

                        {/* Right Page Items */}
                        <div className="space-y-4">
                          {rightPageItems.map((item) => (
                            <MenuItemRow key={item.id} item={item} onOrderClick={onReserveClick} />
                          ))}
                        </div>
                      </div>

                      {/* Right Page Footer & Page Number */}
                      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D1C7BA]/60">
                        <span className="font-mono tracking-widest text-[#FAF7F2]">-{currentChapter.number * 2}-</span>
                        <span className="font-script text-sm text-[#FFC837]/80">“Good food, great vibe”</span>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            </div>

          </div>

          {/* ================= PAGE TURNING CONTROLS ================= */}
          {!isSearchActive && (
            <div className="mt-8 flex items-center justify-between gap-4 px-2">
              {/* Previous Page Button */}
              <button
                onClick={goToPrevPage}
                className="px-4 py-2.5 rounded-xl bg-[#151519] hover:bg-[#1f1f26] border border-white/10 hover:border-[#FFC837]/50 text-xs font-bold uppercase tracking-wider text-[#FAF7F2] hover:text-[#FFC837] transition-all flex items-center space-x-2 cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 text-[#FFC837]" />
                <span className="hidden sm:inline">Previous Page</span>
                <span className="sm:hidden">Prev</span>
              </button>

              {/* Current Spread Indicator */}
              <div className="text-center">
                <span className="font-display font-bold text-xs sm:text-sm text-[#FAF7F2] block">
                  Chapter {currentChapter.number} of {MENU_CHAPTERS.length}
                </span>
                <span className="text-[11px] text-[#FFC837] tracking-wider">
                  {currentChapter.subtitle}
                </span>
              </div>

              {/* Next Page Button */}
              <button
                onClick={goToNextPage}
                className="px-4 py-2.5 rounded-xl bg-[#FFC837] hover:bg-[#F5A623] text-xs font-bold uppercase tracking-wider text-[#0e0e11] transition-all flex items-center space-x-2 cursor-pointer shadow-lg active:scale-95"
              >
                <span className="hidden sm:inline">Next Page</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

        {/* Bottom Menu Table Reservation Strip */}
        <div className="mt-14 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#181820] via-[#121216] to-[#181820] border border-[#FFC837]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-[#FAF7F2]">
              Found what you crave?
            </h4>
            <p className="text-xs text-[#D1C7BA] mt-0.5 font-light">
              Reserve your table at Bulb Café Mansarovar or walk in today. Open 10 AM to 11 PM.
            </p>
          </div>

          <button
            onClick={onReserveClick}
            className="px-6 py-3 rounded-lg bg-[#FFC837] hover:bg-[#F5A623] text-[#0e0e11] font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 shrink-0 cursor-pointer shadow-md active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#0e0e11]" />
            <span>Reserve a Table</span>
          </button>
        </div>

      </div>
    </section>
  );
};

// Sub-component for individual item row with classic book styling
interface MenuItemRowProps {
  item: MenuItem;
  onOrderClick: () => void;
}

const MenuItemRow: React.FC<MenuItemRowProps> = ({ item, onOrderClick }) => {
  return (
    <div className="group relative py-2.5 px-3 rounded-lg hover:bg-white/[0.03] transition-colors border-b border-white/5 last:border-b-0">
      <div className="flex items-baseline justify-between gap-2">
        {/* Left: Veg Dot + Name + Badges */}
        <div className="flex items-center space-x-2 flex-wrap gap-y-1 flex-1">
          <span className="w-3 h-3 rounded-sm border border-emerald-500/80 flex items-center justify-center p-0.5 shrink-0" title="Pure Veg">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </span>

          <h4 className="font-display font-bold text-sm sm:text-base text-[#FAF7F2] group-hover:text-[#FFC837] transition-colors leading-snug">
            {item.name}
          </h4>

          {item.isMustTry && (
            <span className="text-[9px] uppercase font-bold tracking-wider text-[#FFC837] flex items-center space-x-0.5 bg-[#FFC837]/10 px-1.5 py-0.5 rounded border border-[#FFC837]/30">
              <Star className="w-2 h-2 fill-current" />
              <span>Must Try</span>
            </span>
          )}

          {item.isSpicy && (
            <span className="text-[9px] uppercase font-bold tracking-wider text-amber-400 flex items-center space-x-0.5 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
              <Flame className="w-2 h-2" />
              <span>Spicy</span>
            </span>
          )}
        </div>

        {/* Dotted Leader Line in Classic Menu Book Style */}
        <div className="hidden sm:block flex-1 border-b border-dotted border-white/20 mx-2 mb-1" />

        {/* Right: Price */}
        <div className="shrink-0 text-right">
          <span className="font-display font-black text-sm sm:text-base text-[#FFC837] tabular-nums">
            {item.price}
          </span>
        </div>
      </div>

      {/* Description & Order Trigger */}
      <div className="mt-1 flex items-center justify-between text-xs">
        {item.description ? (
          <p className="text-[11px] text-[#D1C7BA]/80 font-light line-clamp-1 flex-1 pr-2">
            {item.description}
          </p>
        ) : (
          <span />
        )}
        <button
          onClick={onOrderClick}
          className="text-[10px] uppercase font-bold tracking-wider text-[#FFC837]/80 hover:text-[#FFC837] hover:underline cursor-pointer shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Taste This
        </button>
      </div>
    </div>
  );
};
