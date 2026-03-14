
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';

const ServiceMarquee = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const services = [
        "Dental Implants",
        "Hollywood Smile",
        "Orthodontics",
        "Teeth Whitening",
        "Veneers",
        "Root Canal",
        "Gum Treatment",
        "Pediatric Dentistry",
        "Crowns & Bridges",
        "Dental Surgery"
    ];

    const servicesAr = [
        "زراعة الأسنان",
        "هوليود سمايل",
        "تقويم الأسنان",
        "تبييض الأسنان",
        "الفينير",
        "علاج الجذور",
        "علاج اللثة",
        "طب أسنان الأطفال",
        "التيجان والجسور",
        "جراحة الأسنان"
    ];

    const content = isRTL ? servicesAr : services;

    return (
        <section className="py-16 bg-[#1A2E35] border-y border-[#D2A23F]/10 overflow-hidden relative z-20 group">

            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#D2A23F]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#D2A23F]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

            {/* Gradient Mask for Smooth Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1A2E35] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1A2E35] to-transparent z-10"></div>

            <div className="flex whitespace-nowrap animate-marquee w-fit group-hover:[animation-play-state:paused]">
                {/* Render Multiple Sets for Infinite Loop */}
                {[...Array(4)].map((_, setIdx) => (
                    <div key={`set-${setIdx}`} className="flex items-center gap-16 px-8">
                        {content.map((item, idx) => (
                            <div key={`item-${setIdx}-${idx}`} className="flex items-center gap-16">
                                <span
                                    className={`relative text-5xl md:text-7xl font-bold transition-all duration-300 cursor-default select-none
                                    ${isRTL ? 'font-cairo' : 'font-playfair'}
                                    text-transparent bg-clip-text [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]
                                    hover:text-[#D2A23F] hover:[-webkit-text-stroke:0px] hover:drop-shadow-[0_0_25px_rgba(210,162,63,0.5)]`}
                                >
                                    {item}
                                </span>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#D2A23F] blur-md opacity-50"></div>
                                    <Sparkles className="relative z-10 w-6 h-6 text-[#D2A23F] animate-spin-slow" />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceMarquee;
