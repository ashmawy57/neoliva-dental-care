import { useTranslation } from 'react-i18next';
import { Shield, Users, Zap } from 'lucide-react';

const Features = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const features = [
        {
            icon: Shield,
            titleKey: 'features.sterilization.title',
            descKey: 'features.sterilization.description',
            gradient: 'from-blue-500 to-cyan-500',
            bgGradient: 'from-blue-50 to-cyan-50'
        },
        {
            icon: Users,
            titleKey: 'features.doctors.title',
            descKey: 'features.doctors.description',
            gradient: 'from-teal-500 to-emerald-500',
            bgGradient: 'from-teal-50 to-emerald-50'
        },
        {
            icon: Zap,
            titleKey: 'features.technology.title',
            descKey: 'features.technology.description',
            gradient: 'from-primary-500 to-dental-teal',
            bgGradient: 'from-primary-50 to-dental-mint/20'
        }
    ];

    return (
        <section className="py-10 sm:py-12 lg:py-20 bg-dental-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                        <span className="bg-gradient-to-r from-primary-600 to-dental-teal bg-clip-text text-transparent">
                            {t('features.title')}
                        </span>
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className={`relative h-full bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                                    {/* Icon Container */}
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-2xl font-bold mb-4 text-gray-800 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                                        {t(feature.titleKey)}
                                    </h3>
                                    <p className={`text-gray-600 leading-relaxed ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                                        {t(feature.descKey)}
                                    </p>

                                    {/* Decorative element */}
                                    <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-2xl`}></div>
                                </div>

                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300 -z-10`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
