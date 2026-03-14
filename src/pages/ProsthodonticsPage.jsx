import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Heart, Shield, Sparkles, Star, BookOpen, Stethoscope, Clock, Zap, HelpCircle, Award, ChevronDown, ChevronUp, ArrowRight, Crown, Wrench, Layers, Users, Settings, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProsthodonticsPage = () => {
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
        { id: 'intro', title: 'مهندسو ابتسامتك', icon: Sparkles },
        { id: 'what-is', title: 'ما هو طب التعويضات؟', icon: BookOpen },
        { id: 'why', title: 'أهمية طب الترميم', icon: Heart },
        { id: 'crowns', title: 'التيجان والجسور', icon: Crown },
        { id: 'dentures', title: 'أطقم الأسنان الحديثة', icon: Layers },
        { id: 'full-mouth', title: 'إعادة تأهيل الفم الكامل', icon: Star },
        { id: 'technology', title: 'التقنيات والمواد', icon: Settings },
        { id: 'journey', title: 'رحلة المريض', icon: Users },
        { id: 'maintenance', title: 'العناية والصيانة', icon: Shield },
        { id: 'faq', title: 'الأسئلة الشائعة', icon: HelpCircle },
    ] : [
        { id: 'intro', title: 'Architects of Your Smile', icon: Sparkles },
        { id: 'what-is', title: 'What is Prosthodontics?', icon: BookOpen },
        { id: 'why', title: 'Why Restorative Matters', icon: Heart },
        { id: 'crowns', title: 'Crowns & Bridges', icon: Crown },
        { id: 'dentures', title: 'Modern Dentures', icon: Layers },
        { id: 'full-mouth', title: 'Full Mouth Rehab', icon: Star },
        { id: 'technology', title: 'Technology & Materials', icon: Settings },
        { id: 'journey', title: 'Patient Journey', icon: Users },
        { id: 'maintenance', title: 'Maintenance', icon: Shield },
        { id: 'faq', title: 'FAQ', icon: HelpCircle },
    ];

    const stats = isRtl ? [
        { number: '15+', label: 'سنة عمر التاج' },
        { number: '100%', label: 'مواد خالية من المعادن' },
        { number: 'CAD', label: 'تصميم رقمي' },
        { number: '1', label: 'يوم للترميم' },
    ] : [
        { number: '15+', label: 'Years Crown Life' },
        { number: '100%', label: 'Metal-Free Materials' },
        { number: 'CAD', label: 'Digital Design' },
        { number: '1', label: 'Day Restoration' },
    ];

    const solutions = isRtl ? [
        { title: 'التيجان', desc: 'غطاء مخصص يغلف السن التالف بالكامل لحمايته واستعادة شكله', icon: '👑', color: 'from-amber-400 to-orange-500' },
        { title: 'الجسور', desc: 'تعويض ثابت للأسنان المفقودة مثبت على الأسنان المجاورة', icon: '🌉', color: 'from-blue-400 to-indigo-500' },
        { title: 'الحشوات التجميلية', desc: 'Inlays و Onlays للحالات بين الحشوة والتاج', icon: '🧩', color: 'from-emerald-400 to-teal-500' },
        { title: 'أطقم الأسنان', desc: 'أطقم كاملة أو جزئية بتصميم عصري ومريح', icon: '🦷', color: 'from-violet-400 to-purple-500' },
    ] : [
        { title: 'Dental Crowns', desc: 'Custom cap encasing entire tooth to protect and restore shape', icon: '👑', color: 'from-amber-400 to-orange-500' },
        { title: 'Dental Bridges', desc: 'Fixed replacement for missing teeth anchored to adjacent teeth', icon: '🌉', color: 'from-blue-400 to-indigo-500' },
        { title: 'Inlays & Onlays', desc: 'Conservative approach for cases between fillings and crowns', icon: '🧩', color: 'from-emerald-400 to-teal-500' },
        { title: 'Modern Dentures', desc: 'Complete or partial dentures with modern comfort design', icon: '🦷', color: 'from-violet-400 to-purple-500' },
    ];

    const whyRestore = isRtl ? [
        { icon: '🦴', title: 'فقدان العظم', desc: 'عظم الفك يحتاج تحفيز المضغ ليبقى كثيفاً' },
        { icon: '↔️', title: 'انزياح الأسنان', desc: 'الأسنان تميل لملء الفراغ مما يسبب سوء الإطباق' },
        { icon: '🍽️', title: 'مشاكل الهضم', desc: 'عدم المضغ الجيد يؤثر على امتصاص العناصر الغذائية' },
        { icon: '😣', title: 'اضطرابات المفصل', desc: 'العضة غير المتوازنة تسبب صداعاً وآلام الرقبة' },
    ] : [
        { icon: '🦴', title: 'Bone Loss', desc: 'Jawbone needs chewing stimulation to stay dense' },
        { icon: '↔️', title: 'Teeth Shifting', desc: 'Teeth lean to fill gaps causing malocclusion' },
        { icon: '🍽️', title: 'Digestive Issues', desc: 'Poor chewing affects nutrient absorption' },
        { icon: '😣', title: 'TMJ Disorders', desc: 'Uneven bite causes headaches and neck pain' },
    ];

    const patientJourney = isRtl ? [
        { step: '1', title: 'الفحص الشامل', desc: 'أشعة رقمية، مسح 3D، صور عالية الدقة، وخطة علاج مفصلة' },
        { step: '2', title: 'التحضير والمؤقتات', desc: 'تحضير الأسنان وتركيب ترميمات مؤقتة عالية الجودة' },
        { step: '3', title: 'العمل المخبري', desc: 'فنيو المختبر يصنعون أسنانك المخصصة بدقة فائقة' },
        { step: '4', title: 'التركيب النهائي', desc: 'تثبيت الترميمات الدائمة وضبط العضة والمظهر' },
    ] : [
        { step: '1', title: 'Comprehensive Exam', desc: 'Digital X-rays, 3D scans, photos, and detailed treatment plan' },
        { step: '2', title: 'Preparation & Temps', desc: 'Tooth preparation and high-quality temporary restorations' },
        { step: '3', title: 'Lab Artistry', desc: 'Lab technicians craft your custom teeth with precision' },
        { step: '4', title: 'Final Fit', desc: 'Permanent restorations bonded, bite and aesthetics checked' },
    ];

    const faqs = isRtl ? [
        { q: 'هل التيجان والجسور تبدو طبيعية؟', a: 'نعم. نستخدم سيراميك Zirconia و E-max الذي يتفاعل مع الضوء مثل المينا الطبيعية تماماً.' },
        { q: 'كم يدوم التاج؟', a: 'مع العناية الجيدة، التاج عالي الجودة يدوم 10-15 سنة، وكثير منها يدوم أطول.' },
        { q: 'هل الإجراء مؤلم؟', a: 'طب الترميم الحديث غير مؤلم عموماً. نستخدم تخدير موضعي فعال وخيارات تهدئة.' },
        { q: 'ماذا لو لم يكن لدي أسنان؟', a: 'يمكنك الحصول على أطقم كاملة عالية الجودة أو ترميمات All-on-4 المثبتة على زرعات.' },
    ] : [
        { q: 'Do crowns and bridges look natural?', a: 'Absolutely. We use Zirconia and E-max ceramics that interact with light just like natural enamel.' },
        { q: 'How long does a crown last?', a: 'With good care, high-quality crowns typically last 10-15 years, many last much longer.' },
        { q: 'Is the procedure painful?', a: 'Modern restorative dentistry is generally painless. We use effective anesthesia and sedation options.' },
        { q: 'What if I have no teeth?', a: 'You can get high-quality complete dentures or life-changing All-on-4 implant restorations.' },
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero */}
            <div className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#0F1C21]">
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
                                        radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 40%)`
                    }}></div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-20 lg:py-32 relative z-10">
                    <Link to="/services" className={`inline-flex items-center gap-2 text-white/60 hover:text-amber-400 mb-6 transition-all group ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        <span className="text-sm">{isRtl ? 'العودة للخدمات' : 'Back to Services'}</span>
                    </Link>

                    {/* Mobile Hero Image */}
                    <div className="block lg:hidden mb-8">
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-transparent to-amber-400 opacity-30 animate-pulse"></div>
                            <div className="absolute inset-2 rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-2xl">
                                <img src="/equipments (2).jpg" alt="Prosthodontics" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                                        <p className="text-white font-bold text-sm">{isRtl ? 'فن إعادة البناء' : 'Art of Rebuilding'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-2 shadow-xl animate-float">
                                <Crown className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-start">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Crown className="w-4 h-4 text-amber-400 animate-pulse" />
                                <span className="text-amber-400 text-xs md:text-sm font-semibold">{isRtl ? 'فن الترميم' : 'Art of Restoration'}</span>
                            </div>

                            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${isRtl ? '' : 'font-playfair'}`}>
                                {isRtl ? (
                                    <><span className="block">طب التعويضات</span><span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-transparent bg-clip-text">والترميم</span></>
                                ) : (
                                    <><span className="block">Prosthodontics</span><span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-transparent bg-clip-text">& Restorative</span></>
                                )}
                            </h1>

                            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {isRtl ? 'استعد وظيفة وجمال ابتسامتك مع خبراء التعويضات في نيوليفا.' : 'Restore function and beauty of your smile with prosthodontic experts at Neoliva.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Link to="/#booking" className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] transition-all flex items-center justify-center gap-2">
                                    {isRtl ? 'احجز استشارتك' : 'Book Consultation'}
                                    <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Hero Image */}
                        <div className="relative hidden lg:block">
                            <div className="relative w-full aspect-square">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400 via-transparent to-amber-400 opacity-30 animate-pulse"></div>
                                <div className="absolute inset-4 rounded-3xl overflow-hidden border-4 border-amber-400/30 shadow-2xl">
                                    <img src="/equipments (2).jpg" alt="Prosthodontics" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                            <p className="text-white font-bold text-lg">{isRtl ? 'دقة هندسية' : 'Engineering Precision'}</p>
                                            <p className="text-white/70 text-sm">{isRtl ? 'تصميم رقمي وتصنيع دقيق' : 'Digital design & precise manufacturing'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 shadow-xl animate-float">
                                    <Crown className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                    <Star className="w-8 h-8 text-white" />
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
            <div className="container mx-auto px-4 py-10 lg:py-20 relative z-10">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-gray-100/50">
                                <h3 className="text-lg font-bold text-[#1A2E35] mb-6 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-amber-500" />
                                    {isRtl ? 'المحتويات' : 'Contents'}
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <a key={item.id} href={`#${item.id}`}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-6 text-center">
                                <Crown className="w-10 h-10 text-white mx-auto mb-4" />
                                <p className="text-white font-medium mb-4">{isRtl ? 'أعد بناء ابتسامتك' : 'Rebuild Your Smile'}</p>
                                <Link to="/#booking" className="block w-full py-3 bg-white text-amber-600 font-bold rounded-xl hover:bg-gray-100 transition-all">
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
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'مقدمة' : 'Introduction'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'مهندسو ابتسامتك' : 'Architects of Your Smile'}</h2>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {isRtl
                                    ? 'هل سبق أن أخفيت ابتسامتك في صورة؟ هل تتردد قبل طلب طعامك المفضل لأن المضغ أصبح صعباً؟ الأسنان التالفة أو المفقودة تؤثر على أكثر من مظهرك - تؤثر على جودة حياتك وتغذيتك وثقتك بنفسك.'
                                    : 'Have you ever hidden your smile in a photo? Do you hesitate before ordering your favorite food because chewing has become difficult? Damaged or missing teeth affect more than appearance—they diminish quality of life, nutrition, and self-esteem.'}
                            </p>
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                                <p className="text-amber-800 text-lg font-medium text-center">
                                    {isRtl ? 'في نيوليفا، لا نقوم فقط بـ"إصلاح" الأسنان - بل نعيد بناء الثقة، ابتسامة تلو الأخرى.' : 'At Neoliva, we don\'t just "fix" teeth—we rebuild confidence, one smile at a time.'}
                                </p>
                            </div>
                        </section>

                        {/* Section 2 - What is Prosthodontics */}
                        <section id="what-is" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-[#1A2E35] to-[#2A4A55] rounded-[3rem] p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                                        <BookOpen className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-amber-400 text-sm font-semibold uppercase">{isRtl ? 'التخصص' : 'Specialty'}</span>
                                        <h2 className="text-3xl font-bold text-white">{isRtl ? 'ما هو طب التعويضات السنية؟' : 'What is Prosthodontics?'}</h2>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg mb-8">
                                    {isRtl
                                        ? 'طب التعويضات هو أحد التخصصات المعترف بها عالمياً. يتعلق بتشخيص وتخطيط وإعادة تأهيل وصيانة وظيفة الفم وراحته ومظهره وصحته للمرضى الذين يعانون من أسنان مفقودة أو ناقصة.'
                                        : 'Prosthodontics is a recognized dental specialty pertaining to diagnosis, treatment planning, rehabilitation, and maintenance of oral function, comfort, appearance, and health of patients with missing or deficient teeth.'}
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { icon: '🔧', title: isRtl ? 'ترميمات معقدة' : 'Complex Restorations', desc: isRtl ? 'حالات صعبة متعددة الأسنان' : 'Difficult multi-tooth cases' },
                                        { icon: '🎨', title: isRtl ? 'الجماليات' : 'Aesthetics', desc: isRtl ? 'أسنان لا تميزها عن الطبيعية' : 'Indistinguishable from natural' },
                                        { icon: '⚖️', title: isRtl ? 'ديناميكية العضة' : 'Bite Dynamics', desc: isRtl ? 'محاذاة مثالية للفكين' : 'Perfect jaw alignment' },
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

                        {/* Section 3 - Why Restorative */}
                        <section id="why" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-rose-500 text-sm font-semibold uppercase">{isRtl ? 'الأهمية' : 'Importance'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'لماذا طب الترميم ضروري؟' : 'Why Restorative Dentistry Matters'}</h2>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-8">{isRtl ? 'تجاهل الأسنان التالفة أو المفقودة يؤدي لسلسلة من المشاكل الصحية:' : 'Ignoring damaged or missing teeth triggers a domino effect of health problems:'}</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {whyRestore.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                        <span className="text-3xl mb-3 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4 - Crowns & Bridges */}
                        <section id="crowns" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Crown className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'الحلول الأساسية' : 'Core Solutions'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الحلول الترميمية في نيوليفا' : 'Prosthodontic Solutions at Neoliva'}</h2>
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

                        {/* Section 5 - Modern Dentures */}
                        <section id="dentures" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Layers className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-violet-500 text-sm font-semibold uppercase">{isRtl ? 'أطقم الأسنان' : 'Dentures'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'أطقم الأسنان الحديثة' : 'Modern Dentures Reimagined'}</h2>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-8">{isRtl ? 'انسَ صورة أسنان الأجداد في كوب الماء. طب التعويضات الحديث أحدث ثورة في الأطقم.' : 'Forget the image of grandparents\' teeth in a glass. Modern prosthodontics has revolutionized dentures.'}</p>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: '😊', title: isRtl ? 'أطقم كاملة' : 'Complete Dentures', desc: isRtl ? 'للمرضى الذين فقدوا كل الأسنان' : 'For patients who lost all teeth' },
                                    { icon: '🦷', title: isRtl ? 'أطقم جزئية' : 'Partial Dentures', desc: isRtl ? 'خيارات قابلة للإزالة مع أسنان صحية' : 'Removable option with healthy teeth remaining' },
                                    { icon: '⭐', title: isRtl ? 'أطقم على زرعات' : 'Implant-Supported', desc: isRtl ? 'المعيار الذهبي - ثبات بدون لاصق' : 'Gold standard - stability without adhesives' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-violet-50 rounded-2xl p-6 border border-violet-100 text-center">
                                        <span className="text-4xl mb-4 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 6 - Full Mouth */}
                        <section id="full-mouth" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[3rem] p-8 md:p-12 text-white">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <Star className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-white/80 text-sm font-semibold uppercase">{isRtl ? 'التحول الكامل' : 'Complete Transformation'}</span>
                                        <h2 className="text-3xl font-bold">{isRtl ? 'إعادة تأهيل الفم الكامل' : 'Full Mouth Rehabilitation'}</h2>
                                    </div>
                                </div>
                                <p className="text-white/90 text-lg mb-8">
                                    {isRtl
                                        ? 'هذا ليس مجرد إصلاح أسنان - إنه إعادة ضبط بيولوجيا فمك. نعيد البُعد العمودي، التوازن العصبي العضلي، والتناسق الجمالي مع وجهك.'
                                        : 'This isn\'t just about fixing teeth—it\'s about resetting your oral biology. We restore vertical dimension, neuromuscular harmony, and aesthetic balance with your face.'}
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { title: isRtl ? 'البُعد العمودي' : 'Vertical Dimension', desc: isRtl ? 'استعادة ارتفاع الأسنان المتآكلة' : 'Restore height of worn teeth' },
                                        { title: isRtl ? 'التوازن العضلي' : 'Muscle Harmony', desc: isRtl ? 'عضة تريح عضلات الفك' : 'Bite that relaxes jaw muscles' },
                                        { title: isRtl ? 'التناسق الجمالي' : 'Aesthetic Balance', desc: isRtl ? 'ابتسامة متناغمة مع وجهك' : 'Smile harmonizes with your face' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                                            <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-white/80 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 7 - Technology */}
                        <section id="technology" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Settings className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase">{isRtl ? 'التقنيات' : 'Technology'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'ميزة نيوليفا التقنية' : 'The Neoliva Advantage'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: '🖥️', title: isRtl ? 'CAD/CAM' : 'CAD/CAM', desc: isRtl ? 'تصميم وتصنيع بمساعدة الحاسوب' : 'Computer-aided design & manufacturing' },
                                    { icon: '📷', title: isRtl ? 'مسح رقمي' : 'Digital Scans', desc: isRtl ? 'وداعاً للقوالب المزعجة' : 'Goodbye goopy impression trays' },
                                    { icon: '💎', title: isRtl ? 'زركونيا متجانسة' : 'Monolithic Zirconia', desc: isRtl ? 'غير قابلة للكسر تقريباً' : 'Virtually unbreakable' },
                                    { icon: '✨', title: isRtl ? 'بورسلين متعدد الطبقات' : 'Layered Porcelain', desc: isRtl ? 'عمق ولون يحاكي الطبيعة' : 'Depth and color mimicking nature' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                                        <span className="text-3xl mb-3 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8 - Patient Journey */}
                        <section id="journey" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-emerald-500 text-sm font-semibold uppercase">{isRtl ? 'رحلة المريض' : 'Patient Journey'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'من الاستشارة للتركيب النهائي' : 'From Consultation to Final Fit'}</h2>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {patientJourney.map((item, i) => (
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

                        {/* Section 9 - Maintenance */}
                        <section id="maintenance" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-indigo-500 text-sm font-semibold uppercase">{isRtl ? 'العناية' : 'Maintenance'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'العناية بترميماتك' : 'Caring For Your Restorations'}</h2>
                                </div>
                            </div>
                            <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { icon: '🪥', text: isRtl ? 'النظافة: فرشاة وخيط يومياً' : 'Hygiene: Brush and floss daily' },
                                        { icon: '🍎', text: isRtl ? 'النظام الغذائي: تجنب الأطعمة الصلبة جداً' : 'Diet: Avoid extremely hard foods' },
                                        { icon: '😴', text: isRtl ? 'واقي ليلي: إذا كنت تصر على أسنانك' : 'Nightguard: If you grind teeth' },
                                        { icon: '📅', text: isRtl ? 'زيارات منتظمة: كل 6 أشهر' : 'Regular visits: Every 6 months' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                                            <span className="text-2xl">{item.icon}</span>
                                            <p className="text-indigo-700">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <HelpCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'أسئلة شائعة' : 'FAQ'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
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
                        <section className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[3rem] p-8 md:p-16 text-center">
                            <Crown className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{isRtl ? 'أعد اكتشاف متعة الأكل والابتسام' : 'Rediscover the Joy of Eating & Smiling'}</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{isRtl ? 'أسنانك هي أدوات حياتك. دعنا نستعيدها لك.' : 'Your teeth are the instruments of your life. Let us restore them for you.'}</p>
                            <Link to="/#booking" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-600 text-xl font-bold rounded-full hover:shadow-2xl transition-all hover:-translate-y-1">
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

export default ProsthodonticsPage;
