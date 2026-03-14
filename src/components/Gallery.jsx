import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [filter, setFilter] = useState('all');
    const [selectedImg, setSelectedImg] = useState(null);

    const categories = [
        { id: 'all', label: t('gallery.all') },
        { id: 'clinic', label: t('gallery.clinic') },
        { id: 'equipment', label: t('gallery.equipment') },
        { id: 'results', label: t('gallery.results') },
        { id: 'after_before', label: isRtl ? 'قبل وبعد' : 'Before & After' },
        { id: 'events', label: isRtl ? 'الفعاليات' : 'Events' },
    ];

    // ... (keep existing images array)
    const images = [
        // General Images (All) - Moved to top
        ...Array.from({ length: 6 }).map((_, i) => ({
            id: 60 + i,
            category: 'clinic',
            url: `/all (${i + 1}).jpg`,
            title: isRtl ? `صورة ${i + 1}` : `Image ${i + 1}`
        })),
        {
            id: 12,
            category: 'results',
            url: '/result2.jpg.jpg',
            title: isRtl ? 'حالة علاجية 3' : 'Treatment Case 3'
        },
        {
            id: 13,
            category: 'results',
            url: '/result3.jpg.jpg',
            title: isRtl ? 'حالة علاجية 4' : 'Treatment Case 4'
        },
        {
            id: 14,
            category: 'results',
            url: '/result4.jpg.jpg',
            title: isRtl ? 'حالة علاجية 5' : 'Treatment Case 5'
        },
        {
            id: 15,
            category: 'results',
            url: '/result5.jpg.jpg',
            title: isRtl ? 'حالة علاجية 6' : 'Treatment Case 6'
        },
        // Clinic Images
        ...Array.from({ length: 10 }).map((_, i) => ({
            id: 20 + i,
            category: 'clinic',
            url: `/clinic (${i + 1}).jpg`,
            title: isRtl ? `العيادة ${i + 1}` : `Clinic ${i + 1}`
        })),
        // Before & After Images
        ...Array.from({ length: 8 }).map((_, i) => ({
            id: 40 + i,
            category: 'after_before',
            url: `/before%25a (${i + 1}).jpg`,
            title: isRtl ? `قبل وبعد ${i + 1}` : `Before & After ${i + 1}`
        })),
        // Equipment Images
        ...Array.from({ length: 8 }).map((_, i) => ({
            id: 80 + i,
            category: 'equipment',
            url: `/equipments (${i + 1}).jpg`,
            title: isRtl ? `أجهزة ${i + 1}` : `Equipment ${i + 1}`
        })),
        // Events Images (2018)
        ...Array.from({ length: 22 }).map((_, i) => ({
            id: 100 + i,
            category: 'events',
            url: `/event2018 (${i + 1}).jpeg`,
            title: isRtl ? `فعالية 2018 - ${i + 1}` : `Event 2018 - ${i + 1}`
        })),
    ];

    const filteredImages = filter === 'all'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <section id="gallery" className="py-12 lg:py-24 bg-[#FAF9F6] relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D2A23F]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1A2E35]/5 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 reveal reveal-up overflow-hidden">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D2A23F]/10 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-[#D2A23F]" />
                        <span className={`text-[#D2A23F] uppercase tracking-widest text-xs font-bold ${isRtl ? 'font-cairo' : 'font-inter'}`}>
                            {t('gallery.title')}
                        </span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A2E35] max-w-full ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                        {t('gallery.subtitle') || (isRtl ? 'معرض الصور' : 'Our Gallery')}
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#D2A23F] to-[#E5C29B] mx-auto rounded-full mb-8"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 relative overflow-hidden group ${filter === cat.id
                                ? 'bg-[#D2A23F] text-white shadow-lg shadow-[#D2A23F]/30 scale-105'
                                : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
                                } ${isRtl ? 'font-cairo' : 'font-inter'}`}
                        >
                            <span className="relative z-10">{cat.label}</span>
                            {filter !== cat.id && (
                                <div className="absolute inset-0 bg-[#D2A23F]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Gallery Slider */}
                <div className="relative px-4 md:px-12 pb-10 sm:pb-0">
                    <Swiper
                        key={`${filter}-${isRtl ? 'rtl' : 'ltr'}`} // Force re-render on filter change
                        dir={isRtl ? 'rtl' : 'ltr'}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="gallery-swiper !pb-14 !overflow-visible"
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                        initialSlide={Math.floor(filteredImages.length / 2)}
                    >
                        {filteredImages.map((img, index) => (
                            <SwiperSlide key={img.id} className="!w-[85vw] sm:!w-[350px] md:!w-[400px] h-[300px] sm:h-[400px]">
                                <div
                                    className="group relative h-full rounded-[2rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-500 border-4 border-white"
                                    onClick={() => setSelectedImg(img)}
                                >
                                    <img
                                        src={img.url}
                                        alt={img.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-10">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            <Maximize2 className="text-white" size={24} />
                                        </div>
                                        <h3 className={`text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                                            {img.title}
                                        </h3>
                                        <p className="text-[#D2A23F] text-sm mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 uppercase tracking-wider">
                                            {t('gallery.viewProject') || 'View Project'}
                                        </p>
                                    </div>

                                    {/* Border Glow */}
                                    <div className="absolute inset-0 border-2 border-[#D2A23F]/0 group-hover:border-[#D2A23F] rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons are handled by global styles in index.css */}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] bg-[#1A2E35]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImg(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-[#D2A23F] hover:rotate-90 transition-all duration-300"
                        onClick={() => setSelectedImg(null)}
                    >
                        <X size={40} />
                    </button>
                    <div className="relative max-w-6xl w-full flex flex-col items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src={selectedImg.url}
                                alt={selectedImg.title}
                                className="w-full h-auto max-h-[80vh] object-contain bg-black/50"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className={`text-2xl font-bold text-white mb-2 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                                {selectedImg.title}
                            </h3>
                            <div className="inline-flex items-center gap-2 text-[#D2A23F] text-sm font-medium px-4 py-1 bg-[#D2A23F]/10 rounded-full border border-[#D2A23F]/20">
                                <ImageIcon size={14} />
                                <span className={isRtl ? 'font-cairo' : 'font-inter'}>
                                    {categories.find(c => c.id === selectedImg.category)?.label || 'Gallery'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
