import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bulbCafeData';
import { ReservationFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    guests: '2 People',
    specialRequest: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'BC-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(randomCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0e0e11]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#151519] border border-[#FFC837]/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#1c1c22] text-[#D1C7BA] hover:text-[#FAF7F2] hover:bg-[#25252e] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#FFC837] mb-2">
              <Calendar className="w-4 h-4" />
              <span>TABLE RESERVATION</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#FAF7F2]">
              Reserve Your Table
            </h3>

            <p className="mt-1 text-xs text-[#D1C7BA] font-light">
              Join us at Bulb Café Mansarovar. Open 10:00 AM – 11:00 PM daily.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1C7BA] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1c22] border border-white/10 focus:border-[#FFC837] text-xs sm:text-sm text-[#FAF7F2] outline-none transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1C7BA] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 098765 43210"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1c22] border border-white/10 focus:border-[#FFC837] text-xs sm:text-sm text-[#FAF7F2] outline-none transition-colors font-mono"
                />
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1C7BA] mb-1.5">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#1c1c22] border border-white/10 focus:border-[#FFC837] text-xs sm:text-sm text-[#FAF7F2] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1C7BA] mb-1.5">
                    Time Slot *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#1c1c22] border border-white/10 focus:border-[#FFC837] text-xs sm:text-sm text-[#FAF7F2] outline-none transition-colors"
                  >
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="17:00">05:00 PM (Snacks & Tea)</option>
                    <option value="18:00">06:00 PM (Evening)</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="20:00">08:00 PM (Dinner)</option>
                    <option value="21:00">09:00 PM</option>
                    <option value="22:00">10:00 PM (Late Night)</option>
                  </select>
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1C7BA] mb-1.5">
                  Party Size
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#1c1c22] border border-white/10 focus:border-[#FFC837] text-xs sm:text-sm text-[#FAF7F2] outline-none transition-colors"
                >
                  <option value="1 Person">1 Person (Solo relaxation)</option>
                  <option value="2 People">2 People (Date / Cozy table)</option>
                  <option value="3-4 People">3–4 People (Small group)</option>
                  <option value="5-8 People">5–8 People (Friends & Family)</option>
                  <option value="9+ People">9+ People (Large gathering / Celebration)</option>
                </select>
              </div>

              {/* Special Note */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1C7BA] mb-1.5">
                  Special Occasion or Preferences (Optional)
                </label>
                <input
                  type="text"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  placeholder="e.g. Birthday celebration, near the window, corner sofa..."
                  className="w-full px-3.5 py-2 rounded-lg bg-[#1c1c22] border border-white/10 focus:border-[#FFC837] text-xs text-[#FAF7F2] outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-3 py-3.5 rounded-lg bg-[#FFC837] hover:bg-[#F5A623] text-[#0e0e11] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl cursor-pointer active:scale-98 flex items-center justify-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm Reservation</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#FFC837]/20 border border-[#FFC837] flex items-center justify-center text-[#FFC837] mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <span className="text-xs uppercase font-bold tracking-widest text-[#FFC837]">
              BOOKING CONFIRMED
            </span>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#FAF7F2] mt-1">
              See You at Bulb Café!
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#D1C7BA] font-light max-w-sm mx-auto">
              Thank you, <strong className="text-[#FAF7F2]">{formData.name}</strong>. Your table reservation has been recorded.
            </p>

            {/* Booking Details Box */}
            <div className="my-6 p-4 rounded-xl bg-[#1c1c22] border border-white/10 text-left space-y-2 text-xs text-[#D1C7BA]">
              <div className="flex justify-between">
                <span>Confirmation ID:</span>
                <strong className="text-[#FFC837] font-mono">{confirmationCode}</strong>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="text-[#FAF7F2] font-semibold">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span>Guests:</span>
                <span className="text-[#FAF7F2]">{formData.guests}</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-[#FAF7F2] text-right">Mansarovar Sector 7, Jaipur</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 py-3 rounded-lg bg-[#1c1c22] border border-[#FFC837]/40 text-xs font-bold uppercase tracking-wider text-[#FAF7F2] hover:text-[#FFC837] flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFC837]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-lg bg-[#FFC837] text-xs font-bold uppercase tracking-wider text-[#0e0e11] hover:bg-[#F5A623]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
