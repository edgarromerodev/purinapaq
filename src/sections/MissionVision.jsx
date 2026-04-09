import React from "react";
import { useInView } from "react-intersection-observer";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import DonationCTA from "./DonationCTA";

export default function MissionVision() {
    const { ref: refMision, inView: inViewMision } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refVision, inView: inViewVision } = useInView({ triggerOnce: true, threshold: 0.2 });

    const missionItems = [
        "Equipment Collection",
        "Refurbishment Process",
        "Strategic Distribution",
        "Community Empowerment"
    ];

    return (
        <>
            <section className="py-28 bg-white overflow-hidden">
             
                <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                    
                    <SectionTitle 
                        text1="Our" 
                        text2="Mission & Vision" 

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
                                        alt="Our Mission" 
                                        loading="lazy"
                                        className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                    />
                                    <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-6 rounded-2xl hidden md:block shadow-xl border border-white/10">
                                        <Target size={40} className="opacity-20 absolute right-4 top-4" />
                                        <p className="font-bold text-xl mb-1">Our Mission</p>
                                        <p className="text-sm opacity-90">Helping those in need regain mobility.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                    Mission
                                </div>
                                <h3 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">
                                    Regaining Mobility & Independence
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                    At Purinapaq, our mission is clear: to help those in need regain mobility. We carefully collect, refurbish, and distribute mobility and rehabilitation equipment to individuals living with disabilities.
                                </p>
                                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-lg italic border-l-4 border-sky-700 pl-4 bg-slate-50 py-4 rounded-r-xl">
                                    "Beyond providing devices, we empower communities with the knowledge and tools they need to live independently."
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {missionItems.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <CheckCircle2 size={20} className="text-sky-700 shrink-0" />
                                            <span className="text-sm">{item}</span>
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
                                        alt="Our Vision" 
                                        loading="lazy"
                                        className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                    />
                                    <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl hidden md:block shadow-xl border border-white/10">
                                        <Eye size={40} className="opacity-20 absolute right-4 top-4" />
                                        <p className="font-bold text-xl mb-1">Our Vision</p>
                                        <p className="text-sm opacity-90">A world where everyone moves freely.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                    Vision
                                </div>
                                <h3 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">
                                    A World Without Physical Barriers
                                </h3>
                                <div className="space-y-6">
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        Our vision is a world where all individuals with disabilities, especially those in economically disadvantaged regions, have ready access to the mobility equipment they need.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed text-lg font-medium text-slate-800">
                                        Everyone deserves the right to live life on their terms, pursue their dreams, and move freely, without limitations imposed by physical challenges or financial barriers.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <DonationCTA />
        </>
    );
}