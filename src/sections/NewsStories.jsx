import React from "react";
import { useInView } from "react-intersection-observer";
import { BookOpen, Camera, Newspaper, ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NewsStories() {
    const navigate = useNavigate();
    // Referencias para las animaciones
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });
    // Nueva referencia para el bloque de 3 imágenes
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section 
            id="noticias" 
            className="py-28 bg-white overflow-hidden" 
            aria-labelledby="stories-main-title"
        >
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* --- HEADER (SEO: h2 principal con descripción) --- */}
                <header 
                    ref={refHeader}
                    className={`max-w-4xl mb-24 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-6 ">
                        <BookOpen size={16} fill="currentColor" aria-hidden="true" /> News & Stories
                    </div>
                    <h2 id="stories-main-title" className="text-3xl font-semibold text-slate-900 mb-8">
                        Moments that define our work.
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        At Purinapaq Mobility Without Borders, every initiative, every shipment, and every donation
                        has a story behind it. This section shares the lives that are transformed through mobility.
                    </p>
                </header>

                <div className="space-y-32">
                    
                    {/* --- HISTORIA 1: IMPACT (Imagen Derecha) --- */}
                    <article 
                        ref={ref1}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                        aria-labelledby="story-1-title"
                    >
                        <div className="w-full lg:w-1/2">
                            <h3 id="story-1-title" className="text-2xl font-semibold text-slate-900 mb-6">Stories of Impact</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Discover the journeys of individuals who have regained independence through access to
                                mobility devices. From students returning to school to families experiencing renewed hope.
                            </p>
                            <button onClick={() => navigate("/history")}  
                                className="group flex items-center gap-2 text-sky-700 font-bold hover:text-sky-900 transition-colors"
                                aria-label="Read more about our impact stories"
                            >
                                View all stories <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <figure className="relative">
                                <img 
                                    src="/images/story-impact.webp" 
                                    alt="A student smiling with their new mobility device" 
                                    loading="lazy" 
                                    className="rounded-[2.5rem] shadow-2xl w-full h-[480px] object-cover"
                                />
                                <figcaption className="sr-only">Student returning to school after receiving a donation</figcaption>
                            </figure>
                        </div>
                    </article>

                    {/* --- HISTORIA 2: UPDATES (Imagen Izquierda - 2 FOTOS) --- */}
                    <article 
                        ref={ref2}
                        className={`flex flex-col lg:flex-row-reverse items-center gap-16 transition-all duration-1000 ${
                            inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}
                        aria-labelledby="story-2-title"
                    >
                        <div className="w-full lg:w-1/2">
                            <h3 id="story-2-title" className="text-2xl font-semibold text-slate-900 mb-6">Latest Updates</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Stay informed about our recent activities, including equipment collections and international shipments.
                            </p>
                            
                            <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100" role="status">
                                <Newspaper className="text-sky-600 flex-shrink-0 mt-1" size={28} aria-hidden="true" />
                                <div>
                                    <p className="text-slate-700 font-semibold text-lg">Last shipment arrived in South America – February 2026</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4 group">
                                <img 
                                    src="/images/07-embarque-contenedor-1.webp" 
                                    alt="07 embarque contenedor 1" 
                                    className="rounded-[2rem] shadow-xl w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                                <img 
                                    src="/images/08-recepcion-equipo-destino-7b.webp" 
                                    alt="08 recepcion equipo destino 7b" 
                                    className="rounded-[2rem] shadow-xl w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </article>

                    {/* --- BLOQUE ABRIL 2026 (Imagen Derecha - 1 FOTO GRANDE) --- */}
                    <article 
                        ref={ref3}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Upcoming Shipments</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Progress of our current logistics and upcoming deliveries for April.
                            </p>

                            <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100" role="status">
                                <Newspaper className="text-sky-600 flex-shrink-0 mt-1" size={28} aria-hidden="true" />
                                <div>
                                    <p className="text-slate-700 font-semibold text-lg italic">
                                        "New shipment in transit - April 2026"
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative group">
                                <img 
                                    src="/images/57-embarque-contenedor-3.webp" 
                                    alt="57 embarque contenedor 3" 
                                    className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                                    loading="lazy"
                                />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-sky-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Camera className="text-sky-600" size={24} />
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* --- HISTORIA 3: JOURNEY (ÚLTIMA - 3 FOTOS) --- */}
                    <article 
                        ref={ref4} // Usamos ref4 para esta nueva sección
                        className={`flex flex-col gap-12 transition-all duration-1000 ${
                            inView4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        aria-labelledby="story-3-title"
                    >
                        <div className="max-w-3xl">
                            <h3 id="story-3-title" className="text-2xl font-semibold text-slate-900 mb-6">From Collection to Delivery</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Follow the journey of donated equipment, from local collection and refurbishment to
                                distribution around the world. We provide a transparent view of real change.
                            </p>
                            <div className="mt-8 flex gap-3 items-center text-sky-800 font-semibold bg-sky-50 p-4 rounded-xl w-fit">
                                <Heart size={20} fill="currentColor" />
                                Every story is a reminder that mobility changes lives.
                            </div>
                        </div>

                        {/* --- Diseño de TRES imágenes --- */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
                            {/* Imagen 1: Toronto */}
                            <figure className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3]">
                                <img 
                                    src="/images/45-recojo-de-equipos-toronto.webp" 
                                    alt="45 recojo de equipos Toronto" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                    loading="lazy"
                                />
                                <figcaption className="absolute bottom-4 left-4 text-white text-xs bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">Toronto</figcaption>
                            </figure>

                            {/* Imagen 2: Destino */}
                            <figure className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3]">
                                <img 
                                    src="/images/53-recepcion-equipo-destino-5.webp" 
                                    alt="53 recepcion equipo destino 5" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                    loading="lazy"
                                />
                                <figcaption className="absolute bottom-4 left-4 text-white text-xs bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">Recepción Destino 5</figcaption>
                            </figure>

                            {/* Imagen 3: Christian (Ocupa 2 columnas en móvil/tablet para equilibrar, 1 en desktop) */}
                            <figure className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3] sm:col-span-2 lg:col-span-1">
                                <img 
                                    src="/images/15-christian.webp" 
                                    alt="15 christian" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                    loading="lazy"
                                />
                                <figcaption className="absolute bottom-4 left-4 text-white text-xs bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">Christian</figcaption>
                            </figure>
                        </div>
                    </article>

                </div>

                {/* --- FOOTER DE SECCIÓN --- */}
                <footer className="mt-24 text-center border-t border-slate-100 pt-16">
                    <p className="text-2xl font-semibold text-slate-800 italic">
                        "Thank you for being part of this journey."
                    </p>
                </footer>
            </div>
        </section>
    );
}