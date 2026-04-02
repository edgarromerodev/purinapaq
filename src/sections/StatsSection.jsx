
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";

// Sub-componente para manejar la animación individual por ítem
const StatItem = ({ number, label, description }) => {
    // Detecta si el componente está visible en pantalla
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });
  
    const rawNumber = parseInt(number.replace(/\D/g, ""));
    const suffix = number.replace(/[0-9]/g, ""); 

    return (
<div 
            ref={ref}
            // Mezclamos la clase base con la activa según inView
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
    const stats = [
        { 
            number: "+40", 
            label: "Contenedores enviados", 
            description: "Equipos médicos y de movilidad distribuidos globalmente." 
        },
        { 
            number: "2007", 
            label: "Cambiando vidas", 
            description: "Desde nuestra fundación, servimos a comunidades vulnerables." 
        },
        { 
            number: "15k", 
            label: "Personas beneficiadas", 
            description: "Individuos que recuperaron su independencia y movilidad." 
        }
    ];

    return (
        <section id="impacto" className="py-20 bg-slate-50">
            <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
                
                <SectionTitle 
                    text1="Nuestro Impacto" 
                    text2="Cifras que transforman realidades" 
                    text3="Cada número representa una historia de superación y el esfuerzo colectivo para llevar esperanza a donde más se necesita."
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