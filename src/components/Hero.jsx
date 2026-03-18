import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, useCallback } from 'react';

const Counter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * ease));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return (
        <span>{count}{suffix}</span>
    );
};

const Typewriter = ({ text, highlightText, delay = 100 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    const renderText = () => {
        if (!highlightText) return currentText;

        const parts = text.split(highlightText);
        if (parts.length !== 2) return currentText;

        const firstPart = parts[0];

        if (currentText.length <= firstPart.length) {
            return <span>{currentText}</span>;
        } else {
            return (
                <>
                    <span>{firstPart}</span>
                    <span className="text-[#D2A23F]">{currentText.slice(firstPart.length)}</span>
                </>
            );
        }
    };

    return (
        <span className="relative">
            {renderText()}
            <span className="inline-block w-[3px] h-[0.8em] bg-[#D2A23F] ml-1 animate-pulse align-middle"></span>
        </span>
    );
};



const Hero = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <section id="home" className="relative flex items-center justify-center bg-[#FAF9F6] pt-[140px] sm:pt-[160px] md:pt-36 lg:pt-24 pb-4 overflow-hidden">
            {/* Premium Animated Background Elements */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#D2A23F]/10 rounded-full blur-[120px] animate-blob pointer-events-none -z-10"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-[#D2A23F]/15 rounded-full blur-[140px] animate-blob delay-700 pointer-events-none -z-10"></div>
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#D2A23F]/5 rounded-full blur-[100px] animate-blob delay-1000 pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-2 lg:gap-20 items-center">
                    {/* Text Content - adjusted to be visible on mobile while staying high on desktop */}
                    <div className={`space-y-6 md:space-y-8 px-2 sm:px-0 ${isRTL ? 'lg:order-2 text-center lg:text-right' : 'text-center lg:text-left'} animate-fade-in md:-mt-8 lg:-mt-24 xl:-mt-32 relative z-20 overflow-hidden`}>
                        {/* Welcome Text in Capsule */}
                        <div className={`flex justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-start'} animate-fade-in`}>
                            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-[#D2A23F]/20 shadow-sm">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2A23F] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D2A23F]"></span>
                                </span>
                                <p className={`text-[#D2A23F] uppercase tracking-[0.15em] text-[10px] sm:text-xs font-bold ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                    {isRTL ? 'مرحباً بك في نيوليفا لطب الأسنان' : 'WELCOME TO NEOLIVA DENTAL CARE'}
                                </p>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4 animate-fade-up delay-200">
                            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.1] text-gray-900 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                                {isRTL ? (
                                    <Typewriter key="ar" text="ابتسم بثقة" highlightText="بثقة" delay={150} />
                                ) : (
                                    <Typewriter key="en" text="Smile with Confidence" highlightText="Confidence" delay={100} />
                                )}
                            </h1>

                            {/* Description */}
                            <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-full sm:max-w-xl mx-auto px-1 sm:px-0 ${isRTL ? 'lg:mr-0 font-tajawal' : 'lg:ml-0 font-inter'}`}>
                                {isRTL
                                    ? 'استمتع برعاية أسنان عالمية المستوى مع فريقنا من الخبراء في قلب الدقي.'
                                    : 'Experience world-class dental care with our team of experts in the heart of Dokki.'}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 mt-8 w-[95%] sm:w-auto max-w-[320px] sm:max-w-none mx-auto lg:mx-0 justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-start'} animate-fade-up delay-400`}>
                            <a
                                href="#booking"
                                className={`w-full sm:w-auto px-8 py-4 bg-[#D2A23F] text-white rounded-full font-bold shadow-xl shadow-[#D2A23F]/20 hover:bg-[#B28935] hover:translate-y-[-2px] hover:shadow-[#D2A23F]/30 transition-all duration-300 text-center uppercase tracking-wider text-sm ${isRTL ? 'font-cairo' : 'font-inter'}`}
                            >
                                {isRTL ? 'احجز موعد' : 'Book Appointment'}
                            </a>
                            <a
                                href="#services"
                                className={`w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm border-2 border-[#D2A23F] text-[#D2A23F] rounded-full font-bold hover:bg-[#D2A23F] hover:text-white hover:translate-y-[-2px] transition-all duration-300 text-center uppercase tracking-wider text-sm ${isRTL ? 'font-cairo' : 'font-inter'}`}
                            >
                                {isRTL ? 'خدماتنا' : 'Our Services'}
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className={`relative ${isRTL ? 'lg:order-1' : ''} flex justify-center items-end mt-12 sm:mt-16 lg:mt-0`}>
                        <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none lg:w-full">
                            {/* Doctor Image Container with Floating Effect */}
                            <div className="relative z-10 flex flex-col items-center animate-fade-in delay-500 hover:scale-[1.02] transition-all duration-700">
                                <img
                                    src="/hero.svg"
                                    alt={isRTL ? 'دكتورة نيوليفا' : 'Neoliva Doctor'}
                                    fetchpriority="high"
                                    loading="eager"
                                    decoding="sync"
                                    className="w-full h-auto object-contain scale-75 lg:scale-90 xl:scale-95 origin-bottom animate-float-gentle"
                                />
                                {/* Bottom Shadow/Gradient overlay - making it taller and more opaque at the very bottom */}
                                <div className="absolute inset-x-0 -bottom-1 h-56 bg-gradient-to-t from-[#FAF9F6] from-15% via-[#FAF9F6] via-35% via-[#FAF9F6]/50 to-transparent z-20"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section with spacing adjustment */}
                <div className="relative z-30 mt-16 lg:mt-24">
                    <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl shadow-gray-200/50 p-6 md:p-10 border border-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:divide-x md:divide-gray-100 rtl:md:divide-x-reverse">
                            {/* Years Experience */}
                            <div className="space-y-1">
                                <h3 className={`text-4xl lg:text-5xl font-black text-[#D2A23F] ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                                    <Counter end={15} suffix="+" />
                                </h3>
                                <p className={`text-gray-500 font-semibold uppercase tracking-wider text-xs sm:text-sm ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                    {isRTL ? 'سنوات خبرة' : 'Years Experience'}
                                </p>
                            </div>

                            {/* Happy Patients */}
                            <div className="space-y-1 pt-6 md:pt-0">
                                <h3 className={`text-4xl lg:text-5xl font-black text-[#D2A23F] ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                                    <Counter end={12} suffix="k+" />
                                </h3>
                                <p className={`text-gray-500 font-semibold uppercase tracking-wider text-xs sm:text-sm ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                    {isRTL ? 'مرضى سعداء' : 'Happy Patients'}
                                </p>
                            </div>

                            {/* Expert Doctors */}
                            <div className="space-y-1 pt-6 md:pt-0">
                                <h3 className={`text-4xl lg:text-5xl font-black text-[#D2A23F] ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                                    <Counter end={50} suffix="+" />
                                </h3>
                                <p className={`text-gray-500 font-semibold uppercase tracking-wider text-xs sm:text-sm ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                    {isRTL ? 'أطباء خبراء' : 'Expert Doctors'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
