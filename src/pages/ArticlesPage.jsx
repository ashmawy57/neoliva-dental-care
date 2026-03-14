import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const routineImg = 'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=800';
const cosmeticImg = 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800';
const techImg = 'https://images.unsplash.com/photo-1588771972330-30f14d6482a1?auto=format&fit=crop&q=80&w=800';
const preventiveImg = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800';

const ArticlesPage = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    // Define articles with their links
    const articlesData = [
        {
            id: 'general-preventive-dentistry',
            title: isRtl ? 'طب الأسنان العام والوقائي' : 'General & Preventive Dentistry',
            description: isRtl
                ? 'دليلك الشامل لفهم طب الأسنان العام والوقائي وأهميتهما في الحفاظ على صحة فمك وابتسامتك.'
                : 'The Ultimate Guide to General and Preventive Dentistry: Your Investment in Lifelong Health and a Radiant Smile.',
            date: isRtl ? '12 يناير 2026' : 'January 12, 2026',
            category: isRtl ? 'صحة الفم' : 'Oral Health',
            image: preventiveImg,
            link: '/articles/general-preventive-dentistry',
            hasPage: true
        },
        {
            id: 'daily-dental-care',
            title: isRtl ? 'العناية اليومية بالأسنان' : 'Daily Dental Care',
            description: isRtl
                ? 'دليلك الشامل للحفاظ على ابتسامة صحية وجميلة بخطوات يومية بسيطة.'
                : 'Your comprehensive guide to maintaining a healthy and beautiful smile with simple daily steps.',
            date: isRtl ? '15 يناير 2026' : 'January 15, 2026',
            category: isRtl ? 'نصائح' : 'Tips',
            image: routineImg,
            link: null,
            hasPage: false
        },
        {
            id: 'modern-cosmetic-dentistry',
            title: isRtl ? 'تجميل الأسنان الحديث' : 'Modern Cosmetic Dentistry',
            description: isRtl
                ? 'اكتشف أحدث التقنيات في تجميل الأسنان وكيف يمكننا تحويل ابتسامتك.'
                : 'Discover the latest technologies in cosmetic dentistry and how we can transform your smile.',
            date: isRtl ? '10 يناير 2026' : 'January 10, 2026',
            category: isRtl ? 'تجميل' : 'Cosmetic',
            image: cosmeticImg,
            link: null,
            hasPage: false
        },
        {
            id: 'dental-implant-technology',
            title: isRtl ? 'تقنية زراعة الأسنان' : 'Dental Implant Technology',
            description: isRtl
                ? 'لماذا تعد زراعة الأسنان الحل المثالي للأسنان المفقودة وكيف نستخدم أحدث المعدات.'
                : 'Why dental implants are the ideal solution for missing teeth and how we use the latest equipment.',
            date: isRtl ? '5 يناير 2026' : 'January 5, 2026',
            category: isRtl ? 'تقنية' : 'Tech',
            image: techImg,
            link: null,
            hasPage: false
        },
        {
            id: 'orthodontics-guide',
            title: isRtl ? 'دليل تقويم الأسنان' : 'Orthodontics Guide',
            description: isRtl
                ? 'كل ما تحتاج معرفته عن تقويم الأسنان والخيارات المتاحة لك.'
                : 'Everything you need to know about orthodontics and the options available to you.',
            date: isRtl ? '1 يناير 2026' : 'January 1, 2026',
            category: isRtl ? 'تقويم' : 'Orthodontics',
            image: routineImg,
            link: null,
            hasPage: false
        },
        {
            id: 'childrens-dental-health',
            title: isRtl ? 'صحة أسنان الأطفال' : "Children's Dental Health",
            description: isRtl
                ? 'نصائح للآباء للحفاظ على صحة أسنان أطفالهم منذ الصغر.'
                : 'Tips for parents to maintain their children\'s dental health from an early age.',
            date: isRtl ? '28 ديسمبر 2025' : 'December 28, 2025',
            category: isRtl ? 'أطفال' : 'Pediatric',
            image: cosmeticImg,
            link: null,
            hasPage: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            {/* Page Header */}
            <div className="bg-[#1A2E35] pt-28 pb-12 lg:pt-36 lg:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#D2A23F]/10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
                        {t('articles.title')}
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up delay-100">
                        {t('articles.subtitle')}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Search/Filter Bar (Placeholder) */}
                    <div className="flex justify-center mb-12">
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder={isRtl ? 'ابحث في المقالات...' : 'Search articles...'}
                                className={`w-full py-3 px-6 rounded-full border border-gray-200 focus:outline-none focus:border-[#D2A23F] shadow-sm ${isRtl ? 'text-right' : 'text-left'}`}
                            />
                            <button className={`absolute top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D2A23F] ${isRtl ? 'left-4' : 'right-4'}`}>
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articlesData.map((article, index) => (
                            <div
                                key={article.id}
                                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 reveal reveal-up delay-${(index % 3) * 100}`}
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                                        <span className="bg-[#D2A23F] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                            {article.category}
                                        </span>
                                        {article.hasPage && (
                                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                                                {isRtl ? 'جديد' : 'New'}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} className="text-[#D2A23F]" />
                                            <span>{article.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} className="text-[#D2A23F]" />
                                            <span>{isRtl ? 'د. نيوليفا' : 'Dr. Neoliva'}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#1A2E35] mb-4 group-hover:text-[#D2A23F] transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                        {article.description}
                                    </p>

                                    {article.hasPage ? (
                                        <Link
                                            to={article.link}
                                            className="flex items-center gap-2 text-[#D2A23F] font-bold group/btn hover:text-[#B28935] transition-colors duration-300"
                                        >
                                            {t('articles.readMore')}
                                            <ArrowRight
                                                size={18}
                                                className={`transition-transform duration-300 group-hover/btn:translate-x-1 ${isRtl ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`}
                                            />
                                        </Link>
                                    ) : (
                                        <button className="flex items-center gap-2 text-[#1A2E35] font-bold group/btn hover:text-[#D2A23F] transition-colors duration-300 cursor-not-allowed opacity-60">
                                            {isRtl ? 'قريباً' : 'Coming Soon'}
                                            <ArrowRight
                                                size={18}
                                                className={`transition-transform duration-300 ${isRtl ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticlesPage;
