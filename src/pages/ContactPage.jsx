
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Phone,
    MapPin,
    Mail,
    Clock,
    Facebook,
    Instagram,
    Twitter,
    ArrowRight
} from 'lucide-react';
import Booking from '../components/Booking';

const ContactPage = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const contactInfo = [
        {
            icon: Phone,
            title: t('footer.contact.phone'),
            value: t('footer.contact.phone'),
            href: `tel:${t('footer.contact.phone')}`,
            color: 'text-[#D2A23F] group-hover:text-white',
            bg: 'bg-[#D2A23F]/10 group-hover:bg-[#D2A23F]'
        },
        {
            icon: Mail,
            title: t('footer.contact.email'),
            value: t('footer.contact.email'),
            href: `mailto:${t('footer.contact.email')}`,
            color: 'text-[#1A2E35] group-hover:text-white',
            bg: 'bg-[#1A2E35]/10 group-hover:bg-[#1A2E35]'
        },
        {
            icon: MapPin,
            title: t('footer.contact.address'),
            value: t('footer.contact.address'),
            href: "https://maps.google.com/?q=7+Tehran+Square+Dokki",
            color: 'text-emerald-500 group-hover:text-white',
            bg: 'bg-emerald-500/10 group-hover:bg-emerald-500'
        },
        {
            icon: Clock,
            title: t('footer.contact.workingHours'),
            value: t('footer.contact.workingHours'),
            color: 'text-amber-500 group-hover:text-white',
            bg: 'bg-amber-500/10 group-hover:bg-amber-500'
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[#FAF9F6] selection:bg-[#D2A23F]/30">
            {/* Design Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#D2A23F]/5 rounded-full blur-[100px]"></div>
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#1A2E35]/5 rounded-full blur-[100px] -translate-y-1/2"></div>
            </div>

            {/* Header Section */}
            <div className="relative pt-12 pb-24 text-center z-10">
                <div className="container mx-auto px-4">
                    <span className={`inline-block py-2 px-6 rounded-full bg-white shadow-sm border border-[#D2A23F]/20 text-[#D2A23F] font-bold text-sm tracking-wider mb-6 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                        {isRTL ? 'تواصل معنا' : 'GET IN TOUCH'}
                    </span>
                    <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-[#1A2E35] ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                        {isRTL ? 'نحن بانتظارك' : 'We Are Waiting For You'}
                    </h1>
                    <p className={`text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                        {isRTL
                            ? 'نحن هنا للإجابة على جميع استفساراتك ومساعدتك في رحلة علاجك. لا تتردد في التواصل معنا في أي وقت.'
                            : 'We are here to answer all your questions and help you on your treatment journey. Feel free to contact us anytime.'}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Contact Info & Map (5 columns) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Info Cards Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <div key={index} className="group bg-white p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(210,162,63,0.15)] transition-all duration-500 border border-gray-100/50 hover:border-[#D2A23F]/30 hover:-translate-y-1">
                                        <div className={`w-14 h-14 ${info.bg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500`}>
                                            <Icon className={`w-7 h-7 ${info.color} transition-colors duration-500`} />
                                        </div>
                                        <div className="space-y-2">
                                            <p className={`text-xs font-bold text-gray-400 uppercase tracking-widest ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                                {info.icon === Clock ? (isRTL ? 'ساعات العمل' : 'WORKING HOURS') : (isRTL ? 'معلومات الاتصال' : 'CONTACT INFO')}
                                            </p>
                                            {info.href ? (
                                                <a href={info.href} className={`block text-lg font-bold text-[#1A2E35] group-hover:text-[#D2A23F] transition-colors ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className={`text-lg font-bold text-[#1A2E35] ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Social Media Card */}
                        <div className="bg-[#1A2E35] p-8 rounded-[2rem] text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
                            <h3 className={`text-2xl font-bold mb-8 text-white relative z-10 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                                {t('footer.social.title')}
                            </h3>
                            <div className="flex justify-center gap-6 relative z-10">
                                {[
                                    { Icon: Facebook, href: "#", color: "hover:bg-[#1877F2]" },
                                    { Icon: Instagram, href: "#", color: "hover:bg-[#E4405F]" },
                                    { Icon: Twitter, href: "#", color: "hover:bg-[#1DA1F2]" }
                                ].map((item, i) => (
                                    <a key={i} href={item.href} className={`w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-700 ${item.color} hover:scale-110 hover:shadow-lg hover:shadow-white/20`}>
                                        <item.Icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Map Card */}
                        <div className="bg-white p-2 rounded-[2.5rem] shadow-lg shadow-gray-200/50 border border-gray-100">
                            <div className="h-80 w-full rounded-[2rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.665360987!2d31.2065!3d30.0465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQ3LjQiTiAzMcKwMTInMjMuNCJF!5e0!3m2!1sen!2seg!4v163576!5m2!1sen!2seg"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Google Maps"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Booking Form (7 columns) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden sticky top-24">
                            <div className="h-2 bg-gradient-to-r from-[#1A2E35] via-[#D2A23F] to-[#1A2E35]"></div>
                            <div className="p-2 md:p-4">
                                <Booking />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
