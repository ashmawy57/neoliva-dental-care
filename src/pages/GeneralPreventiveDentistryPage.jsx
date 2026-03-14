import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Heart, Shield, Sparkles, Star, BookOpen, Stethoscope, Home, Clock, Zap, HelpCircle, Award, ChevronDown, ChevronUp, ArrowRight, Play, Smile, AlertTriangle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeneralPreventiveDentistryPage = () => {
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
        { id: 'difference', title: 'طب الأسنان العام مقابل الوقائي', icon: Stethoscope },
        { id: 'cornerstone', title: 'لماذا الوقاية حجر الزاوية', icon: Shield },
        { id: 'oral-systemic', title: 'الرابط بين الفم والجسم', icon: Heart },
        { id: 'procedures', title: 'الإجراءات الأكثر شيوعاً', icon: Star },
        { id: 'home-prevention', title: 'استراتيجيات الوقاية المنزلية', icon: Home },
        { id: 'dental-visit', title: 'ماذا يحدث أثناء الفحص؟', icon: Clock },
        { id: 'technologies', title: 'أحدث التقنيات', icon: Zap },
        { id: 'myths', title: 'خرافات تم دحضها', icon: AlertTriangle },
        { id: 'faq', title: 'الأسئلة الشائعة', icon: HelpCircle },
    ] : [
        { id: 'difference', title: 'General vs Preventive', icon: Stethoscope },
        { id: 'cornerstone', title: 'Why Prevention Matters', icon: Shield },
        { id: 'oral-systemic', title: 'Oral-Systemic Link', icon: Heart },
        { id: 'procedures', title: 'Common Procedures', icon: Star },
        { id: 'home-prevention', title: 'Home Prevention', icon: Home },
        { id: 'dental-visit', title: 'Dental Visit', icon: Clock },
        { id: 'technologies', title: 'Latest Tech', icon: Zap },
        { id: 'myths', title: 'Myths Debunked', icon: AlertTriangle },
        { id: 'faq', title: 'FAQ', icon: HelpCircle },
    ];

    const stats = isRtl ? [
        { number: '90%', label: 'من التسوس يمكن منعه' },
        { number: '6', label: 'أشهر بين كل فحص' },
        { number: '2', label: 'دقيقة تنظيف يومياً' },
        { number: '100%', label: 'رضا المرضى' },
    ] : [
        { number: '90%', label: 'Cavities Preventable' },
        { number: '6', label: 'Months Between Checkups' },
        { number: '2', label: 'Minutes Daily Brushing' },
        { number: '100%', label: 'Patient Satisfaction' },
    ];

    const procedures = isRtl ? [
        { title: 'الحشوات الترميمية', desc: 'إزالة التسوس وملء الفراغ براتنجات تطابق لون الأسنان', icon: Shield, color: 'from-blue-400 to-indigo-500' },
        { title: 'علاج قناة الجذر', desc: 'إنقاذ السن المصاب بإزالة العصب التالف وإغلاق القناة', icon: Heart, color: 'from-rose-400 to-pink-500' },
        { title: 'التيجان والجسور', desc: 'أغطية للأسنان التالفة وبدائل للأسنان المفقودة', icon: Star, color: 'from-amber-400 to-orange-500' },
        { title: 'الخلع', desc: 'إزالة الأسنان التالفة أو ضروس العقل المطمورة', icon: Zap, color: 'from-violet-400 to-purple-500' },
    ] : [
        { title: 'Dental Fillings', desc: 'Remove decay and fill with tooth-colored composite resins', icon: Shield, color: 'from-blue-400 to-indigo-500' },
        { title: 'Root Canal', desc: 'Save infected teeth by removing damaged pulp and sealing', icon: Heart, color: 'from-rose-400 to-pink-500' },
        { title: 'Crowns & Bridges', desc: 'Caps for damaged teeth and replacements for missing ones', icon: Star, color: 'from-amber-400 to-orange-500' },
        { title: 'Extractions', desc: 'Removal of severely damaged teeth or impacted wisdom teeth', icon: Zap, color: 'from-violet-400 to-purple-500' },
    ];

    const homeStrategies = isRtl ? [
        { title: 'تنظيف الأسنان', tips: ['مرتين يومياً لمدة دقيقتين', 'فرشاة ناعمة بزاوية 45 درجة', 'معجون بالفلورايد دائماً'] },
        { title: 'الخيط', tips: ['ينظف 40% من الأسطح', 'مرة يومياً على الأقل', 'جرب أجهزة التنظيف بالماء'] },
        { title: 'النظام الغذائي', tips: ['قلل السكريات', 'اشرب الماء بعد الحمضيات', 'الخضروات المقرمشة مفيدة'] },
    ] : [
        { title: 'Brushing', tips: ['Twice daily for 2 minutes', 'Soft bristles at 45° angle', 'Always use fluoride toothpaste'] },
        { title: 'Flossing', tips: ['Cleans 40% of surfaces', 'At least once daily', 'Try water flossers'] },
        { title: 'Diet', tips: ['Limit sugars', 'Drink water after acidic foods', 'Crunchy vegetables help'] },
    ];

    const myths = isRtl ? [
        { myth: 'إذا لم تؤلمني أسناني فهي سليمة', fact: 'التسوس وأمراض اللثة غالباً صامتة حتى مراحل متقدمة' },
        { myth: 'نزيف اللثة طبيعي', fact: 'النزيف علامة التهاب - اللثة السليمة لا تنزف' },
        { myth: 'التفريش بقوة أفضل', fact: 'التفريش القوي يتلف المينا واللثة' },
        { myth: 'الأسنان اللبنية لا تهم', fact: 'تحفظ المكان للأسنان الدائمة' },
    ] : [
        { myth: 'No pain means healthy teeth', fact: 'Decay and gum disease are often painless until advanced' },
        { myth: 'Bleeding gums are normal', fact: 'Bleeding indicates inflammation - healthy gums dont bleed' },
        { myth: 'Brush harder for better cleaning', fact: 'Hard brushing damages enamel and gums' },
        { myth: 'Baby teeth dont matter', fact: 'They hold space for permanent teeth' },
    ];

    const faqs = isRtl ? [
        { q: 'كم مرة يجب زيارة الطبيب؟', a: 'كل 6 أشهر للفحص العادي، أو كل 3-4 أشهر لمن لديهم مخاطر عالية.' },
        { q: 'فرشاة يدوية أم كهربائية؟', a: 'كلاهما فعال، لكن الدراسات تفضل الكهربائية لإزالة البلاك بشكل أفضل.' },
        { q: 'هل التبييض يضر المينا؟', a: 'التبييض الاحترافي آمن. المنتجات التجارية المفرطة قد تضر.' },
        { q: 'ماذا أفعل للأسنان الحساسة؟', a: 'استخدم معجون للأسنان الحساسة وتجنب الأطعمة الحمضية.' },
    ] : [
        { q: 'How often should I visit?', a: 'Every 6 months for standard checkup, or 3-4 months for high-risk patients.' },
        { q: 'Manual or electric toothbrush?', a: 'Both work well, but studies favor electric for better plaque removal.' },
        { q: 'Does whitening damage enamel?', a: 'Professional whitening is safe. Overuse of OTC products may cause harm.' },
        { q: 'What about sensitive teeth?', a: 'Use sensitive toothpaste and avoid acidic foods. See dentist if persistent.' },
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6] overflow-x-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Floating Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#0F1C21]">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                                            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%)`
                        }}></div>
                    </div>
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 py-10 md:py-20 lg:py-32 relative z-10">
                    <Link to="/services" className={`inline-flex items-center gap-2 text-white/60 hover:text-emerald-400 mb-6 transition-all group ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        <span className="text-sm">{isRtl ? 'العودة للخدمات' : 'Back to Services'}</span>
                    </Link>

                    {/* Mobile Hero Image */}
                    <div className="block lg:hidden mb-8">
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-transparent to-emerald-400 opacity-30 animate-pulse"></div>
                            <div className="absolute inset-2 rounded-2xl overflow-hidden border-2 border-emerald-400/30 shadow-2xl">
                                <img src="/clinic (3).jpg" alt="Dental Clinic" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                                        <p className="text-white font-bold text-sm">{isRtl ? 'عيادة حديثة' : 'Modern Clinic'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl p-2 shadow-xl animate-float">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-start overflow-hidden">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Shield className="w-4 h-4 text-emerald-400 animate-pulse" />
                                <span className="text-emerald-400 text-xs md:text-sm font-semibold">{isRtl ? 'الدليل الشامل 2024' : 'Complete Guide 2024'}</span>
                            </div>

                            <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-full ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                                {isRtl ? (
                                    <><span className="block">طب الأسنان</span><span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">العام والوقائي</span></>
                                ) : (
                                    <><span className="block">General &</span><span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-transparent bg-clip-text">Preventive Dentistry</span></>
                                )}
                            </h1>

                            <p className={`text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed max-w-full sm:max-w-xl mx-auto lg:mx-0 px-1 ${isRtl ? 'font-tajawal' : ''}`}>
                                {isRtl ? 'درهم وقاية خير من قنطار علاج. استثمارك الأمثل لصحة تدوم وابتسامة مشرقة.' : 'An ounce of prevention is worth a pound of cure. Your investment in lifelong health.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Link to="/#booking" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2">
                                    {isRtl ? 'احجز فحصك الآن' : 'Book Checkup Now'}
                                    <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Hero Image */}
                        <div className="relative hidden lg:block">
                            <div className="relative w-full aspect-square">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-transparent to-emerald-400 opacity-30 animate-pulse"></div>
                                <div className="absolute inset-4 rounded-3xl overflow-hidden border-4 border-emerald-400/30 shadow-2xl">
                                    <img src="/clinic (3).jpg" alt="Dental Clinic" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                            <p className="text-white font-bold text-lg">{isRtl ? 'رعاية متكاملة' : 'Complete Care'}</p>
                                            <p className="text-white/70 text-sm">{isRtl ? 'أحدث التقنيات والمعدات' : 'Latest Technology & Equipment'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-4 shadow-xl animate-float">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                                <div className={`text-xl sm:text-2xl md:text-4xl font-bold text-emerald-400 mb-1 ${isRtl ? 'font-cairo' : ''}`}>{stat.number}</div>
                                <div className={`text-white/70 text-[10px] sm:text-xs md:text-sm ${isRtl ? 'font-tajawal' : ''}`}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 py-10 lg:py-20 relative z-10">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-gray-100/50">
                                <h3 className="text-lg font-bold text-[#1A2E35] mb-6 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-emerald-500" />
                                    {isRtl ? 'المحتويات' : 'Contents'}
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <a key={item.id} href={`#${item.id}`}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-6 text-center">
                                <Shield className="w-10 h-10 text-white mx-auto mb-4" />
                                <p className="text-white font-medium mb-4">{isRtl ? 'الوقاية خير من العلاج' : 'Prevention is better than cure'}</p>
                                <Link to="/#booking" className="block w-full py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition-all">
                                    {isRtl ? 'احجز الآن' : 'Book Now'}
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="lg:col-span-3 space-y-24">
                        {/* Section 1 */}
                        <section id="difference" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Stethoscope className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-emerald-500 text-sm font-semibold uppercase">{isRtl ? 'الفصل الأول' : 'Chapter 01'}</span>
                                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2E35] ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'طب الأسنان العام مقابل الوقائي' : 'General vs Preventive Dentistry'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-800 mb-4">{isRtl ? 'طب الأسنان العام' : 'General Dentistry'}</h3>
                                    <p className="text-blue-700 mb-4">{isRtl ? 'خط الدفاع الأول - التشخيص والعلاج وإصلاح المشاكل الموجودة' : 'First line of defense - diagnosis, treatment, and fixing existing problems'}</p>
                                    <p className="text-blue-600 text-sm">{isRtl ? 'مثال: الحشوات، علاج العصب، الخلع، التيجان' : 'Examples: Fillings, root canals, extractions, crowns'}</p>
                                </div>
                                <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                                    <h3 className="text-xl font-bold text-emerald-800 mb-4">{isRtl ? 'طب الأسنان الوقائي' : 'Preventive Dentistry'}</h3>
                                    <p className="text-emerald-700 mb-4">{isRtl ? 'إيقاف المشاكل قبل بدايتها - الحفاظ على الصحة' : 'Stop problems before they start - maintain health'}</p>
                                    <p className="text-emerald-600 text-sm">{isRtl ? 'مثال: التنظيف، الفلورايد، فحص السرطان، المواد السادة' : 'Examples: Cleaning, fluoride, cancer screening, sealants'}</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section id="cornerstone" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'الفصل الثاني' : 'Chapter 02'}</span>
                                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2E35] ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'لماذا الوقاية حجر الزاوية' : 'Why Prevention is Cornerstone'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: '💰', title: isRtl ? 'توفير مالي' : 'Save Money', desc: isRtl ? 'الفحص الدوري أرخص 10x من العلاج' : 'Checkups cost 10x less than treatment' },
                                    { icon: '😌', title: isRtl ? 'تجنب الألم' : 'Avoid Pain', desc: isRtl ? 'اكتشف المشاكل الصامتة مبكراً' : 'Detect silent problems early' },
                                    { icon: '🦷', title: isRtl ? 'أسنان طبيعية' : 'Natural Teeth', desc: isRtl ? 'لا بديل يضاهي السن الطبيعي' : 'No substitute beats natural teeth' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all">
                                        <span className="text-4xl mb-4 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section id="oral-systemic" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-[#1A2E35] to-[#2A4A55] rounded-[3rem] p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center">
                                        <Heart className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-rose-400 text-sm font-semibold uppercase">{isRtl ? 'الفصل الثالث' : 'Chapter 03'}</span>
                                        <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'الرابط بين الفم والجسم' : 'Oral-Systemic Link'}</h2>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-8">{isRtl ? 'الفم بوابة الجسم. البكتيريا يمكن أن تؤثر على القلب والسكري والرئتين.' : 'The mouth is the gateway to the body. Bacteria can affect heart, diabetes, and lungs.'}</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        { icon: '❤️', title: isRtl ? 'القلب' : 'Heart', desc: isRtl ? 'التهاب اللثة يزيد خطر أمراض القلب' : 'Gum disease increases heart disease risk' },
                                        { icon: '🩸', title: isRtl ? 'السكري' : 'Diabetes', desc: isRtl ? 'علاقة ذات اتجاهين بين اللثة والسكر' : 'Two-way relationship between gums and sugar' },
                                        { icon: '🤰', title: isRtl ? 'الحمل' : 'Pregnancy', desc: isRtl ? 'التهاب اللثة مرتبط بالولادة المبكرة' : 'Gum disease linked to premature birth' },
                                        { icon: '🫁', title: isRtl ? 'الرئتين' : 'Lungs', desc: isRtl ? 'البكتيريا يمكن أن تسبب التهاب رئوي' : 'Bacteria can cause pneumonia' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                            <span className="text-2xl mb-2 block">{item.icon}</span>
                                            <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="procedures" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-blue-500 text-sm font-semibold uppercase">{isRtl ? 'الفصل الرابع' : 'Chapter 04'}</span>
                                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2E35] ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'الإجراءات الأكثر شيوعاً' : 'Common Procedures'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {procedures.map((proc, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${proc.color} rounded-xl flex items-center justify-center mb-4`}>
                                            <proc.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{proc.title}</h4>
                                        <p className="text-gray-600">{proc.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section id="home-prevention" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Home className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-violet-500 text-sm font-semibold uppercase">{isRtl ? 'الفصل الخامس' : 'Chapter 05'}</span>
                                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2E35] ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'الوقاية المنزلية' : 'Home Prevention'}</h2>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-8">{isRtl ? '90% من الرعاية الوقائية تحدث في المنزل' : '90% of preventive care happens at home'}</p>
                            <div className="grid md:grid-cols-3 gap-6">
                                {homeStrategies.map((strat, i) => (
                                    <div key={i} className="bg-violet-50 rounded-2xl p-6 border border-violet-100">
                                        <h4 className="font-bold text-violet-800 text-lg mb-4">{strat.title}</h4>
                                        <ul className="space-y-2">
                                            {strat.tips.map((tip, j) => (
                                                <li key={j} className="flex items-start gap-2 text-violet-700 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section id="dental-visit" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase">{isRtl ? 'الفصل السادس' : 'Chapter 06'}</span>
                                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2E35] ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'ماذا يحدث أثناء الفحص؟' : 'What Happens During Checkup?'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: '📷', title: isRtl ? 'الأشعة السينية' : 'X-Rays', desc: isRtl ? 'رؤية التسوس العميق والعظام' : 'See deep decay and bone' },
                                    { icon: '🔍', title: isRtl ? 'فحص السرطان' : 'Cancer Screening', desc: isRtl ? 'فحص اللسان والحلق للكشف المبكر' : 'Check tongue and throat for early detection' },
                                    { icon: '📏', title: isRtl ? 'تقييم اللثة' : 'Gum Assessment', desc: isRtl ? 'قياس الجيوب للتحقق من الأمراض' : 'Measure pockets to check for disease' },
                                    { icon: '✨', title: isRtl ? 'التنظيف والتلميع' : 'Cleaning & Polishing', desc: isRtl ? 'إزالة الجير والتصبغات' : 'Remove tartar and stains' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg">
                                        <span className="text-3xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-[#1A2E35] mb-1">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section id="technologies" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-yellow-500 text-sm font-semibold uppercase">{isRtl ? 'الفصل السابع' : 'Chapter 07'}</span>
                                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2E35] ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'أحدث التقنيات' : 'Latest Technologies'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: isRtl ? 'الليزر' : 'Laser', desc: isRtl ? 'ألم أقل وشفاء أسرع' : 'Less pain, faster healing' },
                                    { title: isRtl ? 'الأشعة الرقمية' : 'Digital X-Ray', desc: isRtl ? 'إشعاع أقل 90%' : '90% less radiation' },
                                    { title: isRtl ? 'الكاميرا داخل الفم' : 'Intraoral Camera', desc: isRtl ? 'شاهد ما يراه الطبيب' : 'See what the doctor sees' },
                                    { title: isRtl ? 'المواد السادة' : 'Sealants', desc: isRtl ? 'طبقة حماية للأسنان' : 'Protective layer for teeth' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section id="myths" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <AlertTriangle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-red-500 text-sm font-semibold uppercase">{isRtl ? 'الفصل الثامن' : 'Chapter 08'}</span>
                                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2E35] ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'خرافات تم دحضها' : 'Myths Debunked'}</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {myths.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <span className="text-2xl">❌</span>
                                            <div>
                                                <p className="font-bold text-red-600 mb-2">{isRtl ? 'خرافة:' : 'Myth:'} {item.myth}</p>
                                                <p className="text-emerald-700"><span className="font-bold">✓ {isRtl ? 'حقيقة:' : 'Fact:'}</span> {item.fact}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 9 - FAQ */}
                        <section id="faq" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <HelpCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-teal-500 text-sm font-semibold uppercase">{isRtl ? 'الفصل التاسع' : 'Chapter 09'}</span>
                                    <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2E35] ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'الأسئلة الشائعة' : 'FAQ'}</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                        <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className={`w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                                            <span className="font-bold text-[#1A2E35]">{faq.q}</span>
                                            {expandedFaq === i ? <ChevronUp className="w-6 h-6 text-emerald-500" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
                                        </button>
                                        {expandedFaq === i && <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">{faq.a}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-[3rem] p-8 md:p-16 text-center">
                            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 ${isRtl ? 'font-cairo' : ''}`}>{isRtl ? 'ابتسامتك تستحق الحماية' : 'Your Smile Deserves Protection'}</h2>
                            <p className={`text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto px-2 ${isRtl ? 'font-tajawal' : ''}`}>{isRtl ? 'لا تنتظر الألم ليكون تذكيرك. احجز فحصك اليوم.' : 'Dont wait for pain to be your reminder. Book your checkup today.'}</p>
                            <Link to="/#booking" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 text-xl font-bold rounded-full hover:shadow-2xl transition-all hover:-translate-y-1">
                                {isRtl ? 'احجز فحصك الآن' : 'Book Your Checkup Now'}
                                <ArrowRight className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`} />
                            </Link>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default GeneralPreventiveDentistryPage;
