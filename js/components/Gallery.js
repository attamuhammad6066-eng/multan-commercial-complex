const Gallery = ({ darkMode, galleryList, setGalleryList, galleryCategory, setGalleryCategory, filteredGallery, setLightboxIndex, showToast }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImg = {
          id: Date.now(),
          title: file.name.replace(/\.[^/.]+$/, ""),
          category: "Uploaded",
          image: event.target.result,
          caption: "Custom uploaded perspective / site visual for Multan Commercial Complex."
        };
        setGalleryList([newImg, ...galleryList]);
        showToast("New image visual successfully added to the MCC Gallery!");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="gold-badge mb-3">
              <Icon name="Image" size={14} className="text-amber-400" />
              Visual Showcase
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-2">
              Project Gallery & Renders
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Click on any architectural image or poster to view in ultra-high resolution fullscreen lightbox.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {["All", "Official", "Exterior", "Retail", "Commercial"].map((cat) => (
              <button
                key={cat}
                onClick={() => setGalleryCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${galleryCategory === cat ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}

            <label className="cursor-pointer px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-600/20 text-blue-300 border border-blue-500/40 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5">
              <Icon name="UploadCloud" size={15} />
              <span>Add Custom Visual</span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <div 
              key={item.id || idx}
              onClick={() => setLightboxIndex(idx)}
              className={`group rounded-3xl overflow-hidden border cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-amber-400/60 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-950/80 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                  <Icon name="Maximize2" size={14} />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-display font-bold text-sm leading-snug line-clamp-2 text-slate-100 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs text-slate-400 line-clamp-2 font-light">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const RoiCalculator = ({ darkMode, onWhatsAppClick }) => {
  const [investmentAmount, setInvestmentAmount] = useState(25000000); // 2.5 Crore PKR
  const [rentalYieldPercent, setRentalYieldPercent] = useState(10.5); // 10.5%
  const [appreciationPercent, setAppreciationPercent] = useState(12); // 12%

  const calculatedMonthlyRent = useMemo(() => {
    return Math.round((investmentAmount * (rentalYieldPercent / 100)) / 12);
  }, [investmentAmount, rentalYieldPercent]);

  const calculatedAnnualRent = useMemo(() => {
    return Math.round(investmentAmount * (rentalYieldPercent / 100));
  }, [investmentAmount, rentalYieldPercent]);

  const calculated5YearAppreciation = useMemo(() => {
    const futureValue = investmentAmount * Math.pow((1 + appreciationPercent / 100), 5);
    return Math.round(futureValue - investmentAmount);
  }, [investmentAmount, appreciationPercent]);

  const calculated5YearTotalReturn = useMemo(() => {
    return (calculatedAnnualRent * 5) + calculated5YearAppreciation;
  }, [calculatedAnnualRent, calculated5YearAppreciation]);

  const formatPKR = (val) => {
    if (val >= 10000000) {
      return `PKR ${(val / 10000000).toFixed(2)} Crore`;
    } else if (val >= 100000) {
      return `PKR ${(val / 100000).toFixed(2)} Lakh`;
    }
    return `PKR ${val.toLocaleString()}`;
  };

  return (
    <section id="roi-calculator" className={`py-24 border-y ${darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-100/90 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="gold-badge mb-3">
              <Icon name="Calculator" size={14} className="text-amber-400" />
              Investor Analytics
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-6">
              Commercial Real Estate <br/>
              <span className="gold-gradient-text">ROI Calculator</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Commercial property along the Bosan Road corridor continues to outperform traditional residential real estate. Calculate your estimated monthly rental income and 5-year capital appreciation at Multan Commercial Complex.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Icon name="TrendingUp" size={18} />
                </div>
                <span>High commercial occupancy fueled by Chaseup Mall adjacency</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Icon name="ShieldCheck" size={18} />
                </div>
                <span>Secure capital preservation with clear MDA legal titles</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Icon name="DollarSign" size={18} />
                </div>
                <span>Inflation-hedged annual rental escalation clauses (10% per annum)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'}`}>
              
              <div className="space-y-6 mb-8">
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Investment Capital (PKR)</label>
                    <span className="text-sm font-extrabold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                      {formatPKR(investmentAmount)}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="5000000" 
                    max="150000000" 
                    step="1000000" 
                    value={investmentAmount} 
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                    <span>PKR 50 Lakh</span>
                    <span>PKR 7.5 Crore</span>
                    <span>PKR 15 Crore</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Expected Annual Rental Yield (%)</label>
                    <span className="text-sm font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      {rentalYieldPercent}% / Year
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="7" 
                    max="16" 
                    step="0.5" 
                    value={rentalYieldPercent} 
                    onChange={(e) => setRentalYieldPercent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                    <span>7% (Conservative)</span>
                    <span>11.5% (Market Benchmark)</span>
                    <span>16% (Prime Ground Retail)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Projected Capital Appreciation (%)</label>
                    <span className="text-sm font-extrabold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
                      {appreciationPercent}% / Year
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="8" 
                    max="25" 
                    step="1" 
                    value={appreciationPercent} 
                    onChange={(e) => setAppreciationPercent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-slate-950/70 border border-slate-800 mb-6">
                
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Estimated Monthly Rent</div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-amber-300 mt-1">
                    {formatPKR(calculatedMonthlyRent)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">~ PKR {calculatedMonthlyRent.toLocaleString()} / mo</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Annual Rental Revenue</div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-emerald-400 mt-1">
                    {formatPKR(calculatedAnnualRent)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Year 1 Cash Flow</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">5-Year Capital Gain</div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-blue-400 mt-1">
                    {formatPKR(calculated5YearAppreciation)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Asset Growth</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Total 5-Year Net ROI</div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-purple-400 mt-1">
                    {formatPKR(calculated5YearTotalReturn)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Rent + Capital Appreciation</div>
                </div>

              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">*Estimates based on current Bosan Road prime market trends.</span>
                <button
                  onClick={() => {
                    const msg = `Assalam o Alaikum, I used the ROI calculator for investment of ${formatPKR(investmentAmount)} at MCC. Please share suitable unit options.`;
                    onWhatsAppClick(msg);
                  }}
                  className="px-6 py-3 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all flex items-center gap-2"
                >
                  <Icon name="CheckCircle" size={16} /> Lock In This Investment Plan
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

window.Gallery = Gallery;
window.RoiCalculator = RoiCalculator;