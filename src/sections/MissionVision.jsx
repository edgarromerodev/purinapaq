import React from "react";
import { useInView } from "react-intersection-observer";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import DonationCTA from "./DonationCTA";
import { useTranslation, Trans } from "react-i18next"; // 1. Importar Trans para negritas

export default function MissionVision() {
    const { t } = useTranslation();
    const { ref: refMision, inView: inViewMision } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refVision, inView: inViewVision } = useInView({ triggerOnce: true, threshold: 0.2 });

    // Obtener la lista de items de la misión
    const missionItems = t('mission_vision.mission.items', { returnObjects: true });

    return (
        <>
        <section className="py-28 bg-white overflow-hidden">
            <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
                
                <SectionTitle 
                    text1={t('mission_vision.section_tag1')} 
                    text2={t('mission_vision.section_tag2')} 
                    text3={t('mission_vision.section_tag3')} 
                />

                <div className="mt-24 space-y-32">
                    
                    {/* --- SECCIÓN MISIÓN --- */}
                    <div 
                        ref={refMision}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inViewMision ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/mision-purinapaq.webp" 
                                    alt={t('mission_vision.mission.badge')} 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-6 rounded-2xl hidden md:block shadow-xl">
                                    <Target size={40} className="opacity-20 absolute right-4 top-4" />
                                    <p className="font-bold text-xl mb-1">{t('mission_vision.mission.card_title')}</p>
                                    <p className="text-sm opacity-90">{t('mission_vision.mission.card_desc')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                {t('mission_vision.mission.badge')}
                            </div>
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                                {t('mission_vision.mission.title')}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {t('mission_vision.mission.desc_1')}
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium text-lg italic border-l-4 border-sky-700 pl-4">
                                {t('mission_vision.mission.quote')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {Array.isArray(missionItems) && missionItems.map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                                        <CheckCircle2 size={18} className="text-sky-700" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- SECCIÓN VISIÓN --- */}
                    <div 
                        ref={refVision}
                        className={`flex flex-col lg:flex-row-reverse items-center gap-16 transition-all duration-1000 ${
                            inViewVision ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/vision-purinapaq.webp" 
                                    alt={t('mission_vision.vision.badge')} 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl hidden md:block shadow-xl">
                                    <Eye size={40} className="opacity-20 absolute right-4 top-4" />
                                    <p className="font-bold text-xl mb-1">{t('mission_vision.vision.card_title')}</p>
                                    <p className="text-sm opacity-90">{t('mission_vision.vision.card_desc')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                {t('mission_vision.vision.badge')}
                            </div>
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                                {t('mission_vision.vision.title')}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                {/* Usamos Trans para renderizar las negritas del JSON */}
                                <Trans i18nKey="mission_vision.vision.desc_1">
                                    Visualizamos un futuro donde todas las personas con discapacidad en regiones vulnerables tengan **fácil acceso al equipo de movilidad que necesitan**.
                                </Trans>
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                {t('mission_vision.vision.desc_2')}
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