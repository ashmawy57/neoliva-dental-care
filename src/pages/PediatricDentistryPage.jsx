import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Heart, Shield, Sparkles, Star, BookOpen, Clock, Zap, HelpCircle, Award, ChevronDown, ChevronUp, ArrowRight, Baby, Smile, Home, AlertTriangle, Gift, Apple, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const PediatricDentistryPage = () => {
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
        { id: 'intro', title: 'البيت السني لطفلك', icon: Home },
        { id: 'specialty', title: 'لماذا التخصص؟', icon: Star },
        { id: 'first-visit', title: 'الزيارة الأولى', icon: Baby },
        { id: 'baby-teeth', title: 'أهمية الأسنان اللبنية', icon: Sparkles },
        { id: 'services', title: 'خدماتنا للأطفال', icon: Stethoscope },
        { id: 'experience', title: 'تجربة ممتعة', icon: Gift },
        { id: 'home-care', title: 'العناية المنزلية', icon: Shield },
        { id: 'habits', title: 'كسر العادات السيئة', icon: AlertTriangle },
        { id: 'emergencies', title: 'الطوارئ', icon: Zap },
        { id: 'faq', title: 'الأسئلة الشائعة', icon: HelpCircle },
    ] : [
        { id: 'intro', title: 'Dental Home', icon: Home },
        { id: 'specialty', title: 'Why Specialized?', icon: Star },
        { id: 'first-visit', title: 'First Visit', icon: Baby },
        { id: 'baby-teeth', title: 'Baby Teeth Matter', icon: Sparkles },
        { id: 'services', title: 'Our Services', icon: Stethoscope },
        { id: 'experience', title: 'Fun Experience', icon: Gift },
        { id: 'home-care', title: 'Home Care', icon: Shield },
        { id: 'habits', title: 'Breaking Habits', icon: AlertTriangle },
        { id: 'emergencies', title: 'Emergencies', icon: Zap },
        { id: 'faq', title: 'FAQ', icon: HelpCircle },
    ];

    const stats = isRtl ? [
        { number: '1', label: 'سنة - أول زيارة' },
        { number: '0', label: 'خوف - بيئة آمنة' },
        { number: '80%', label: 'تسوس الأضراس - نمنعه' },
        { number: '🎁', label: 'جائزة كل زيارة' },
    ] : [
        { number: '1', label: 'Year - First Visit' },
        { number: '0', label: 'Fear - Safe Environment' },
        { number: '80%', label: 'Molar Cavities - Prevented' },
        { number: '🎁', label: 'Prize Every Visit' },
    ];

    const services = isRtl ? [
        { icon: '🪥', title: 'الفحص والتنظيف', desc: 'إزالة الجير والبلاك مع فلورايد لتقوية المينا', color: 'from-blue-400 to-cyan-500' },
        { icon: '🛡️', title: 'سيلانت الأسنان', desc: 'طبقة حماية شفافة على الأضراس تمنع 80% من التسوس', color: 'from-emerald-400 to-teal-500' },
        { icon: '🦷', title: 'الحشوات والتيجان', desc: 'حشوات بيضاء وتيجان معدنية أو سيراميك للأسنان التالفة', color: 'from-amber-400 to-orange-500' },
        { icon: '📏', title: 'حافظات المسافة', desc: 'جهاز يحافظ على المكان للأسنان الدائمة إذا فُقد سن لبني مبكراً', color: 'from-violet-400 to-purple-500' },
    ] : [
        { icon: '🪥', title: 'Exams & Cleaning', desc: 'Remove tartar and plaque with fluoride to strengthen enamel', color: 'from-blue-400 to-cyan-500' },
        { icon: '🛡️', title: 'Dental Sealants', desc: 'Clear protective coating on molars prevents 80% of cavities', color: 'from-emerald-400 to-teal-500' },
        { icon: '🦷', title: 'Fillings & Crowns', desc: 'White fillings and metal or ceramic crowns for damaged teeth', color: 'from-amber-400 to-orange-500' },
        { icon: '📏', title: 'Space Maintainers', desc: 'Device that holds space for permanent teeth if baby tooth lost early', color: 'from-violet-400 to-purple-500' },
    ];

    const homeCareGuide = isRtl ? [
        { age: 'الرضع (0-1 سنة)', icon: '👶', tips: ['نظفي اللثة بقماش مبلل بعد الرضاعة', 'لا تضعي الطفل للنوم مع زجاجة الحليب'] },
        { age: 'الأطفال الصغار (1-3)', icon: '🧒', tips: ['ابدأ التنظيف بمعجون فلورايد بحجم حبة أرز', 'استخدم الخيط عند تلامس أي سنين', 'الوالدان يقومان بالتنظيف'] },
        { age: 'سن المدرسة (4+)', icon: '👦', tips: ['معجون بحجم حبة بازلاء', 'أشرف واتحقق حتى سن 7-8', 'استخدم مؤقت لضمان دقيقتين'] },
    ] : [
        { age: 'Infants (0-1 year)', icon: '👶', tips: ['Clean gums with damp cloth after feeding', 'Dont put baby to bed with milk bottle'] },
        { age: 'Toddlers (1-3)', icon: '🧒', tips: ['Start brushing with rice-grain size fluoride toothpaste', 'Floss once any two teeth touch', 'Parents must do the brushing'] },
        { age: 'School-Age (4+)', icon: '👦', tips: ['Pea-sized toothpaste', 'Supervise and check until age 7-8', 'Use timer to ensure 2 minutes'] },
    ];

    const emergencies = isRtl ? [
        { title: 'سن لبني مخلوع', steps: ['❌ لا تعيده للفم - قد يضر السن الدائم', 'اضغط لوقف النزيف', 'اتصل بنيوليفا للتقييم'] },
        { title: 'سن دائم مخلوع', steps: ['⏰ لديك 30-60 دقيقة فقط!', 'أمسكه من التاج فقط، اغسله بحليب', 'حاول إعادته للفم أو ضعه في حليب بارد', 'اذهب لنيوليفا فوراً'] },
        { title: 'سن مكسور', steps: ['ابحث عن القطعة المكسورة', 'اغسل الفم بماء دافئ', 'ضع كمادة باردة', 'اتصل بنا لموعد'] },
    ] : [
        { title: 'Knocked-Out Baby Tooth', steps: ['❌ DO NOT put it back - may damage adult tooth', 'Apply pressure to stop bleeding', 'Call Neoliva for evaluation'] },
        { title: 'Knocked-Out Permanent Tooth', steps: ['⏰ You have only 30-60 minutes!', 'Hold by crown only, rinse with milk', 'Try to put back in socket or store in cold milk', 'Go to Neoliva immediately'] },
        { title: 'Chipped/Broken Tooth', steps: ['Find the broken piece', 'Rinse mouth with warm water', 'Apply cold compress', 'Call us for appointment'] },
    ];

    const faqs = isRtl ? [
        { q: 'هل أشعة الأسنان آمنة للأطفال؟', a: 'نعم. نستخدم أشعة رقمية بإشعاع أقل 90% مع واقيات رصاصية. نأخذها فقط عند الضرورة.' },
        { q: 'طفلي يصر على أسنانه ليلاً، هل هذا سيء؟', a: 'صرير الأسنان شائع عند الأطفال ويتوقف عادة دون ضرر. نراقب التآكل ونبحث عن الأسباب.' },
        { q: 'لماذا لطفلي صفين من الأسنان؟', a: '"أسنان القرش" - السن الدائم ظهر قبل سقوط اللبني. عادة يسقط اللبني وحده، وإلا نخلعه.' },
        { q: 'متى يجب زيارة أخصائي التقويم؟', a: 'نفحص التقويم كل زيارة، لكن التقييم الرسمي يُنصح به من سن 7.' },
    ] : [
        { q: 'Are dental X-rays safe for children?', a: 'Yes. We use digital X-rays with 90% less radiation and lead aprons. We only take when necessary.' },
        { q: 'My child grinds teeth at night. Is this bad?', a: 'Bruxism is common in children and usually stops without damage. We monitor wear and investigate causes.' },
        { q: 'Why does my child have two rows of teeth?', a: '"Shark Teeth" - permanent tooth erupted before baby tooth fell. Usually baby tooth falls on its own, otherwise we extract it.' },
        { q: 'When should my child see an orthodontist?', a: 'We screen for orthodontic issues every visit, but formal evaluation recommended by age 7.' },
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Hero */}
            <div className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E35] via-[#1A2E35] to-[#0F1C21]">
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
                                        radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%)`
                    }}></div>
                </div>

                <div className="container mx-auto px-4 py-10 md:py-20 lg:py-32 relative z-10">
                    <Link to="/services" className={`inline-flex items-center gap-2 text-white/60 hover:text-pink-400 mb-6 transition-all group ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                        <span className="text-sm">{isRtl ? 'العودة للخدمات' : 'Back to Services'}</span>
                    </Link>

                    {/* Mobile Hero Image */}
                    <div className="block lg:hidden mb-8">
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 via-transparent to-pink-400 opacity-30 animate-pulse"></div>
                            <div className="absolute inset-2 rounded-2xl overflow-hidden border-2 border-pink-400/30 shadow-2xl">
                                <img src="/clinic (6).jpg" alt="Pediatric Dentistry" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                                        <p className="text-white font-bold text-sm">{isRtl ? 'أسنان سعيدة للأطفال' : 'Happy Teeth for Kids'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl p-2 shadow-xl animate-float">
                                <Baby className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-start">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Baby className="w-4 h-4 text-pink-400 animate-pulse" />
                                <span className="text-pink-400 text-xs md:text-sm font-semibold">{isRtl ? 'رعاية لطيفة ومرحة' : 'Gentle & Fun Care'}</span>
                            </div>

                            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${isRtl ? '' : 'font-playfair'}`}>
                                {isRtl ? (
                                    <><span className="block">طب أسنان</span><span className="block mt-2 bg-gradient-to-r from-pink-400 via-purple-300 to-pink-400 text-transparent bg-clip-text">الأطفال</span></>
                                ) : (
                                    <><span className="block">Pediatric</span><span className="block mt-2 bg-gradient-to-r from-pink-400 via-purple-300 to-pink-400 text-transparent bg-clip-text">Dentistry</span></>
                                )}
                            </h1>

                            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {isRtl ? 'بناء أساس لابتسامة صحية تدوم مدى الحياة - رعاية لطيفة ومرحة وخبيرة لأطفالك.' : 'Building a foundation for a lifetime of healthy smiles - gentle, fun, and expert care for your children.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Link to="/#booking" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all flex items-center justify-center gap-2">
                                    {isRtl ? 'احجز زيارة سعيدة' : 'Book Happy Visit'}
                                    <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Hero Image */}
                        <div className="relative hidden lg:block">
                            <div className="relative w-full aspect-square">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 via-transparent to-pink-400 opacity-30 animate-pulse"></div>
                                <div className="absolute inset-4 rounded-3xl overflow-hidden border-4 border-pink-400/30 shadow-2xl">
                                    <img src="/clinic (6).jpg" alt="Pediatric Dentistry" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                            <p className="text-white font-bold text-lg">{isRtl ? 'البيت السني لطفلك' : 'Your Childs Dental Home'}</p>
                                            <p className="text-white/70 text-sm">{isRtl ? 'حيث الابتسامات تزدهر' : 'Where smiles thrive'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-4 shadow-xl animate-float">
                                    <Baby className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                    <Gift className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                                <div className="text-2xl md:text-4xl font-bold text-pink-400 mb-1">{stat.number}</div>
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
                                    <BookOpen className="w-5 h-5 text-pink-500" />
                                    {isRtl ? 'المحتويات' : 'Contents'}
                                </h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <a key={item.id} href={`#${item.id}`}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}>
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-6 text-center">
                                <Baby className="w-10 h-10 text-white mx-auto mb-4" />
                                <p className="text-white font-medium mb-4">{isRtl ? 'زيارة سعيدة لطفلك' : 'Happy Visit for Your Kid'}</p>
                                <Link to="/#booking" className="block w-full py-3 bg-white text-pink-600 font-bold rounded-xl hover:bg-gray-100 transition-all">
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
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Home className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-pink-500 text-sm font-semibold uppercase">{isRtl ? 'مقدمة' : 'Introduction'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'البيت السني الذي يستحقه طفلك' : 'The Dental Home Your Child Deserves'}</h2>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {isRtl
                                    ? 'كوالد، تفعل كل شيء لحماية صحة طفلك. لكن هل صحة أسنانه تحظى بنفس الاهتمام؟ في نيوليفا، نؤمن أن زيارة طبيب الأسنان يجب أن تكون شيئاً يتطلع إليه الأطفال، لا يخافونه.'
                                    : 'As a parent, you do everything to protect your childs health. But is their oral health getting the same attention? At Neoliva, we believe a dentist visit should be something children look forward to, not fear.'}
                            </p>
                            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
                                <p className="text-pink-800 text-lg font-medium text-center">
                                    {isRtl ? 'نحن لا نصلح الأسنان فحسب، بل نشكّل المواقف. تجربة إيجابية في الطفولة تضع الأساس لعادات صحية مدى الحياة.' : 'We\'re not just fixing teeth; we\'re shaping attitudes. A positive childhood experience sets the stage for lifelong healthy habits.'}
                                </p>
                            </div>
                        </section>

                        {/* Section 2 - Specialty */}
                        <section id="specialty" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-[#1A2E35] to-[#2A4A55] rounded-[3rem] p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                        <Star className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-pink-400 text-sm font-semibold uppercase">{isRtl ? 'التخصص' : 'Specialty'}</span>
                                        <h2 className="text-3xl font-bold text-white">{isRtl ? 'لماذا طب أسنان الأطفال تخصص؟' : 'Why is Pediatric Dentistry Specialized?'}</h2>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg mb-8">
                                    {isRtl
                                        ? 'الأطفال ليسوا "بالغين مصغرين". أجسامهم تنمو، فكوكهم تتطور، واحتياجاتهم النفسية مختلفة تماماً. نحن نركز على إدارة السلوك، مراقبة النمو والتطور، والوقاية قبل حدوث المشاكل.'
                                        : 'Children are not miniature adults. Their bodies are growing, jaws developing, and psychological needs entirely different. We focus on behavior management, monitoring growth and development, and prevention before problems occur.'}
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { icon: '🧠', title: isRtl ? 'إدارة السلوك' : 'Behavior Management', desc: isRtl ? 'نعرف كيف نتحدث مع كل عمر' : 'We know how to talk to every age' },
                                        { icon: '📈', title: isRtl ? 'النمو والتطور' : 'Growth & Development', desc: isRtl ? 'نراقب الفك وظهور الأسنان' : 'We monitor jaw and teeth eruption' },
                                        { icon: '🛡️', title: isRtl ? 'الوقاية أولاً' : 'Prevention First', desc: isRtl ? 'نوقف التسوس قبل أن يبدأ' : 'We stop cavities before they start' },
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

                        {/* Section 3 - First Visit */}
                        <section id="first-visit" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Baby className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-blue-500 text-sm font-semibold uppercase">{isRtl ? 'الزيارة الأولى' : 'First Visit'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'قاعدة "الزيارة الأولى عند السنة الأولى"' : 'The "First Visit by First Birthday" Rule'}</h2>
                                </div>
                            </div>
                            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 mb-8">
                                <p className="text-blue-800 text-xl font-bold text-center mb-4">
                                    {isRtl ? '🎂 بحلول عيد الميلاد الأول أو خلال 6 أشهر من ظهور أول سن' : '🎂 By first birthday or within 6 months of first tooth'}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: '🎪', title: isRtl ? 'التأقلم' : 'Acclimatization', desc: isRtl ? 'يتعود الطفل على العيادة قبل أن يطور خوفاً' : 'Child gets used to clinic before developing fear' },
                                    { icon: '👨‍👩‍👧', title: isRtl ? 'تعليم الوالدين' : 'Parent Education', desc: isRtl ? 'نعلمك تنظيف فم طفلك وتقييم احتياجات الفلورايد' : 'We teach you to clean babys mouth and assess fluoride needs' },
                                    { icon: '🔍', title: isRtl ? 'الكشف المبكر' : 'Early Detection', desc: isRtl ? 'اكتشاف "تسوس الرضاعة" قبل أن يدمر الأسنان' : 'Catch "Baby Bottle Decay" before it destroys teeth' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                                        <span className="text-4xl mb-4 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4 - Baby Teeth Matter */}
                        <section id="baby-teeth" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'أهمية' : 'Importance'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'لماذا الأسنان اللبنية مهمة؟' : 'Why Baby Teeth Matter'}</h2>
                                </div>
                            </div>
                            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 mb-8">
                                <p className="text-amber-800 font-bold text-center">❌ {isRtl ? 'خرافة: "هي مجرد أسنان لبنية ستسقط"' : 'Myth: "Theyre just baby teeth, theyll fall out anyway"'}</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: '📐', title: isRtl ? 'حافظات المسافة' : 'Space Holders', desc: isRtl ? 'تحفظ المكان للأسنان الدائمة تحتها' : 'They hold space for permanent teeth underneath' },
                                    { icon: '🍎', title: isRtl ? 'التغذية' : 'Nutrition', desc: isRtl ? 'أسنان قوية لمضغ الفواكه واللحوم والخضروات' : 'Strong teeth needed to chew fruits, meat, vegetables' },
                                    { icon: '🗣️', title: isRtl ? 'تطور النطق' : 'Speech Development', desc: isRtl ? 'اللسان يحتاج الأسنان لنطق حروف مثل ث، ف، س' : 'Tongue needs teeth to form sounds like th, f, s' },
                                    { icon: '😊', title: isRtl ? 'الثقة بالنفس' : 'Self-Esteem', desc: isRtl ? 'حتى الأطفال الصغار يشعرون بالحرج من أسنان سوداء' : 'Even young kids feel embarrassed by blackened teeth' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                                        <span className="text-3xl mb-3 block">{item.icon}</span>
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 5 - Services */}
                        <section id="services" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Stethoscope className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-emerald-500 text-sm font-semibold uppercase">{isRtl ? 'الخدمات' : 'Services'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'خدماتنا الأساسية للأطفال' : 'Our Core Pediatric Services'}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {services.map((item, i) => (
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

                        {/* Section 6 - Fun Experience */}
                        <section id="experience" className="scroll-mt-24">
                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-[3rem] p-8 md:p-12 text-white">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <Gift className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-white/80 text-sm font-semibold uppercase">{isRtl ? 'التجربة' : 'Experience'}</span>
                                        <h2 className="text-3xl font-bold">{isRtl ? 'نجعل طب الأسنان ممتعاً!' : 'Making Dentistry Fun!'}</h2>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    {[
                                        { icon: '💬', title: isRtl ? 'اخبر' : 'Tell', desc: isRtl ? 'نشرح بكلمات بسيطة ما سنفعله' : 'We explain in simple words what we will do' },
                                        { icon: '👆', title: isRtl ? 'اعرض' : 'Show', desc: isRtl ? 'نري الطفل الأداة على إصبعه أو نموذج' : 'We show child the tool on their finger or model' },
                                        { icon: '✅', title: isRtl ? 'افعل' : 'Do', desc: isRtl ? 'عندما يكون مرتاحاً، نبدأ الإجراء' : 'Once comfortable, we perform the procedure' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                                            <span className="text-4xl mb-3 block">{item.icon}</span>
                                            <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-white/80 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { icon: '📺', text: isRtl ? 'شاشات على السقف لمشاهدة الكرتون' : 'Ceiling screens for cartoon watching' },
                                        { icon: '💊', text: isRtl ? 'جل مخدر قبل أي إبرة' : 'Numbing gel before any injection' },
                                        { icon: '🎁', text: isRtl ? 'جائزة من صندوق الكنز كل زيارة' : 'Prize from treasure chest every visit' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                                            <span className="text-2xl">{item.icon}</span>
                                            <p className="text-white/90 mt-2 text-sm">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 7 - Home Care */}
                        <section id="home-care" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-cyan-500 text-sm font-semibold uppercase">{isRtl ? 'العناية المنزلية' : 'Home Care'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'دليل الوالدين للعناية المنزلية' : 'Parents Guide to Home Care'}</h2>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {homeCareGuide.map((group, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-4xl">{group.icon}</span>
                                            <h4 className="font-bold text-[#1A2E35] text-xl">{group.age}</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {group.tips.map((tip, j) => (
                                                <li key={j} className="flex items-start gap-2 text-gray-600">
                                                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8 - Breaking Habits */}
                        <section id="habits" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <AlertTriangle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-amber-500 text-sm font-semibold uppercase">{isRtl ? 'العادات' : 'Habits'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'كسر العادات السيئة' : 'Breaking Bad Habits'}</h2>
                                </div>
                            </div>
                            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                                <p className="text-amber-800 mb-6">{isRtl ? 'إذا استمر مص الإبهام أو اللهاية بعد سن 3-4، قد يسبب:' : 'If thumb sucking or pacifier continues past age 3-4, it can cause:'}</p>
                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    {[
                                        { problem: isRtl ? 'عضة مفتوحة' : 'Open Bite', desc: isRtl ? 'الأسنان الأمامية لا تلتقي' : 'Front teeth dont touch' },
                                        { problem: isRtl ? 'بروز الأسنان' : 'Protrusion', desc: isRtl ? 'الأسنان العلوية للأمام' : 'Top teeth pushed forward' },
                                        { problem: isRtl ? 'سقف ضيق' : 'Narrow Palate', desc: isRtl ? 'سقف الفم عميق وضيق' : 'Roof of mouth deep and narrow' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white rounded-xl p-4 text-center">
                                            <p className="font-bold text-amber-700">{item.problem}</p>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-amber-800 font-medium">{isRtl ? '💡 نقدم الإرشاد وأجهزة العادة إذا لزم الأمر' : '💡 We offer counseling and habit appliances if necessary'}</p>
                            </div>
                        </section>

                        {/* Section 9 - Emergencies */}
                        <section id="emergencies" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-red-500 text-sm font-semibold uppercase">{isRtl ? 'الطوارئ' : 'Emergencies'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'ماذا تفعل عند الطوارئ؟' : 'What To Do In Emergencies'}</h2>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {emergencies.map((item, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-500">
                                        <h4 className="font-bold text-[#1A2E35] text-lg mb-4">{item.title}</h4>
                                        <ul className="space-y-2">
                                            {item.steps.map((step, j) => (
                                                <li key={j} className="flex items-start gap-2 text-gray-600">
                                                    <span className="font-bold text-red-500">{j + 1}.</span>
                                                    {step}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <HelpCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <span className="text-pink-500 text-sm font-semibold uppercase">{isRtl ? 'أسئلة شائعة' : 'FAQ'}</span>
                                    <h2 className="text-3xl font-bold text-[#1A2E35]">{isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                        <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className={`w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                                            <span className="font-bold text-[#1A2E35]">{faq.q}</span>
                                            {expandedFaq === i ? <ChevronUp className="w-6 h-6 text-pink-500" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
                                        </button>
                                        {expandedFaq === i && <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">{faq.a}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-[3rem] p-8 md:p-16 text-center">
                            <Baby className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{isRtl ? 'ابدأ رحلتهم بشكل صحيح' : 'Start Their Journey Right'}</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{isRtl ? 'ابتسامة طفلك اليوم هي الأساس لابتسامته مدى الحياة. امنحه هدية البداية الصحية.' : 'Your childs smile today is the foundation for their lifetime smile. Give them the gift of a healthy start.'}</p>
                            <Link to="/#booking" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-pink-600 text-xl font-bold rounded-full hover:shadow-2xl transition-all hover:-translate-y-1">
                                {isRtl ? 'احجز زيارة سعيدة' : 'Book Happy Visit'}
                                <ArrowRight className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`} />
                            </Link>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default PediatricDentistryPage;
