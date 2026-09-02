function App() {
  const data = window.MCC_DATA;
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [galleryCategory, setGalleryCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [galleryList, setGalleryList] = useState(data ? data.gallery : []);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleWhatsAppRedirect = (customMsg) => {
    const defaultMsg = customMsg || `Hello, I am interested in Multan Commercial Complex (MCC) at Bosan Road. Please provide details regarding available units and payment plan.`;
    const url = `https://wa.me/${data.project.whatsapp}?text=${encodeURIComponent(defaultMsg)}`;
    window.open(url, '_blank');
  };

  const filteredGallery = useMemo(() => {
    if (galleryCategory === "All") return galleryList;
    return galleryList.filter(item => item.category.toLowerCase() === galleryCategory.toLowerCase());
  }, [galleryCategory, galleryList]);

  if (!data) return <div className="p-10 text-center text-white">Loading Multan Commercial Complex data...</div>;

  return (
    <div className={darkMode ? "bg-[#080D1A] text-slate-100 min-h-screen selection:bg-amber-500 selection:text-black" : "bg-slate-50 text-slate-900 min-h-screen selection:bg-amber-500 selection:text-white"}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-modal bg-slate-900 border-2 border-amber-400 text-amber-100 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-lg">
          <Icon name="CheckCircle2" className="text-amber-400 flex-shrink-0" size={24} />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-3 text-slate-400 hover:text-white">
            <Icon name="X" size={16} />
          </button>
        </div>
      )}

      {/* Navbar */}
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setVisitModalOpen={setVisitModalOpen}
        onWhatsAppClick={handleWhatsAppRedirect}
        data={data}
      />

      {/* Hero */}
      <Hero 
        data={data}
        setVisitModalOpen={setVisitModalOpen}
        setBrochureModalOpen={setBrochureModalOpen}
      />

      {/* About & Project Overview */}
      <About 
        data={data}
        darkMode={darkMode}
        setInquiryModalOpen={setInquiryModalOpen}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      {/* Strategic Location */}
      <Location 
        data={data}
        darkMode={darkMode}
      />

      {/* Project Offerings & Units */}
      <Offerings 
        data={data}
        darkMode={darkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelectedUnit={setSelectedUnit}
        setInquiryModalOpen={setInquiryModalOpen}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      {/* Key Features & Amenities */}
      <Amenities 
        data={data}
        darkMode={darkMode}
        setBrochureModalOpen={setBrochureModalOpen}
      />

      {/* Interactive Gallery & Lightbox */}
      <Gallery 
        darkMode={darkMode}
        galleryList={galleryList}
        setGalleryList={setGalleryList}
        galleryCategory={galleryCategory}
        setGalleryCategory={setGalleryCategory}
        filteredGallery={filteredGallery}
        setLightboxIndex={setLightboxIndex}
        showToast={showToast}
      />

      {/* ROI & Yield Calculator */}
      <RoiCalculator 
        darkMode={darkMode}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      {/* Contact Section */}
      <Contact 
        data={data}
        darkMode={darkMode}
        onWhatsAppClick={handleWhatsAppRedirect}
        showToast={showToast}
      />

      {/* Footer & Accreditation */}
      <Footer 
        data={data}
        darkMode={darkMode}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      {/* Interactive Modals */}
      <Modals 
        lightboxIndex={lightboxIndex}
        setLightboxIndex={setLightboxIndex}
        filteredGallery={filteredGallery}
        visitModalOpen={visitModalOpen}
        setVisitModalOpen={setVisitModalOpen}
        inquiryModalOpen={inquiryModalOpen}
        setInquiryModalOpen={setInquiryModalOpen}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        brochureModalOpen={brochureModalOpen}
        setBrochureModalOpen={setBrochureModalOpen}
        showToast={showToast}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);