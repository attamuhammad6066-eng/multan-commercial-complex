const About = ({ data, darkMode, setInquiryModalOpen, onWhatsAppClick }) => {
  return (
    <section id="overview" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 group">
              <img 
                src="images/mcc_poster_1.jpg" 
                alt="Multan Commercial Complex Project Presentation" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="gold-badge mb-2">Architectural Prestige</div>
                <h4 className="text-xl font-display font-bold text-white">Where Ambitions Meet Prime Retail Real Estate</h4>
                <p className="text-xs text-slate-300 mt-1">Officially approved by MDA with guaranteed footfall on Bosan Road corridor.</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 z-20 hidden sm:block p-5 rounded-2xl bg-slate-900/95 border-2 border-amber-400 shadow-2xl backdrop-blur-md max-w-xs animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/40">
                  <Icon name="Key" size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase">Immediate Fit-out</div>
                  <div className="text-base font-extrabold text-white">Possession Ready</div>
                  <div className="text-[11px] text-slate-400">By Dec 31, 2024</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          <div className="lg:col-span-6">
            <div className="gold-badge mb-4">
              <Icon name="Compass" size={14} className="text-amber-400" />
              Project Overview & Vision
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-6">
              Multan’s New Epicenter of <br/>
              <span className="gold-gradient-text">Commercial Grandeur</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-light">
              <strong>Multan Commercial Complex (MCC)</strong> is a benchmark commercial development engineered for leading retailers, progressive business owners, and savvy real estate investors. Situated at the undisputed commercial heart of Multan—Chungi No. 6 on Bosan Road—MCC delivers supreme brand exposure, seamless logistics, and exceptional asset appreciation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className={`p-4 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Icon name="CheckCheck" size={20} />
                  </div>
                  <h4 className="font-bold text-sm">100% MDA Approved</h4>
                </div>
                <p className="text-xs text-slate-400">Completely vetted and sanctioned by Multan Development Authority for safe title transfer.</p>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} />
                  </div>
                  <h4 className="font-bold text-sm">High Footfall Corridor</h4>
                </div>
                <p className="text-xs text-slate-400">Positioned next to Chaseup Mall with thousands of affluent daily shoppers.</p>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Icon name="Coins" size={20} />
                  </div>
                  <h4 className="font-bold text-sm">Lucrative Rental Yield</h4>
                </div>
                <p className="text-xs text-slate-400">Targeting 10% - 14% annual rental yield with rapid capital appreciation.</p>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Icon name="Car" size={20} />
                  </div>
                  <h4 className="font-bold text-sm">Massive Parking Zones</h4>
                </div>
                <p className="text-xs text-slate-400">Basement and front vehicular parking designed for seamless customer access.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <Icon name="Send" size={16} /> Request Investor Deck
              </button>

              <button
                onClick={() => onWhatsAppClick()}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2"
              >
                <Icon name="MessageCircle" size={16} /> Instant WhatsApp Contact
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

const Location = ({ data, darkMode }) => {
  return (
    <section id="location" className={`py-24 border-y ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-100/70 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="gold-badge mb-3">
            <Icon name="MapPin" size={14} className="text-amber-400" />
            Unrivaled Address
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-4">
            Strategic Commercial Hotspot
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Located at <strong>Chungi No. 6, Bosan Road, near Chaseup Mall</strong>, placing your business at the nexus of Multan’s most affluent shopping and transit corridor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Icon name="Navigation" size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Proximity & Transit Hub</h3>
                  <p className="text-xs text-slate-400">Effortless access for customers and corporate teams</p>
                </div>
              </div>

              <div className="space-y-3">
                {data.landmarks.map((landmark, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all hover:translate-x-1 ${darkMode ? 'bg-slate-800/60 border-slate-700/60 hover:border-amber-400/40' : 'bg-slate-50 border-slate-200'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                        <Icon name={landmark.icon || "MapPin"} size={16} />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-200">{landmark.name}</div>
                        <div className="text-[11px] text-slate-400">{landmark.distance}</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {landmark.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-600 to-amber-800 text-slate-950 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider bg-black/20 text-white px-2.5 py-1 rounded-full">Prime Landmark</span>
                <Icon name="Compass" size={24} className="text-slate-950" />
              </div>
              <h4 className="text-xl font-display font-extrabold mb-1">Chungi No. 6, Bosan Road</h4>
              <p className="text-xs text-slate-900 font-medium mb-4">Directly adjacent to Chaseup Mall & leading fashion retail flagship brands.</p>
              <a 
                href="https://maps.google.com/?q=Chungi+No+6+Bosan+Road+Multan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 text-amber-300 font-bold text-xs hover:bg-black transition-colors"
              >
                <Icon name="ExternalLink" size={14} /> Open in Google Maps
              </a>
            </div>

          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className={`h-full min-h-[420px] rounded-3xl overflow-hidden border relative ${darkMode ? 'border-slate-800 bg-slate-900 shadow-2xl' : 'border-slate-300 bg-white shadow-xl'}`}>
              
              <iframe 
                title="Multan Commercial Complex Location Map"
                src="https://maps.google.com/maps?q=Chungi%20No.%206%20Bosan%20Road%20Multan%20Chaseup&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[460px] border-0 filter contrast-105"
                loading="lazy"
                allowFullScreen
              ></iframe>

              <div className="absolute top-4 left-4 z-10 p-3 rounded-2xl bg-slate-900/90 border border-amber-400/50 backdrop-blur-md shadow-xl text-white">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-bold text-amber-300">Live Site Coordinates</span>
                </div>
                <div className="text-sm font-extrabold mt-0.5">Bosan Road • Chungi No. 6</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

window.About = About;
window.Location = Location;