import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "react-i18next"; // 1. Importar hook

const StatItem = ({ number, label, description }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });
  
    const rawNumber = parseInt(number.replace(/\D/g, ""));
    const suffix = number.replace(/[0-9]/g, ""); 

    return (
        <div 
            ref={ref}
            className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105 reveal-blur ${inView ? "reveal-active" : ""}`}
        >
            <span className="text-5xl md:text-6xl font-extrabold text-sky-700 mb-2">
                {inView ? (
                    <>
                        {suffix === "+" && suffix}
                        <CountUp end={rawNumber} duration={2.5} separator="," />
                        {suffix !== "+" && suffix}
                    </>
                ) : "0"}
            </span>
            <h4 className="text-xl font-bold text-slate-800 mb-3">{label}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default function StatsSection() {
    const { t } = useTranslation(); // 2. Inicializar t

    const stats = [
        { 
            number: "+40", 
            label: t('stats.item_1.label'), 
            description: t('stats.item_1.description') 
        },
        { 
            number: "2007", 
            label: t('stats.item_2.label'), 
            description: t('stats.item_2.description') 
        },
        { 
            number: "15k", 
            label: t('stats.item_3.label'), 
            description: t('stats.item_3.description') 
        }
    ];

    return (
        <section id="impacto" className="py-20 bg-slate-50">
            <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
                
                <SectionTitle 
                    text1={t('stats.title_1')} 
                    text2={t('stats.title_2')} 
                    text3={t('stats.title_3')} 
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}