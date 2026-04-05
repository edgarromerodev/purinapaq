import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next"; // 1. Importar

export const FaqSection = () => {
    const { t } = useTranslation(); // 2. Inicializar
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [openIndex, setOpenIndex] = useState(null);

    // 3. Obtener el array de preguntas traducidas
    const faqs = t('faq.questions', { returnObjects: true });

    return (
       <section id="faq" className="py-20 bg-white overflow-hidden">
            <div 
                ref={ref}
                className={`w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto reveal-left ${inView ? "reveal-active" : ""}`}
            >
                
                <SectionTitle 
                    text1={t('faq.title_1')}  
                    text2={t('faq.title_2')}  
                    text3={t('faq.title_3')}  
                />

                <div className="mt-16 max-w-4xl mx-auto">
                    {/* 4. Mapear sobre el array traducido */}
                    {Array.isArray(faqs) && faqs.map((faq, index) => (
                        <div 
                            className="mb-4 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300" 
                            key={index}
                        >
                            <button 
                                className={`flex items-center justify-between w-full p-6 text-left transition-colors ${
                                    openIndex === index ? "bg-slate-50" : "bg-white hover:bg-slate-50"
                                }`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h3 className={`text-lg font-semibold ${
                                    openIndex === index ? "text-sky-700" : "text-slate-800"
                                }`}>
                                    {faq.q}
                                </h3>
                                <ChevronDown 
                                    size={20} 
                                    className={`${
                                        openIndex === index ? "rotate-180 text-sky-700" : "text-slate-400"
                                    } transition-transform duration-500`} 
                                />
                            </button>

                            <div 
                                className={`transition-all duration-500 ease-in-out ${
                                    openIndex === index 
                                        ? "max-h-[500px] opacity-100" 
                                        : "max-h-0 opacity-0"
                                } overflow-hidden`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50 border-t border-slate-100">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};