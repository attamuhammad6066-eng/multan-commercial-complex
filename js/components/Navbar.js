const Navbar = ({ darkMode, setDarkMode, setVisitModalOpen, onWhatsAppClick, data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-slate-950 px-4 py-2 text-xs md:text-sm font-semibold text-center flex items-center justify-center gap-2 shadow-inner whitespace-nowrap overflow-x-auto">
        <span className="bg-black text-amber-300 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider whitespace-nowrap">MDA Approved</span>
        <span className="whitespace-nowrap">Triple Story Commercial Units on Bosan Road • Ready for Business Fit-out</span>
        <button 
          onClick={() => onWhatsAppClick("Assalam o Alaikum, I want details about MCC special broker / investor package.")} 
          className="hidden lg:inline-flex items-center gap-1 underline font-bold hover:text-black ml-2 whitespace-nowrap"
        >
          Special Package Offered for Agents & Brokers <Icon name="ArrowRight" size={14} />
        </button>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${darkMode ? 'glass-panel-dark' : 'glass-panel-light'} border-b`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Title in single line */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-400/40 p-0.5 bg-gradient-to-br from-amber-500/20 to-slate-900 flex items-center justify-center shadow-lg group-hover:border-amber-400 transition-colors flex-shrink-0">
              <img src="images/mcc_logo_dark.jpg" alt="MCC Seyalz Logo" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-display font-black text-lg md:text-xl lg:text-2xl tracking-tight uppercase bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent whitespace-nowrap">
                  MCC MULTAN
                </span>
                <span className="text-[10px] uppercase tracking-widest font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded whitespace-nowrap">
                  Seyalz
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-wide text-slate-400 whitespace-nowrap">Multan Commercial Complex</p>
            </div>
          </a>

          {/* Desktop Nav Links - Single Line No Wrap */}
          <nav className="hidden xl:flex items-center gap-5 lg:gap-6 2xl:gap-8 text-sm font-medium whitespace-nowrap">
            <a href="#overview" className="hover:text-amber-400 transition-colors whitespace-nowrap">Overview</a>
            <a href="#location" className="hover:text-amber-400 transition-colors whitespace-nowrap">Location</a>
            <a href="#offerings" className="hover:text-amber-400 transition-colors whitespace-nowrap">Commercial Units</a>
            <a href="#amenities" className="hover:text-amber-400 transition-colors whitespace-nowrap">Amenities</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors whitespace-nowrap">Gallery</a>
            <a href="#roi-calculator" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-400 font-semibold whitespace-nowrap">
              <Icon name="Calculator" size={15} />
              <span className="whitespace-nowrap">ROI Calculator</span>
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors whitespace-nowrap">Contact</a>
          </nav>

          {/* Desktop Actions - Single Line No Wrap */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3 flex-shrink-0">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-xl border transition-colors flex-shrink-0 ${darkMode ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'}`}
            >
              <Icon name={darkMode ? "Sun" : "Moon"} size={17} />
            </button>

            <a 
              href={`tel:${data.project.phone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold border border-slate-700 bg-slate-900/60 hover:border-amber-400 hover:text-amber-300 transition-all whitespace-nowrap flex-shrink-0"
            >
              <Icon name="PhoneCall" size={14} className="text-amber-400 flex-shrink-0" />
              <span className="whitespace-nowrap tracking-wide">{data.project.phone}</span>
            </a>

            <button
              onClick={() => setVisitModalOpen(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 transition-all transform active:scale-95 whitespace-nowrap flex-shrink-0"
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center gap-2">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-200 border-slate-300 text-slate-800'}`}
            >
              <Icon name={darkMode ? "Sun" : "Moon"} size={16} />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-amber-400 border border-slate-700 bg-slate-800"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`xl:hidden px-6 py-6 border-b animate-modal ${darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'}`}>
            <div className="flex flex-col gap-4 text-base font-medium">
              <a onClick={() => setMobileMenuOpen(false)} href="#overview" className="hover:text-amber-400 py-1 whitespace-nowrap">Project Overview</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#location" className="hover:text-amber-400 py-1 whitespace-nowrap">Strategic Location</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#offerings" className="hover:text-amber-400 py-1 whitespace-nowrap">Commercial Halls & Retail Shops</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#amenities" className="hover:text-amber-400 py-1 whitespace-nowrap">Key Features & Amenities</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#gallery" className="hover:text-amber-400 py-1 whitespace-nowrap">Photo Gallery & Lightbox</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#roi-calculator" className="hover:text-amber-400 py-1 text-amber-400 flex items-center gap-2 whitespace-nowrap">
                <Icon name="Calculator" size={18} /> <span>Investment ROI Calculator</span>
              </a>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="hover:text-amber-400 py-1 whitespace-nowrap">Inquiry & Contact</a>
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); setVisitModalOpen(true); }}
                  className="w-full py-3 rounded-xl text-center font-bold bg-amber-500 text-slate-950 whitespace-nowrap"
                >
                  Book a Site Visit
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onWhatsAppClick(); }}
                  className="w-full py-3 rounded-xl text-center font-bold bg-emerald-600 text-white flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Icon name="MessageCircle" size={18} /> <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

window.Navbar = Navbar;