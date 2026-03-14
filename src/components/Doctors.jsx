import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, ArrowRight, ArrowLeft, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Doctors = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const swiperRef = useRef(null);

    const doctors = [
        {
            image: "/doctor.png",
            index: 0,
            specialty: "Cosmetic Dentist",
            rating: "5.0"
        },
        {
            image: "/aboutus (2).jpg",
            index: 1,
            specialty: "Orthodontist",
            rating: "4.9"
        },
        {
            image: "/doctor.png",
            index: 2,
            specialty: "Pediatric Dentist",
            rating: "4.8"
        },
        {
            image: "/aboutus (2).jpg",
            index: 3,
            specialty: "Oral Surgeon",
            rating: "4.9"
        }
    ];

    return (
        <section className="py-12 md:py-24 lg:py-32 bg-[#FAF9F6] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#D2A23F]/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#1A2E35]/5 rounded-full blur-[80px]"></div>
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(#1A2E35_1px,transparent_1px),linear-gradient(90deg,#1A2E35_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.03]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 md:px-8 overflow-hidden">
                    <div className="max-w-full sm:max-w-2xl reveal reveal-up">
                        <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span className="h-[1px] w-12 bg-[#D2A23F]"></span>
                            <span className="text-[#D2A23F] font-bold uppercase tracking-widest text-sm font-inter">
                                {t('footer.doctors.subtitle')}
                            </span>
                        </div>
                        <h2 className={`text-4xl md:text-6xl font-bold text-[#1A2E35] leading-tight ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                            {t('footer.doctors.title')}
                        </h2>
                    </div>

                    {/* Custom Controls */}
                    <div className={`hidden md:flex gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <button
                            className="nav-prev w-14 h-14 rounded-full border border-[#1A2E35]/10 flex items-center justify-center text-[#1A2E35] hover:bg-[#1A2E35] hover:text-white transition-all duration-300 group"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <ArrowLeft className={`w-6 h-6 transition-transform group-hover:-translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                        </button>
                        <button
                            className="nav-next w-14 h-14 rounded-full bg-[#1A2E35] flex items-center justify-center text-white hover:bg-[#D2A23F] transition-all duration-300 group shadow-lg shadow-[#1A2E35]/20"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <ArrowRight className={`w-6 h-6 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Premium Slider */}
                <div className="reveal reveal-up">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        spaceBetween={40}
                        slidesPerView={1}
                        centeredSlides={true}
                        initialSlide={1}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 60,
                            },
                        }}
                        className="doctors-premium-swiper !py-12 !px-4"
                    >
                        {doctors.map((doctor, index) => (
                            <SwiperSlide key={index} className="transition-all duration-500">
                                {({ isActive }) => (
                                    <div className={`relative group h-[500px] md:h-[600px] w-full bg-white rounded-[40px] overflow-hidden transition-all duration-700 ease-out ${isActive ? 'scale-100 shadow-2xl shadow-[#1A2E35]/15' : 'scale-90 opacity-60 grayscale-[0.8] hover:opacity-100 hover:grayscale-0'}`}>

                                        {/* Image Container */}
                                        <div className="absolute inset-0 w-full h-full">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35] via-[#1A2E35]/20 to-transparent opacity-80 z-10"></div>
                                            <img
                                                src={doctor.image}
                                                alt={t(`footer.doctors.items.${doctor.index}.name`)}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Floating Badge (Rating) */}
                                        {isActive && (
                                            <div className={`absolute top-8 ${isRTL ? 'left-8' : 'right-8'} z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 animate-fade-in-down`}>
                                                <Star className="w-4 h-4 text-[#D2A23F] fill-[#D2A23F]" />
                                                <span className="text-white font-medium">{doctor.rating}</span>
                                            </div>
                                        )}

                                        {/* Social Sidebar */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-6' : 'right-6'} z-20 flex flex-col gap-4 opacity-0 transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-x-0' : 'translate-x-full'}`}>
                                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                                <a
                                                    key={i}
                                                    href="#"
                                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D2A23F] hover:border-[#D2A23F] transition-all hover:scale-110"
                                                >
                                                    <Icon className="w-5 h-5" />
                                                </a>
                                            ))}
                                        </div>

                                        {/* Content Overlay */}
                                        <div className={`absolute bottom-0 left-0 right-0 p-8 z-20 transition-all duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                                            <div className="overflow-hidden mb-2">
                                                <p className={`text-[#D2A23F] font-bold uppercase tracking-widest text-xs md:text-sm transform transition-transform duration-500 delay-100 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                                                    {t(`footer.doctors.items.${doctor.index}.role`)}
                                                </p>
                                            </div>

                                            <h3 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${isRTL ? 'font-cairo' : 'font-playfair'} transform transition-all duration-500 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                                {t(`footer.doctors.items.${doctor.index}.name`)}
                                            </h3>

                                            <div className={`h-[1px] w-full bg-white/20 mb-4 transform transition-all duration-500 delay-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>

                                            <p className={`text-gray-300 text-sm md:text-base line-clamp-2 mb-6 transform transition-all duration-500 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                                {t(`footer.doctors.items.${doctor.index}.bio`)}
                                            </p>

                                            <button className={`group/btn flex items-center gap-2 text-white font-medium text-sm tracking-wide transform transition-all duration-500 delay-400 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                                <span className="relative">
                                                    {isRTL ? 'عرض الملف الشخصي' : 'View Profile'}
                                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left"></span>
                                                </span>
                                                <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style>{`
                .animate-fade-in-down {
                    animation: fadeInDown 0.6s ease-out forwards;
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default Doctors;
