import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Heart, Shield, Sparkles, Star, BookOpen, Stethoscope, Clock, Zap, HelpCircle, Award, ChevronDown, ChevronUp, ArrowRight, Smile, AlertTriangle, Bone, Syringe, Target, Cpu, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const DentalImplantsPage = () => {
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
        { id: 'intro', title: 'عصر جديد لإعادة التأهيل', icon: Sparkles },
        { id: 'why-neoliva', title: 'لماذا نيوليفا؟', icon: Award },
        { id: 'implants', title: 'زراعة الأسنان', icon: Bone },
        { id: 'process', title: 'خطوات الزراعة', icon: Target },
        { id: 'solutions', title: 'الحلول المتاحة', icon: Star },
        { id: 'oral-surgery', title: 'جراحة الفم', icon: Stethoscope },
        { id: 'technology', title: 'التقنيات المتقدمة', icon: Cpu },
        { id: 'sedation', title: 'التخدير والراحة', icon: Heart },
        { id: 'recovery', title: 'التعافي والنجاح', icon: Shield },
        { id: 'faq', title: 'الأسئلة الشائعة', icon: HelpCircle },
    ] : [
        { id: 'intro', title: 'New Era of Rehabilitation', icon: Sparkles },
        { id: 'why-neoliva', title: 'Why Neoliva?', icon: Award },
        { id: 'implants', title: 'Dental Implants', icon: Bone },
        { id: 'process', title: 'Implant Process', icon: Target },
        { id: 'solutions', title: 'Solutions', icon: Star },
        { id: 'oral-surgery', title: 'Oral Surgery', icon: Stethoscope },
        { id: 'technology', title: 'Technology', icon: Cpu },
        { id: 'sedation', title: 'Sedation & Comfort', icon: Heart },
        { id: 'recovery', title: 'Recovery', icon: Shield },
        { id: 'faq', title: 'FAQ', icon: HelpCircle },
    ];

    const stats = isRtl ? [
        { number: '25+', label: 'سنة عمر الزراعة' },
        { number: '98%', label: 'نسبة النجاح' },
        { number: '3D', label: 'تخطيط رقمي' },
        { number: '1', label: 'يوم للابتسامة' },
    ] : [
        { number: '25+', label: 'Years Implant Life' },
        { number: '98%', label: 'Success Rate' },
        { number: '3D', label: 'Digital Planning' },
        { number: '1', label: 'Day to Smile' },
    ];

    const implantProcess = isRtl ? [
        { step: '1', title: 'الاستشارة والتصوير 3D', desc: 'فحص CBCT للحصول على خريطة ثلاثية الأبعاد للأعصاب والجيوب وكثافة العظام' },
        { step: '2', title: 'جراحة الزراعة', desc: 'وضع الدعامة التيتانيوم بدقة تحت التخدير باستخدام أدلة رقمية' },
        { step: '3', title: 'الشفاء والالتحام', desc: '3-6 أشهر للالتحام العظمي حيث ينمو العظم حول الزرعة' },
        { step: '4', title: 'التاج النهائي', desc: 'تركيب التاج البورسلين المصمم خصيصاً ليبدو ويعمل كسنك الطبيعي' },
    ] : [
        { step: '1', title: 'Consultation & 3D Imaging', desc: 'CBCT scan for 3D map of nerves, sinuses, and bone density' },
        { step: '2', title: 'Placement Surgery', desc: 'Titanium post precisely placed under anesthesia using digital guides' },
        { step: '3', title: 'Healing & Osseointegration', desc: '3-6 months for bone to grow around implant, locking it in place' },
        { step: '4', title: 'Final Crown', desc: 'Custom porcelain crown attached that looks and functions like your natural tooth' },
    ];

    const solutions = isRtl ? [
        { title: 'زرعة واحدة', desc: 'لاستبدال سن واحد دون المساس بالأسنان المجاورة', icon: '🦷' },
        { title: 'جسر على زرعات', desc: 'لاستبدال 3-4 أسنان متتالية باستخدام زرعتين فقط', icon: '🌉' },
        { title: 'All-on-4®', desc: 'استعادة فك كامل بـ 4-6 زرعات - "أسنان في يوم"', icon: '✨' },
    ] : [
        { title: 'Single Implant', desc: 'Replace one tooth without touching healthy neighbors', icon: '🦷' },
        { title: 'Implant Bridge', desc: 'Replace 3-4 teeth in a row using just two implants', icon: '🌉' },
        { title: 'All-on-4®', desc: 'Restore entire jaw with 4-6 implants - "Teeth in a Day"', icon: '✨' },
    ];

    const oralSurgeries = isRtl ? [
        { title: 'خلع ضرس العقل', desc: 'إزالة لطيفة للأسنان المطمورة مع الحفاظ على بنية العظم', icon: Bone },
        { title: 'ترقيع العظام', desc: 'إضافة مادة عظمية لتجديد العظم وتأهيله للزراعة', icon: Shield },
        { title: 'رفع الجيب الأنفي', desc: 'رفع أرضية الجيب وإضافة عظم لتوفير أساس آمن للزرعات', icon: Target },
        { title: 'جراحة الفك التصحيحية', desc: 'علاج مشاكل العضة الشديدة واضطرابات المفصل الصدغي', icon: Stethoscope },
    ] : [
        { title: 'Wisdom Tooth Extraction', desc: 'Gentle removal of impacted teeth while preserving bone structure', icon: Bone },
        { title: 'Bone Grafting', desc: 'Adding bone material to regenerate and prepare for implants', icon: Shield },
        { title: 'Sinus Lift', desc: 'Raising sinus floor and packing bone for safe implant foundation', icon: Target },
        { title: 'Corrective Jaw Surgery', desc: 'Treating severe bite issues and TMJ disorders', icon: Stethoscope },
    ];

    const technologies = isRtl ? [
        { title: 'CBCT', desc: 'خريطة ثلاثية الأبعاد للجمجمة بدقة الملليمتر' },
        { title: 'الماسحات الرقمية', desc: 'وداعاً للقوالب المزعجة - مسح رقمي للفم' },
        { title: 'الأدلة الجراحية', desc: 'طباعة 3D لأدلة بزوايا وأعماق محددة مسبقاً' },
        { title: 'الجراحة الكهروضغطية', desc: 'اهتزازات فوق صوتية لقطع العظم دون إيذاء الأنسجة' },
    ] : [
        { title: 'CBCT', desc: '3D skull map with millimeter precision' },
        { title: 'Digital Scanners', desc: 'Goodbye goopy trays - digital mouth scanning' },
        { title: 'Surgical Guides', desc: '3D printed guides with pre-planned angles and depths' },
        { title: 'Piezoelectric Surgery', desc: 'Ultrasonic vibrations cut bone, spare soft tissues' },
    ];

    const faqs = isRtl ? [
        { q: 'هل زراعة الأسنان مؤلمة؟', a: 'معظم المرضى يجدونها أسهل من الخلع. مع التخدير والمسكنات، الألم بسيط.' },
        { q: 'كم تدوم الزرعات؟', a: 'مع العناية الصحيحة، الزرعات تدوم مدى الحياة. التاج قد يحتاج استبدال بعد 15-20 سنة.' },
        { q: 'هل أنا مرشح للزراعة؟', a: 'معظم البالغين مرشحون. تحتاج صحة عامة جيدة وكثافة عظم كافية.' },
        { q: 'كم مدة التعافي من خلع ضرس العقل؟', a: 'العودة للعمل خلال 2-3 أيام. الشفاء الكامل 2-3 أسابيع.' },
    ] : [
        { q: 'Are dental implants painful?', a: 'Most patients find it easier than extraction. With anesthesia and painkillers, discomfort is minimal.' },
        { q: 'How long do implants last?', a: 'With proper care, implants last a lifetime. Crown may need replacement after 15-20 years.' },
        { q: 'Am I a candidate for implants?', a: 'Most adults are candidates. You need good health and sufficient bone density.' },
        { q: 'Recovery time for wisdom tooth extraction?', a: 'Return to work in 2-3 days. Full healing takes 2-3 weeks.' },
    ];

    const comparisonData = isRtl ? {
        headers: ['الميزة', 'الزرعات', 'الأطقم', 'الجسور'],
        rows: [
            ['الثبات', 'صلبة كالعظم', 'قد تتحرك', 'جيد'],
            ['صحة العظم', 'تحفز العظم', 'تسرع الفقدان', 'لا تمنع الفقدان'],
            ['العمر', '25+ سنة', '5-7 سنوات', '10-15 سنة'],
            ['المظهر', 'الأكثر طبيعية', 'قد تبدو صناعية', 'جيد'],
        ]
    } : {
        headers: ['Feature', 'Implants', 'Dentures', 'Bridges'],
        rows: [
            ['Stability', 'Rock-solid', 'Can slip', 'Stable'],
            ['Bone Health', 'Stimulates bone', 'Accelerates loss', 'Doesnt prevent loss'],
            ['Longevity', '25+ years', '5-7 years', '10-15 years'],
            ['Aesthetics', 'Most natural', 'Can look artificial', 'Good'],
        ]
    };

    return (
        <div className="min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero */}
            <div className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#0F1C21]">
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                                        radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%)`
                    }}></div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-20 lg:py-32 relative z-10">
                    <Link to="/services" className={`inline-flex items-center gap-2 text-white/60 hover:text-indigo-400 mb-6 transition-all group ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        <span className="text-sm">{isRtl ? 'العودة للخدمات' : 'Back to Services'}</span>
                    </Link>

                    {/* Mobile Hero Image */}
                    <div className="block lg:hidden mb-8">
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400 via-transparent to-indigo-400 opacity-30 animate-pulse"></div>
                            <div className="absolute inset-2 rounded-2xl overflow-hidden border-2 border-indigo-400/30 shadow-2xl">
                                <img src="/equipments (4).jpg" alt="Dental Implants" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                                        <p className="text-white font-bold text-sm">{isRtl ? 'تقنيات متقدمة' : 'Advanced Technology'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-2 shadow-xl animate-float">
                                <Bone className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-start">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Bone className="w-4 h-4 text-indigo-400 animate-pulse" />
                                <span className="text-indigo-400 text-xs md:text-sm font-semibold">{isRtl ? 'المعيار الذهبي' : 'The Gold Standard'}</span>
                            </div>

                            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${isRtl ? '' : 'font-playfair'}`}>
                                {isRtl ? (
                                    <><span className="block">زراعة الأسنان</span><span className="block mt-2 bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-400 text-transparent bg-clip-text">وجراحة الفم</span></>
                                ) : (
                                    <><span className="block">Dental Implants</span><span className="block mt-2 bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-400 text-transparent bg-clip-text">& Oral Surgery</span></>
                                )}
                            </h1>

                            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {isRtl ? 'استعد حياتك وابتسامتك مع أحدث تقنيات الزراعة وجراحة الفم في نيوليفا.' : 'Reclaim your life and smile with cutting-edge implants and oral surgery at Neoliva.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Link to="/#booking" className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2">
                                    {isRtl ? 'احجز استشارتك' : 'Book Consultation'}
                                    <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Hero Image */}
                        <div className="relative hidden lg:block">
                            <div className="relative w-full aspect-square">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 via-transparent to-indigo-400 opacity-30 animate-pulse"></div>
                                <div className="absolute inset-4 rounded-3xl overflow-hidden border-4 border-indigo-400/30 shadow-2xl">
                                    <img src="/equipments (4).jpg" alt="Dental Implants" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                            <p className="text-white font-bold text-lg">{isRtl ? 'دقة رقمية' : 'Digital Precision'}</p>
                                            <p className="text-white/70 text-sm">{isRtl ? 'تخطيط افتراضي قبل الجراحة' : 'Virtual planning before surgery'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-4 shadow-xl animate-float">
                                    <Bone className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                                <div className="text-2xl md:text-4xl font-bold text-indigo-400 mb-1">{stat.number}</div>
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
                                    <BookOpen className="w-5 h-5 text-indigo-500" />
                                    {isRtl ? 'المحتويات' : 'Contents'}
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <a key={item.id} href={`#${item.id}`}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-6 text-center">
                                <Bone className="w-10 h-10 text-white mx-auto mb-4" />
                                <p className="text-white font-medium mb-4">{isRtl ? 'استعد ابتسامتك' : 'Reclaim Your Smile'}</p>
                                <Link to="/#booking" className="block w-full py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all">
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
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-indigo-500 text-sm font-semibold uppercase">{isRtl ? 'مقدمة' : 'Introduction'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'عصر جديد لإعادة التأهيل' : 'New Era of Oral Rehabilitation'}</h2>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {isRtl
                                    ? 'فقدان سن أو مواجهة جراحة الفم تجربة صعبة. تؤثر على المضغ والكلام وبنية الوجه والثقة بالنفس. في نيوليفا، نؤمن أن الزراعة وجراحة الفم ليست مجرد إجراءات طبية - بل تجارب تحويلية تستعيد جودة حياتك.'
                                    : 'Losing a tooth or facing oral surgery can be daunting. It affects chewing, speech, facial structure, and self-confidence. At Neoliva, we believe implants and oral surgery are transformative experiences that restore your quality of life.'
                                }
                            </p>
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100">
                                <p className="text-indigo-800 text-lg font-medium text-center">
                                    {isRtl ? '"جيد بما فيه الكفاية" لم يعد مقبولاً. المرضى يستحقون حلولاً دائمة تبدو وتشعر وتعمل كالأسنان الطبيعية.' : '"Good enough" is no longer acceptable. Patients deserve permanent solutions that look, feel, and function like natural teeth.'}
                                </p>
                            </div>
                        </section>

                        {/* Section 2 - Why Neoliva */}
                        <section id="why-neoliva" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'لماذا نيوليفا' : 'Why Neoliva'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'معيار نيوليفا' : 'The Neoliva Standard'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: '👨‍⚕️', title: isRtl ? 'خبرة جراحية' : 'Surgical Expertise', desc: isRtl ? 'فريق من الجراحين المتخصصين بسنوات خبرة' : 'Team of specialized surgeons with years of experience' },
                                    { icon: '🏥', title: isRtl ? 'معايير التعقيم' : 'Sterilization', desc: isRtl ? 'معايير تعقيم على مستوى المستشفيات' : 'Hospital-grade sterilization standards' },
                                    { icon: '💚', title: isRtl ? 'رعاية إنسانية' : 'Patient-Centric', desc: isRtl ? 'بيئة هادئة وتعاطف في كل تفاعل' : 'Calming environment and empathy in every interaction' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all">
                                        <span className="text-4xl mb-4 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3 - What is Implant */}
                        <section id="implants" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-[#1A2E35] to-[#2A4A55] rounded-[3rem] p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center">
                                        <Bone className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-indigo-400 text-sm font-semibold uppercase">{isRtl ? 'المعيار الذهبي' : 'Gold Standard'}</span>
                                        <h2 className="text-3xl font-bold text-white">{isRtl ? 'ما هي زراعة الأسنان؟' : 'What is a Dental Implant?'}</h2>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg mb-8">
                                    {isRtl
                                        ? 'زراعة الأسنان هي دعامة صغيرة على شكل برغي، عادة من التيتانيوم أو الزركونيا. تُزرع جراحياً في عظم الفك لتحل محل جذر السن. خلال أشهر، تلتحم الزرعة مع العظم في عملية تسمى الالتحام العظمي.'
                                        : 'A dental implant is a small screw-shaped post, typically made of titanium or zirconia. It is surgically placed into the jawbone where it acts as a replacement for the tooth root. Over months, the implant fuses with bone in a process called osseointegration.'
                                    }
                                </p>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <p className="text-white text-center font-medium">
                                        {isRtl ? 'بمجرد الالتحام، توفر الزرعة أساساً صلباً للتاج أو الجسر أو طقم الأسنان الثابت.' : 'Once fused, it provides a rock-solid foundation for a crown, bridge, or fixed denture.'}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 - Process */}
                        <section id="process" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-emerald-500 text-sm font-semibold uppercase">{isRtl ? 'خطوة بخطوة' : 'Step by Step'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'عملية الزراعة في نيوليفا' : 'The Neoliva Implant Process'}</h2>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {implantProcess.map((item, i) => (
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

                        {/* Section 5 - Solutions */}
                        <section id="solutions" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-violet-500 text-sm font-semibold uppercase">{isRtl ? 'الحلول' : 'Solutions'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الحلول المتاحة' : 'Available Solutions'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {solutions.map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100 text-center">
                                        <span className="text-4xl mb-4 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Comparison Table */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-4">
                                    <h4 className="text-white font-bold text-center">{isRtl ? 'مقارنة الخيارات' : 'Compare Options'}</h4>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                {comparisonData.headers.map((h, i) => (
                                                    <th key={i} className="px-4 py-3 text-sm font-bold text-[#1A2E35]">{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {comparisonData.rows.map((row, i) => (
                                                <tr key={i} className="border-t">
                                                    {row.map((cell, j) => (
                                                        <td key={j} className={`px-4 py-3 text-sm ${j === 0 ? 'font-medium text-[#1A2E35]' : 'text-gray-600'} ${j === 1 ? 'text-emerald-600 font-medium' : ''}`}>{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 - Oral Surgery */}
                        <section id="oral-surgery" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Stethoscope className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-rose-500 text-sm font-semibold uppercase">{isRtl ? 'جراحة الفم' : 'Oral Surgery'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'خدمات جراحة الفم الشاملة' : 'Comprehensive Oral Surgery'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {oralSurgeries.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                        <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7 - Technology */}
                        <section id="technology" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Cpu className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase">{isRtl ? 'التقنيات' : 'Technology'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الفرق التقني: دقة رقمية' : 'The Technology Difference'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {technologies.map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8 - Sedation */}
                        <section id="sedation" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-pink-500 text-sm font-semibold uppercase">{isRtl ? 'الراحة' : 'Comfort'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'التغلب على الخوف' : 'Conquering Fear'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: '💉', title: isRtl ? 'تخدير موضعي' : 'Local Anesthesia', desc: isRtl ? 'منطقة الجراحة مخدرة تماماً' : 'Surgical site completely numb' },
                                    { icon: '💊', title: isRtl ? 'تخدير فموي' : 'Oral Sedation', desc: isRtl ? 'حبة قبل الإجراء للاسترخاء' : 'A pill before procedure for relaxation' },
                                    { icon: '💤', title: isRtl ? 'تخدير وريدي' : 'IV Sedation', desc: isRtl ? 'نام خلال الإجراء بالكامل' : 'Sleep through the entire procedure' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-pink-50 rounded-2xl p-6 border border-pink-100 text-center">
                                        <span className="text-4xl mb-4 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 9 - Recovery */}
                        <section id="recovery" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-emerald-500 text-sm font-semibold uppercase">{isRtl ? 'التعافي' : 'Recovery'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'طريق التعافي والنجاح' : 'Road to Recovery'}</h2>
                                </div>
                            </div>
                            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                                <h4 className="font-bold text-emerald-800 text-xl mb-6">{isRtl ? 'نصائح التعافي' : 'Recovery Tips'}</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { icon: '🛏️', text: isRtl ? 'الراحة: ارفع رأسك وتجنب المجهود 2-3 أيام' : 'Rest: Elevate head, avoid activity for 2-3 days' },
                                        { icon: '🧊', text: isRtl ? 'الثلج: كمادات 20 دقيقة لتقليل التورم' : 'Ice: 20-minute packs to minimize swelling' },
                                        { icon: '🥣', text: isRtl ? 'الغذاء: أطعمة لينة وباردة، تجنب الشفاطات' : 'Diet: Soft, cold foods. Avoid straws' },
                                        { icon: '🧂', text: isRtl ? 'النظافة: غرغرة بماء مالح للتنظيف' : 'Hygiene: Salt water rinses to keep clean' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                                            <span className="text-2xl">{item.icon}</span>
                                            <p className="text-emerald-700">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <HelpCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-indigo-500 text-sm font-semibold uppercase">{isRtl ? 'أسئلة شائعة' : 'FAQ'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                        <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className={`w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                                            <span className="font-bold text-[#1A2E35]">{faq.q}</span>
                                            {expandedFaq === i ? <ChevronUp className="w-6 h-6 text-indigo-500" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
                                        </button>
                                        {expandedFaq === i && <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">{faq.a}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3rem] p-8 md:p-16 text-center">
                            <Bone className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{isRtl ? 'رحلتك تبدأ هنا' : 'Your Journey Begins Here'}</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{isRtl ? 'لا تدع الخوف أو عدم اليقين يوقفك. اتصل بنيوليفا اليوم.' : 'Dont let fear or uncertainty hold you back. Contact Neoliva today.'}</p>
                            <Link to="/#booking" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 text-xl font-bold rounded-full hover:shadow-2xl transition-all hover:-translate-y-1">
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

export default DentalImplantsPage;
