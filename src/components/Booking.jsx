import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Calendar, User, Phone, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';

const Booking = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [submitStatus, setSubmitStatus] = useState(null);

    const services = [
        { value: 'cosmetic', label: isRTL ? 'تجميل الأسنان' : 'Cosmetic Dentistry' },
        { value: 'implants', label: isRTL ? 'زراعة الأسنان' : 'Dental Implants' },
        { value: 'orthodontics', label: isRTL ? 'تقويم الأسنان' : 'Orthodontics' },
        { value: 'endodontics', label: isRTL ? 'علاج الجذور' : 'Root Canal Treatment' },
        { value: 'pediatric', label: isRTL ? 'طب أسنان الأطفال' : 'Pediatric Dentistry' },
        { value: 'cleaning', label: isRTL ? 'تنظيف وتبييض' : 'Cleaning & Whitening' }
    ];

    const onSubmit = (data) => {
        console.log('Booking Data:', data);
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <section id="booking" className="py-12 lg:py-24 bg-dental-cream relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D2A23F]/5 to-transparent pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1A2E35]/5 rounded-full blur-[100px] animate-blob"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header with Typewriter */}
                <div className="text-center mb-16 reveal reveal-up overflow-hidden">
                    <div className="inline-block mb-4">
                        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A2E35] to-[#D2A23F] typewriter-text max-w-full ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                            {t('booking.title')}
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-[#D2A23F] mx-auto rounded-full mb-6"></div>
                    <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
                        {t('booking.subtitle')}
                    </p>
                </div>

                {/* Premium Booking Form */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#D2A23F] to-[#1A2E35] rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 md:p-12 border border-white/50 reveal reveal-scale delay-200">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold text-gray-700 ml-1 ${isRTL ? 'font-cairo' : 'font-inter'}`}>{isRTL ? 'الاسم الكامل' : 'Full Name'}</label>
                                    <div className="relative">
                                        <User className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                                        <input
                                            type="text"
                                            {...register('name', { required: true })}
                                            className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#D2A23F]/50 focus:bg-white transition-all duration-300 font-medium ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                            placeholder={t('booking.namePlaceholder')}
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3 h-3" /> {t('booking.error')}
                                        </p>
                                    )}
                                </div>

                                {/* Phone Field */}
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold text-gray-700 ml-1 ${isRTL ? 'font-cairo' : 'font-inter'}`}>{isRTL ? 'رقم الهاتف' : 'Phone Number'}</label>
                                    <div className="relative">
                                        <Phone className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                                        <input
                                            type="tel"
                                            {...register('phone', { required: true })}
                                            className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#D2A23F]/50 focus:bg-white transition-all duration-300 font-medium ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                            placeholder={t('booking.phonePlaceholder')}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3 h-3" /> {t('booking.error')}
                                        </p>
                                    )}
                                </div>

                                {/* Service Field */}
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold text-gray-700 ml-1 ${isRTL ? 'font-cairo' : 'font-inter'}`}>{isRTL ? 'نوع الخدمة' : 'Service Type'}</label>
                                    <div className="relative">
                                        <Briefcase className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                                        <select
                                            {...register('service', { required: true })}
                                            className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#D2A23F]/50 focus:bg-white transition-all duration-300 font-medium appearance-none cursor-pointer ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                        >
                                            <option value="">{t('booking.servicePlaceholder')}</option>
                                            {services.map((service) => (
                                                <option key={service.value} value={service.value}>
                                                    {service.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.service && (
                                        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3 h-3" /> {t('booking.error')}
                                        </p>
                                    )}
                                </div>

                                {/* Date Field */}
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold text-gray-700 ml-1 ${isRTL ? 'font-cairo' : 'font-inter'}`}>{isRTL ? 'التاريخ المفضل' : 'Preferred Date'}</label>
                                    <div className="relative">
                                        <Calendar className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-4 z-10' : 'left-4 z-10'}`} />
                                        <input
                                            type="date"
                                            {...register('date', { required: true })}
                                            className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#D2A23F]/50 focus:bg-white transition-all duration-300 font-medium text-gray-600 ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                        />
                                    </div>
                                    {errors.date && (
                                        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3 h-3" /> {t('booking.error')}
                                        </p>
                                    )}
                                </div>

                                {/* Time Field */}
                                <div className="space-y-2">
                                    <label className={`text-sm font-semibold text-gray-700 ml-1 ${isRTL ? 'font-cairo' : 'font-inter'}`}>{isRTL ? 'التوقيت المفضل' : 'Preferred Time'}</label>
                                    <div className="relative">
                                        <CheckCircle className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                                        <select
                                            {...register('time', { required: true })}
                                            className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#D2A23F]/50 focus:bg-white transition-all duration-300 font-medium appearance-none cursor-pointer ${isRTL ? 'font-cairo' : 'font-inter'}`}
                                        >
                                            <option value="">{t('booking.timePlaceholder')}</option>
                                            <option value="09:00">09:00 AM</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="12:00">12:00 PM</option>
                                            <option value="13:00">01:00 PM</option>
                                            <option value="14:00">02:00 PM</option>
                                            <option value="15:00">03:00 PM</option>
                                            <option value="16:00">04:00 PM</option>
                                        </select>
                                    </div>
                                    {errors.time && (
                                        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3 h-3" /> {t('booking.error')}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 text-center">
                                <button
                                    type="submit"
                                    className={`relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-[#D2A23F] rounded-full group hover:bg-[#B28935] shadow-lg shadow-[#D2A23F]/30 hover:shadow-[#D2A23F]/50 hover:-translate-y-1 shimmer-btn w-full md:w-auto ${isRTL ? 'font-cairo' : 'font-poppins'}`}
                                >
                                    <span className="relative z-10 tracking-wider text-lg">
                                        {t('booking.submit')}
                                    </span>
                                </button>
                            </div>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className={`flex items-center justify-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 animate-fade-up ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    <span className="font-semibold">{t('booking.success')}</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
