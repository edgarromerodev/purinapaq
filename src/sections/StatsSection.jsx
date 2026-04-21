import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";

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
            className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            role="article"
        >
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
    const { ref: ref2026, inView: inView2026 } = useInView({ triggerOnce: true, threshold: 0.2 });

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
        <section id="stats" className="py-24 bg-slate-50 overflow-hidden">
            <div className="w-full max-w-[1650px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
                
                {/* Título de Estadísticas */}
                <div className="text-center mb-16">
                    <SectionTitle 
                        text1="Our Impact" 
                        text2="Figures that transform" 
                        text3="realities" 
                    />
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
                        Each number represents a story of resilience and the collective effort to bring hope.
                    </p>
                </div>

                {/* Cards de Estadísticas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>

                {/* --- BLOQUE 3 INTEGRADO: INICIATIVA 2026 --- */}
                <div 
                    ref={ref2026}
                    className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 pt-16 border-t border-slate-200 ${
                        inView2026 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                >
                    <div className="w-full lg:w-1/2">
                        <div className="relative overflow-hidden rounded-3xl group shadow-2xl">
                            <img 
                                src="/images/donation.webp" 
                                alt="2026 Initiative" 
                                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay sutil */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                            2026 Initiative
                        </div>
                        <h3 className="text-4xl font-semibold text-slate-900 mb-6">
                            Our most ambitious goal yet.
                        </h3>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                By 2026, we have gathered equipment to fill <strong className="text-slate-900">three 40-foot containers</strong>, including over 750 wheelchairs and 400 pediatric devices.
                            </p>
                            <div className="bg-white p-6 rounded-2xl border-l-4 border-sky-600 shadow-sm italic font-medium text-slate-700">
                                "Each device represents a transformed life, an empowered family, and a child with full freedom."
                            </div>
                            <p className="font-semibold text-sky-700">
                                We invite you to join us in providing the gift of mobility to those who need it most.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}