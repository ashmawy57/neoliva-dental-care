import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Heart, Shield, Sparkles, Star, BookOpen, Clock, Zap, HelpCircle, Award, ChevronDown, ChevronUp, ArrowRight, Users, Settings, Baby, User, UserCheck, Smile, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrthodonticsPage = () => {
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
        { id: 'intro', title: 'قوة المحاذاة', icon: Sparkles },
        { id: 'what-is', title: 'ما هو تقويم الأسنان؟', icon: BookOpen },
        { id: 'health-risks', title: 'مخاطر الأسنان المعوجة', icon: AlertTriangle },
        { id: 'solutions', title: 'حلول التقويم', icon: Star },
        { id: 'ages', title: 'التقويم لكل الأعمار', icon: Users },
        { id: 'technology', title: 'التقنيات الرقمية', icon: Settings },
        { id: 'journey', title: 'رحلة التقويم', icon: Clock },
        { id: 'tips', title: 'نصائح العناية', icon: Shield },
        { id: 'retention', title: 'مرحلة التثبيت', icon: Heart },
        { id: 'faq', title: 'الأسئلة الشائعة', icon: HelpCircle },
    ] : [
        { id: 'intro', title: 'Power of Alignment', icon: Sparkles },
        { id: 'what-is', title: 'What is Orthodontics?', icon: BookOpen },
        { id: 'health-risks', title: 'Health Risks', icon: AlertTriangle },
        { id: 'solutions', title: 'Solutions', icon: Star },
        { id: 'ages', title: 'For All Ages', icon: Users },
        { id: 'technology', title: 'Digital Tech', icon: Settings },
        { id: 'journey', title: 'Your Journey', icon: Clock },
        { id: 'tips', title: 'Care Tips', icon: Shield },
        { id: 'retention', title: 'Retention Phase', icon: Heart },
        { id: 'faq', title: 'FAQ', icon: HelpCircle },
    ];

    const stats = isRtl ? [
        { number: '18-24', label: 'شهر متوسط العلاج' },
        { number: '3D', label: 'محاكاة قبل العلاج' },
        { number: '90%', label: 'حالات تناسبها التقويم الشفاف' },
        { number: '∞', label: 'التثبيت مدى الحياة' },
    ] : [
        { number: '18-24', label: 'Months Avg Treatment' },
        { number: '3D', label: 'Pre-Treatment Simulation' },
        { number: '90%', label: 'Cases Suit Clear Aligners' },
        { number: '∞', label: 'Lifetime Retention' },
    ];

    const solutions = isRtl ? [
        { title: 'التقويم المعدني', desc: 'الكلاسيكي الموثوق - قوي وفعال للحالات المعقدة', icon: '🦷', color: 'from-gray-400 to-gray-600' },
        { title: 'التقويم السيراميكي', desc: 'قوة التقويم مع مظهر أقل وضوحاً', icon: '✨', color: 'from-amber-400 to-orange-500' },
        { title: 'التقويم الشفاف', desc: 'Invisalign® - ثورة غير مرئية وقابلة للإزالة', icon: '💎', color: 'from-cyan-400 to-blue-500' },
        { title: 'الأجهزة الوظيفية', desc: 'موسعات الفك والأجهزة التصحيحية للنمو', icon: '⚙️', color: 'from-violet-400 to-purple-500' },
    ] : [
        { title: 'Metal Braces', desc: 'The reliable classic - strong and effective for complex cases', icon: '🦷', color: 'from-gray-400 to-gray-600' },
        { title: 'Ceramic Braces', desc: 'Strength of braces with less visible appearance', icon: '✨', color: 'from-amber-400 to-orange-500' },
        { title: 'Clear Aligners', desc: 'Invisalign® - invisible revolution, removable', icon: '💎', color: 'from-cyan-400 to-blue-500' },
        { title: 'Functional Appliances', desc: 'Jaw expanders and growth-guiding appliances', icon: '⚙️', color: 'from-violet-400 to-purple-500' },
    ];

    const healthRisks = isRtl ? [
        { icon: '🦠', title: 'أمراض اللثة والتسوس', desc: 'الأسنان المزدحمة تخلق مصائد للطعام يصعب تنظيفها' },
        { icon: '⚡', title: 'تآكل غير طبيعي', desc: 'الأسنان التي لا تطبق بشكل صحيح تتآكل بطرق غير طبيعية' },
        { icon: '😣', title: 'آلام الفك وTMJ', desc: 'العضة السيئة تضغط على مفصل الفك مسببة صداعاً مزمناً' },
        { icon: '🗣️', title: 'النطق والهضم', desc: 'سوء الإطباق يؤثر على نطق الكلمات ومضغ الطعام' },
    ] : [
        { icon: '🦠', title: 'Gum Disease & Decay', desc: 'Crowded teeth create food traps impossible to clean' },
        { icon: '⚡', title: 'Abnormal Wear', desc: 'Teeth that dont bite properly grind unnaturally' },
        { icon: '😣', title: 'Jaw Pain & TMJ', desc: 'Bad bite stresses jaw joint causing chronic headaches' },
        { icon: '🗣️', title: 'Speech & Digestion', desc: 'Malocclusion affects articulation and chewing' },
    ];

    const ageGroups = isRtl ? [
        { icon: Baby, title: 'التقويم المبكر (7-10)', desc: 'اكتشاف المشاكل مبكراً لتوجيه نمو الفك وتقصير العلاج لاحقاً', color: 'from-pink-500 to-rose-600' },
        { icon: User, title: 'تقويم المراهقين', desc: 'الفترة الأكثر شيوعاً (11-15) - الأسنان تتحرك أسرع', color: 'from-blue-500 to-indigo-600' },
        { icon: UserCheck, title: 'تقويم البالغين', desc: 'لم يفت الأوان أبداً - 1 من كل 4 مرضى تقويم هم بالغون', color: 'from-emerald-500 to-teal-600' },
    ] : [
        { icon: Baby, title: 'Early Orthodontics (7-10)', desc: 'Spot issues early to guide jaw growth and shorten future treatment', color: 'from-pink-500 to-rose-600' },
        { icon: User, title: 'Teen Orthodontics', desc: 'Most common age (11-15) - teeth move faster', color: 'from-blue-500 to-indigo-600' },
        { icon: UserCheck, title: 'Adult Orthodontics', desc: 'Its never too late - 1 in 4 orthodontic patients are adults', color: 'from-emerald-500 to-teal-600' },
    ];

    const journeySteps = isRtl ? [
        { step: '1', title: 'الاستشارة', desc: 'مقابلة الأخصائي، صور وأشعة، مناقشة المخاوف' },
        { step: '2', title: 'الخطة والسجلات', desc: 'مسح رقمي، خطة العلاج، المدة والتكلفة' },
        { step: '3', title: 'التركيب', desc: 'لصق الأقواس أو تسليم قوالب التقويم الشفاف' },
        { step: '4', title: 'العلاج النشط', desc: 'زيارات كل 4-8 أسابيع لتعديل الأسلاك أو القوالب' },
        { step: '5', title: 'الكشف الكبير', desc: 'إزالة التقويم، تلميع الأسنان، ابتسامتك الجديدة!' },
    ] : [
        { step: '1', title: 'Consultation', desc: 'Meet specialist, photos and X-rays, discuss concerns' },
        { step: '2', title: 'Records & Plan', desc: 'Digital scan, treatment plan, duration and cost' },
        { step: '3', title: 'Bonding Day', desc: 'Brackets applied or first aligner trays given' },
        { step: '4', title: 'Active Treatment', desc: 'Visits every 4-8 weeks for wire or tray adjustments' },
        { step: '5', title: 'The Big Reveal', desc: 'Brackets removed, teeth polished, your new smile!' },
    ];

    const faqs = isRtl ? [
        { q: 'هل التقويم مؤلم؟', a: 'التركيب لا يؤلم. لكن الأسنان تكون حساسة 3-5 أيام بعد التركيب أو التعديل. المسكنات والأطعمة اللينة تساعد.' },
        { q: 'كم مدة العلاج؟', a: 'تختلف حسب التعقيد. الحالات البسيطة 6 أشهر، الشاملة 18-24 شهراً.' },
        { q: 'هل التقويم الشفاف فعال كالتقويم العادي؟', a: 'نعم لـ90% من الحالات. الحالات الجراحية الشديدة قد تحتاج التقويم التقليدي.' },
        { q: 'هل يمكنني ممارسة الرياضة؟', a: 'نعم! ننصح بواقي فم خاص للرياضات التلامسية لحماية الشفاه والخدود.' },
    ] : [
        { q: 'Do braces hurt?', a: 'Placing braces doesnt hurt. But teeth feel sore 3-5 days after placement or adjustments. Pain relievers and soft diet help.' },
        { q: 'How long does treatment take?', a: 'Varies by complexity. Simple cases 6 months, comprehensive 18-24 months.' },
        { q: 'Are clear aligners as effective as braces?', a: 'Yes for 90% of cases. Severe surgical cases may still need traditional braces.' },
        { q: 'Can I play sports?', a: 'Yes! We recommend special orthodontic mouthguard for contact sports.' },
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero */}
            <div className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#0F1C21]">
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                                        radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%)`
                    }}></div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-20 lg:py-32 relative z-10">
                    <Link to="/services" className={`inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 mb-6 transition-all group ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        <span className="text-sm">{isRtl ? 'العودة للخدمات' : 'Back to Services'}</span>
                    </Link>

                    {/* Mobile Hero Image */}
                    <div className="block lg:hidden mb-8">
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-transparent to-cyan-400 opacity-30 animate-pulse"></div>
                            <div className="absolute inset-2 rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl">
                                <img src="/clinic (5).jpg" alt="Orthodontics" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                                        <p className="text-white font-bold text-sm">{isRtl ? 'ابتسامة مثالية' : 'Perfect Smile'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-2 shadow-xl animate-float">
                                <Smile className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-start">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Smile className="w-4 h-4 text-cyan-400 animate-pulse" />
                                <span className="text-cyan-400 text-xs md:text-sm font-semibold">{isRtl ? 'علم تصميم الابتسامة' : 'Science of Smile Design'}</span>
                            </div>

                            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${isRtl ? '' : 'font-playfair'}`}>
                                {isRtl ? (
                                    <><span className="block">تقويم</span><span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 text-transparent bg-clip-text">الأسنان</span></>
                                ) : (
                                    <><span className="block">Orthodontics</span><span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 text-transparent bg-clip-text">Perfect Alignment</span></>
                                )}
                            </h1>

                            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {isRtl ? 'حوّل ابتسامتك مع تقويم الأسنان المتقدم في نيوليفا - من التقويم الشفاف إلى التقويم الحديث.' : 'Transform your smile with advanced orthodontics at Neoliva - from clear aligners to modern braces.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Link to="/#booking" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2">
                                    {isRtl ? 'احجز استشارتك' : 'Book Consultation'}
                                    <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Hero Image */}
                        <div className="relative hidden lg:block">
                            <div className="relative w-full aspect-square">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-transparent to-cyan-400 opacity-30 animate-pulse"></div>
                                <div className="absolute inset-4 rounded-3xl overflow-hidden border-4 border-cyan-400/30 shadow-2xl">
                                    <img src="/clinic (5).jpg" alt="Orthodontics" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                            <p className="text-white font-bold text-lg">{isRtl ? 'محاذاة مثالية' : 'Perfect Alignment'}</p>
                                            <p className="text-white/70 text-sm">{isRtl ? 'فن وعلم وتقنية' : 'Art, Science & Technology'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-xl animate-float">
                                    <Smile className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                                <div className="text-2xl md:text-4xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                                <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-10 lg:py-20 relative z-10">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-gray-100/50">
                                <h3 className="text-lg font-bold text-[#1A2E35] mb-6 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-cyan-500" />
                                    {isRtl ? 'المحتويات' : 'Contents'}
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <a key={item.id} href={`#${item.id}`}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 text-center">
                                <Smile className="w-10 h-10 text-white mx-auto mb-4" />
                                <p className="text-white font-medium mb-4">{isRtl ? 'صمم ابتسامتك' : 'Design Your Smile'}</p>
                                <Link to="/#booking" className="block w-full py-3 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-all">
                                    {isRtl ? 'احجز الآن' : 'Book Now'}
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="lg:col-span-3 space-y-24">
                        {/* Section 1 - Intro */}
                        <section id="intro" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase">{isRtl ? 'مقدمة' : 'Introduction'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'قوة المحاذاة' : 'The Power of Alignment'}</h2>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {isRtl
                                    ? 'الابتسامة لغة عالمية، لكن للكثيرين هي لغة يتحدثونها بتردد. الأسنان المعوجة أو المزدحمة تجعلك متحفظاً، تخفي ضحكتك أو تبتسم بفم مغلق. لكن تأثير الابتسامة المعوجة أعمق بكثير من القلق الاجتماعي.'
                                    : 'A smile is a universal language, but for many, it is a language spoken with hesitation. Misaligned or crowded teeth can make you self-conscious, causing you to hide your laugh or smile with mouth closed. But the impact goes far deeper than social anxiety.'}
                            </p>
                            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100">
                                <p className="text-cyan-800 text-lg font-medium text-center">
                                    {isRtl ? 'في نيوليفا، نرى تقويم الأسنان مزيجاً متناغماً من الفن والفيزياء والبيولوجيا - ليس مجرد تحريك أسنان، بل هندسة عضة مثالية ومظهر متوازن.' : 'At Neoliva, we view Orthodontics as a harmonious blend of art, physics, and biology—not just moving teeth, but engineering a perfect bite and balanced appearance.'}
                                </p>
                            </div>
                        </section>

                        {/* Section 2 - What is Orthodontics */}
                        <section id="what-is" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-[#1A2E35] to-[#2A4A55] rounded-[3rem] p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                                        <BookOpen className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-cyan-400 text-sm font-semibold uppercase">{isRtl ? 'التخصص' : 'Specialty'}</span>
                                        <h2 className="text-3xl font-bold text-white">{isRtl ? 'ما هو تقويم الأسنان؟' : 'What is Orthodontics?'}</h2>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg mb-8">
                                    {isRtl
                                        ? 'تقويم الأسنان فرع متخصص يركز على تشخيص ومنع وعلاج الانحرافات السنية والوجهية (سوء الإطباق). أخصائي التقويم يحصل على 2-3 سنوات تدريب إضافي لإتقان الميكانيكا الحيوية لتحريك الأسنان وتوجيه نمو الفك.'
                                        : 'Orthodontics is a specialized branch focusing on diagnosing, preventing, and treating dental and facial irregularities (malocclusions). An Orthodontist receives 2-3 years of additional training to master the biomechanics of moving teeth and guiding jaw growth.'}
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { icon: '🎨', title: isRtl ? 'الجماليات' : 'Aesthetics', desc: isRtl ? 'ابتسامة واثقة ومذهلة' : 'Stunning, confident smile' },
                                        { icon: '⚙️', title: isRtl ? 'الوظيفة' : 'Function', desc: isRtl ? 'مضغ فعال ونطق واضح' : 'Efficient chewing, clear speech' },
                                        { icon: '🔒', title: isRtl ? 'الاستقرار' : 'Stability', desc: isRtl ? 'نتائج تدوم مدى الحياة' : 'Results that last a lifetime' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                                            <span className="text-3xl mb-3 block">{item.icon}</span>
                                            <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 3 - Health Risks */}
                        <section id="health-risks" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <AlertTriangle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-rose-500 text-sm font-semibold uppercase">{isRtl ? 'المخاطر' : 'Health Risks'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'مخاطر الأسنان المعوجة الخفية' : 'Hidden Risks of Misaligned Teeth'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {healthRisks.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                        <span className="text-3xl mb-3 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4 - Solutions */}
                        <section id="solutions" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase">{isRtl ? 'الحلول' : 'Solutions'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'حلول التقويم في نيوليفا' : 'Orthodontic Solutions at Neoliva'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {solutions.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                        <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                                            <span className="text-2xl">{item.icon}</span>
                                        </div>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 5 - For All Ages */}
                        <section id="ages" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-violet-500 text-sm font-semibold uppercase">{isRtl ? 'لكل الأعمار' : 'For All Ages'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'التقويم لكل مراحل الحياة' : 'Orthodontics for Every Stage'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {ageGroups.map((item, i) => (
                                    <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white`}>
                                        <item.icon className="w-12 h-12 mb-4" />
                                        <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                        <p className="text-white/90">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 6 - Technology */}
                        <section id="technology" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Settings className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-emerald-500 text-sm font-semibold uppercase">{isRtl ? 'التقنيات' : 'Technology'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'ميزة نيوليفا التقنية' : 'The Neoliva Tech Advantage'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: '📱', title: isRtl ? 'مسح iTero' : 'iTero Scanning', desc: isRtl ? 'وداعاً للقوالب المزعجة - مسح 3D خلال دقائق' : 'Goodbye goopy trays - 3D scan in minutes' },
                                    { icon: '🎬', title: isRtl ? 'محاكاة النتيجة' : 'Outcome Simulation', desc: isRtl ? 'شاهد قبل وبعد قبل بدء العلاج' : 'See before and after before starting treatment' },
                                    { icon: '📷', title: isRtl ? 'أشعة رقمية' : 'Digital X-Rays', desc: isRtl ? 'إشعاع أقل، وضوح أكبر للجذور والعظام' : 'Less radiation, clearer view of roots and bones' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-center">
                                        <span className="text-4xl mb-4 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7 - Journey */}
                        <section id="journey" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'رحلتك' : 'Your Journey'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'رحلة التقويم خطوة بخطوة' : 'Your Orthodontic Journey'}</h2>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {journeySteps.map((item, i) => (
                                    <div key={i} className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl font-bold text-white">{item.step}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8 - Care Tips */}
                        <section id="tips" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-indigo-500 text-sm font-semibold uppercase">{isRtl ? 'نصائح' : 'Tips'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الحياة مع التقويم' : 'Life With Braces'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
                                    <h4 className="font-bold text-indigo-800 text-xl mb-6">🪥 {isRtl ? 'النظافة ضرورية!' : 'Hygiene is Non-Negotiable!'}</h4>
                                    <ul className="space-y-3">
                                        {[
                                            isRtl ? 'تنظيف بعد كل وجبة' : 'Brush after every meal',
                                            isRtl ? 'استخدم خيط خاص أو جهاز تنظيف بالماء' : 'Use floss threader or water flosser',
                                            isRtl ? 'غسول فلورايد لتقوية المينا' : 'Fluoride mouthwash to strengthen enamel',
                                        ].map((tip, i) => (
                                            <li key={i} className="flex items-start gap-2 text-indigo-700">
                                                <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100">
                                    <h4 className="font-bold text-rose-800 text-xl mb-6">🍎 {isRtl ? 'قيود النظام الغذائي' : 'Diet Restrictions'}</h4>
                                    <ul className="space-y-3">
                                        {[
                                            isRtl ? '❌ تجنب الأطعمة الصلبة: مكسرات، ثلج، حلوى صلبة' : '❌ Avoid hard foods: nuts, ice, hard candy',
                                            isRtl ? '❌ تجنب اللزجة: كراميل، علكة' : '❌ Avoid sticky: caramel, gum',
                                            isRtl ? '✅ قطع الفواكه - لا تعضها مباشرة' : '✅ Cut up fruits - dont bite directly',
                                        ].map((tip, i) => (
                                            <li key={i} className="text-rose-700">{tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 9 - Retention */}
                        <section id="retention" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[3rem] p-8 md:p-12 text-white">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <Heart className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-white/80 text-sm font-semibold uppercase">{isRtl ? 'التثبيت' : 'Retention'}</span>
                                        <h2 className="text-3xl font-bold">{isRtl ? 'الحفاظ على ابتسامتك للأبد' : 'Keeping Your Smile Forever'}</h2>
                                    </div>
                                </div>
                                <p className="text-white/90 text-lg mb-8">
                                    {isRtl
                                        ? 'يوم إزالة التقويم ليس النهاية - بل بداية مرحلة التثبيت. الأسنان لديها ذاكرة وستحاول العودة لوضعها الأصلي. لهذا المثبتات إلزامية!'
                                        : 'The day braces come off is not the end—it\'s the beginning of Retention. Teeth have memory and will try to return to original position. That\'s why retainers are mandatory!'}
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { title: isRtl ? 'مثبت ثابت' : 'Fixed Retainer', desc: isRtl ? 'سلك رفيع خلف الأسنان الأمامية - غير مرئي ويعمل 24/7' : 'Thin wire behind front teeth - invisible, works 24/7' },
                                        { title: isRtl ? 'مثبت متحرك' : 'Removable Retainer', desc: isRtl ? 'قوالب شفافة تُلبس ليلاً أثناء النوم' : 'Clear trays worn at night while sleeping' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                                            <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-white/80 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <HelpCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase">{isRtl ? 'أسئلة شائعة' : 'FAQ'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                        <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className={`w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                                            <span className="font-bold text-[#1A2E35]">{faq.q}</span>
                                            {expandedFaq === i ? <ChevronUp className="w-6 h-6 text-cyan-500" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
                                        </button>
                                        {expandedFaq === i && <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">{faq.a}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[3rem] p-8 md:p-16 text-center">
                            <Smile className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{isRtl ? 'استثمر في مستقبلك' : 'Invest in Your Future Self'}</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{isRtl ? 'الابتسامة المستقيمة أصل يُؤتي ثماره كل يوم لبقية حياتك.' : 'A straight smile is an asset that pays dividends every day for the rest of your life.'}</p>
                            <Link to="/#booking" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 text-xl font-bold rounded-full hover:shadow-2xl transition-all hover:-translate-y-1">
                                {isRtl ? 'احجز استشارتك' : 'Book Your Consultation'}
                                <ArrowRight className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`} />
                            </Link>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default OrthodonticsPage;
