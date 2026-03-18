import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';

const VideoSection = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <section className="py-12 lg:py-20 bg-dental-cream relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-[#D2A23F]/5 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#1A2E35]/5 rounded-full blur-[100px] animate-blob delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-12 reveal reveal-up w-full">
                    <p className={`text-[#D2A23F] uppercase tracking-wider text-sm font-semibold mb-3 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                        {isRTL ? 'شاهدنا في العمل' : 'Watch Us In Action'}
                    </p>
                    <h2 className={`text-3xl md:text-5xl font-bold text-[#1A2E35] mb-6 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                        {isRTL ? 'حدث نيوليفا' : 'Neoliva Event'}
                    </h2>
                    <div className="w-24 h-1 bg-[#D2A23F] mx-auto rounded-full"></div>
                </div>

                {/* Video Container - Vertical Layout */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-black w-full max-w-[320px] md:max-w-[350px] aspect-[9/16] reveal reveal-scale delay-200 group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>

                    {/* Centered Logo Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <img
                            src="/logofoter.svg"
                            alt="Neoliva"
                            className="w-40 md:w-48 h-auto opacity-70 drop-shadow-lg"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <video
                        className="w-full h-full object-cover"
                        controls
                        preload="none"
                        poster="/neoliva-logo.png" // Fallback poster 
                    >
                        <source src="/neolivaevent.mp4" type="video/mp4" />
                        {isRTL ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
