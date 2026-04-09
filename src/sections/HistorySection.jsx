import React from "react";
import { useInView } from "react-intersection-observer";
import { Quote, Ship, Calendar, Award } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import DonationCTA from "./DonationCTA";

export default function HistorySection() {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
            <section id="historia" className="py-28 bg-white overflow-hidden">
                
                <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                    
                    <SectionTitle 
                        text1="Our Journey" 
                        text2="The History of" 
                    />
                    
                    <p className="text-center text-slate-500 mt-4 text-lg">
                        Since 2007, transforming lives through mobility and human dignity.
                    </p>

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
                                        alt="José Orozco Founder" 
                                        loading="lazy"
                                        className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                    />
                                    <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
                                        <Quote className="mb-4 opacity-30" size={32} />
                                        <p className="italic font-medium text-sm">
                                            "Purinapaq was born from a personal experience that transformed my vision of the world."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                                    The Origin (2007)
                                </div>
                                <h3 className="text-3xl font-semibold text-slate-900 mb-6 text-balance">
                                    Founded by the experience and heart of José Orozco.
                                </h3>
                                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        Purinapaq was founded in <strong className="text-slate-900">2007 by José Orozco</strong>, a Peruvian immigrant in Canada. The organization was born from his own story: in the early 90s, José suffered a workplace accident that left him in a wheelchair for a long period.
                                    </p>
                                    <p>
                                        This experience allowed him to closely understand the challenges of disability and inspired him to help those facing similar difficulties in his native Peru and other countries, where access to equipment is nearly impossible without support.
                                    </p>
                                </div>
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
                                        loading="lazy"
                                        alt="Global Impact Containers" 
                                        className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                    />
                                    <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl hidden md:block shadow-xl text-center min-w-[200px] border border-white/10">
                                        <p className="text-5xl font-extrabold text-sky-400">+40</p>
                                        <p className="text-xs uppercase tracking-widest font-bold mt-1">Containers Sent</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                                    Expansion and Achievements
                                </div>
                                <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                                    An international effort with significant social impact.
                                </h3>
                                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        What started as a personal mission is today a global movement. We have sent more than <strong className="text-slate-900">40 full containers</strong> of equipment to various countries, working with local organizations and workshops supported directly by Purinapaq.
                                    </p>
                                    <p>
                                        We also provide local support in Canada to veterans, low-income individuals, and newcomers who do not have access to government aid, ensuring they regain their independence.
                                    </p>
                                </div>
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
                                <div className="relative overflow-hidden rounded-3xl group">
                                    <img 
                                        src="/images/iniciativa-2026.webp" 
                                        alt="2026 Initiative" 
                                        className="rounded-3xl shadow-2xl w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <Calendar size={48} className="mb-4 text-sky-400" />
                                        <p className="text-2xl font-bold italic">"The Gift of Mobility"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                    2026 Initiative
                                </div>
                                <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                                    Our most ambitious goal yet.
                                </h3>
                                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        By 2026, we have gathered equipment to fill <strong className="text-slate-900">three 40-foot containers</strong>, including over 750 wheelchairs and 400 pediatric devices for those on waiting lists.
                                    </p>
                                    <div className="bg-sky-50 p-6 rounded-2xl border-l-4 border-sky-600 shadow-sm italic font-medium text-slate-700">
                                        "Each device represents a transformed life, an empowered family, and a child with full freedom."
                                    </div>
                                    <p className="font-semibold text-sky-700">
                                        We invite you to join us in providing the gift of mobility to those who need it most.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <DonationCTA/>
        </>
    );
}