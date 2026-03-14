import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Heart, Shield, Sparkles, Star, BookOpen, Clock, Zap, HelpCircle, Award, ChevronDown, ChevronUp, ArrowRight, Plane, MapPin, DollarSign, Globe, Users, Hotel, Camera, Calendar, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DentalTourismPage = () => {
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [activeSection, setActiveSection] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);

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

    const tableOfContents = isRtl ? [
        { id: 'intro', title: 'التاريخ يلتقي الرعاية', icon: Globe },
        { id: 'why-egypt', title: 'لماذا مصر 2026؟', icon: MapPin },
        { id: 'why-neoliva', title: 'لماذا نيوليفا؟', icon: Award },
        { id: 'treatments', title: 'العلاجات الشائعة', icon: Sparkles },
        { id: 'costs', title: 'مقارنة التكاليف', icon: DollarSign },
        { id: 'planning', title: 'تخطيط رحلتك', icon: Calendar },
        { id: 'itinerary', title: 'برنامج الإجازة', icon: Camera },
        { id: 'safety', title: 'الأمان والراحة', icon: Shield },
        { id: 'stories', title: 'قصص النجاح', icon: Heart },
        { id: 'faq', title: 'الأسئلة الشائعة', icon: HelpCircle },
    ] : [
        { id: 'intro', title: 'History Meets Healthcare', icon: Globe },
        { id: 'why-egypt', title: 'Why Egypt 2026?', icon: MapPin },
        { id: 'why-neoliva', title: 'Why Neoliva?', icon: Award },
        { id: 'treatments', title: 'Top Treatments', icon: Sparkles },
        { id: 'costs', title: 'Cost Comparison', icon: DollarSign },
        { id: 'planning', title: 'Plan Your Trip', icon: Calendar },
        { id: 'itinerary', title: 'Vacation Itinerary', icon: Camera },
        { id: 'safety', title: 'Safety & Comfort', icon: Shield },
        { id: 'stories', title: 'Success Stories', icon: Heart },
        { id: 'faq', title: 'FAQ', icon: HelpCircle },
    ];

    const stats = isRtl ? [
        { number: '70%', label: 'توفير في التكاليف' },
        { number: '5★', label: 'فنادق فاخرة' },
        { number: '24/7', label: 'دعم واتساب' },
        { number: '🏛️', label: 'أهرامات + ابتسامة' },
    ] : [
        { number: '70%', label: 'Cost Savings' },
        { number: '5★', label: 'Luxury Hotels' },
        { number: '24/7', label: 'WhatsApp Support' },
        { number: '🏛️', label: 'Pyramids + Smile' },
    ];

    const whyEgypt = isRtl ? [
        { icon: '💰', title: 'الميزة الاقتصادية', desc: 'سعر الصرف يفضل الدولار واليورو والجنيه الإسترليني - وفر حتى 70%' },
        { icon: '🎓', title: 'تعليم طبي عالمي', desc: 'أطباء بشهادات من كليات ملكية بريطانية وجامعات أمريكية وألمانية' },
        { icon: '🏗️', title: 'البنية التحتية الجديدة', desc: 'المتحف المصري الكبير، طرق جديدة، ونقل حديث' },
        { icon: '🤝', title: 'ضيافة مصرية', desc: 'مصر آمنة للسياح مع ثقافة "الكرم" المشهورة عالمياً' },
    ] : [
        { icon: '💰', title: 'Economic Advantage', desc: 'Exchange rate favors USD, EUR, GBP - save up to 70%' },
        { icon: '🎓', title: 'World-Class Education', desc: 'Doctors with Royal College UK, US and German certifications' },
        { icon: '🏗️', title: 'New Infrastructure', desc: 'Grand Egyptian Museum, new roads, modern transport' },
        { icon: '🤝', title: 'Egyptian Hospitality', desc: 'Safe for tourists with famous "Karam" culture worldwide' },
    ];

    const treatments = isRtl ? [
        { icon: '✨', title: 'ابتسامة هوليوود', timeline: '5-7 أيام', desc: 'فينيرز E-max من تصميم الابتسامة للتركيب النهائي', color: 'from-amber-400 to-orange-500' },
        { icon: '🦷', title: 'All-on-4 زراعة كاملة', timeline: 'زيارتان', desc: 'استبدال أطقم الأسنان بأسنان ثابتة دائمة على زرعات', color: 'from-blue-400 to-indigo-500' },
        { icon: '⚡', title: 'طب أسنان يوم واحد', timeline: 'نفس اليوم', desc: 'تيجان وحشوات وعلاج عصب في زيارة واحدة باستخدام CAD/CAM', color: 'from-emerald-400 to-teal-500' },
    ] : [
        { icon: '✨', title: 'Hollywood Smile', timeline: '5-7 Days', desc: 'E-max veneers from smile design to final bonding', color: 'from-amber-400 to-orange-500' },
        { icon: '🦷', title: 'All-on-4 Implants', timeline: '2 Visits', desc: 'Replace dentures with fixed permanent teeth on implants', color: 'from-blue-400 to-indigo-500' },
        { icon: '⚡', title: 'Same-Day Dentistry', timeline: 'Same Day', desc: 'Crowns, fillings, root canals in one visit using CAD/CAM', color: 'from-emerald-400 to-teal-500' },
    ];

    const costComparison = isRtl ? [
        { procedure: 'زرعة سن واحد', usa: '$3,500 - $5,000', uk: '£2,500', egypt: '$600 - $900', savings: '~80%' },
        { procedure: 'فينير (للسن)', usa: '$1,500 - $2,500', uk: '£900', egypt: '$250 - $400', savings: '~80%' },
        { procedure: 'تاج زركونيا', usa: '$1,200 - $1,800', uk: '£800', egypt: '$200 - $350', savings: '~75%' },
        { procedure: 'All-on-4 (فك)', usa: '$25,000+', uk: '£15,000+', egypt: '$5,000 - $7,000', savings: '~75%' },
        { procedure: 'علاج عصب (ضرس)', usa: '$1,200', uk: '£700', egypt: '$150 - $250', savings: '~80%' },
        { procedure: 'تبييض ليزر', usa: '$600', uk: '£400', egypt: '$150 - $200', savings: '~65%' },
    ] : [
        { procedure: 'Single Implant', usa: '$3,500 - $5,000', uk: '£2,500', egypt: '$600 - $900', savings: '~80%' },
        { procedure: 'Veneer (Per Tooth)', usa: '$1,500 - $2,500', uk: '£900', egypt: '$250 - $400', savings: '~80%' },
        { procedure: 'Zirconia Crown', usa: '$1,200 - $1,800', uk: '£800', egypt: '$200 - $350', savings: '~75%' },
        { procedure: 'All-on-4 (One Jaw)', usa: '$25,000+', uk: '£15,000+', egypt: '$5,000 - $7,000', savings: '~75%' },
        { procedure: 'Root Canal (Molar)', usa: '$1,200', uk: '£700', egypt: '$150 - $250', savings: '~80%' },
        { procedure: 'Laser Whitening', usa: '$600', uk: '£400', egypt: '$150 - $200', savings: '~65%' },
    ];

    const itinerary = isRtl ? [
        { day: '1', title: 'الوصول', activities: ['استقبال VIP من المطار', 'تسجيل بالفندق', 'عشاء على النيل'] },
        { day: '2', title: 'اليوم السريري 1', activities: ['استشارة ومسح 3D وتحضير', 'راحة بالفندق', 'مشي في خان الخليلي'] },
        { day: '3', title: 'الجولة التاريخية', activities: ['زيارة الأهرامات وأبو الهول', 'غداء بإطلالة على الأهرامات', 'المتحف المصري الكبير'] },
        { day: '4', title: 'ثقافة واسترخاء', activities: ['القلعة ومسجد محمد علي', 'رحلة فلوكة على النيل عند الغروب'] },
        { day: '5', title: 'الكشف الكبير', activities: ['تركيب الفينيرز الدائمة', 'لحظة المرآة!', 'عشاء احتفالي في الزمالك'] },
        { day: '6', title: 'المغادرة', activities: ['فحص نهائي اختياري', 'التوجه للمطار', 'العودة بابتسامة جديدة!'] },
    ] : [
        { day: '1', title: 'Arrival', activities: ['VIP Airport pickup', 'Hotel check-in', 'Dinner by the Nile'] },
        { day: '2', title: 'Clinical Day 1', activities: ['Consultation, 3D Scan, Preparation', 'Rest at hotel', 'Walk in Khan el-Khalili'] },
        { day: '3', title: 'Historic Tour', activities: ['Pyramids and Sphinx visit', 'Lunch with pyramid view', 'Grand Egyptian Museum'] },
        { day: '4', title: 'Culture & Relaxation', activities: ['Citadel and Alabaster Mosque', 'Felucca ride on Nile at sunset'] },
        { day: '5', title: 'The Grand Reveal', activities: ['Bonding permanent veneers', 'The Mirror Moment!', 'Celebratory dinner in Zamalek'] },
        { day: '6', title: 'Departure', activities: ['Optional final check-up', 'Transfer to airport', 'Fly home with new smile!'] },
    ];

    const stories = isRtl ? [
        { name: 'سارة ج.', country: 'الولايات المتحدة', year: '2025', quote: 'عرضوا علي $32,000 في تكساس. طرت للقاهرة ودفعت أقل من $8,000 شاملة الفندق والطيران. العيادة أنظف وأحدث من طبيبي في أمريكا. والأهرامات؟ مذهلة!' },
        { name: 'ليام ت.', country: 'المملكة المتحدة', year: '2025', quote: 'جئت للسياحة وكسرت سني. نيوليفا ركبت لي تاج في نفس اليوم. التقنية مذهلة - صمموه على الكمبيوتر أمامي. وعملت تبييض كمان!' },
    ] : [
        { name: 'Sarah J.', country: 'USA', year: '2025', quote: 'I was quoted $32,000 for a full mouth rehab in Texas. I found Neoliva, flew to Cairo, and paid less than $8,000 including my 5-star hotel and flights. The clinic is cleaner and more modern than my dentist back home. And the Pyramids? Breathtaking.' },
        { name: 'Liam T.', country: 'UK', year: '2025', quote: 'I came for a holiday but broke a tooth. Neoliva fitted me in for a same-day crown. The technology was incredible—they designed it on a computer right in front of me. I ended up getting my teeth whitened too!' },
    ];

    const faqs = isRtl ? [
        { q: 'هل تقدمون ضمانات على العمل؟', a: 'نعم. نقدم ضمان 5 سنوات إلى مدى الحياة على الزرعات (حسب النوع) و5 سنوات على التيجان/الفينيرز ضد الكسر.' },
        { q: 'كيف أدفع؟', a: 'نقبل جميع البطاقات الرئيسية (فيزا، ماستركارد)، نقداً بالدولار/اليورو/الجنيه، والتحويل البنكي.' },
        { q: 'هل يمكنني إحضار مرافق؟', a: 'بالتأكيد! سياحة الأسنان أفضل مع صديق أو شريك. نرتب إقامة لشخصين وجولات.' },
        { q: 'ماذا لو شعرت بألم بعد العودة؟', a: 'نوفر حقيبة رعاية شاملة. أطباؤنا متاحون عبر واتساب لمكالمات فيديو. في حالات نادرة، ننسق مع طبيب محلي أو نعيدك للتصحيح.' },
    ] : [
        { q: 'Do you offer warranties?', a: 'Yes. We offer 5-year to Lifetime warranty on implants (depending on brand) and 5-year warranty on crowns/veneers against breakage.' },
        { q: 'How do I pay?', a: 'We accept all major cards (Visa, Mastercard), USD/EUR/GBP cash, and bank transfers.' },
        { q: 'Can I bring a companion?', a: 'Absolutely! Dental tourism is better with a friend or partner. We arrange double-occupancy accommodation and tours.' },
        { q: 'What if I have pain after going home?', a: 'We provide comprehensive Aftercare Kit. Our doctors remain available via WhatsApp for video calls. In rare complications, we coordinate with local dentist or bring you back.' },
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero */}
            <div className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#0F1C21]">
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
                                        radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 40%)`
                    }}></div>
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-32 relative z-10">
                    <Link to="/" className={`inline-flex items-center gap-2 text-white/60 hover:text-amber-400 mb-6 transition-all group ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        <span className="text-sm">{isRtl ? 'العودة للرئيسية' : 'Back to Home'}</span>
                    </Link>

                    {/* Mobile Hero Image */}
                    <div className="block lg:hidden mb-8">
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-transparent to-amber-400 opacity-30 animate-pulse"></div>
                            <div className="absolute inset-2 rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-2xl">
                                <img src="/clinic (1).jpg" alt="Dental Tourism Egypt" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                                        <p className="text-white font-bold text-sm">{isRtl ? 'ابتسامة + أهرامات' : 'Smile + Pyramids'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl p-2 shadow-xl animate-float">
                                <Plane className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-start">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Plane className="w-4 h-4 text-amber-400 animate-pulse" />
                                <span className="text-amber-400 text-xs md:text-sm font-semibold">{isRtl ? 'سياحة الأسنان 2026' : 'Dental Tourism 2026'}</span>
                            </div>

                            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${isRtl ? '' : 'font-playfair'}`}>
                                {isRtl ? (
                                    <><span className="block">سياحة الأسنان</span><span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-transparent bg-clip-text">في مصر</span></>
                                ) : (
                                    <><span className="block">Dental Tourism</span><span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-transparent bg-clip-text">in Egypt</span></>
                                )}
                            </h1>

                            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {isRtl ? 'ابتسامة مثالية وإجازة فرعونية - وفر حتى 70% مع زرعات وفينيرز عالمية في نيوليفا.' : 'A perfect smile and a Pharaohs vacation - save up to 70% on premium implants and veneers at Neoliva.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Link to="/#booking" className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] transition-all flex items-center justify-center gap-2">
                                    {isRtl ? 'استشارة مجانية' : 'Free Consultation'}
                                    <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Hero Image */}
                        <div className="relative hidden lg:block">
                            <div className="relative w-full aspect-square">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400 via-transparent to-amber-400 opacity-30 animate-pulse"></div>
                                <div className="absolute inset-4 rounded-3xl overflow-hidden border-4 border-amber-400/30 shadow-2xl">
                                    <img src="/clinic (1).jpg" alt="Dental Tourism Egypt" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                            <p className="text-white font-bold text-lg">{isRtl ? 'طب أسنان عالمي' : 'World-Class Dentistry'}</p>
                                            <p className="text-white/70 text-sm">{isRtl ? 'ضيافة مصرية أصيلة' : 'Authentic Egyptian Hospitality'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl p-4 shadow-xl animate-float">
                                    <Plane className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                                <div className="text-2xl md:text-4xl font-bold text-amber-400 mb-1">{stat.number}</div>
                                <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 lg:py-20 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Sidebar - Hidden on Mobile/Tablet */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-gray-100/50">
                                <h3 className="text-lg font-bold text-[#1A2E35] mb-6 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-amber-500" />
                                    {isRtl ? 'المحتويات' : 'Contents'}
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <a key={item.id} href={`#${item.id}`}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-3xl p-6 text-center">
                                <Plane className="w-10 h-10 text-white mx-auto mb-4" />
                                <p className="text-white font-medium mb-4">{isRtl ? 'خطط لرحلتك' : 'Plan Your Trip'}</p>
                                <Link to="/#booking" className="block w-full py-3 bg-white text-amber-600 font-bold rounded-xl hover:bg-gray-100 transition-all">
                                    {isRtl ? 'استشارة مجانية' : 'Free Consultation'}
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="lg:col-span-3 space-y-24">
                        {/* Section 1 - Intro */}
                        <section id="intro" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'مقدمة' : 'Introduction'}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35]">{isRtl ? 'حيث يلتقي التاريخ بالرعاية الحديثة' : 'Where History Meets Modern Healthcare'}</h2>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {isRtl
                                    ? 'تخيل أن تقف أمام أهرامات الجيزة، آخر عجائب العالم القديم الباقية، بابتسامة تشع ثقة. لعقود، عُرفت مصر مهد الحضارة. لكن في 2026، تحولت مصر لشيء أكبر: مركز عالمي لسياحة الأسنان.'
                                    : 'Imagine standing before the Great Pyramids of Giza, the last surviving wonder of the ancient world, with a smile that radiates confidence. For decades, Egypt has been known as the cradle of civilization. But in 2026, Egypt has transformed into something more: a global hub for Dental Tourism.'}
                            </p>
                            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-6 md:p-8 border border-amber-100 max-w-full overflow-hidden">
                                <p className="text-amber-800 text-lg md:text-xl font-bold text-center">
                                    {isRtl ? '🦷 طب أسنان فاخر + ✈️ إجازة أحلام = 💰 جزء من التكلفة' : '🦷 High-End Dentistry + ✈️ Dream Vacation = 💰 Fraction of Cost'}
                                </p>
                            </div>
                        </section>

                        {/* Section 2 - Why Egypt */}
                        <section id="why-egypt" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-[#1A2E35] to-[#2A4A55] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-amber-400 text-sm font-semibold uppercase">{isRtl ? 'لماذا مصر' : 'Why Egypt'}</span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white">{isRtl ? 'عاصمة سياحة الأسنان 2026' : 'Dental Tourism Capital 2026'}</h2>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {whyEgypt.map((item, i) => (
                                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                            <span className="text-3xl mb-3 block">{item.icon}</span>
                                            <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 3 - Why Neoliva */}
                        <section id="why-neoliva" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-emerald-500 text-sm font-semibold uppercase">{isRtl ? 'ميزتنا' : 'Our Advantage'}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35]">{isRtl ? 'لماذا نيوليفا؟' : 'Why Choose Neoliva?'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: '🧼', title: isRtl ? 'معايير تعقيم عالمية' : 'International Sterilization', desc: isRtl ? 'معايير CDC و WHO - أوتوكليف Class B' : 'CDC & WHO standards - Class B Autoclaves' },
                                    { icon: '🎩', title: isRtl ? 'خدمة الكونسيرج' : 'Concierge Service', desc: isRtl ? 'استقبال مطار، فنادق، دعم 24/7' : 'Airport pickup, hotels, 24/7 support' },
                                    { icon: '💻', title: isRtl ? 'تقنيات متطورة' : 'State-of-the-Art Tech', desc: isRtl ? 'مختبر رقمي، CBCT، تصميم ابتسامة رقمي' : 'Digital lab, CBCT, Digital Smile Design' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-center">
                                        <span className="text-4xl mb-4 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4 - Treatments */}
                        <section id="treatments" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-violet-500 text-sm font-semibold uppercase">{isRtl ? 'العلاجات' : 'Treatments'}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35]">{isRtl ? 'العلاجات الأكثر طلباً' : 'Top Treatments for Tourists'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {treatments.map((item, i) => (
                                    <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white`}>
                                        <span className="text-4xl mb-4 block">{item.icon}</span>
                                        <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                        <p className="text-white/80 text-sm mb-4">{item.desc}</p>
                                        <div className="bg-white/20 rounded-lg px-3 py-1 inline-block">
                                            <span className="text-sm font-medium">⏱️ {item.timeline}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 5 - Cost Comparison */}
                        <section id="costs" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <DollarSign className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-green-500 text-sm font-semibold uppercase">{isRtl ? 'التكاليف' : 'Costs'}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35]">{isRtl ? 'مقارنة التكاليف 2026' : 'Cost Comparison 2026'}</h2>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
                                <table className="w-full min-w-[600px]">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                                            <th className={`p-4 ${isRtl ? 'text-right' : 'text-left'}`}>{isRtl ? 'الإجراء' : 'Procedure'}</th>
                                            <th className="p-4 text-center">🇺🇸 USA</th>
                                            <th className="p-4 text-center">🇬🇧 UK</th>
                                            <th className="p-4 text-center">🇪🇬 {isRtl ? 'مصر' : 'Egypt'}</th>
                                            <th className="p-4 text-center">{isRtl ? 'التوفير' : 'Savings'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {costComparison.map((row, i) => (
                                            <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50">
                                                <td className="p-4 font-medium">{row.procedure}</td>
                                                <td className="p-4 text-center text-gray-600">{row.usa}</td>
                                                <td className="p-4 text-center text-gray-600">{row.uk}</td>
                                                <td className="p-4 text-center font-bold text-green-600">{row.egypt}</td>
                                                <td className="p-4 text-center"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">{row.savings}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-6 bg-green-50 rounded-2xl p-6 border border-green-100">
                                <p className="text-green-800 text-center font-medium">
                                    💡 {isRtl ? 'الحساب بسيط: تذكرة الطيران (~$600-900) تدفع نفسها من توفير زرعة واحدة أو تاجين!' : 'The math is simple: Flight ticket (~$600-900) pays for itself from savings on just one implant or two crowns!'}
                                </p>
                            </div>
                        </section>

                        {/* Section 6 - Planning */}
                        <section id="planning" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Calendar className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-blue-500 text-sm font-semibold uppercase">{isRtl ? 'التخطيط' : 'Planning'}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35]">{isRtl ? 'تخطيط رحلتك' : 'Planning Your Trip'}</h2>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { step: '1', title: isRtl ? 'استشارة افتراضية مجانية' : 'Free Virtual Consultation', desc: isRtl ? 'أرسل أشعة وصور ابتسامتك - نرد بخطة علاج وتكلفة خلال 24 ساعة' : 'Send X-ray and smile photos - we reply with treatment plan and cost within 24 hours', icon: '💻' },
                                    { step: '2', title: isRtl ? 'الطيران والتأشيرة' : 'Flights and Visa', desc: isRtl ? 'طر إلى مطار القاهرة - تأشيرة فورية بـ$25 أو إلكترونية مسبقاً' : 'Fly to Cairo Airport - Visa on arrival $25 or E-Visa beforehand', icon: '✈️' },
                                    { step: '3', title: isRtl ? 'الإقامة' : 'Accommodation', desc: isRtl ? 'فنادق 5 نجوم أو شقق Airbnb مع خصومات خاصة للعملاء' : '5-star hotels or Airbnb apartments with special client discounts', icon: '🏨' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{isRtl ? `الخطوة ${item.step}:` : `Step ${item.step}:`} {item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7 - Itinerary */}
                        <section id="itinerary" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Camera className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-pink-500 text-sm font-semibold uppercase">{isRtl ? 'البرنامج' : 'Itinerary'}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35]">{isRtl ? 'برنامج إجازة الأسنان' : 'Dental Vacation Itinerary'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {itinerary.map((day, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                                                <span className="text-white font-bold">{day.day}</span>
                                            </div>
                                            <h4 className="font-bold text-[#1A2E35]">{day.title}</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {day.activities.map((activity, j) => (
                                                <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                                                    {activity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8 - Safety */}
                        <section id="safety" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase">{isRtl ? 'الأمان' : 'Safety'}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الأمان والراحة' : 'Safety & Comfort'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: '🏥', title: isRtl ? 'هل العلاج آمن؟' : 'Is treatment safe?', desc: isRtl ? 'نتبع بروتوكولات أوروبية ونضمن العمل - استبدال مجاني خلال فترة الضمان' : 'We follow European protocols and guarantee work - free replacement within warranty' },
                                    { icon: '🗣️', title: isRtl ? 'حاجز اللغة؟' : 'Language barrier?', desc: isRtl ? 'الإنجليزية لغة ثانية للطب. لدينا مترجمين للفرنسية والألمانية والإيطالية' : 'English is medicines second language. We have French, German, Italian interpreters' },
                                    { icon: '🍽️', title: isRtl ? 'الماء والطعام؟' : 'Water and food?', desc: isRtl ? 'اشرب مياه معبأة. القاهرة تقدم مطاعم من شارع الأكل لجودة ميشلان' : 'Drink bottled water. Cairo offers street food to Michelin-star quality' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                                        <span className="text-3xl mb-3 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 9 - Success Stories */}
                        <section id="stories" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-rose-500 text-sm font-semibold uppercase">{isRtl ? 'قصص النجاح' : 'Success Stories'}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35]">{isRtl ? 'قالوا عنا' : 'Patient Testimonials'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {stories.map((story, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                                                {story.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1A2E35]">{story.name}</p>
                                                <p className="text-sm text-gray-500">{story.country} • {story.year}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 italic">"{story.quote}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <HelpCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'أسئلة شائعة' : 'FAQ'}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                        <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className={`w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                                            <span className="font-bold text-[#1A2E35]">{faq.q}</span>
                                            {expandedFaq === i ? <ChevronUp className="w-6 h-6 text-amber-500" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
                                        </button>
                                        {expandedFaq === i && <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">{faq.a}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-[3rem] p-8 md:p-16 text-center">
                            <Globe className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{isRtl ? 'ابتسامتك، مغامرتك' : 'Your Smile, Your Adventure'}</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{isRtl ? 'أرض الفراعنة بنت آثاراً دامت للأبد. دعنا نبني لك ابتسامة تدوم مدى الحياة.' : 'The land of Pharaohs built monuments that lasted for eternity. Let us build you a smile that lasts a lifetime.'}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/#booking" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-amber-600 text-lg font-bold rounded-full hover:shadow-2xl transition-all hover:-translate-y-1">
                                    <MessageCircle className="w-5 h-5" />
                                    {isRtl ? 'تواصل عبر واتساب' : 'WhatsApp Us'}
                                </Link>
                                <a href="mailto:info@neoliva.com" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 text-white text-lg font-bold rounded-full hover:bg-white/30 transition-all">
                                    <Mail className="w-5 h-5" />
                                    {isRtl ? 'راسلنا بالإيميل' : 'Email Us'}
                                </a>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default DentalTourismPage;
