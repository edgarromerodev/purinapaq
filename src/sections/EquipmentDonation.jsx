import React from "react";
import { useInView } from "react-intersection-observer";
import { Truck, Heart, Info } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function EquipmentDonation() {
    const { t } = useTranslation();
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refContent, inView: inViewContent } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Obtenemos el array de categorías traducido
    const categories = t('equipment.form.categories', { returnObjects: true });

    return (
        <section className="py-24 bg-sky-50 overflow-hidden">
            <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
                
                {/* Cabecera */}
                <div 
                    ref={refHeader}
                    className={`max-w-2xl mb-16 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase mb-6">
                        <Heart size={14} /> {t('equipment.badge')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 ">
                        {t('equipment.title')}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        <Trans i18nKey="equipment.description">
                            Si tiene algún dispositivo de movilidad u otro dispositivo de asistencia acumulando polvo, <strong>¡póngase en contacto con nosotros!</strong>
                        </Trans>
                    </p>
                </div>

                <div 
                    ref={refContent}
                    className={`grid lg:grid-cols-3 gap-12 transition-all duration-1000 delay-200 ${
                        inViewContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}
                >
                    {/* FORMULARIO */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-sky-100">
                        <form className="space-y-10">
                            
                            <div>
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                                    <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm">1</div>
                                    <h3 className="font-bold text-xl text-slate-800">{t('equipment.form.step1_title')}</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('equipment.form.name_label')}</label>
                                        <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('equipment.form.address_label')}</label>
                                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('equipment.form.city_label')}</label>
                                        <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('equipment.form.phone_label')}</label>
                                        <input type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('equipment.form.email_label')}</label>
                                        <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                                    <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm">2</div>
                                    <h3 className="font-bold text-xl text-slate-800">{t('equipment.form.step2_title')}</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('equipment.form.day_label')}</label>
                                        <input type="date" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('equipment.form.time_label')}</label>
                                        <input type="text" placeholder={t('equipment.form.time_placeholder')} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                                    <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm">3</div>
                                    <h3 className="font-bold text-xl text-slate-800">{t('equipment.form.step3_title')}</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {Array.isArray(categories) && categories.map((item) => (
                                        <label key={item} className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl hover:bg-sky-50 cursor-pointer transition-colors group">
                                            <input type="checkbox" className="w-5 h-5 accent-sky-600" />
                                            <span className="text-xs font-medium text-slate-600 group-hover:text-sky-800">{item}</span>
                                        </label>
                                    ))}
                                    <div className="sm:col-span-2 md:col-span-3 space-y-2 mt-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('equipment.form.other_label')}</label>
                                        <textarea rows="3" placeholder={t('equipment.form.other_placeholder')} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none resize-none"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full py-4 bg-sky-700 hover:bg-slate-900 text-white rounded-2xl font-bold transition-all shadow-xl shadow-sky-700/20">
                                {t('equipment.form.submit_btn')}
                            </button>
                        </form>
                    </div>

                    {/* TARJETA LATERAL */}
                    <div className="space-y-6">
                        <div className="bg-sky-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <Truck className="mb-6 text-sky-300" size={40} />
                            <h4 className="text-2xl font-bold mb-4">{t('equipment.how_it_works.title')}</h4>
                            <ul className="space-y-4 text-sm text-sky-100/80">
                                <li className="flex gap-3">
                                    <span className="font-bold text-white">1.</span>
                                    {t('equipment.how_it_works.step_1')}
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-white">2.</span>
                                    {t('equipment.how_it_works.step_2')}
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-white">3.</span>
                                    {t('equipment.how_it_works.step_3')}
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-10 border border-sky-100 shadow-sm">
                            <Info className="mb-4 text-sky-600" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{t('equipment.note.title')}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic">
                                {t('equipment.note.text')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}