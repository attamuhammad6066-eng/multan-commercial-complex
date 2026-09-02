const Modals = ({
  lightboxIndex,
  setLightboxIndex,
  filteredGallery,
  visitModalOpen,
  setVisitModalOpen,
  inquiryModalOpen,
  setInquiryModalOpen,
  selectedUnit,
  setSelectedUnit,
  brochureModalOpen,
  setBrochureModalOpen,
  showToast,
  onWhatsAppClick
}) => {
  return (
    <>
      {/* FULLSCREEN LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center animate-modal p-4">
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
          >
            <Icon name="X" size={24} />
          </button>

          <button 
            onClick={() => setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length)}
            className="absolute left-6 z-50 w-12 h-12 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>

          <button 
            onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)}
            className="absolute right-6 z-50 w-12 h-12 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
          >
            <Icon name="ChevronRight" size={24} />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img 
              src={filteredGallery[lightboxIndex].image} 
              alt={filteredGallery[lightboxIndex].title} 
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-slate-700"
            />
            <div className="text-center mt-4 text-white max-w-2xl">
              <span className="text-xs uppercase font-extrabold tracking-wider bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full inline-block mb-1.5">
                {filteredGallery[lightboxIndex].category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold">{filteredGallery[lightboxIndex].title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{filteredGallery[lightboxIndex].caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* SITE VISIT BOOKING MODAL */}
      {visitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-modal">
          <div className="relative w-full max-w-md bg-slate-900 border-2 border-amber-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
            <button 
              onClick={() => setVisitModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Icon name="CalendarCheck" size={24} />
            </div>

            <h3 className="font-display font-extrabold text-2xl mb-1">Book Site Visit</h3>
            <p className="text-xs text-slate-400 mb-6">Schedule an exclusive guided walkthrough of Multan Commercial Complex with our project managers.</p>

            <form onSubmit={(e) => {
              e.preventDefault();
              setVisitModalOpen(false);
              showToast("Site visit booked! Our representative will confirm your appointment shortly.");
            }} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Your Name</label>
                <input required type="text" placeholder="Full Name" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-amber-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Phone / WhatsApp</label>
                <input required type="tel" placeholder="0300 6367424" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-amber-400 focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Preferred Date</label>
                  <input required type="date" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-amber-400 focus:outline-none text-slate-200" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Preferred Time</label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-amber-400 focus:outline-none text-slate-200">
                    <option>Morning (10 AM - 1 PM)</option>
                    <option>Afternoon (2 PM - 5 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 mt-4 transition-all"
              >
                Confirm Appointment Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* UNIT INQUIRY MODAL */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-modal">
          <div className="relative w-full max-w-md bg-slate-900 border-2 border-amber-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
            <button 
              onClick={() => { setInquiryModalOpen(false); setSelectedUnit(null); }}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Icon name="MessageSquare" size={24} />
            </div>

            <h3 className="font-display font-extrabold text-2xl mb-1">
              {selectedUnit ? `Inquire: ${selectedUnit.name}` : "Commercial Unit Inquiry"}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {selectedUnit ? `Dimensions: ${selectedUnit.area || 'Standard'}` : "Select your commercial unit size & receive instant pricing details."}
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              setInquiryModalOpen(false);
              setSelectedUnit(null);
              showToast("Inquiry recorded! Our sales team is preparing the rate breakdown for you.");
            }} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Your Name</label>
                <input required type="text" placeholder="Full Name" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-amber-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Phone / WhatsApp</label>
                <input required type="tel" placeholder="0300 6367424" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm focus:border-amber-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Interested Unit</label>
                <input readOnly value={selectedUnit ? selectedUnit.name : "Retail / Commercial Hall"} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-sm text-amber-300 font-semibold" />
              </div>

              <div className="flex gap-2 pt-2">
                <button 
                  type="submit"
                  className="flex-1 py-3 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all"
                >
                  Send Inquiry
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    const unitTitle = selectedUnit ? selectedUnit.name : "MCC Commercial Unit";
                    onWhatsAppClick(`Assalam o Alaikum, please send me pricing and floor plan details for ${unitTitle} at MCC.`);
                  }}
                  className="px-4 py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-1.5"
                >
                  <Icon name="MessageCircle" size={16} /> WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* BROCHURE DOWNLOAD MODAL */}
      {brochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-modal">
          <div className="relative w-full max-w-md bg-slate-900 border-2 border-amber-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-white text-center">
            <button 
              onClick={() => setBrochureModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <Icon name="FileDown" size={32} />
            </div>

            <h3 className="font-display font-extrabold text-2xl mb-1">Download E-Brochure</h3>
            <p className="text-xs text-slate-400 mb-6">
              Get the complete Multan Commercial Complex (MCC) brochure including floor layouts, payment schedule, and architectural specifications.
            </p>

            <div className="space-y-3">
              <button 
                onClick={() => {
                  setBrochureModalOpen(false);
                  showToast("Multan Commercial Complex Brochure downloaded successfully!");
                  window.open("images/mcc_poster_1.jpg", "_blank");
                }}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg flex items-center justify-center gap-2"
              >
                <Icon name="Download" size={18} /> Download Project Brochure (PDF)
              </button>

              <button 
                onClick={() => {
                  setBrochureModalOpen(false);
                  onWhatsAppClick("Hello, please send the official Multan Commercial Complex (MCC) PDF brochure and payment plan directly to my WhatsApp.");
                }}
                className="w-full py-3 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 flex items-center justify-center gap-2"
              >
                <Icon name="MessageCircle" size={16} /> Receive via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

window.Modals = Modals;