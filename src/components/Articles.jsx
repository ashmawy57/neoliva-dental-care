import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, User, Sparkles, BookOpen } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Local images for articles
const routineImg = '/clinic (3).jpg';
const cosmeticImg = '/clinic (4).jpg';
const techImg = '/equipments (3).jpg';

const Articles = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const articleImages = [routineImg, cosmeticImg, techImg];

    const articles = t('articles.items', { returnObjects: true });

    return (
        <section id="articles" className="py-12 lg:py-24 bg-[#FAF9F6] relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D2A23F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A2E35]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 reveal reveal-up overflow-hidden">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D2A23F]/10 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-[#D2A23F]" />
                        <span className={`text-[#D2A23F] uppercase tracking-widest text-xs font-bold ${isRtl ? 'font-cairo' : 'font-inter'}`}>
                            {t('articles.title') || (isRtl ? 'مقالات طبية' : 'Medical Articles')}
                        </span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A2E35] max-w-full ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                        {t('articles.subtitle') || (isRtl ? 'أحدث المقالات' : 'Latest Insights')}
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#D2A23F] to-[#E5C29B] mx-auto rounded-full mb-8"></div>
                </div>

                {/* Articles Slider */}
                <div className="relative">
                    <Swiper
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'rtl' : 'ltr'}
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
                            delay: 4500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                centeredSlides: false,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                                centeredSlides: false,
                            },
                        }}
                        className="articles-swiper !pb-20 !overflow-visible !px-4"
                    >
                        {articles.map((article, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="group h-full bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-[#D2A23F]/30 flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-[#D2A23F]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                        <img
                                            src={articleImages[index % articleImages.length]}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Category Badge */}
                                        <div className="absolute top-6 left-6 z-20">
                                            <span className={`inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#1A2E35] px-4 py-2 rounded-full text-xs font-bold shadow-lg ${isRtl ? 'font-cairo' : 'font-inter'}`}>
                                                <BookOpen size={12} className="text-[#D2A23F]" />
                                                {index === 0 ? (isRtl ? 'نصائح' : 'Tips') : index === 1 ? (isRtl ? 'تجميل' : 'Cosmetic') : (isRtl ? 'تقنية' : 'Tech')}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        {/* Top Gradient Line */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D2A23F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wider">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-[#D2A23F]" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                                            <div className="flex items-center gap-1.5">
                                                <User size={14} className="text-[#D2A23F]" />
                                                <span>{isRtl ? 'د. نيوليفا' : 'Dr. Neoliva'}</span>
                                            </div>
                                        </div>

                                        <h3 className={`text-2xl font-bold text-[#1A2E35] mb-4 group-hover:text-[#D2A23F] transition-colors duration-300 line-clamp-2 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                                            {article.title}
                                        </h3>

                                        <p className={`text-gray-500 mb-6 line-clamp-3 leading-relaxed text-sm flex-grow ${isRtl ? 'font-tajawal' : 'font-inter'}`}>
                                            {article.description}
                                        </p>

                                        <div className="pt-6 border-t border-gray-100 mt-auto">
                                            <button className={`flex items-center gap-2 text-[#1A2E35] font-bold text-sm uppercase tracking-wider group/btn hover:text-[#D2A23F] transition-colors duration-300 ${isRtl ? 'font-cairo' : 'font-inter'}`}>
                                                {t('articles.readMore')}
                                                <ArrowRight
                                                    size={16}
                                                    className={`transition-transform duration-300 group-hover/btn:translate-x-1 ${isRtl ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons are handled by global styles in index.css */}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <a href="/articles" className={`inline-flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-[#1A2E35] text-[#1A2E35] rounded-full font-bold text-lg hover:bg-[#1A2E35] hover:text-white hover:border-[#1A2E35] shadow-none hover:shadow-lg transition-all duration-300 group ${isRtl ? 'font-cairo' : 'font-inter'}`}>
                        {isRtl ? 'مشاهدة جميع المقالات' : 'View All Articles'}
                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Articles;
