import React from "react";
import { useInView } from "react-intersection-observer";
import { BookOpen, Camera, Newspaper, ArrowRight, Heart, Download, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NewsStories() {
    const navigate = useNavigate();

    // Animaciones
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section 
            id="noticias" 
            className="py-28 bg-white overflow-hidden" 
            aria-labelledby="stories-main-title"
        >
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* --- HEADER --- */}
                <header 
                    ref={refHeader}
                    className={`max-w-4xl mb-24 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-6">
                        <BookOpen size={16} fill="currentColor" aria-hidden="true" /> News & Stories
                    </div>
                    <h2 id="stories-main-title" className="text-3xl font-semibold text-slate-900 mb-8 tracking-tight">
                        Moments that define our work.
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        At Purinapaq - Mobility Without Borders, every initiative, every shipment, and every donation
                        has a story behind it. This section shares the moments that define our work and the lives that
                        are transformed through mobility.
                    </p>
                </header>

                <div className="space-y-40">
                    
                    {/* --- ARTÍCULO 1: STORIES OF IMPACT --- */}
                    <article id="story-1-title"
                        ref={ref1}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">Stories of Impact</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Discover the journeys of individuals who have regained independence through access to
                                mobility devices. From students returning to school to families experiencing renewed hope, 
                                these stories reflect the true meaning of our mission.
                            </p>
                            <button onClick={() => navigate("/history")}  
                                className="group flex items-center gap-2 text-sky-700 font-bold hover:text-sky-900 transition-colors bg-sky-50 px-6 py-3 rounded-full"
                            >
                                View all stories <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <figure className="relative">
                                <img 
                                    src="/images/story-impact.webp" 
                                    alt="Impact story" 
                                    className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block max-w-xs">
                                    <p className="text-sm italic text-slate-500">"Mobility is the first step toward independence."</p>
                                </div>
                            </figure>
                        </div>
                    </article>

                    {/* --- ARTÍCULO 2: LATEST UPDATES --- */}
                    <article id="story-2-title"
                        ref={ref2}
                        className={`flex flex-col lg:flex-row-reverse items-center gap-16 transition-all duration-1000 ${
                            inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">Latest Updates</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Stay informed about our recent activities, including equipment collections, community workshops, 
                                and international shipments. We share updates from the field, highlighting the progress 
                                and impact made possible through your support.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <Newspaper className="text-sky-600" size={24} />
                                    <p className="text-slate-700 font-medium">New collection drive in Toronto - April 2026</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <Heart className="text-rose-500" size={24} />
                                    <p className="text-slate-700 font-medium">22 containers delivered since 2021</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-2 gap-6">
                                <img 
                                    src="/images/07-embarque-contenedor-1.webp" 
                                    alt="Shipment update" 
                                    className="rounded-[2.5rem] shadow-xl w-full h-[400px] object-cover mt-8"
                                />
                                <img 
                                    src="/images/08-recepcion-equipo-destino-7b.webp" 
                                    alt="Equipment delivery" 
                                    className="rounded-[2.5rem] shadow-xl w-full h-[400px] object-cover"
                                />
                            </div>
                        </div>
                    </article>

                    {/* --- ARTÍCULO 3: JOURNEY --- */}
                    <article id="story-3-title"
                        ref={ref3}
                        className={`flex flex-col gap-12 transition-all duration-1000 ${
                            inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="max-w-4xl">
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">From Collection to Delivery</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Follow the journey of donated equipment, from local collection and refurbishment to
                                distribution in communities around the world. Through photos and stories, we provide a
                                transparent view of how your contributions create real change.
                            </p>
                            <div className="inline-flex items-center gap-3 bg-sky-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-sky-200">
                                <Camera size={20} />
                                Visual Journey
                            </div>
                        </div>

                        {/* Galería de 3 imágenes */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group overflow-hidden rounded-[2.5rem] shadow-xl h-[350px]">
                                <img src="/images/45-recojo-de-equipos-toronto.webp" alt="Toronto Collection" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                            </div>
                            <div className="group overflow-hidden rounded-[2.5rem] shadow-xl h-[350px] md:translate-y-12">
                                <img src="/images/53-recepcion-equipo-destino-5.webp" alt="Refurbishment" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                            </div>
                            <div className="group overflow-hidden rounded-[2.5rem] shadow-xl h-[350px]">
                                <img src="/images/15-christian.webp" alt="Delivery" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                            </div>
                        </div>
                    </article>

                    
{/* --- SECCIÓN: CAMPAIGN 2026 / DOWNLOAD --- */}
<article 
    id="campaign-2026"
    className="mt-40 flex flex-col lg:flex-row items-center gap-12 bg-sky-50 rounded-[3rem] p-8 md:p-16 border border-sky-100 shadow-sm"
>
    <div className="w-full lg:w-2/3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-600 text-white text-xs font-semibold mb-6 shadow-md">
            Campaign 2026
        </div>
        
        <h3 className="text-3xl  font-semibold text-slate-900 mb-6 leading-tight">
            "The Gift of Mobility 2026" <br />
            <span className="text-sky-600">Fundraising Campaign</span>
        </h3>

        <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-10">
            <p>
                We are proud to introduce our latest initiative, <strong>The Gift of Mobility 2026</strong>, 
                a fundraising campaign dedicated to restoring mobility and independence for individuals living with disabilities.
            </p>
            <p>
                With your support, we can recover, refurbish, and deliver essential mobility and assistive devices 
                to those who need them most, both in underserved communities across Canada and in developing countries. 
                Your contribution has the power to truly transform lives.
            </p>
            <p className="italic font-medium text-slate-500">
                Explore the campaign details below and learn how you can get involved. We invite you to be part 
                of this meaningful movement and help us deliver the gift of mobility to those who need it most.
            </p>
        </div>
        
        {/* BOTÓN DE DESCARGA AJUSTADO */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
                href="/forms/GoM2026.pdf" 
    download="GoM2026.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95 group"
            >
                <FileText size={20} className="text-sky-400" />
                Download Campaign PDF
                <Download size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
            
            <p className="text-sm text-slate-500 font-medium max-w-[200px]">
                Thanks to the generosity of supporters like you.
            </p>
        </div>
    </div>

    <div className="w-full lg:w-1/3 flex justify-center">
        {/* Representación visual de la Campaña */}
        <div className="relative group">
            {/* Decoración de fondo */}
            <div className="absolute inset-0 bg-sky-200 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform"></div>
            
            {/* Tarjeta Visual */}
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 w-72 h-96 flex flex-col">
                <div className="bg-sky-50 w-full h-40 rounded-xl mb-6 flex items-center justify-center">
                    <Heart size={60} className="text-sky-600 animate-pulse" fill="currentColor" />
                </div>
                <div className="space-y-3">
                    <div className="h-2 w-20 bg-sky-100 rounded"></div>
                    <p className="font-extrabold text-xl text-slate-900 leading-tight">The Gift of Mobility</p>
                    <p className="text-sky-600 font-bold text-lg">2026</p>
                    <div className="pt-4 flex items-center gap-2 text-slate-400 text-xs font-bold tracking-widest uppercase">
                        <FileText size={14} /> Campaign Details
                    </div>
                </div>
            </div>
        </div>
    </div>
</article>
                </div>

                {/* --- SECCIÓN FINAL / FOOTER --- */}
                <footer className="mt-40 text-center py-20 bg-slate-900 rounded-[4rem] text-white px-6">
                    <Heart size={48} className="mx-auto mb-8 text-sky-400" fill="currentColor" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 italic">"Every story is a reminder that mobility changes lives."</h3>
                    <p className="text-xl text-slate-300">Thank you for being part of this journey.</p>
                </footer>
            </div>
        </section>
    );
}