import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Clock, ArrowRight, ChevronRight, Heart } from 'lucide-react';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const quickLinks = [
        { key: 'home', href: '#home' },
        { key: 'about', href: '#about' },
        { key: 'services', href: '#services' },
        { key: 'contact', href: '#contact' },
        { key: 'articles', href: '/articles' },
        { key: 'gallery', href: '/gallery' },
        { key: 'dentalTourism', href: '/dental-tourism' }
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ];

    return (
        <footer className="relative bg-[#0B1114] text-white mt-32 sm:mt-40 pt-24 sm:pt-32 pb-8">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D2A23F]/50 to-transparent"></div>
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#D2A23F]/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#14b8a6]/5 rounded-full blur-[120px]"></div>
            </div>

            {/* CTA Float Card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl bg-[#D2A23F] rounded-3xl p-5 sm:p-6 md:p-12 shadow-2xl shadow-[#D2A23F]/20 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 z-20 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center md:text-left rtl:md:text-right">
                    <h3 className={`text-2xl md:text-4xl font-bold text-white mb-2 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                        {isRTL ? 'جاهز لابتسامة أفضل؟' : 'Ready for a Better Smile?'}
                    </h3>
                    <p className={`text-white/90 text-sm md:text-base ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                        {isRTL ? 'احجز موعدك اليوم وابدأ رحلتك' : 'Book your appointment today and start your journey'}
                    </p>
                </div>

                <a
                    href="#contact"
                    className={`relative z-10 px-8 py-4 bg-white text-[#D2A23F] rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 group/btn ${isRTL ? 'font-cairo' : 'font-inter'}`}
                >
                    {isRTL ? 'احجز الآن' : 'Book Now'}
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
                </a>

                {/* Decor */}
                <div className="absolute -right-10 -bottom-20 text-white/10 rotate-12 transform scale-150 pointer-events-none">
                    <Heart className="w-56 h-56 fill-current" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 items-start">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8 text-center md:text-left rtl:md:text-right">
                        <img
                            src="/logofoter.svg"
                            alt="Neoliva Dental Care"
                            className="h-28 w-auto object-contain mx-auto md:mx-0"
                            loading="lazy"
                            decoding="async"
                        />
                        <p className={`text-gray-400 leading-relaxed ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                            {t('footer.about.description')}
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center md:justify-start rtl:md:justify-start">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="group/icon w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#D2A23F] hover:bg-[#D2A23F] hover:text-white transition-all duration-300"
                                    >
                                        <Icon className="w-4 h-4 transition-transform group-hover/icon:scale-110" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="lg:col-span-3 lg:col-start-6">
                        <h4 className={`text-lg font-bold text-white mb-8 relative inline-block ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                            {t('footer.quickLinks.title')}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#D2A23F] rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.key}>
                                    <a
                                        href={link.href}
                                        className={`group flex items-center gap-2 text-gray-400 hover:text-[#D2A23F] transition-colors ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                    >
                                        <ChevronRight className={`w-4 h-4 text-[#D2A23F]/50 group-hover:text-[#D2A23F] transition-colors ${isRTL ? 'rotate-180' : ''}`} />
                                        <span>{t(`footer.quickLinks.${link.key}`)}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4 lg:col-start-9">
                        <h4 className={`text-lg font-bold text-white mb-8 relative inline-block ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                            {t('footer.contact.title')}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#D2A23F] rounded-full"></span>
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D2A23F]/10 flex items-center justify-center text-[#D2A23F] flex-shrink-0 mt-1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className={`block text-xs text-gray-500 mb-1 uppercase tracking-wider ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                        {isRTL ? 'العنوان' : 'Address'}
                                    </span>
                                    <span className={`text-gray-300 ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                        {t('footer.contact.address')}
                                    </span>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D2A23F]/10 flex items-center justify-center text-[#D2A23F] flex-shrink-0 mt-1">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className={`block text-xs text-gray-500 mb-1 uppercase tracking-wider ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                        {isRTL ? 'الهاتف' : 'Phone'}
                                    </span>
                                    <a href={`tel:${t('footer.contact.phone')}`} className={`text-gray-300 hover:text-[#D2A23F] transition-colors ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                        {t('footer.contact.phone')}
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D2A23F]/10 flex items-center justify-center text-[#D2A23F] flex-shrink-0 mt-1">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className={`block text-xs text-gray-500 mb-1 uppercase tracking-wider ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                        {isRTL ? 'ساعات العمل' : 'Working Hours'}
                                    </span>
                                    <span className={`text-gray-300 ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                        {t('footer.contact.workingHours')}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/5 pt-8 mt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className={`text-gray-500 text-sm text-center md:text-left ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                            {t('footer.copyright')}
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className={`text-sm text-gray-500 hover:text-[#D2A23F] transition-colors ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
                            </a>
                            <a href="#" className={`text-sm text-gray-500 hover:text-[#D2A23F] transition-colors ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                {isRTL ? 'شروط الاستخدام' : 'Terms of Use'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
