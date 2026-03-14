import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Heart, MessageCircle, ExternalLink, X } from 'lucide-react';

const Portfolio = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const portfolioItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=60",
            likes: '1.2k',
            comments: '45',
            url: '#'
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1598256989494-06fc44b9a9d2?w=800&auto=format&fit=crop&q=60",
            likes: '856',
            comments: '32',
            url: '#'
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&auto=format&fit=crop&q=60",
            likes: '2.1k',
            comments: '120',
            url: '#'
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&auto=format&fit=crop&q=60",
            likes: '945',
            comments: '28',
            url: '#'
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&auto=format&fit=crop&q=60",
            likes: '1.5k',
            comments: '64',
            url: '#'
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=800&auto=format&fit=crop&q=60",
            likes: '3.4k',
            comments: '210',
            url: '#'
        }
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="portfolio" className="py-12 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Instagram Link */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-[#D2A23F] mb-3 bg-[#D2A23F]/10 px-4 py-1.5 rounded-full">
                        <Instagram className="w-4 h-4" />
                        <span className={`text-sm font-semibold uppercase tracking-wider ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                            {isRTL ? 'تابعنا على انستجرام' : 'Follow us on Instagram'}
                        </span>
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-gray-900 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                        {t('portfolio.title')}
                    </h2>
                    <p className={`text-xl text-gray-500 max-w-2xl mx-auto ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                        {isRTL ? '@neoliva_dental' : '@neoliva_dental'}
                    </p>
                </div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-8">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage(item.image)}
                            className="group relative block aspect-square overflow-hidden bg-gray-100 md:rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt="Dental success story"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* Follow Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ${isRTL ? 'font-cairo' : 'font-inter'}`}
                    >
                        <Instagram className="w-5 h-5" />
                        <span>{isRTL ? 'شاهد المزيد على انستجرام' : 'View More on Instagram'}</span>
                    </a>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-10 bg-white/10 rounded-full backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Portfolio;
