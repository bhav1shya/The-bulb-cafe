import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuCategories } from './components/MenuCategories';
import { FullMenu } from './components/FullMenu';
import { FeaturedFood } from './components/FeaturedFood';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { MenuCategoryId } from './types';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState<MenuCategoryId>('all');

  const handleOpenReserve = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseReserve = () => {
    setIsBookingModalOpen(false);
  };

  const handleSelectCategoryFromPreview = (categoryId: MenuCategoryId) => {
    setActiveMenuCategory(categoryId);
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e11] text-[#FAF7F2] flex flex-col selection:bg-[#FFC837]/30 selection:text-[#FFFFFF]">
      {/* 1. Sticky Navigation Header */}
      <Navbar onReserveClick={handleOpenReserve} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Cinematic Hero */}
        <Hero
          onExploreMenuClick={handleScrollToMenu}
          onReserveClick={handleOpenReserve}
        />

        {/* 3. 10 Menu Categories Preview Strip */}
        <MenuCategories
          onSelectCategory={handleSelectCategoryFromPreview}
          onViewFullMenu={handleScrollToMenu}
        />

        {/* 4. Full Interactive Menu with Search & Category Tabs */}
        <FullMenu
          activeCategory={activeMenuCategory}
          onCategoryChange={setActiveMenuCategory}
          onReserveClick={handleOpenReserve}
        />

        {/* 5. Must-Try Signature Food Items */}
        <FeaturedFood onReserveClick={handleOpenReserve} />

        {/* 6. Photo Gallery & Lightbox */}
        <GallerySection />

        {/* 7. About Bulb Cafe Story & Warm Vibe */}
        <AboutSection onReserveClick={handleOpenReserve} />

        {/* 8. Why Visit Bulb Cafe: 4 Pillars */}
        <FeaturesSection />

        {/* 9. Verified Reviews (4.7 ★★★★★ / 610+ Reviews) */}
        <ReviewsSection />

        {/* 10. Mansarovar Location, Timings & Interactive Map */}
        <LocationSection onReserveClick={handleOpenReserve} />

        {/* 11. Large Pre-Footer Table Reservation CTA */}
        <ReservationSection onReserveClick={handleOpenReserve} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Mobile Bottom Sticky Bar & Desktop Floating Call */}
      <FloatingActions
        onReserveClick={handleOpenReserve}
        onMenuClick={handleScrollToMenu}
      />

      {/* 14. Online Table Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseReserve}
      />
    </div>
  );
}

export default App;
