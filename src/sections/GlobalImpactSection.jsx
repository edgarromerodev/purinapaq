import React from "react";
import { useInView } from "react-intersection-observer";
import { Globe, Ship, Handshake, Sprout, GraduationCap, Heart } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import DonationCTA from "./DonationCTA";

export default function GlobalImpactSection() {
    // Definimos los observers para cada bloque de impacto
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
            <section id="global-impact" className="py-28 bg-white overflow-hidden">
                <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                    
                    <SectionTitle 
                        text1="Our Mission" 
                        text2="Global Impact Initiatives" 
                    />
                    
                    <p className="max-w-3xl mx-auto text-center text-slate-500 mt-6 text-lg leading-relaxed">
                        At Purinapaq - Mobility Without Borders, our mission goes beyond borders. We work to restore mobility, independence, and dignity in underserved communities around the world.
                    </p>

                    <div className="mt-24 space-y-32">
                        
                        {/* --- BLOQUE 1: INTERNATIONAL DONATIONS --- */}
                        <div 
                            ref={ref1}
                            className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                                inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                            }`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <img 
                                        src="/images/international-shipping.webp" 
                                        alt="International Donations" 
                                        className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-8 rounded-3xl hidden md:flex items-center gap-4 shadow-xl border border-white/10">
                                        <Ship size={40} className="text-sky-300" />
                                        <div>
                                            <p className="text-2xl font-semibold">Safe & Adapted</p>
                                            <p className="text-sky-100 text-sm">Every device is ready to use</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                                    <Globe size={16} /> Global Reach
                                </div>
                                <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                                    1. International Donations
                                </h3>
                                <p className="text-slate-600 text-xl leading-relaxed mb-6">
                                    We send refurbished wheelchairs, mobility scooters, walkers, and other assistive devices to communities in need. 
                                </p>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Our logistics ensure that every item sent is meticulously inspected and adapted, bridging the gap between surplus resources in Canada and the urgent need abroad.
                                </p>
                            </div>
                        </div>

                        {/* --- BLOQUE 2: LOCAL PARTNERSHIPS --- */}
                        {/* --- BLOQUE 2: LOCAL PARTNERSHIPS --- */}
<div 
    ref={ref2}
    className={`flex flex-col lg:flex-row-reverse items-center gap-16 transition-all duration-1000 ${
        inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
    }`}
>
    <div className="w-full lg:w-1/2">
        <div className="relative group flex flex-col gap-6">
            {/* Contenedor de las dos imágenes */}
            <div className="grid grid-cols-2 gap-4">
                <img 
                    src="/images/local-partners-1.webp" 
                    alt="Local Partnerships 1" 
                    className="rounded-[2rem] shadow-xl w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                />
                <img 
                    src="/images/local-partners-2.webp" 
                    alt="Local Partnerships 2" 
                    className="rounded-[2rem] shadow-xl w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                />
            </div>

            {/* Texto movido a la parte inferior (fuera de la imagen) */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl border border-white/10 w-full">
                <div className="flex items-center gap-4">
                    <Handshake size={32} className="text-sky-400 flex-shrink-0" />
                    <p className="font-semibold italic text-lg">
                        "We collaborate with trusted local organizations in each recipient country."
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="w-full lg:w-1/2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
            <Handshake size={16} /> Trusted Networks
        </div>
        <h3 className="text-3xl font-semibold text-slate-900 mb-6">
            2. Local Partnerships
        </h3>
        <p className="text-slate-600 text-xl leading-relaxed mb-6">
            In each recipient country, we collaborate with local organizations to coordinate distribution and provide follow-up support.
        </p>
        <div className="space-y-4">
            <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-1 flex-shrink-0">✓</div>
                <p className="text-slate-500">Coordinated distribution logistics</p>
            </div>
            <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-1 flex-shrink-0">✓</div>
                <p className="text-slate-500">Continuous follow-up and user support</p>
            </div>
        </div>
    </div>
</div>
                            {/* --- BLOQUE 3: SUSTAINABILITY & CAPACITY (ACTUALIZADO CON IMAGEN VERTICAL) --- */}
<div 
    ref={ref3}
    className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
        inView3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
    }`}
>
    {/* COLUMNA IZQUIERDA: IMAGEN VERTICAL ADAPTADA */}
    <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative group overflow-hidden rounded-[2.5rem]">
            {/* Imagen Vertical: w-full, h-[600px], aspect-[3/4] y object-cover para no deformar */}
            <img 
                src="/images/electric-wheelchairs-impact.webp" // Asegúrate de cambiar el nombre al archivo vertical
                alt="Global Impact through Electric Wheelchairs" 
                className="w-full h-[600px] aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105 shadow-2xl"
                loading="lazy"
            />
            {/* Se ha eliminado el overlay de gradiente y el texto superpuesto */}
            <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-slate-900/10 transition-colors group-hover:ring-sky-500/20"></div>
        </div>
    </div>

    {/* COLUMNA DERECHA: TEXTO (Mantenida igual) */}
    <div className="w-full lg:w-1/2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
            <Sprout size={16} /> Lasting Change
        </div>
        <h3 className="text-3xl font-semibold text-slate-900 mb-6 leading-tight">
            3. Sustainable Mobility & Capacity Building
        </h3>
        <div className="space-y-6">
            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} />
                </div>
                <div>
                    <p className="text-lg font-bold text-slate-800">Knowledge Sharing</p>
                    <p className="text-slate-500">We train community workers and share expertise on mobility assistance.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <Sprout size={24} />
                </div>
                <div>
                    <p className="text-lg font-bold text-slate-800">Sustainable Workshops</p>
                    <p className="text-slate-500">Our reconditioning centers ensure devices remain in optimal condition for years.</p>
                </div>
            </div>
        </div>
    </div>
</div>
                      
                        {/* --- BLOQUE 4: WHY IT MATTERS (FINAL HEART) --- */}
                        <div 
                            ref={ref4}
                            className={`p-12 md:p-20 bg-slate-900 rounded-[3.5rem] text-white transition-all duration-1000 delay-200 ${
                                inView4 ? "scale-100 opacity-100" : "scale-95 opacity-0"
                            }`}
                        >
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg shadow-sky-600/30">
                                    <Heart size={40} fill="white" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold mb-8">Why It Matters</h3>
                                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 italic">
                                    "Millions worldwide face challenges due to limited access to mobility devices. Purinapaq transforms lives, enabling individuals to attend school, access healthcare, and regain independence."
                                </p>
                                <div className="h-[2px] w-24 bg-sky-500 mx-auto mb-10"></div>
                                <p className="text-lg text-sky-200 font-semibold tracking-widest uppercase">
                                    Mobility is a right, not a privilege.
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