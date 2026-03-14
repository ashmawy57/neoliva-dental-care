import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Sparkles, Star, BookOpen, Smile, Heart, DollarSign, Shield, User, Clock, Zap, HelpCircle, Award, ChevronDown, ChevronUp, ArrowRight, Play, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const CosmeticDentistryPage = () => {
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [activeSection, setActiveSection] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActiveSection(section.id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const tableOfContents = isRtl ? [
        { id: 'what-is', title: 'ما هو طب الأسنان التجميلي؟', icon: Sparkles },
        { id: 'procedures', title: 'أشهر الإجراءات التجميلية', icon: Star },
        { id: 'smile-makeover', title: 'تجميل الابتسامة', icon: Smile },
        { id: 'benefits', title: 'الفوائد النفسية والصحية', icon: Heart },
        { id: 'cost', title: 'التكلفة والتمويل', icon: DollarSign },
        { id: 'choosing-dentist', title: 'اختيار الطبيب المناسب', icon: User },
        { id: 'risks', title: 'المخاطر والصيانة', icon: Shield },
        { id: 'faq', title: 'الأسئلة الشائعة', icon: HelpCircle },
    ] : [
        { id: 'what-is', title: 'What is Cosmetic Dentistry?', icon: Sparkles },
        { id: 'procedures', title: 'Popular Procedures', icon: Star },
        { id: 'smile-makeover', title: 'Smile Makeover', icon: Smile },
        { id: 'benefits', title: 'Benefits', icon: Heart },
        { id: 'cost', title: 'Cost & Financing', icon: DollarSign },
        { id: 'choosing-dentist', title: 'Choosing a Dentist', icon: User },
        { id: 'risks', title: 'Risks & Maintenance', icon: Shield },
        { id: 'faq', title: 'FAQ', icon: HelpCircle },
    ];

    const procedures = isRtl ? [
        {
            title: 'تبييض الأسنان الاحترافي',
            subtitle: 'ابتسامة أكثر إشراقاً',
            description: 'نتائج فورية في جلسة واحدة مع تقنية Zoom المتقدمة',
            features: ['تفتيح حتى 8 درجات', 'نتائج فورية', 'آمن 100%'],
            color: 'from-amber-400 to-orange-500',
            bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
            icon: Sparkles,
            duration: '60 دقيقة'
        },
        {
            title: 'الفينير الخزفي',
            subtitle: 'ابتسامة هوليوود',
            description: 'قشور رقيقة من البورسلين تحول ابتسامتك بالكامل',
            features: ['مظهر طبيعي', 'تدوم 15+ سنة', 'مقاومة للبقع'],
            color: 'from-blue-400 to-indigo-500',
            bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
            icon: Star,
            duration: '2-3 زيارات'
        },
        {
            title: 'الحشو التجميلي',
            subtitle: 'إصلاح فوري',
            description: 'راتنج بلون الأسنان لإصلاح الكسور والشقوق',
            features: ['زيارة واحدة', 'بدون ألم', 'تكلفة منخفضة'],
            color: 'from-emerald-400 to-teal-500',
            bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
            icon: Shield,
            duration: '30-60 دقيقة'
        },
        {
            title: 'الإنفزلاين',
            subtitle: 'تقويم شفاف',
            description: 'قوالب شفافة غير مرئية لتقويم الأسنان',
            features: ['غير مرئي', 'قابل للإزالة', 'مريح'],
            color: 'from-violet-400 to-purple-500',
            bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50',
            icon: Smile,
            duration: '6-18 شهر'
        },
        {
            title: 'زراعة الأسنان',
            subtitle: 'حل دائم',
            description: 'استبدال الأسنان المفقودة بزرعات تيتانيوم متطورة',
            features: ['تدوم مدى الحياة', 'تبدو طبيعية', 'وظائف كاملة'],
            color: 'from-rose-400 to-pink-500',
            bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50',
            icon: Award,
            duration: '3-6 أشهر'
        }
    ] : [
        {
            title: 'Professional Whitening',
            subtitle: 'Brighter Smile',
            description: 'Instant results in one session with advanced Zoom technology',
            features: ['Up to 8 shades lighter', 'Instant results', '100% Safe'],
            color: 'from-amber-400 to-orange-500',
            bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
            icon: Sparkles,
            duration: '60 mins'
        },
        {
            title: 'Porcelain Veneers',
            subtitle: 'Hollywood Smile',
            description: 'Ultra-thin porcelain shells that transform your entire smile',
            features: ['Natural look', '15+ years lasting', 'Stain resistant'],
            color: 'from-blue-400 to-indigo-500',
            bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
            icon: Star,
            duration: '2-3 visits'
        },
        {
            title: 'Dental Bonding',
            subtitle: 'Quick Fix',
            description: 'Tooth-colored resin to repair chips and cracks instantly',
            features: ['Single visit', 'Painless', 'Affordable'],
            color: 'from-emerald-400 to-teal-500',
            bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
            icon: Shield,
            duration: '30-60 mins'
        },
        {
            title: 'Invisalign',
            subtitle: 'Clear Aligners',
            description: 'Invisible clear aligners for discreet teeth straightening',
            features: ['Invisible', 'Removable', 'Comfortable'],
            color: 'from-violet-400 to-purple-500',
            bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50',
            icon: Smile,
            duration: '6-18 months'
        },
        {
            title: 'Dental Implants',
            subtitle: 'Permanent Solution',
            description: 'Replace missing teeth with advanced titanium implants',
            features: ['Lifetime durability', 'Natural look', 'Full function'],
            color: 'from-rose-400 to-pink-500',
            bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50',
            icon: Award,
            duration: '3-6 months'
        }
    ];

    const faqs = isRtl ? [
        { q: 'هل يمكنني تبييض الفينير أو التيجان؟', a: 'لا، مواد التبييض تعمل فقط على المينا الطبيعية. يُنصح بالتبييض قبل تركيب الفينير لمطابقة اللون.' },
        { q: 'هل طب الأسنان التجميلي مؤلم؟', a: 'طب الأسنان الحديث مريح جداً. التخدير الموضعي يجعل الإجراءات غير مؤلمة تماماً.' },
        { q: 'كم تدوم نتائج العلاج؟', a: 'الفينير يدوم 10-15 سنة، الزراعات مدى الحياة، والتبييض 1-3 سنوات حسب العناية.' },
        { q: 'هل أنا مرشح مناسب؟', a: 'معظم الأشخاص مرشحون جيدون. استشارة الطبيب ستحدد الخيار الأفضل لحالتك.' },
    ] : [
        { q: 'Can I whiten veneers or crowns?', a: 'No, whitening only works on natural enamel. Whiten before getting veneers to match the shade.' },
        { q: 'Is cosmetic dentistry painful?', a: 'Modern dentistry is very comfortable. Local anesthesia makes procedures completely painless.' },
        { q: 'How long do results last?', a: 'Veneers last 10-15 years, implants lifetime, whitening 1-3 years depending on care.' },
        { q: 'Am I a good candidate?', a: 'Most people are good candidates. A consultation will determine the best option for you.' },
    ];

    const stats = isRtl ? [
        { number: '10,000+', label: 'ابتسامة سعيدة' },
        { number: '15+', label: 'سنة خبرة' },
        { number: '98%', label: 'رضا العملاء' },
        { number: '24/7', label: 'دعم متواصل' },
    ] : [
        { number: '10,000+', label: 'Happy Smiles' },
        { number: '15+', label: 'Years Experience' },
        { number: '98%', label: 'Satisfaction Rate' },
        { number: '24/7', label: 'Support' },
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Floating Particles Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#D2A23F]/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Epic Hero Section */}
            <div className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#0F1C21]">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(210, 162, 63, 0.15) 0%, transparent 50%),
                                            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
                                            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 40%)`
                        }}></div>
                    </div>
                    {/* Animated Grid */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `linear-gradient(rgba(210, 162, 63, 0.3) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(210, 162, 63, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                    {/* Floating Shapes */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D2A23F] rounded-full animate-ping"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-20 lg:py-32 relative z-10">
                    <Link
                        to="/services"
                        className={`inline-flex items-center gap-2 text-white/60 hover:text-[#D2A23F] mb-6 md:mb-8 transition-all duration-300 group ${isRtl ? 'flex-row-reverse' : ''}`}
                    >
                        <ArrowLeft className={`w-5 h-5 transition-transform group-hover:-translate-x-1 ${isRtl ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
                        <span className="text-sm font-medium">{isRtl ? 'العودة إلى الخدمات' : 'Back to Services'}</span>
                    </Link>

                    {/* Mobile Hero Image - Shows first on mobile */}
                    <div className="block lg:hidden mb-8">
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                            {/* Glowing Ring */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D2A23F] via-transparent to-[#D2A23F] opacity-30 animate-pulse"></div>

                            {/* Main Image Container */}
                            <div className="absolute inset-2 rounded-2xl overflow-hidden border-2 border-[#D2A23F]/30 shadow-2xl">
                                <img
                                    src="/result3.jpg.jpg"
                                    alt="Cosmetic Dentistry Result"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/70 via-transparent to-transparent"></div>

                                {/* Caption */}
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                                        <p className="text-white font-bold text-sm">{isRtl ? 'نتائج حقيقية' : 'Real Results'}</p>
                                        <p className="text-white/70 text-xs">{isRtl ? 'ابتسامة هوليود' : 'Hollywood Smile'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badges - Mobile */}
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-[#D2A23F] to-[#B8912E] rounded-xl p-2 shadow-xl animate-float">
                                <Star className="w-5 h-5 text-white" />
                            </div>
                            <div className="absolute -bottom-2 -left-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-2 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <Award className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-start">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Sparkles className="w-4 h-4 text-[#D2A23F] animate-pulse" />
                                <span className="text-[#D2A23F] text-xs md:text-sm font-semibold tracking-wide">
                                    {isRtl ? 'الدليل الشامل 2024' : 'Complete Guide 2024'}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className={`text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight ${isRtl ? '' : 'font-playfair'}`}>
                                {isRtl ? (
                                    <>
                                        <span className="block">طب الأسنان</span>
                                        <span className="block mt-2 bg-gradient-to-r from-[#D2A23F] via-[#F0D78C] to-[#D2A23F] text-transparent bg-clip-text">التجميلي</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="block">Cosmetic</span>
                                        <span className="block mt-2 bg-gradient-to-r from-[#D2A23F] via-[#F0D78C] to-[#D2A23F] text-transparent bg-clip-text">Dentistry</span>
                                    </>
                                )}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {isRtl
                                    ? 'اكتشف كيف يمكن لطب الأسنان التجميلي أن يغير ابتسامتك ويعزز ثقتك بنفسك.'
                                    : 'Discover how cosmetic dentistry can transform your smile and boost your confidence.'
                                }
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/#booking"
                                    className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#D2A23F] to-[#B8912E] text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(210,162,63,0.4)] hover:-translate-y-1 text-center"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isRtl ? 'احجز استشارتك المجانية' : 'Book Free Consultation'}
                                        <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180' : ''}`} />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#B8912E] to-[#D2A23F] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </Link>
                                <button className="group px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                                    <Play className="w-5 h-5" />
                                    {isRtl ? 'شاهد الفيديو' : 'Watch Video'}
                                </button>
                            </div>
                        </div>

                        {/* Desktop Hero Visual */}
                        <div className="relative hidden lg:block">
                            <div className="relative w-full aspect-square">
                                {/* Glowing Ring */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#D2A23F] via-transparent to-[#D2A23F] opacity-30 animate-pulse"></div>

                                {/* Main Image Container */}
                                <div className="absolute inset-4 rounded-3xl overflow-hidden border-4 border-[#D2A23F]/30 shadow-2xl">
                                    <img
                                        src="/result3.jpg.jpg"
                                        alt="Cosmetic Dentistry Result"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/60 via-transparent to-transparent"></div>

                                    {/* Caption */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                            <p className="text-white font-bold text-lg">{isRtl ? 'نتائج حقيقية' : 'Real Results'}</p>
                                            <p className="text-white/70 text-sm">{isRtl ? 'ابتسامة هوليود - قبل وبعد' : 'Hollywood Smile - Before & After'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#D2A23F] to-[#B8912E] rounded-2xl p-4 shadow-xl animate-float">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                                    <Sparkles className="w-6 h-6 text-[#D2A23F]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="text-2xl md:text-4xl font-bold text-[#D2A23F] mb-1 md:mb-2">{stat.number}</div>
                                <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicator - Hidden on mobile */}
                    <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50">
                        <span className="text-sm">{isRtl ? 'اكتشف المزيد' : 'Scroll to explore'}</span>
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-10 lg:py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sticky Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-gray-100/50">
                                <h3 className="text-lg font-bold text-[#1A2E35] mb-6 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-[#D2A23F]" />
                                    {isRtl ? 'جدول المحتويات' : 'Contents'}
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item, index) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${activeSection === item.id
                                                ? 'bg-gradient-to-r from-[#D2A23F] to-[#B8912E] text-white shadow-lg'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Quick CTA */}
                            <div className="mt-6 bg-gradient-to-br from-[#1A2E35] to-[#2A4A55] rounded-3xl p-6 text-center">
                                <Sparkles className="w-10 h-10 text-[#D2A23F] mx-auto mb-4" />
                                <p className="text-white font-medium mb-4">
                                    {isRtl ? 'هل أنت مستعد لابتسامة جديدة؟' : 'Ready for a new smile?'}
                                </p>
                                <Link
                                    to="/#booking"
                                    className="block w-full py-3 bg-[#D2A23F] text-white font-bold rounded-xl hover:bg-[#B8912E] transition-all"
                                >
                                    {isRtl ? 'احجز الآن' : 'Book Now'}
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Article */}
                    <article className="lg:col-span-3 space-y-24">
                        {/* Section 1: What is Cosmetic Dentistry */}
                        <section id="what-is" className="scroll-mt-24" data-animate>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#D2A23F] to-[#B8912E] rounded-2xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-[#D2A23F] text-sm font-semibold uppercase tracking-wider">{isRtl ? 'الفصل الأول' : 'Chapter 01'}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E35]">
                                        {isRtl ? 'ما هو طب الأسنان التجميلي؟' : 'What is Cosmetic Dentistry?'}
                                    </h2>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    {isRtl
                                        ? 'طب الأسنان التجميلي هو فن وعلم تحسين مظهر ابتسامتك. يتجاوز مجرد الجمال السطحي ليشمل استعادة الوظيفة وتعزيز الثقة بالنفس.'
                                        : 'Cosmetic dentistry is the art and science of enhancing your smile\'s appearance. It goes beyond superficial beauty to restore function and boost self-confidence.'
                                    }
                                </p>

                                {/* Feature Cards */}
                                <div className="grid md:grid-cols-2 gap-6 not-prose">
                                    {[
                                        { title: isRtl ? 'اللون' : 'Color', desc: isRtl ? 'تصحيح التصبغات والبقع' : 'Correct stains & discoloration', color: 'from-amber-400 to-orange-500' },
                                        { title: isRtl ? 'المحاذاة' : 'Alignment', desc: isRtl ? 'إصلاح الفراغات والازدحام' : 'Fix gaps & overcrowding', color: 'from-blue-400 to-indigo-500' },
                                        { title: isRtl ? 'الشكل' : 'Shape', desc: isRtl ? 'إعادة تشكيل الأسنان' : 'Reshape misshapen teeth', color: 'from-emerald-400 to-teal-500' },
                                        { title: isRtl ? 'اللثة' : 'Gums', desc: isRtl ? 'تحسين خط اللثة' : 'Improve gum line', color: 'from-pink-400 to-rose-500' },
                                    ].map((item, index) => (
                                        <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                                            <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Procedures */}
                        <section id="procedures" className="scroll-mt-24" data-animate>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">{isRtl ? 'الفصل الثاني' : 'Chapter 02'}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E35]">
                                        {isRtl ? 'أشهر الإجراءات التجميلية' : 'Popular Procedures'}
                                    </h2>
                                </div>
                            </div>

                            <div className="grid gap-6">
                                {procedures.map((procedure, index) => (
                                    <div key={index} className={`group relative ${procedure.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                                        <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} w-32 h-32 bg-gradient-to-br ${procedure.color} opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

                                        <div className="relative flex flex-col md:flex-row gap-6">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${procedure.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                                <procedure.icon className="w-10 h-10 text-white" />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-2xl font-bold text-[#1A2E35]">{procedure.title}</h3>
                                                    <span className="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-600">
                                                        <Clock className="w-3 h-3 inline mr-1" />
                                                        {procedure.duration}
                                                    </span>
                                                </div>
                                                <p className="text-[#D2A23F] font-semibold mb-2">{procedure.subtitle}</p>
                                                <p className="text-gray-600 mb-4">{procedure.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {procedure.features.map((feature, idx) => (
                                                        <span key={idx} className={`inline-flex items-center gap-1 px-3 py-1 bg-white/80 rounded-full text-sm text-gray-700 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                                            <CheckCircle className="w-3 h-3 text-green-500" />
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3: Smile Makeover */}
                        <section id="smile-makeover" className="scroll-mt-24" data-animate>
                            <div className="relative bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#2A4A55] rounded-[3rem] p-8 md:p-12 overflow-hidden">
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#D2A23F] rounded-full blur-[150px]"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
                                </div>

                                <div className="relative">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#D2A23F] to-[#B8912E] rounded-2xl flex items-center justify-center">
                                            <Smile className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-[#D2A23F] text-sm font-semibold uppercase tracking-wider">{isRtl ? 'الفصل الثالث' : 'Chapter 03'}</span>
                                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                                {isRtl ? 'تجميل الابتسامة الشامل' : 'Complete Smile Makeover'}
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                                        {isRtl
                                            ? 'نستخدم تقنية تصميم الابتسامة الرقمي (DSD) لإنشاء خطة علاج مخصصة تناسب ملامح وجهك الفريدة.'
                                            : 'We use Digital Smile Design (DSD) technology to create a customized treatment plan that suits your unique facial features.'
                                        }
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {[
                                            { icon: '📐', title: isRtl ? 'تناظر الوجه' : 'Facial Symmetry', desc: isRtl ? 'محاذاة خط الأسنان مع الوجه' : 'Align dental midline with face' },
                                            { icon: '😊', title: isRtl ? 'خط الابتسامة' : 'Smile Line', desc: isRtl ? 'منحنى يتبع الشفة السفلية' : 'Curve following lower lip' },
                                            { icon: '✨', title: isRtl ? 'نسب ذهبية' : 'Golden Ratio', desc: isRtl ? 'نسبة العرض للارتفاع المثالية' : 'Perfect width-to-height ratio' },
                                            { icon: '🎨', title: isRtl ? 'لون مثالي' : 'Perfect Shade', desc: isRtl ? 'يكمل لون بشرتك' : 'Complements your skin tone' },
                                        ].map((item, index) => (
                                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                                                <span className="text-3xl mb-3 block">{item.icon}</span>
                                                <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                                <p className="text-gray-400">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Benefits */}
                        <section id="benefits" className="scroll-mt-24" data-animate>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-pink-500 text-sm font-semibold uppercase tracking-wider">{isRtl ? 'الفصل الرابع' : 'Chapter 04'}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E35]">
                                        {isRtl ? 'الفوائد النفسية والصحية' : 'Psychological & Health Benefits'}
                                    </h2>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: Heart, title: isRtl ? 'ثقة أعلى' : 'Higher Confidence', desc: isRtl ? 'ابتسم بثقة في كل مناسبة' : 'Smile confidently in any situation', color: 'from-pink-500 to-rose-500' },
                                    { icon: Sparkles, title: isRtl ? 'مظهر أصغر' : 'Youthful Look', desc: isRtl ? 'ابتسامة مشرقة تجعلك تبدو أصغر' : 'A bright smile makes you look younger', color: 'from-amber-500 to-orange-500' },
                                    { icon: Shield, title: isRtl ? 'صحة أفضل' : 'Better Health', desc: isRtl ? 'أسنان مستقيمة أسهل في التنظيف' : 'Straight teeth are easier to clean', color: 'from-emerald-500 to-teal-500' },
                                ].map((item, index) => (
                                    <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                                        <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <item.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#1A2E35] text-xl mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 5: Cost */}
                        <section id="cost" className="scroll-mt-24" data-animate>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <DollarSign className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">{isRtl ? 'الفصل الخامس' : 'Chapter 05'}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E35]">
                                        {isRtl ? 'التكلفة والتمويل' : 'Cost & Financing'}
                                    </h2>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        { title: isRtl ? 'خطط مرنة' : 'Flexible Plans', desc: isRtl ? 'أقساط شهرية مريحة' : 'Comfortable monthly payments' },
                                        { title: isRtl ? 'بدون فوائد' : '0% Interest', desc: isRtl ? 'تمويل بدون فوائد' : 'Interest-free financing' },
                                        { title: isRtl ? 'استشارة مجانية' : 'Free Consult', desc: isRtl ? 'تقييم شامل مجاني' : 'Free comprehensive evaluation' },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white rounded-2xl p-6 text-center">
                                            <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Choosing Dentist */}
                        <section id="choosing-dentist" className="scroll-mt-24" data-animate>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <User className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-violet-500 text-sm font-semibold uppercase tracking-wider">{isRtl ? 'الفصل السادس' : 'Chapter 06'}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E35]">
                                        {isRtl ? 'كيف تختار الطبيب المناسب' : 'How to Choose the Right Dentist'}
                                    </h2>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: '📸', title: isRtl ? 'صور قبل وبعد' : 'Before & After', desc: isRtl ? 'اطلع على الحالات السابقة' : 'Review previous cases' },
                                    { icon: '🏆', title: isRtl ? 'الاعتماد والتدريب' : 'Accreditation', desc: isRtl ? 'شهادات معتمدة' : 'Certified credentials' },
                                    { icon: '💻', title: isRtl ? 'التكنولوجيا' : 'Technology', desc: isRtl ? 'أحدث المعدات' : 'Latest equipment' },
                                    { icon: '⭐', title: isRtl ? 'التقييمات' : 'Reviews', desc: isRtl ? 'آراء المرضى' : 'Patient testimonials' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                        <span className="text-3xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-[#1A2E35] text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7: Risks */}
                        <section id="risks" className="scroll-mt-24" data-animate>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{isRtl ? 'الفصل السابع' : 'Chapter 07'}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E35]">
                                        {isRtl ? 'المخاطر والصيانة' : 'Risks & Maintenance'}
                                    </h2>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                                    <h4 className="font-bold text-red-800 text-xl mb-4">{isRtl ? 'اعتبارات مهمة' : 'Important Considerations'}</h4>
                                    <ul className="space-y-3">
                                        {(isRtl ? ['حساسية مؤقتة بعد التبييض', 'الفينير يتطلب إزالة المينا', 'قد تحتاج استبدال بعد 10-15 سنة'] : ['Temporary sensitivity after whitening', 'Veneers require enamel removal', 'May need replacement in 10-15 years']).map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-red-700">
                                                <span className="text-red-500 mt-1">⚠️</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                                    <h4 className="font-bold text-green-800 text-xl mb-4">{isRtl ? 'نصائح العناية' : 'Care Tips'}</h4>
                                    <ul className="space-y-3">
                                        {(isRtl ? ['تجنب الأطعمة المصبغة', 'استخدم واقي ليلي', 'زيارات منتظمة للطبيب'] : ['Avoid staining foods', 'Use a nightguard', 'Regular dental visits']).map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-green-700">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 8: FAQ */}
                        <section id="faq" className="scroll-mt-24" data-animate>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <HelpCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wider">{isRtl ? 'الفصل الثامن' : 'Chapter 08'}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E35]">
                                        {isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                            className={`w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}
                                        >
                                            <span className="font-bold text-[#1A2E35] text-lg">{faq.q}</span>
                                            {expandedFaq === index ? (
                                                <ChevronUp className="w-6 h-6 text-[#D2A23F]" />
                                            ) : (
                                                <ChevronDown className="w-6 h-6 text-gray-400" />
                                            )}
                                        </button>
                                        {expandedFaq === index && (
                                            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="relative bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#0F1C21] rounded-[3rem] p-8 md:p-16 overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D2A23F] rounded-full blur-[200px] opacity-20"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
                            </div>

                            <div className="relative text-center max-w-3xl mx-auto">
                                <Sparkles className="w-16 h-16 text-[#D2A23F] mx-auto mb-6" />
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    {isRtl ? 'ابدأ رحلتك نحو ابتسامة مثالية' : 'Start Your Journey to a Perfect Smile'}
                                </h2>
                                <p className="text-xl text-gray-300 mb-10">
                                    {isRtl
                                        ? 'احجز استشارتك المجانية اليوم واكتشف كيف يمكننا تحويل ابتسامتك.'
                                        : 'Book your free consultation today and discover how we can transform your smile.'
                                    }
                                </p>
                                <Link
                                    to="/#booking"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D2A23F] to-[#B8912E] text-white text-xl font-bold rounded-full hover:shadow-[0_0_50px_rgba(210,162,63,0.5)] transition-all duration-300 hover:-translate-y-1"
                                >
                                    {isRtl ? 'احجز استشارتك المجانية' : 'Book Your Free Consultation'}
                                    <ArrowRight className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default CosmeticDentistryPage;
