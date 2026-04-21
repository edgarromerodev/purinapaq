import React from "react";
import { useInView } from "react-intersection-observer";
import { BookOpen, Camera, Newspaper, ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NewsStories() {
    const navigate = useNavigate();
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });

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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6 ">
                        <BookOpen size={16} fill="currentColor" aria-hidden="true" /> News & Stories
                    </div>
                    <h2 id="stories-main-title" className="text-3xl  font-semibold text-slate-900 mb-8">
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

                    {/* --- HISTORIA 2: UPDATES (Imagen Izquierda) --- */}
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
                                Stay informed about our recent activities, including equipment collections, community
                                workshops, and international shipments. We share updates from the field.
                            </p>
                            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100" role="status">
                                <Newspaper className="text-sky-600" size={28} aria-hidden="true" />
                                <p className="text-slate-700 font-medium">New shipment arrived in South America – April 2026</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <figure className="relative">
                                <img 
                                    src="/images/story-updates.webp" 
                                    alt="Community workshop where wheelchairs are being refurbished" 
                                    loading="lazy" 
                                    className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-sky-100">
                                    <Camera className="text-sky-600" size={24} aria-hidden="true" />
                                </div>
                            </figure>
                        </div>
                    </article>

                    {/* --- HISTORIA 3: JOURNEY (Imagen Derecha) --- */}
                    <article 
                        ref={ref3}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                        aria-labelledby="story-3-title"
                    >
                        <div className="w-full lg:w-1/2">
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
                        <div className="w-full lg:w-1/2">
                            <figure className="relative">
                                <img 
                                    src="/images/story-journey.webp" 
                                    alt="Logistics container being loaded for international shipment" 
                                    loading="lazy" 
                                    className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover"
                                />
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