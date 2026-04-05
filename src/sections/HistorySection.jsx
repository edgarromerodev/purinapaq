import React from "react";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import DonationCTA from "./DonationCTA";
import { useTranslation, Trans } from "react-i18next";

export default function HistorySection() {
    const { t } = useTranslation();
    
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
        <section id="historia" className="py-28 bg-white overflow-hidden">
            <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
                
                <SectionTitle 
                    text1={t('history.title_tag')} 
                    text2={t('history.title_main')} 
                    text3={t('history.title_desc')} 
                />

                <div className="mt-24 space-y-32">
                    
                    {/* --- BLOQUE 1: EL ORIGEN --- */}
                    <div 
                        ref={ref1}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/jose-orozco.webp" 
                                    alt="José Orozco Fundador" 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
                                    <Quote className="mb-4 opacity-30" size={32} />
                                    <p className="italic font-medium">{t('history.block1.quote')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                                {t('history.block1.badge')}
                            </div>
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6 text-balance">
                                {t('history.block1.title')}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                <Trans i18nKey="history.block1.text_p1">
                                    Purinapaq fue fundada en **2007 por José Orozco**, un inmigrante peruano en Canadá.
                                </Trans>
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                {t('history.block1.text_p2')}
                            </p>
                        </div>
                    </div>

                    {/* --- BLOQUE 2: IMPACTO INTERNACIONAL --- */}
                    <div 
                        ref={ref2}
                        className={`flex flex-col lg:flex-row-reverse items-center gap-16 transition-all duration-1000 ${
                            inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/impacto-global.webp" 
                                    alt="Contenedores de ayuda" 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl hidden md:block shadow-xl text-center min-w-[200px]">
                                    <p className="text-4xl font-bold text-sky-400">{t('history.block2.stat_num')}</p>
                                    <p className="text-sm uppercase tracking-widest font-semibold">{t('history.block2.stat_desc')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                                {t('history.block2.badge')}
                            </div>
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                                {t('history.block2.title')}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                <Trans i18nKey="history.block2.text_p1">
                                    Lo que comenzó como una misión personal es hoy un movimiento global. Hemos enviado más de **40 contenedores completos**.
                                </Trans>
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                {t('history.block2.text_p2')}
                            </p>
                        </div>
                    </div>

                    {/* --- BLOQUE 3: INICIATIVA 2026 --- */}
                    <div 
                        ref={ref3}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/iniciativa-2026.webp" 
                                    alt="Iniciativa 2026" 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute inset-0 bg-sky-900/10 rounded-3xl"></div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                {t('history.block3.badge')}
                            </div>
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                                {t('history.block3.title')}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                <Trans i18nKey="history.block3.text_p1">
                                    Para el 2026, hemos reunido equipo para llenar **tres contenedores de 40 pies**.
                                </Trans>
                            </p>
                            <div className="bg-sky-50 p-6 rounded-2xl border-l-4 border-sky-600 mb-6">
                                <p className="text-slate-700 font-medium leading-relaxed">
                                    {t('history.block3.quote')}
                                </p>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                {t('history.block3.text_p2')}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <DonationCTA/>
        </>
    );
}