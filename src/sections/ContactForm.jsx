import React from "react";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next"; // 1. Importar

export default function ContactForm() {
    const { t } = useTranslation(); // 2. Inicializar
    const { ref: refLeft, inView: inViewLeft } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: refRight, inView: inViewRight } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="contacto" className="py-24 bg-sky-50 overflow-hidden">
            <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    
                    {/* --- LADO IZQUIERDO: FORMULARIO --- */}
                    <div 
                        ref={refLeft}
                        className={`bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-sky-100 transition-all duration-1000 ${
                            inViewLeft ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
                            {t('contact.title')}
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {t('contact.subtitle')} 
                            <span className="font-semibold text-sky-700"> Purinapaq</span>.
                        </p>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1">{t('contact.form.name_label')}</label>
                                    <input type="text" placeholder={t('contact.form.name_placeholder')} className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all placeholder:text-slate-400" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1">{t('contact.form.email_label')}</label>
                                    <input type="email" placeholder={t('contact.form.email_placeholder')} className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all placeholder:text-slate-400" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1">{t('contact.form.subject_label')}</label>
                                <input type="text" placeholder={t('contact.form.subject_placeholder')} className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all placeholder:text-slate-400" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1">{t('contact.form.message_label')}</label>
                                <textarea rows="4" placeholder={t('contact.form.message_placeholder')} className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all resize-none placeholder:text-slate-400"/>
                            </div>

                            <div className="flex items-start gap-3 py-2">
                                <input type="checkbox" id="consent" className="mt-1 w-5 h-5 cursor-pointer accent-sky-700 rounded border-slate-300 transition-all" />
                                <label htmlFor="consent" className="text-[11px] text-slate-500 leading-snug cursor-pointer select-none">
                                    {t('contact.form.consent')}
                                </label>
                            </div>

                            <button type="submit" className="group w-full py-4 bg-sky-700 hover:bg-sky-800 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-700/25">
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                {t('contact.form.btn_send')}
                            </button>
                        </form>
                    </div>

                    {/* --- LADO DERECHO: INFO DE CONTACTO --- */}
                    <div 
                        ref={refRight}
                        className={`bg-sky-900 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden text-white flex flex-col justify-between shadow-xl transition-all duration-1000 delay-200 ${
                            inViewRight ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-10">{t('contact.info.title')}</h3>
                            
                            <div className="space-y-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 group-hover:bg-sky-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-sky-300 transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sky-300 text-[11px] ">{t('contact.info.email_tag')}</p>
                                        <p className="text-lg font-medium">info@purinapaq.org</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 group-hover:bg-sky-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-sky-400 transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sky-300 text-[11px] ">{t('contact.info.phone_tag')}</p>
                                        <p className="text-lg font-medium">(416) 938 9311</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 group-hover:bg-sky-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-sky-300 transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sky-300 text-[11px] ">{t('contact.info.location_tag')}</p>
                                        <p className="text-base opacity-90 leading-relaxed font-light">
                                            306-30 Elsinore Path<br />
                                            Etobicoke, ON M8V 3Z6, Canada
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                            <p className="text-xs text-sky-100/60 italic leading-relaxed">
                                {t('contact.info.charity_note')}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}