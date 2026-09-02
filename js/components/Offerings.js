const Offerings = ({ data, darkMode, activeTab, setActiveTab, setSelectedUnit, setInquiryModalOpen, onWhatsAppClick }) => {
  return (
    <section id="offerings" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="gold-badge mb-3">
            <Icon name="Layers" size={14} className="text-amber-400" />
            Property Portfolio
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-4">
            Project Offerings & Floor Layouts
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore state-of-the-art <strong>Commercial Halls</strong> and high-visibility <strong>Retail Shops</strong> customized for high footfall commercial operations.
          </p>

          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 mt-8">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === "all" ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              All Portfolio Units
            </button>
            <button 
              onClick={() => setActiveTab("commercial-halls")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === "commercial-halls" ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Commercial Halls
            </button>
            <button 
              onClick={() => setActiveTab("retail-shops")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === "retail-shops" ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Retail Shops
            </button>
          </div>
        </div>

        <div className="space-y-16">
          {data.offerings
            .filter(offering => activeTab === "all" || offering.id === activeTab)
            .map((offering) => (
              <div 
                key={offering.id}
                className={`rounded-3xl border overflow-hidden transition-all ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full">
                    <img 
                      src={offering.image} 
                      alt={offering.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-lg">
                        {offering.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">Specifications Snapshot</div>
                      <div className="text-sm font-medium text-slate-200 mt-1">Area Range: <strong className="text-white">{offering.specs.sizes}</strong></div>
                      <div className="text-sm font-medium text-slate-200">Floor Levels: <strong className="text-white">{offering.specs.levels}</strong></div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">{offering.type}</span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                          Yield: {offering.specs.rentalYieldEst}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
                        {offering.title}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        {offering.tagline}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {offering.highlightFeatures.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <Icon name="CheckCircle2" size={17} className="text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 mb-6">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Ideal For:</span>
                        <p className="text-xs font-semibold text-slate-200">{offering.specs.idealFor}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                        <Icon name="LayoutList" size={15} /> Sample Available Units in this Category:
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {offering.units.map((unit, uIdx) => (
                          <div 
                            key={uIdx}
                            className={`p-3 rounded-xl border flex items-center justify-between transition-all ${darkMode ? 'bg-slate-800/90 border-slate-700 hover:border-amber-400/50' : 'bg-slate-100 border-slate-300'}`}
                          >
                            <div>
                              <div className="text-xs font-bold text-white">{unit.name}</div>
                              <div className="text-[11px] text-slate-400">{unit.area} • {unit.frontage}</div>
                            </div>
                            <button 
                              onClick={() => { setSelectedUnit(unit); setInquiryModalOpen(true); }}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500 hover:text-slate-950 transition-colors"
                            >
                              Inquire
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                          onClick={() => { setSelectedUnit({ name: offering.title, area: offering.specs.sizes }); setInquiryModalOpen(true); }}
                          className="px-6 py-3 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md flex items-center gap-2"
                        >
                          <Icon name="MessageSquare" size={15} /> Inquire About {offering.type}
                        </button>
                        <button
                          onClick={() => onWhatsAppClick(`Hi, please share rate list and floor layouts for ${offering.title} at MCC.`)}
                          className="px-5 py-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center gap-2"
                        >
                          <Icon name="MessageCircle" size={15} className="text-emerald-400" /> WhatsApp Floor Plan
                        </button>
                      </div>

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

const Amenities = ({ data, darkMode, setBrochureModalOpen }) => {
  return (
    <section id="amenities" className={`py-24 border-y ${darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-100/80 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="gold-badge mb-3">
            <Icon name="ShieldCheck" size={14} className="text-amber-400" />
            World-Class Infrastructure
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-4">
            Premium Features & Amenities
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineered with world-standard architectural provisions to ensure smooth enterprise operations, uninterrupted business continuity, and maximum consumer luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.amenities.map((amenity, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-3xl border transition-all duration-300 glass-card-hover ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-amber-400 flex items-center justify-center border border-amber-400/30 mb-5">
                <Icon name={amenity.icon} size={28} />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{amenity.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{amenity.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-2 border-amber-400/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-2xl flex-shrink-0">
              <Icon name="FileCheck" size={28} />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-white">Full Technical Specifications & MEP Blueprint</h4>
              <p className="text-xs text-slate-300">Download structural, electrical load, and fire-suppression blueprints.</p>
            </div>
          </div>
          <button
            onClick={() => setBrochureModalOpen(true)}
            className="px-6 py-3.5 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg"
          >
            <Icon name="Download" size={16} /> Download Technical Spec Sheet
          </button>
        </div>

      </div>
    </section>
  );
};

window.Offerings = Offerings;
window.Amenities = Amenities;