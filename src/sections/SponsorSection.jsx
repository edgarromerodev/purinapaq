import React from "react";
import { useInView } from "react-intersection-observer";
import { Building2, Target, Trophy, Handshake, CheckCircle2, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SponsorSection() {
    const navigate = useNavigate();
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });

    const benefits = [
        "Fund the refurbishment of mobility and assistive devices",
        "Cover transportation and logistics for local and international shipments",
        "Support community workshops and distribution programs",
        "Expand our outreach to regions with the greatest need"
    ];

    const opportunities = [
        { title: "Financial Contributions", desc: "To specific projects or shipments" },
        { title: "Program Support", desc: "For community workshops and local programs" },
        { title: "In-kind Donations", desc: "Equipment or professional services" },
        { title: "Long-term Partnerships", desc: "Collaborate to scale our global impact" }
    ];

    return (
        <section 
            id="sponsor" 
            className="py-28 bg-slate-50 overflow-hidden text-slate-900"
            aria-labelledby="sponsor-title"
        >
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* --- HEADER --- */}
                <header 
                    ref={refHeader}
                    className={`max-w-4xl mb-24 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6 ">
                        <Building2 size={16} fill="currentColor" aria-hidden="true" /> Partner With Us
                    </div>
                    <h2 id="sponsor-title" className="text-3xl font-semibold text-slate-900 mb-8">
                        Sponsor the Journey.
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        At Purinapaq Mobility Without Borders, partnerships are essential to expanding our impact. 
                        By becoming a sponsor, you play a direct role in <strong>restoring mobility, independence, and dignity</strong> to people living with disabilities.
                    </p>
                </header>

                <div className="space-y-32">
                    
                    {/* --- BLOQUE 1: WHY PARTNER (Izquierda Imagen) --- */}
                    <div 
                        ref={ref1}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative group">
                                <img 
                                    src="/images/sponsor-impact.webp" 
                                    alt="Global logistics and mobility impact" 
                                    className="rounded-[2.5rem] shadow-2xl w-full h-[550px] object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl border border-white/10">
                                    <Target className="mb-4 text-sky-400" size={32} aria-hidden="true" />
                                    <p className="font-medium text-lg italic text-sky-100">
                                        "Shared impact through transparency and collaboration."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">Why Partner with Us</h3>
                            <p className="text-lg text-slate-600 mb-8">
                                Your organization can make a meaningful difference by supporting initiatives that deliver life, changing equipment to underserved communities.
                            </p>
                            <ul className="space-y-5" aria-label="Benefits of sponsorship">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex gap-4 items-start text-slate-700">
                                        <div className="mt-1 bg-sky-100 p-1 rounded-full">
                                            <CheckCircle2 className="text-sky-700" size={18} aria-hidden="true" />
                                        </div>
                                        <span className="text-lg font-medium leading-tight">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* --- BLOQUE 2: OPPORTUNITIES (Cards Estilo Dashboard) --- */}
                    <div 
                        ref={ref2}
                        className={`transition-all duration-1000 ${
                            inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                        }`}
                    >
                        <div className="bg-sky-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
                            {/* Decoración de fondo */}
                            <Globe className="absolute -right-20 -bottom-20 text-sky-800/50" size={400} aria-hidden="true" />
                            
                            <div className="relative z-10">
                                <div className="max-w-2xl mb-12">
                                    <h3 className="text-3xl font-bold mb-6">Sponsorship Opportunities</h3>
                                    <p className="text-sky-100/80 text-lg">
                                        We welcome corporations, foundations, and community organizations that share our commitment to accessibility and inclusion.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {opportunities.map((item, idx) => (
                                        <div 
                                            key={idx} 
                                            className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/20 transition-colors group"
                                            role="article"
                                        >
                                            <div className="w-12 h-12 bg-sky-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                <Trophy className="text-sky-900" size={24} aria-hidden="true" />
                                            </div>
                                            <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                            <p className="text-sky-100/70 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center shrink-0">
                                            <Handshake className="text-white" size={24} aria-hidden="true" />
                                        </div>
                                        <p className="text-xl font-medium text-sky-50">
                                            Together, we can build a more inclusive world.
                                        </p>
                                    </div>
                                    <button onClick={()=> navigate("/donate")}
                                        className="px-8 py-4 bg-white text-sky-900 hover:bg-sky-100 rounded-2xl font-bold transition-all flex items-center gap-3 active:scale-95 shadow-xl"
                                        aria-label="Contact us to become a partner"
                                    >
                                        Become a Sponsor <ArrowRight size={20} aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}