import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Quote, X, MapPin, CalendarDays, ExternalLink } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { testimonialsData } from "../data/testimonialsData";

export default function TestimonialsSection() {
    const { ref: refGrid, inView: inViewGrid } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    return (
        <>
            <section id="testimonials" className="py-28 bg-slate-50 overflow-hidden">
                <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                    
                    <SectionTitle 
                        text1="Voices of" 
                        text2="Testimonials" 
                    />
                    
                    <p className="text-center text-slate-500 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
                        Every device we deliver is a unique story of freedom. Read the powerful testimonies of those who have regained their dignity and independence.
                    </p>

                    {/* --- GRILLA DE TESTIMONIOS --- */}
                    <div 
                        ref={refGrid}
                        className={`mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-1000 ${
                            inViewGrid ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                        }`}
                    >
{testimonialsData.map((testi) => (
    <div 
        key={testi.id}
        className="group relative bg-slate-100 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 h-[550px] cursor-pointer"
        onClick={() => setSelectedTestimonial(testi)}
    >
        {/* Imagen de Fondo */}
        <img 
            src={testi.image} 
            alt={`Testimonial from ${testi.name}`} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
        />

        {/* Gradiente para legibilidad (Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Contenido sobre la imagen */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">

            {/* Info del Beneficiario */}
            <div className="pt-6 border-t border-white/20">
                <p className="font-bold text-xl text-white mb-2">{testi.name}</p>
                
                <div className="flex flex-wrap gap-4 text-white/70 text-sm mb-6">
                    <span className="flex items-center gap-1.5">
                        <CalendarDays size={14} /> {testi.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {testi.location}
                    </span>
                </div>

                {/* Botón Estilizado */}
                <div className="inline-flex items-center gap-2 text-sky-400 font-semibold group-hover:text-white transition-colors">
                    Read Full Story 
                    <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </div>
    </div>
))}
                    </div>
                </div>
            </section>

            {/* --- MODAL OPTIMIZADO PARA TEXTO LARGO --- */}
            {selectedTestimonial && (
                <div 
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedTestimonial(null)}
                >
                    <div 
                        className="bg-white rounded-[2rem] shadow-2xl w-full max-w-6xl max-h-[85vh] overflow-hidden flex flex-col lg:flex-row relative animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón Cerrar Flotante */}
                        <button 
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute top-5 right-5 z-10 text-slate-500 hover:text-white hover:bg-red-500 transition-all bg-white shadow-lg p-2 rounded-full"
                        >
                            <X size={20} />
                        </button>

                        {/* Lateral Izquierdo: Imagen Vertical */}
                        <div className="w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                            <img 
                                src={selectedTestimonial.image} 
                                alt={selectedTestimonial.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Lateral Derecho: Texto con Scroll */}
                        <div className="w-full lg:w-3/5 p-8 md:p-12 overflow-y-auto">
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-3 leading-tight">
                                    {selectedTestimonial.name}
                                </h2>
                                <div className="flex gap-4 text-slate-500 text-sm">
                                    <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider"><CalendarDays size={14} /> {selectedTestimonial.date}</span>
                                    <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider"><MapPin size={14} /> {selectedTestimonial.location}</span>
                                </div>
                            </div>

                            <div className="space-y-5 text-slate-700 text-lg leading-relaxed italic border-l-4 border-sky-500 pl-6">
                                {selectedTestimonial.fullStory.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            
                            <div className="mt-10 pt-6 border-t border-slate-100 italic text-slate-400 text-sm">
                                "To help those in need get moving..." — Purinapaq
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}