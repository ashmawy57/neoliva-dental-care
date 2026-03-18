import { useTranslation } from 'react-i18next';
import { CheckCircle, Phone, Star, ShieldCheck, Sparkles, Heart, Lightbulb, Award, Linkedin, Facebook, Instagram } from 'lucide-react';

const About = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const features = [
        {
            key: 'precision',
            icon: '✓',
            text: isRTL ? 'رعاية دقيقة' : 'Precision Care'
        },
        {
            key: 'quality',
            icon: '✓',
            text: isRTL ? 'دعم عالي الجودة' : 'Quality Support'
        },
        {
            key: 'painFree',
            icon: '✓',
            text: isRTL ? 'علاجات خالية من الألم' : 'Pain-Free Treatments'
        },
        {
            key: 'expertise',
            icon: '✓',
            text: isRTL ? 'طبيب أسنان خبير' : 'Expertise Dentist'
        },
        {
            key: 'sterile',
            icon: '✓',
            text: isRTL ? 'أدوات أسنان معقمة' : 'Sterile Dental Tools'
        },
        {
            key: 'personalized',
            icon: '✓',
            text: isRTL ? 'خدمات شخصية' : 'Personalized Services'
        }
    ];

    return (
        <>
            <section id="about" className="py-10 sm:py-12 lg:py-20 bg-dental-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Images Section with Background Decor */}
                        <div className={`relative ${isRTL ? 'md:order-2' : ''} reveal reveal-left`}>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#D2A23F]/10 rounded-full blur-[100px] -z-10 animate-blob hidden sm:block"></div>
                            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                                {/* Top Left - Small Image */}
                                <div className="relative pt-8">
                                    <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 shadow-xl">
                                        <img
                                            src="/aboutus (1).jpg"
                                            alt="Dental Office"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Rating Card - Animated - Hidden on mobile to prevent overflow */}
                                    <div className="absolute top-20 left-[95%] sm:left-[105%] z-20 bg-white rounded-xl shadow-2xl p-4 w-52 animate-bounce-slow hidden md:block">
                                        <div className="flex items-center justify-center gap-1 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-[#D2A23F]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className={`text-center font-bold text-gray-900 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                            {isRTL ? 'أكثر من 20 سنة خبرة' : 'Over 20 years experience'}
                                        </p>
                                        <p className={`text-center text-xs text-gray-500 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                            {isRTL ? 'نقدم خدمات طب الأسنان' : 'We serve our dental services'}
                                        </p>
                                    </div>
                                </div>

                                {/* Top Right - Empty Space */}
                                <div></div>

                                {/* Bottom Left - Stats Card - Animated */}
                                <div className="flex items-end justify-center sm:justify-end relative z-10 sm:-mr-12 mb-4 sm:mb-12">
                                    <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-40 sm:w-48 animate-float">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#D2A23F]/10 flex items-center justify-center">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#D2A23F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className={`text-2xl sm:text-3xl font-bold text-gray-900 ${isRTL ? 'font-cairo' : 'font-serif'}`}>
                                            + 1,350
                                        </p>
                                        <p className={`text-xs sm:text-sm text-gray-600 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                            {isRTL ? 'إجمالي أدوات طب الأسنان' : 'Total Dental Tools'}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Right - Large Image */}
                                <div className="bg-gray-200 rounded-2xl overflow-hidden h-80 shadow-xl -mt-8">
                                    <img
                                        src="/aboutus (2).jpg"
                                        alt="Dr. Ahmed Hassan"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className={`space-y-6 ${isRTL ? 'md:order-1 text-center md:text-right' : 'text-center md:text-left'} reveal reveal-right overflow-hidden`}>
                            {/* Section Label */}
                            <p className={`text-[#D2A23F] uppercase tracking-wider text-sm font-semibold ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                {isRTL ? 'من نحن' : 'About Us'}
                            </p>

                            {/* Main Heading */}
                            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight ${isRTL ? 'font-cairo' : 'font-serif'}`}>
                                {isRTL ? (
                                    <>
                                        رعاية <span className="text-[#D2A23F] gold-glow">متقدمة</span><br />
                                        ابتسامات جملية
                                    </>
                                ) : (
                                    <>
                                        Advance <span className="text-[#D2A23F] gold-glow">Care</span><br />
                                        Beautiful Smiles
                                    </>
                                )}
                            </h2>

                            {/* Description */}
                            <p className={`text-gray-600 leading-relaxed mx-auto md:mx-0 max-w-full ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                {isRTL
                                    ? 'نحن ملتزمون بتقديم رعاية أسنان من الدرجة الأولى في بيئة مريحة ومرحبة. يستخدم فريقنا أحدث التقنيات لضمان تجربة خالية من التوتر.'
                                    : "We're dedicated to providing top-notch dental care in a comfortable and welcoming environment. Our team uses the latest technology to ensure stress-free."}
                            </p>

                            {/* Features Grid */}
                            <div className={`grid grid-cols-2 gap-3 sm:gap-4 pt-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#D2A23F]/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-[#D2A23F]" />
                                        </div>
                                        <span className={`text-gray-700 text-sm sm:text-base ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Section */}
                            <div className={`flex flex-col sm:flex-row items-center gap-4 pt-6 justify-center ${isRTL ? 'md:justify-start' : 'md:justify-start'}`}>
                                <a
                                    href="#about"
                                    className={`px-6 py-3 bg-[#D2A23F] text-white rounded-full font-bold hover:bg-[#B28935] transition-all duration-300 shadow-lg shadow-[#D2A23F]/25 shimmer-btn ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                >
                                    {isRTL ? 'المزيد عنا' : 'More About Us'}
                                </a>

                                {/* Doctor Info */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                        <img
                                            src="/doctor.png"
                                            alt="Dr. Roufaida Attia"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className={isRTL ? 'text-right' : 'text-left'}>
                                        <p className={`font-bold text-gray-900 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                            {isRTL ? 'د. رفيدة عطية' : 'Dr. Roufaida Attia'}
                                        </p>
                                        <p className={`text-sm text-gray-600 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                            {isRTL ? 'مؤسس نيوليفا' : 'Founder Neoliva'}
                                        </p>
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-[#D2A23F] flex items-center justify-center hover:bg-[#B28935] transition-all shadow-md float-icon">
                                        <Phone className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Clinic Video Section */}
            {/* Premium Clinic Tour Section */}
            <section className="py-12 lg:py-24 bg-[#FAF9F6] relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2A23F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A2E35]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className={`space-y-8 ${isRTL ? 'lg:order-2 text-center lg:text-right' : 'text-center lg:text-left'} reveal reveal-left`}>
                            <div>
                                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#D2A23F]/10 rounded-full text-[#D2A23F] font-semibold text-sm mb-6 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                    <Sparkles className="w-4 h-4" />
                                    {t('footer.aboutVideo.subtitle')}
                                </div>
                                <h2 className={`text-3xl lg:text-5xl xl:text-6xl font-bold text-[#1A2E35] leading-tight mb-6 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                                    {isRTL ? 'تجربة طبية' : 'Experience Our'} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2A23F] to-[#B28935]">
                                        {isRTL ? 'استثنائية' : 'World-Class Facility'}
                                    </span>
                                </h2>
                                <p className={`text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                    {isRTL
                                        ? 'اكتشف المعايير الجديدة في طب الأسنان. عيادتنا مجهزة بأحدث التقنيات العالمية لضمان راحتك وسلامتك في كل خطوة.'
                                        : 'Discover a new standard in dental care. Our clinic is equipped with state-of-the-art global technology to ensure your comfort and safety at every step.'}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                {[
                                    { icon: ShieldCheck, text: isRTL ? 'تعقيم عالي المستوى' : 'High-Level Sterilization' },
                                    { icon: Star, text: isRTL ? 'فخامة وراحة' : 'Luxury & Comfort' },
                                    { icon: CheckCircle, text: isRTL ? 'أحدث التقنيات' : 'Modern Technology' },
                                    { icon: Phone, text: isRTL ? 'دعم 24/7' : '24/7 Support' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#D2A23F]/10 flex items-center justify-center text-[#D2A23F] flex-shrink-0">
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <span className={`font-semibold text-gray-800 text-sm sm:text-base ${isRTL ? 'text-right' : ''}`}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Phone Mockup Section */}
                        <div className={`relative ${isRTL ? 'lg:order-1' : ''} reveal reveal-right`}>
                            <div className="relative mx-auto w-full max-w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/20 animate-float z-10">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-2xl z-20"></div>

                                {/* Video */}
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                    poster="/neoliva-logo.png"
                                >
                                    <source src="/neolivaclinic.mp4" type="video/mp4" />
                                </video>

                                {/* Screen Glare */}
                                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Floating Cards - Decor */}
                            {/* Card 1: Rating */}
                            <div className="absolute top-20 -right-4 lg:-right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow z-20 hidden sm:block">
                                <div className="flex gap-1 text-[#D2A23F] mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                                <p className={`text-xs font-bold text-gray-800 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                    {isRTL ? '5 نجوم تقييم' : '5 Star Rating'}
                                </p>
                            </div>

                            {/* Card 2: Environment */}
                            <div className="absolute bottom-32 -left-4 lg:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-delayed z-20 hidden sm:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className={`text-xs font-bold text-gray-800 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                            {isRTL ? 'بيئة معقمة' : 'Sterile Env'}
                                        </p>
                                        <p className="text-[10px] text-gray-500">100% Safe</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decor Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#D2A23F]/20 rounded-full -z-10 animate-spin-slow-reverse"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-[#1A2E35]/10 rounded-full -z-10 animate-spin-slow"></div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    );
};

export default About;
