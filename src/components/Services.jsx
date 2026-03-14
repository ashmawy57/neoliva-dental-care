

import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import generalImg from '../assets/services/general.png';
import cosmeticImg from '../assets/services/cosmetic.png';
import implantsImg from '../assets/services/implants.png';
import orthoImg from '../assets/services/ortho.png';
import kidsImg from '../assets/services/kids.png';

const Services = ({ isFullPage = false }) => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const services = [
        {
            image: generalImg,
            key: 'general',
            theme: 'blue'
        },
        {
            image: cosmeticImg,
            key: 'cosmetic',
            theme: 'green'
        },
        {
            image: implantsImg,
            key: 'implants',
            theme: 'white'
        },
        {
            image: implantsImg,
            key: 'prosthodontics',
            theme: 'blue'
        },
        {
            image: orthoImg,
            key: 'orthodontics',
            theme: 'green'
        },
        {
            image: generalImg,
            key: 'endodontics',
            theme: 'white'
        },
        {
            image: kidsImg,
            key: 'pediatric',
            theme: 'blue'
        }
    ];



    return (
        <section id="services" className={`py-12 lg:py-24 bg-[#FAF9F6] relative overflow-hidden ${isFullPage ? 'min-h-screen' : ''}`}>
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D2A23F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A2E35]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-20 reveal reveal-up overflow-hidden">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D2A23F]/10 rounded-full mb-4 md:mb-6">
                        <Sparkles className="w-4 h-4 text-[#D2A23F]" />
                        <span className={`text-[#D2A23F] uppercase tracking-widest text-[10px] md:text-xs font-bold ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                            {t('hero.ourServices')}
                        </span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-[#1A2E35] px-2 max-w-full ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                        {t('services.title')}
                    </h2>
                    <div className="w-16 md:w-24 h-1.5 bg-gradient-to-r from-[#D2A23F] to-[#E5C29B] mx-auto rounded-full mb-6 md:mb-8"></div>
                    <p className={`text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-4 ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                        {t('services.subtitle')}
                    </p>
                </div>

                {/* Services Slider */}
                <div className="relative mb-24">
                    <Swiper
                        dir={isRTL ? 'rtl' : 'ltr'}
                        key={isRTL ? 'rtl' : 'ltr'}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={32}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        loop={true}
                        centeredSlides={true}
                        speed={800}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                centeredSlides: false,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                                centeredSlides: true,
                            },
                        }}
                        className="services-swiper !pb-20 !overflow-visible"
                    >
                        {services.map((service, index) => {
                            const details = t(`services.${service.key}.details`, { returnObjects: true });

                            return (
                                <SwiperSlide key={index} className="h-auto">
                                    <div className="group h-full bg-white rounded-[2rem] p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-[#D2A23F]/30 relative overflow-hidden flex flex-col">
                                        {/* Top Gradient Highlight */}
                                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#D2A23F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Background Decor */}
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-[#D2A23F]/5 to-[#D2A23F]/0 rounded-full blur-3xl group-hover:bg-[#D2A23F]/10 transition-colors duration-500"></div>

                                        {/* Icon/Image */}
                                        <div className="relative z-10 mb-8 self-center">
                                            <div className="w-28 h-28 relative">
                                                <div className="absolute inset-0 bg-[#D2A23F]/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <img
                                                    src={service.image}
                                                    alt={t(`services.${service.key}.title`)}
                                                    className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-lg"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 flex-grow">
                                            <h3 className={`text-2xl font-bold mb-3 text-[#1A2E35] group-hover:text-[#D2A23F] transition-colors duration-300 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                                                {t(`services.${service.key}.title`)}
                                            </h3>

                                            <p className={`text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                                {t(`services.${service.key}.description`)}
                                            </p>

                                            <div className="w-full h-px bg-gray-100 mb-6 group-hover:bg-[#D2A23F]/20 transition-colors duration-500"></div>

                                            <ul className={`space-y-3 mb-8 ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                                {Array.isArray(details) && details.slice(0, 3).map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-[#D2A23F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D2A23F] group-hover:text-white transition-all duration-300">
                                                            <Check className="w-3 h-3" />
                                                        </div>
                                                        <span className="group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Action */}
                                        <div className="mt-auto pt-4 relative z-10">
                                            <button className={`w-full py-4 rounded-xl border border-gray-100 bg-gray-50 text-gray-600 font-bold group-hover:bg-[#D2A23F] group-hover:text-white group-hover:border-[#D2A23F] transition-all duration-300 flex items-center justify-center gap-2 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                                <span className="uppercase tracking-wider text-sm">{isRTL ? 'اكتشف المزيد' : 'Discover More'}</span>
                                                <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                {isFullPage && (
                    <div className="mb-24">
                        {/* Empty container to maintain spacing if needed, or remove completely if preferred. 
                        For now, keeping the surrounding structure minimal or just empty. 
                        The user requested to delete specific sections. */}
                    </div>
                )}

                {/* Main CTA */}
                <div className="text-center mt-6">
                    <p className={`text-gray-500 mb-4 ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                        {isRTL ? 'هل لديك استفسار محدد؟' : 'Have a specific requirement?'}
                    </p>
                    <a
                        href="/contact"
                        className={`inline-flex items-center gap-3 px-10 py-4 bg-[#1A2E35] text-white rounded-full font-bold text-lg hover:bg-[#D2A23F] shadow-lg hover:shadow-[#D2A23F]/30 hover:-translate-y-1 transition-all duration-300 ${isRTL ? 'font-cairo' : 'font-inter'}`}
                    >
                        {isRTL ? 'احجز موعدك الآن' : 'Book Your Appointment Now'}
                        <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;



