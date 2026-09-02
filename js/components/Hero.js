const Hero = ({ data, setVisitModalOpen, setBrochureModalOpen }) => {
  return (
    <>
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img 
            src="images/mcc_main_facade.jpg" 
            alt="Multan Commercial Complex Main Facade" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-all duration-1000"
          />
          <div className="absolute inset-0 hero-radial-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-[#080D1A]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#080D1A]/90 via-[#080D1A]/40 to-transparent"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="gold-badge animate-float">
                <Icon name="Sparkles" size={14} className="text-amber-400" />
                MDA Approved Commercial Project
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <Icon name="MapPin" size={13} /> Chungi No. 6, Bosan Road Multan
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Icon name="Clock" size={13} /> Ready For Business
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6">
              MULTAN COMMERCIAL <br/>
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                COMPLEX (MCC)
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-slate-200 font-light leading-relaxed mb-8 border-l-4 border-amber-400 pl-4">
              The Epitome of Modern Commercial Excellence in Multan.
              <span className="block text-sm sm:text-base text-slate-300 font-normal mt-2">
                A prestigious landmark featuring triple-story commercial units, state-of-the-art corporate halls, and high-footfall retail shops designed for premier brands and visionary investors.
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#offerings"
                className="px-8 py-4 rounded-xl font-display font-bold text-base bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 transform hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
              >
                <Icon name="Compass" size={20} className="group-hover:rotate-45 transition-transform" />
                Explore Units
              </a>

              <button
                onClick={() => setVisitModalOpen(true)}
                className="px-8 py-4 rounded-xl font-display font-bold text-base bg-slate-900/80 hover:bg-slate-800 text-white border-2 border-amber-400/50 hover:border-amber-400 shadow-xl backdrop-blur-md transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Icon name="CalendarCheck" size={20} className="text-amber-400" />
                Book a Visit / Contact Us
              </button>

              <button
                onClick={() => setBrochureModalOpen(true)}
                className="px-5 py-4 rounded-xl font-medium text-sm text-slate-300 hover:text-white border border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Icon name="FileDown" size={18} className="text-amber-400" />
                Download Brochure
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Icon name="Building" size={15} className="text-amber-400" />
                <span>Developed in association with <strong className="text-slate-200">{data.project.developerAssociation}</strong></span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-2">
                <Icon name="PenTool" size={15} className="text-amber-400" />
                <span>Designed by <strong className="text-slate-200">{data.project.designer}</strong></span>
              </div>
            </div>

          </div>
        </div>

        <a 
          href="#overview" 
          aria-label="Scroll to Overview"
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 hover:text-amber-300 transition-colors animate-bounce"
        >
          <span className="text-[11px] uppercase tracking-widest font-bold">Discover More</span>
          <Icon name="ChevronDown" size={18} />
        </a>
      </section>

      {/* STATS STRIP */}
      <section className="border-y bg-slate-900/90 border-slate-800 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-3 rounded-xl transition-all hover:bg-amber-500/5">
                <div className="text-2xl lg:text-3xl font-display font-extrabold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300">{stat.label}</div>
                <div className="text-[11px] text-slate-400">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

window.Hero = Hero;