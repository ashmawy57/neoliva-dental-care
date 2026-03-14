import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Heart, Shield, Sparkles, Star, BookOpen, Clock, Zap, HelpCircle, Award, ChevronDown, ChevronUp, ArrowRight, AlertTriangle, Eye, Microscope, Activity, ThermometerSun, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const EndodonticsPage = () => {
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
        { id: 'intro', title: 'حقيقة علاج العصب', icon: Sparkles },
        { id: 'what-is', title: 'ما هو علاج الجذور؟', icon: BookOpen },
        { id: 'signs', title: 'علامات تحتاج علاج', icon: AlertTriangle },
        { id: 'technology', title: 'التقنيات المتقدمة', icon: Microscope },
        { id: 'procedure', title: 'خطوات العلاج', icon: Activity },
        { id: 'vs-extraction', title: 'العلاج مقابل الخلع', icon: Shield },
        { id: 'myths', title: 'خرافات شائعة', icon: X },
        { id: 'recovery', title: 'التعافي والرعاية', icon: Heart },
        { id: 'faq', title: 'الأسئلة الشائعة', icon: HelpCircle },
    ] : [
        { id: 'intro', title: 'Truth About Root Canals', icon: Sparkles },
        { id: 'what-is', title: 'What is Endodontics?', icon: BookOpen },
        { id: 'signs', title: 'Signs You Need Treatment', icon: AlertTriangle },
        { id: 'technology', title: 'Advanced Technology', icon: Microscope },
        { id: 'procedure', title: 'The Procedure', icon: Activity },
        { id: 'vs-extraction', title: 'Treatment vs Extraction', icon: Shield },
        { id: 'myths', title: 'Debunking Myths', icon: X },
        { id: 'recovery', title: 'Recovery & Aftercare', icon: Heart },
        { id: 'faq', title: 'FAQ', icon: HelpCircle },
    ];

    const stats = isRtl ? [
        { number: '90', label: 'دقيقة فقط' },
        { number: '95%+', label: 'نسبة النجاح' },
        { number: '0', label: 'ألم أثناء العلاج' },
        { number: '1', label: 'زيارة واحدة' },
    ] : [
        { number: '90', label: 'Minutes Only' },
        { number: '95%+', label: 'Success Rate' },
        { number: '0', label: 'Pain During Treatment' },
        { number: '1', label: 'Single Visit' },
    ];

    const signs = isRtl ? [
        { icon: '😖', title: 'ألم شديد', desc: 'ألم عفوي أو عند العض والمضغ - نابض أو حاد' },
        { icon: '🌡️', title: 'حساسية مطولة', desc: 'ألم يستمر ثواني أو دقائق بعد المشروب الساخن أو البارد' },
        { icon: '🦷', title: 'تغير اللون', desc: 'سن تحول للرمادي الداكن أو الأسود - إمداد الدم مات' },
        { icon: '😷', title: 'تورم وحساسية', desc: 'تورم في اللثة قد يبدو كحبة - خراج وطعم سيء' },
    ] : [
        { icon: '😖', title: 'Severe Toothache', desc: 'Spontaneous pain or pain when biting - throbbing or sharp' },
        { icon: '🌡️', title: 'Prolonged Sensitivity', desc: 'Pain lingers seconds/minutes after hot or cold drink' },
        { icon: '🦷', title: 'Discoloration', desc: 'Tooth turned dark grey or black - blood supply died' },
        { icon: '😷', title: 'Swelling & Tenderness', desc: 'Gum swelling like a pimple - abscess and bad taste' },
    ];

    const technology = isRtl ? [
        { icon: '🔬', title: 'مجهر تشغيلي', desc: 'تكبير عالي لرؤية القنوات المخفية والشقوق الدقيقة' },
        { icon: '📍', title: 'محدد قمة الجذر', desc: 'جهاز إلكتروني يحدد نهاية الجذر بدقة' },
        { icon: '⚡', title: 'أدوات دوارة', desc: 'ملفات نيكل تيتانيوم مرنة تنظف أسرع وأشمل' },
        { icon: '📷', title: 'تصوير CBCT', desc: 'مسح ثلاثي الأبعاد لرؤية بنية الجذر من كل الزوايا' },
    ] : [
        { icon: '🔬', title: 'Operating Microscope', desc: 'High magnification to see hidden canals and cracks' },
        { icon: '📍', title: 'Apex Locator', desc: 'Electronic device that precisely locates root end' },
        { icon: '⚡', title: 'Rotary Instruments', desc: 'Flexible nickel-titanium files clean faster and more thoroughly' },
        { icon: '📷', title: 'CBCT Imaging', desc: '3D scan to view root structure from all angles' },
    ];

    const procedureSteps = isRtl ? [
        { step: '1', title: 'التشخيص والتصوير', desc: 'أشعة رقمية لتقييم شكل القنوات وعلامات العدوى في العظم' },
        { step: '2', title: 'التخدير', desc: 'جل مخدر موضعي ثم تخدير كامل - نختبر لنتأكد أنك لا تشعر بشيء' },
        { step: '3', title: 'التنظيف والتشكيل', desc: 'إزالة اللب المصاب وغسل القنوات بمحاليل مضادة للبكتيريا' },
        { step: '4', title: 'الحشو والختم', desc: 'ملء القنوات بمادة gutta-percha لمنع البكتيريا من الدخول مجدداً' },
        { step: '5', title: 'الترميم (التاج)', desc: 'تاج للحماية من الكسر واستعادة القوة والوظيفة الكاملة' },
    ] : [
        { step: '1', title: 'Diagnosis & Imaging', desc: 'Digital X-rays to assess canal shape and signs of infection in bone' },
        { step: '2', title: 'Anesthesia', desc: 'Topical numbing gel then local anesthesia - we test to ensure you feel nothing' },
        { step: '3', title: 'Cleaning & Shaping', desc: 'Remove infected pulp and flush canals with antibacterial solutions' },
        { step: '4', title: 'Filling & Sealing', desc: 'Fill canals with gutta-percha to prevent bacteria from re-entering' },
        { step: '5', title: 'Restoration (Crown)', desc: 'Crown to protect from fracturing and restore full strength and function' },
    ];

    const vsExtraction = isRtl ? [
        { icon: '⚙️', title: 'الوظيفة', root: 'رباط طبيعي يمتص الضغط', extract: 'الزرعات تفتقر للنعومة الطبيعية' },
        { icon: '🦴', title: 'صحة العظم', root: 'الجذر يحافظ على العظم', extract: 'العظم يبدأ بالتآكل' },
        { icon: '💰', title: 'التكلفة', root: 'أقل تكلفة على المدى الطويل', extract: 'الزرعة/الجسر أغلى بكثير' },
        { icon: '👁️', title: 'المظهر', root: 'لا شيء يضاهي سنك الطبيعي', extract: 'قد لا يكون مثالياً' },
    ] : [
        { icon: '⚙️', title: 'Function', root: 'Natural ligament absorbs pressure', extract: 'Implants lack natural cushioning' },
        { icon: '🦴', title: 'Bone Health', root: 'Root preserves the bone', extract: 'Bone begins to resorb' },
        { icon: '💰', title: 'Cost', root: 'Less expensive long-term', extract: 'Implant/bridge costs more' },
        { icon: '👁️', title: 'Appearance', root: 'Nothing matches your natural tooth', extract: 'May not be perfect' },
    ];

    const myths = isRtl ? [
        { myth: 'علاج العصب مؤلم', fact: 'مع التخدير الحديث، الإجراء غير مؤلم. الألم يأتي من العدوى، ليس العلاج.' },
        { myth: 'علاج العصب يسبب أمراضاً', fact: 'لا دليل علمي يربط علاج العصب بالسرطان أو أي مرض. إزالة العدوى تحسن صحتك.' },
        { myth: 'السن الميت لا يحتاج علاجاً', fact: 'حتى لو مات العصب ولا تشعر بألم، العدوى موجودة وتأكل عظم الفك.' },
    ] : [
        { myth: 'Root canals are painful', fact: 'With modern anesthesia, the procedure is painless. Pain comes from infection, not treatment.' },
        { myth: 'Root canals cause illness', fact: 'Zero scientific evidence links root canals to cancer or other diseases. Removing infection improves health.' },
        { myth: 'Dead tooth doesnt need treatment', fact: 'Even if nerve is dead and you feel no pain, infection is still eating your jawbone.' },
    ];

    const faqs = isRtl ? [
        { q: 'كم يستغرق علاج العصب؟', a: 'معظم العلاجات تكتمل في زيارة واحدة من 60-90 دقيقة. الحالات المعقدة قد تحتاج زيارتين.' },
        { q: 'هل سيتحول السن للأسود؟', a: 'مع التقنيات الحديثة ووضع التاج، سنك المعالج سيطابق لون أسنانك الطبيعية.' },
        { q: 'ماذا لو انتظرت؟', a: 'السن المصاب لن يشفى وحده. العدوى ستنتشر وتسبب خراجاً وفقدان عظم.' },
        { q: 'هل يمكنني العودة للعمل فوراً؟', a: 'نعم. معظم المرضى يعودون لروتينهم في نفس اليوم أو اليوم التالي.' },
    ] : [
        { q: 'How long does a root canal take?', a: 'Most treatments complete in a single 60-90 minute visit. Complex cases may need two visits.' },
        { q: 'Will the tooth turn black?', a: 'With modern techniques and crown placement, your treated tooth will match natural teeth color.' },
        { q: 'What if I wait?', a: 'Infected tooth wont heal itself. Infection will spread, causing abscess and bone loss.' },
        { q: 'Can I go back to work immediately?', a: 'Yes. Most patients return to normal routine same day or next day.' },
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-rose-400/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero */}
            <div className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#0F1C21]">
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(244, 63, 94, 0.15) 0%, transparent 50%),
                                        radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 40%)`
                    }}></div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-20 lg:py-32 relative z-10">
                    <Link to="/services" className={`inline-flex items-center gap-2 text-white/60 hover:text-rose-400 mb-6 transition-all group ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        <span className="text-sm">{isRtl ? 'العودة للخدمات' : 'Back to Services'}</span>
                    </Link>

                    {/* Mobile Hero Image */}
                    <div className="block lg:hidden mb-8">
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-400 via-transparent to-rose-400 opacity-30 animate-pulse"></div>
                            <div className="absolute inset-2 rounded-2xl overflow-hidden border-2 border-rose-400/30 shadow-2xl">
                                <img src="/equipments (3).jpg" alt="Endodontics" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                                        <p className="text-white font-bold text-sm">{isRtl ? 'دقة مجهرية' : 'Microscopic Precision'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-2 shadow-xl animate-float">
                                <Activity className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-start">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Activity className="w-4 h-4 text-rose-400 animate-pulse" />
                                <span className="text-rose-400 text-xs md:text-sm font-semibold">{isRtl ? 'إنقاذ الأسنان' : 'Saving Teeth'}</span>
                            </div>

                            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${isRtl ? '' : 'font-playfair'}`}>
                                {isRtl ? (
                                    <><span className="block">علاج جذور</span><span className="block mt-2 bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 text-transparent bg-clip-text">الأسنان</span></>
                                ) : (
                                    <><span className="block">Endodontics</span><span className="block mt-2 bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 text-transparent bg-clip-text">Root Canal</span></>
                                )}
                            </h1>

                            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {isRtl ? 'علاج عصب بدون ألم بدقة مجهرية لإنقاذ أسنانك الطبيعية وإزالة الألم فوراً.' : 'Pain-free root canal with microscopic precision to save your natural teeth and eliminate pain instantly.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Link to="/#booking" className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(244,63,94,0.4)] transition-all flex items-center justify-center gap-2">
                                    {isRtl ? 'احجز استشارتك' : 'Book Consultation'}
                                    <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Hero Image */}
                        <div className="relative hidden lg:block">
                            <div className="relative w-full aspect-square">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-rose-400 via-transparent to-rose-400 opacity-30 animate-pulse"></div>
                                <div className="absolute inset-4 rounded-3xl overflow-hidden border-4 border-rose-400/30 shadow-2xl">
                                    <img src="/equipments (3).jpg" alt="Endodontics" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                            <p className="text-white font-bold text-lg">{isRtl ? 'علاج العصب' : 'Root Canal Treatment'}</p>
                                            <p className="text-white/70 text-sm">{isRtl ? 'لا يسبب الألم، بل يعالجه' : 'Doesnt cause pain, it cures it'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-4 shadow-xl animate-float">
                                    <Activity className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                                <div className="text-2xl md:text-4xl font-bold text-rose-400 mb-1">{stat.number}</div>
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
                                    <BookOpen className="w-5 h-5 text-rose-500" />
                                    {isRtl ? 'المحتويات' : 'Contents'}
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <a key={item.id} href={`#${item.id}`}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-6 text-center">
                                <Activity className="w-10 h-10 text-white mx-auto mb-4" />
                                <p className="text-white font-medium mb-4">{isRtl ? 'أنهِ الألم اليوم' : 'End Pain Today'}</p>
                                <Link to="/#booking" className="block w-full py-3 bg-white text-rose-600 font-bold rounded-xl hover:bg-gray-100 transition-all">
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
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-rose-500 text-sm font-semibold uppercase">{isRtl ? 'مقدمة' : 'Introduction'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'حقيقة علاج العصب' : 'The Truth About Root Canals'}</h2>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {isRtl
                                    ? 'إذا كانت هناك عبارة في طب الأسنان تثير القلق الفوري، فهي "علاج العصب". لعقود، رسمت الثقافة الشعبية هذا الإجراء على أنه تجربة مؤلمة. في نيوليفا، نحن هنا لإعادة كتابة هذه الرواية.'
                                    : 'If there is one phrase in dentistry that triggers immediate anxiety, it is "Root Canal." For decades, pop culture has painted this procedure as a painful ordeal. At Neoliva, we are here to rewrite that narrative.'}
                            </p>
                            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-100">
                                <p className="text-rose-800 text-xl font-bold text-center mb-2">
                                    {isRtl ? 'الحقيقة:' : 'The Truth:'}
                                </p>
                                <p className="text-rose-700 text-lg text-center">
                                    {isRtl ? 'علاج العصب لا يسبب الألم - بل يعالجه!' : 'Root canal treatment doesn\'t cause pain - it CURES it!'}
                                </p>
                            </div>
                        </section>

                        {/* Section 2 - What is Endodontics */}
                        <section id="what-is" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-[#1A2E35] to-[#2A4A55] rounded-[3rem] p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center">
                                        <BookOpen className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-rose-400 text-sm font-semibold uppercase">{isRtl ? 'داخل السن' : 'Inside Tooth'}</span>
                                        <h2 className="text-3xl font-bold text-white">{isRtl ? 'ما هو علاج الجذور؟' : 'What is Endodontics?'}</h2>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg mb-8">
                                    {isRtl
                                        ? 'Endodontics من الكلمات اليونانية endo (داخل) و odont (سن). بينما الطبقة الخارجية (المينا) صلبة وغير حية، الداخل حي جداً. غرفة اللب تحتوي أعصاباً وأوعية دموية وأنسجة ضامة. عندما تصلها البكتيريا، تصبح ملتهبة أو مصابة، وهنا يتدخل علاج الجذور.'
                                        : 'Endodontics comes from Greek endo (inside) and odont (tooth). While the outer enamel is hard and lifeless, the inside is very alive. The pulp chamber contains nerves, blood vessels, and connective tissue. When bacteria invade, it becomes inflamed or infected, and this is where Endodontics steps in.'}
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { icon: '🧠', title: isRtl ? 'الأعصاب' : 'Nerves', desc: isRtl ? 'توفر الإحساس' : 'Provide sensation' },
                                        { icon: '❤️', title: isRtl ? 'الأوعية الدموية' : 'Blood Vessels', desc: isRtl ? 'توفر التغذية' : 'Provide nourishment' },
                                        { icon: '🔗', title: isRtl ? 'النسيج الضام' : 'Connective Tissue', desc: isRtl ? 'يدعم السن أثناء النمو' : 'Supports tooth development' },
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

                        {/* Section 3 - Signs */}
                        <section id="signs" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <AlertTriangle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'العلامات' : 'Warning Signs'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'علامات تحتاج علاج عصب' : 'Signs You Need Root Canal'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {signs.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-amber-500">
                                        <span className="text-3xl mb-3 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4 - Technology */}
                        <section id="technology" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Microscope className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-violet-500 text-sm font-semibold uppercase">{isRtl ? 'التقنيات' : 'Technology'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'ميزة نيوليفا التقنية' : 'The Neoliva Difference'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {technology.map((item, i) => (
                                    <div key={i} className="bg-violet-50 rounded-2xl p-6 border border-violet-100">
                                        <span className="text-3xl mb-3 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 5 - Procedure */}
                        <section id="procedure" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Activity className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-emerald-500 text-sm font-semibold uppercase">{isRtl ? 'الإجراء' : 'Procedure'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'خطوات العلاج' : 'Step-by-Step to Relief'}</h2>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {procedureSteps.map((item, i) => (
                                    <div key={i} className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
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

                        {/* Section 6 - vs Extraction */}
                        <section id="vs-extraction" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-blue-500 text-sm font-semibold uppercase">{isRtl ? 'لماذا الحفاظ' : 'Why Save'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'العلاج مقابل الخلع' : 'Root Canal vs Extraction'}</h2>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="grid grid-cols-3 bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white font-bold text-center">
                                    <span></span>
                                    <span>✅ {isRtl ? 'علاج العصب' : 'Root Canal'}</span>
                                    <span>❌ {isRtl ? 'الخلع' : 'Extraction'}</span>
                                </div>
                                {vsExtraction.map((item, i) => (
                                    <div key={i} className="grid grid-cols-3 p-4 border-b last:border-b-0 items-center text-center">
                                        <div className="flex items-center gap-2 justify-center">
                                            <span className="text-xl">{item.icon}</span>
                                            <span className="font-medium text-[#1A2E35]">{item.title}</span>
                                        </div>
                                        <span className="text-emerald-600 text-sm">{item.root}</span>
                                        <span className="text-gray-500 text-sm">{item.extract}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7 - Myths */}
                        <section id="myths" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <X className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-rose-500 text-sm font-semibold uppercase">{isRtl ? 'خرافات' : 'Myths'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'خرافات شائعة مدحوضة' : 'Debunking Common Myths'}</h2>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {myths.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className="text-2xl">❌</span>
                                            <p className="text-rose-600 font-bold">{isRtl ? 'خرافة:' : 'Myth:'} {item.myth}</p>
                                        </div>
                                        <div className="flex items-start gap-4 bg-emerald-50 rounded-xl p-4">
                                            <span className="text-2xl">✅</span>
                                            <p className="text-emerald-700"><span className="font-bold">{isRtl ? 'الحقيقة:' : 'Fact:'}</span> {item.fact}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8 - Recovery */}
                        <section id="recovery" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase">{isRtl ? 'التعافي' : 'Recovery'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'التعافي والرعاية اللاحقة' : 'Recovery and Aftercare'}</h2>
                                </div>
                            </div>
                            <div className="bg-cyan-50 rounded-3xl p-8 border border-cyan-100">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { icon: '💊', text: isRtl ? 'تخدير لبضع ساعات - لا تأكل حتى يزول' : 'Numbness for few hours - dont eat until it wears off' },
                                        { icon: '🩹', text: isRtl ? 'الحساسية طبيعية 2-3 أيام - مسكنات عادية كافية' : 'Sensitivity normal for 2-3 days - OTC painkillers sufficient' },
                                        { icon: '🚫', text: isRtl ? 'تجنب المضغ على الحشوة المؤقتة' : 'Avoid chewing on temporary filling' },
                                        { icon: '🪥', text: isRtl ? 'نظف بالفرشاة والخيط بشكل طبيعي' : 'Brush and floss normally' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                                            <span className="text-2xl">{item.icon}</span>
                                            <p className="text-cyan-700">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <HelpCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-rose-500 text-sm font-semibold uppercase">{isRtl ? 'أسئلة شائعة' : 'FAQ'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                        <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className={`w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                                            <span className="font-bold text-[#1A2E35]">{faq.q}</span>
                                            {expandedFaq === i ? <ChevronUp className="w-6 h-6 text-rose-500" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
                                        </button>
                                        {expandedFaq === i && <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">{faq.a}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-[3rem] p-8 md:p-16 text-center">
                            <Activity className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{isRtl ? 'راحتك أولويتنا' : 'Your Comfort is Our Priority'}</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{isRtl ? 'لا تدع الخوف يتحكم بصحة أسنانك. إذا كنت تعاني من ألم، دعنا نساعدك.' : 'Dont let fear dictate your dental health. If you\'re experiencing pain, let us help.'}</p>
                            <Link to="/#booking" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-rose-600 text-xl font-bold rounded-full hover:shadow-2xl transition-all hover:-translate-y-1">
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

export default EndodonticsPage;
