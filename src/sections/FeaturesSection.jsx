import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import { History } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next"; // 1. Importar Trans para las negritas

export default function AboutSection() {
    const { t } = useTranslation(); // 2. Inicializar traducciones
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const navigate = useNavigate();

    return (
        <section id="sobre-nosotros" className="py-20 bg-white overflow-hidden">
            <div 
                ref={ref}
                className={`w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto reveal-left ${inView ? "reveal-active" : ""}`}
            >
                
                {/* Título de la Sección */}
                <SectionTitle 
                    text1={t('about.section_title')} 
                    text2={t('about.subtitle')} 
                    text3={t('about.intro_text')}
                />

                <div className="mt-24 flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <img 
                                src="/images/fundador-jose.webp" 
                                alt="Fundación Purinapaq" 
                                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
                                <p className="italic font-medium">{t('about.quote')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                            {t('about.badge')}
                        </div>
                        <h3 className="text-3xl md:text-3xl font-semibold text-slate-900 mb-6">
                            {t('about.heading')}
                        </h3>
                        
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {/* Trans permite renderizar las negritas del JSON automáticamente */}
                            <Trans i18nKey="about.p1">
                                Purinapaq fue fundada en <strong>2007 por José Orozco</strong>...
                            </Trans>
                        </p>
                        
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {t('about.p2')}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={()=> navigate("/historia")} className="bg-sky-700 hover:bg-sky-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                <History size={20} />
                                {t('about.btn_history')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}