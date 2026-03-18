import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Clock, Facebook, Instagram, Twitter, ChevronDown, ChevronRight, Sparkles, MapPin, Mail } from 'lucide-react';

const EgyptFlag = () => (
    <svg viewBox="0 0 640 480" className="w-5 h-5 rounded-sm shadow-sm">
        <path fill="#000" d="M0 320h640v160H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path fill="#e4312b" d="M0 0h640v160H0z" />
        <g fill="#c0943a" transform="translate(320 240) scale(4.5)">
            <circle r="2" />
        </g>
    </svg>
);

const UKFlag = () => (
    <svg viewBox="0 0 60 30" className="w-5 h-5 rounded-sm shadow-sm">
        <path fill="#012169" d="M0 0h60v30H0z" />
        <path stroke="#fff" strokeWidth="6" d="m0 0 60 30m0-30L0 30" />
        <path stroke="#C8102E" strokeWidth="4" d="m0 0 60 30m0-30L0 30" />
        <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
        <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
    </svg>
);

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedService, setExpandedService] = useState(false);
    const isRTL = i18n.language === 'ar';

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    const navLinks = [
        { key: 'home', href: '/', icon: '🏠' },
        { key: 'whoWeAre', href: '/about', icon: '👥' },
        {
            key: 'services',
            href: '/services',
            icon: '🦷',
            children: [
                { key: 'general', href: '/services/general-preventive-dentistry', icon: '🔬' },
                { key: 'cosmetic', href: '/services/cosmetic-dentistry', icon: '✨' },
                { key: 'implants', href: '/services/dental-implants', icon: '🦷' },
                { key: 'prosthodontics', href: '/services/prosthodontics', icon: '👑' },
                { key: 'orthodontics', href: '/services/orthodontics', icon: '😁' },
                { key: 'endodontics', href: '/services/endodontics', icon: '💉' },
                { key: 'pediatric', href: '/services/pediatric-dentistry', icon: '👶' },
            ]
        },
        { key: 'gallery', href: '/gallery', icon: '📷' },
        { key: 'dentalTourism', href: '/dental-tourism', icon: '✈️' },
        { key: 'articles', href: '/articles', icon: '📰' },
        { key: 'contact', href: '/contact', icon: '📞' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Top Bar - Now more compact and cohesive */}
            <div className="hidden md:block bg-[#D2A23F] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-10 text-[11px] sm:text-xs text-white">
                        {/* Social Media Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-white hover:text-white/80 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-white hover:text-white/80 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-white hover:text-white/80 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-6 py-2 md:py-0 text-[10px] sm:text-xs">
                            <div className="flex items-center gap-2 text-white">
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className={isRTL ? 'font-cairo' : 'font-inter'}>
                                    {t('footer.contact.workingHours')}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-white border-l border-white/20 pl-3 md:border-0 md:pl-0">
                                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className={isRTL ? 'font-cairo' : 'font-inter'}>
                                    {t('footer.contact.phone')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Premium Floating Glass Design */}
            <div className="mx-4 mt-2">
                <div className="glass max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-xl shadow-[#1A2E35]/5">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <img
                                src="/logo (1).svg"
                                alt="Neoliva Dental Clinic"
                                className="h-20 w-auto object-contain"
                                decoding="async"
                                width="120"
                                height="80"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex h-full items-center gap-6 lg:gap-8">
                            {navLinks.map((link) => (
                                <div key={link.key} className="relative group h-full flex items-center">
                                    <Link
                                        to={link.href}
                                        className={`flex items-center gap-1 text-gray-700 hover:text-[#D2A23F] transition-colors duration-200 font-medium ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                    >
                                        {t(`nav.${link.key}`)}
                                        {link.children && (
                                            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {link.children && (
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-[#D2A23F]">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.key}
                                                    to={child.href}
                                                    className={`block px-4 py-3 text-gray-700 hover:bg-[#D2A23F] hover:text-white transition-colors ${isRTL ? 'font-cairo text-right' : 'font-inter text-left'}`}
                                                >
                                                    {t(`services.${child.key}.title`)}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            {/* Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="p-2.5 rounded-full hover:bg-[#D2A23F]/10 transition-all duration-300 text-gray-700 hover:text-[#D2A23F] group"
                                aria-label="Toggle Language"
                                title={t('nav.language')}
                            >
                                {isRTL ? <UKFlag /> : <EgyptFlag />}
                            </button>

                            {/* Book Appointment Button */}
                            <Link
                                to="/contact"
                                className={`px-6 py-3 bg-[#D2A23F] text-white rounded-full font-bold hover:bg-[#B28935] transition-all duration-300 uppercase tracking-wider text-sm shadow-lg shadow-[#D2A23F]/25 hover:shadow-[#D2A23F]/40 hover:-translate-y-0.5 shimmer-btn ${isRTL ? 'font-cairo' : 'font-inter'}`}
                            >
                                {isRTL ? 'احجز موعد' : 'BOOK APPOINTMENT'}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#D2A23F] to-[#B28935] text-white shadow-lg shadow-[#D2A23F]/30 hover:shadow-xl hover:shadow-[#D2A23F]/40 transition-all duration-300"
                                aria-label="Toggle Menu"
                            >
                                <div className="relative w-6 h-6">
                                    <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 -translate-y-0' : '-translate-y-2'}`}></span>
                                    <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100 -translate-y-0.5'}`}></span>
                                    <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0' : 'translate-y-1.5'}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Mobile Menu - Full Screen Overlay */}
            <div className={`md:hidden fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop with blur */}
                <div
                    className={`absolute inset-0 bg-[#1A2E35]/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Sliding Menu Panel */}
                <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-0 h-full w-[85%] max-w-[380px] bg-gradient-to-b from-[#FAF9F6] to-white shadow-2xl transition-transform duration-500 ease-out overflow-hidden ${isMenuOpen ? 'translate-x-0' : isRTL ? '-translate-x-full' : 'translate-x-full'}`}>

                    {/* Menu Header */}
                    <div className="relative bg-gradient-to-r from-[#1A2E35] to-[#2A4A55] p-6 pb-8">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A23F]/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D2A23F]/10 rounded-full blur-2xl"></div>

                        <div className="relative flex items-center justify-between">
                            <img
                                src="/logofoter.svg"
                                alt="Neoliva"
                                className="h-14 w-auto"
                                loading="lazy"
                                decoding="async"
                            />
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Welcome Text */}
                        <div className="relative mt-4">
                            <p className={`text-[#D2A23F] text-sm ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                {isRTL ? 'مرحباً بك في' : 'Welcome to'}
                            </p>
                            <p className={`text-white text-xl font-bold ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                                {isRTL ? 'نيوليفا للأسنان' : 'Neoliva Dental'}
                            </p>
                        </div>
                    </div>

                    {/* Menu Content */}
                    <div className="h-[calc(100%-180px)] overflow-y-auto px-4 py-4 pb-44">
                        <div className="space-y-2">
                            {navLinks.map((link, index) => (
                                <div
                                    key={link.key}
                                    className="transform transition-all duration-300"
                                    style={{
                                        transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                                        opacity: isMenuOpen ? 1 : 0,
                                        transform: isMenuOpen ? 'translateX(0)' : `translateX(${isRTL ? '-20px' : '20px'})`
                                    }}
                                >
                                    {link.children ? (
                                        // Services with dropdown
                                        <div>
                                            <button
                                                onClick={() => setExpandedService(!expandedService)}
                                                className={`w-full flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm hover:shadow-md border border-gray-100 transition-all ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#D2A23F]/20 to-[#D2A23F]/5 rounded-xl text-lg">
                                                        {link.icon}
                                                    </span>
                                                    <span className="font-semibold text-[#1A2E35]">{t(`nav.${link.key}`)}</span>
                                                </div>
                                                <ChevronDown className={`w-5 h-5 text-[#D2A23F] transition-transform duration-300 ${expandedService ? 'rotate-180' : ''}`} />
                                            </button>

                                            {/* Services Dropdown */}
                                            <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${expandedService ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                {link.children.map((child, childIndex) => (
                                                    <Link
                                                        key={child.key}
                                                        to={child.href}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className={`flex items-center gap-3 p-3 ${isRTL ? 'mr-4' : 'ml-4'} rounded-xl bg-gray-50 hover:bg-[#D2A23F]/10 border border-gray-100 transition-all ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                                        style={{
                                                            transitionDelay: expandedService ? `${childIndex * 30}ms` : '0ms'
                                                        }}
                                                    >
                                                        <span className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-sm">
                                                            {child.icon}
                                                        </span>
                                                        <span className="text-sm text-gray-700 font-medium">{t(`services.${child.key}.title`)}</span>
                                                        <ChevronRight className={`w-4 h-4 text-gray-400 ${isRTL ? 'mr-auto rotate-180' : 'ml-auto'}`} />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        // Regular link
                                        <Link
                                            to={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md border border-gray-100 hover:border-[#D2A23F]/30 transition-all group ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                        >
                                            <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#D2A23F]/20 to-[#D2A23F]/5 rounded-xl text-lg group-hover:scale-110 transition-transform">
                                                {link.icon}
                                            </span>
                                            <span className="font-semibold text-[#1A2E35] group-hover:text-[#D2A23F] transition-colors">{t(`nav.${link.key}`)}</span>
                                            <ChevronRight className={`w-5 h-5 text-gray-300 group-hover:text-[#D2A23F] transition-colors ${isRTL ? 'mr-auto rotate-180' : 'ml-auto'}`} />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Menu Footer */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white via-white to-transparent pt-6">
                        {/* Language Toggle */}
                        <button
                            onClick={() => {
                                toggleLanguage();
                                setIsMenuOpen(false);
                            }}
                            className={`w-full flex items-center justify-center gap-3 p-2.5 mb-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all ${isRTL ? 'font-cairo' : 'font-inter'}`}
                        >
                            {isRTL ? <UKFlag /> : <EgyptFlag />}
                            <span className="font-semibold text-gray-700">{t('nav.language')}</span>
                        </button>

                        {/* Book Appointment Button */}
                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className={`w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#D2A23F] to-[#B28935] text-white font-bold rounded-2xl shadow-lg shadow-[#D2A23F]/30 hover:shadow-xl hover:shadow-[#D2A23F]/40 transition-all ${isRTL ? 'font-cairo' : 'font-inter'}`}
                        >
                            <Sparkles className="w-5 h-5" />
                            <span className="uppercase tracking-wider">{isRTL ? 'احجز موعدك الآن' : 'Book Appointment'}</span>
                        </Link>

                        {/* Quick Contact */}
                        <div className="flex items-center justify-center gap-4 mt-2 pt-2 border-t border-gray-100">
                            <a href="tel:01006488558" className="flex items-center gap-2 text-gray-500 hover:text-[#D2A23F] transition-colors">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm" dir="ltr">010 06488558</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
