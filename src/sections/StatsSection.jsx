import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";

const StatItem = ({ number, label, description }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });
  
    // Lógica para separar números de prefijos/sufijos (+ o k)
    const rawNumber = parseInt(number.replace(/\D/g, ""));
    const suffix = number.replace(/[0-9]/g, ""); 

    return (
        <div 
            ref={ref}
            className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            role="article"
        >
            {/* Accesibilidad: aria-label para que el lector lea el número completo, no el conteo */}
            <span 
                className="text-5xl md:text-6xl font-extrabold text-sky-700 mb-2"
                aria-label={`${number} ${label}`}
            >
                {inView ? (
                    <span aria-hidden="true">
                        {suffix === "+" && suffix}
                        <CountUp end={rawNumber} duration={2.5} separator="," />
                        {suffix !== "+" && suffix}
                    </span>
                ) : (
                    <span aria-hidden="true">0</span>
                )}
            </span>
            <h4 className="text-xl font-bold text-slate-800 mb-3">{label}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default function StatsSection() {
    // Datos integrados directamente en inglés como solicitaste
    const stats = [
        { 
            number: "+40", 
            label: "Containers shipped", 
            description: "Medical and mobility equipment distributed globally." 
        },
        { 
            number: "2007", 
            label: "Changing lives", 
            description: "Since our founding, serving vulnerable communities." 
        },
        { 
            number: "15k", 
            label: "People benefited", 
            description: "Individuals who regained their independence and mobility." 
        }
    ];

    return (
        <section id="stats" className="py-24 bg-slate-50">
            {/* CONTENEDOR MAESTRO: Alineado con Navbar y Hero */}
            <div className="w-full max-w-[1650px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
                
                <div className="text-center mb-16">
                    <SectionTitle 
                        text1="Our Impact" 
                        text2="Figures that transform" 
                        text3="realities" 
                    />
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
                        Each number represents a story of resilience and the collective effort to bring hope where it is most needed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
            </div>

            {/* Texto oculto para lectores de pantalla que resume la sección */}
            <div className="sr-only">
                <h3>Impact Statistics</h3>
                <p>We have shipped over 40 containers, changed lives since 2007, and benefited more than 15,000 people.</p>
            </div>
        </section>
    );
}