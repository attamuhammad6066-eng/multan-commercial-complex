const Contact = ({ data, darkMode, onWhatsAppClick, showToast }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Retail Shop",
    budget: "PKR 1.5 - 3 Crore",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    showToast("Thank you! Your inquiry for Multan Commercial Complex has been received. Our sales executive will contact you shortly.");
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        name: "",
        phone: "",
        email: "",
        interest: "Retail Shop",
        budget: "PKR 1.5 - 3 Crore",
        message: ""
      });
    }, 4000);
  };

  return (
    <>
      {/* BROKER PACKAGE BANNER */}
      <section className="py-12 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-black text-amber-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Icon name="Briefcase" size={32} />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider bg-black text-amber-300 px-3 py-1 rounded-full">Official Announcement</span>
                <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight mt-1">
                  Special Package Offered for Agents & Brokers!
                </h3>
                <p className="text-sm font-medium text-slate-900">Partner with Seyalz & Vision Developers on Multan’s premier commercial real estate development.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onWhatsAppClick("Hello, I am a real estate agent/broker. Please send me the MCC Agent Commission & Partner Package details.")}
                className="px-6 py-3.5 rounded-xl font-display font-extrabold text-sm bg-slate-950 hover:bg-black text-amber-300 shadow-xl transition-all flex items-center gap-2"
              >
                <Icon name="UserPlus" size={18} /> Register as Broker Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5">
              <div className="gold-badge mb-3">
                <Icon name="PhoneCall" size={14} className="text-amber-400" />
                Get In Touch
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-6">
                Book Your Commercial <br/>
                <span className="gold-gradient-text">Unit at MCC</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                Speak directly with our commercial investment advisors or visit our on-site presentation office at Chungi No. 6, Bosan Road.
              </p>

              <div className="space-y-4 mb-8">
                
                <div className={`p-4 rounded-2xl border flex items-center gap-4 ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Sales Helpline</div>
                    <a href={`tel:${data.project.phone}`} className="text-base sm:text-lg font-extrabold text-white hover:text-amber-400 transition-colors">
                      {data.project.phone}
                    </a>
                    <span className="text-xs text-slate-400 block">Alt: {data.project.phoneSecondary}</span>
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border flex items-center gap-4 ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Instant WhatsApp Support</div>
                    <button 
                      onClick={() => onWhatsAppClick()}
                      className="text-base font-extrabold text-emerald-400 hover:underline text-left block"
                    >
                      Chat With Sales Advisor
                    </button>
                    <span className="text-xs text-slate-400">Instant Response 24/7</span>
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border flex items-center gap-4 ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Portal</div>
                    <a href={data.project.website} target="_blank" rel="noopener noreferrer" className="text-base font-extrabold text-blue-400 hover:underline">
                      {data.project.websiteDisplay}
                    </a>
                    <span className="text-xs text-slate-400 block">Seyalz Real Estate</span>
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border flex items-center gap-4 ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Site & Sales Office</div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {data.project.address}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className="lg:col-span-7">
              <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl ${darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'}`}>
                
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                  Investor Inquiry & Booking Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Fill out your details below to schedule a private unit walkthrough or receive the full payment plan.
                </p>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500 text-center animate-modal">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Check" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Inquiry Submitted Successfully!</h4>
                    <p className="text-sm text-slate-300 mb-4">
                      Our commercial representative will contact you via WhatsApp/Phone shortly with the pricing schedule.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Atta Muhammad"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Phone / WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="e.g. 0300 1234567"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="name@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Unit Interest *</label>
                        <select
                          value={contactForm.interest}
                          onChange={(e) => setContactForm({...contactForm, interest: e.target.value})}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                        >
                          <option value="Retail Shop">Retail Shop (Ground Floor / Boulevard)</option>
                          <option value="Commercial Hall">Commercial Hall (Open Floor Layout)</option>
                          <option value="Corporate Office">Corporate Office Suite</option>
                          <option value="Triple Story Building Unit">Complete Triple Story Unit</option>
                          <option value="Broker Registration">Agent / Broker Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Estimated Investment Budget</label>
                      <select
                        value={contactForm.budget}
                        onChange={(e) => setContactForm({...contactForm, budget: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                      >
                        <option value="PKR 75 Lakh - 1.5 Crore">PKR 75 Lakh – 1.5 Crore</option>
                        <option value="PKR 1.5 - 3 Crore">PKR 1.5 Crore – 3 Crore</option>
                        <option value="PKR 3 - 6 Crore">PKR 3 Crore – 6 Crore</option>
                        <option value="PKR 6 Crore+">PKR 6 Crore & Above</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Message / Specific Requirements</label>
                      <textarea 
                        rows="3"
                        placeholder="I would like to inquire about unit dimensions, payment schedule, and site visit timing..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 transform active:scale-98"
                    >
                      <Icon name="Send" size={18} /> Submit Official Inquiry
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

const Footer = ({ data, darkMode, onWhatsAppClick }) => {
  return (
    <footer className={`border-t ${darkMode ? 'bg-slate-950 border-slate-800/80' : 'bg-slate-900 text-white border-slate-800'} pt-16 pb-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-400/40 p-0.5 bg-slate-900 flex items-center justify-center">
                <img src="images/mcc_logo_dark.jpg" alt="MCC Logo" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  MULTAN COMMERCIAL COMPLEX
                </span>
                <p className="text-[11px] text-slate-400">MCC • Seyalz Real Estate</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
              The premier commercial landmark of Multan. Triple-story MDA-approved commercial halls and high-street retail shops on Bosan Road, near Chaseup Mall.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">
                Developed in association with <strong className="text-amber-300">{data.project.developerAssociation}</strong>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Designed by <strong className="text-slate-200">{data.project.designer}</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#overview" className="hover:text-amber-400 transition-colors">Project Overview</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Bosan Road Location</a></li>
              <li><a href="#offerings" className="hover:text-amber-400 transition-colors">Commercial Halls</a></li>
              <li><a href="#offerings" className="hover:text-amber-400 transition-colors">Retail Shops</a></li>
              <li><a href="#amenities" className="hover:text-amber-400 transition-colors">Amenities & Specs</a></li>
              <li><a href="#roi-calculator" className="hover:text-amber-400 transition-colors">ROI Calculator</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery & Media</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Unit Categories</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Icon name="ChevronRight" size={13} className="text-amber-400" />
                <span>Ground Floor High-Footfall Retail</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="ChevronRight" size={13} className="text-amber-400" />
                <span>Upper Ground Luxury Boutiques</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="ChevronRight" size={13} className="text-amber-400" />
                <span>1st & 2nd Floor Open Commercial Halls</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="ChevronRight" size={13} className="text-amber-400" />
                <span>Executive Corporate Suites</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="ChevronRight" size={13} className="text-amber-400" />
                <span>Multi-Level Basement Parking Bays</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Site Office</h4>
            <p className="text-xs text-slate-400 mb-2">{data.project.address}</p>
            <p className="text-xs font-bold text-amber-400 mb-1">Phone: {data.project.phone}</p>
            <p className="text-xs text-slate-400 mb-4">Portal: <a href={data.project.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{data.project.websiteDisplay}</a></p>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => onWhatsAppClick()} 
                className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-500 transition-colors"
                title="WhatsApp"
              >
                <Icon name="MessageCircle" size={18} />
              </button>
              <a 
                href={`tel:${data.project.phone}`} 
                className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center hover:bg-amber-400 transition-colors"
                title="Call Now"
              >
                <Icon name="Phone" size={18} />
              </a>
              <a 
                href={data.project.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
                title="Visit Seyalz Website"
              >
                <Icon name="Globe" size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Multan Commercial Complex (MCC). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>MDA Approved Project</span>
            <span>•</span>
            <a href={data.project.website} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Seyalz Real Estate</a>
            <span>•</span>
            <span>Vision Developers & Builders</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

window.Contact = Contact;
window.Footer = Footer;