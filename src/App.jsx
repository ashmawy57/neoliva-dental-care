import { useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';
import './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useScrollReveal } from './hooks/useScrollReveal';

// Lazy load pages and heavy components
const HomePage = lazy(() => import('./pages/HomePage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GeneralPreventiveDentistryPage = lazy(() => import('./pages/GeneralPreventiveDentistryPage'));
const CosmeticDentistryPage = lazy(() => import('./pages/CosmeticDentistryPage'));
const DentalImplantsPage = lazy(() => import('./pages/DentalImplantsPage'));
const ProsthodonticsPage = lazy(() => import('./pages/ProsthodonticsPage'));
const OrthodonticsPage = lazy(() => import('./pages/OrthodonticsPage'));
const EndodonticsPage = lazy(() => import('./pages/EndodonticsPage'));
const PediatricDentistryPage = lazy(() => import('./pages/PediatricDentistryPage'));
const DentalTourismPage = lazy(() => import('./pages/DentalTourismPage'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const Booking = lazy(() => import('./components/Booking'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
    <div className="animate-pulse">
      <img
        src="/preload-icon.png"
        alt="Loading..."
        className="w-24 h-24 object-contain opacity-50"
      />
    </div>
  </div>
);

function App() {
  const { i18n } = useTranslation();
  useScrollReveal();

  useEffect(() => {
    // Set initial direction and language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<div className="pt-20"><About /><Booking /></div>} />
            <Route path="/services" element={<div className="pt-20"><Services isFullPage={true} /><Booking /></div>} />
            <Route path="/gallery" element={<div className="pt-20"><Gallery /><Booking /></div>} />
            <Route path="/articles" element={<><ArticlesPage /><Booking /></>} />
            <Route path="/services/general-preventive-dentistry" element={<><GeneralPreventiveDentistryPage /><Booking /></>} />
            <Route path="/services/cosmetic-dentistry" element={<><CosmeticDentistryPage /><Booking /></>} />
            <Route path="/services/dental-implants" element={<><DentalImplantsPage /><Booking /></>} />
            <Route path="/services/prosthodontics" element={<><ProsthodonticsPage /><Booking /></>} />
            <Route path="/services/orthodontics" element={<><OrthodonticsPage /><Booking /></>} />
            <Route path="/services/endodontics" element={<><EndodonticsPage /><Booking /></>} />
            <Route path="/services/pediatric-dentistry" element={<><PediatricDentistryPage /><Booking /></>} />
            <Route path="/dental-tourism" element={<><DentalTourismPage /><Booking /></>} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
