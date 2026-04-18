import React, { useState } from "react";
import { X, MapPin, CalendarDays, Quote } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonialsData";
import SectionTitle from "../components/SectionTitle";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    return (
        <section id="testimonials" className="py-28 bg-slate-50 overflow-hidden">
    
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                <SectionTitle
                    text1="Voices of"
                    text2="Testimonials"
                />

                <p className="text-center text-slate-500 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
                    Every device we deliver is a unique story of freedom. Read the powerful testimonies of those who have regained their dignity and independence.
                </p>

        
                <div className="mt-20">
                    <Marquee
                        gradient={true}
                        gradientColor={[248, 250, 252]} 
                        speed={35}
                        pauseOnHover={true}
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <div 
                                key={`top-${index}`} 
                                onClick={() => setSelectedTestimonial(testimonial)}
                                className="cursor-pointer"
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </Marquee>

                 
                    <Marquee
                        className="mt-6"
                        gradient={true}
                        gradientColor={[248, 250, 252]}
                        speed={35}
                        direction="right"
                        pauseOnHover={true}
                    >
                        {/* Invertimos el array para que no se vean iguales los dos niveles */}
                        {[...testimonialsData].reverse().map((testimonial, index) => (
                            <div 
                                key={`bottom-${index}`} 
                                onClick={() => setSelectedTestimonial(testimonial)}
                                className="cursor-pointer"
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

            {/* --- MODAL PARA HISTORIA COMPLETA --- */}
  {selectedTestimonial && (
    <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
        onClick={() => setSelectedTestimonial(null)}
    >
        <div 
            className="bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden relative animate-in slide-in-from-bottom-8 duration-500"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Botón Cerrar */}
            <button 
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 z-10 text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all"
            >
                <X size={24} />
            </button>

            <div className="flex flex-col items-center p-8 md:p-12 overflow-y-auto max-h-[85vh]">
                
                {/* Contenedor de la Imagen Redonda (Avatar) */}
                <div className="relative mb-8">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-sky-100 p-1 shadow-xl">
                        <img 
                            src={selectedTestimonial.image} 
                            alt={selectedTestimonial.name} 
                            className="w-full h-full object-cover rounded-full"
                            // Esto evita que se vea borroso al no forzar un tamaño gigante
                        />
                    </div>
                    {/* Adorno decorativo (Comilla) */}
                    <div className="absolute -bottom-2 -right-2 bg-sky-500 text-white p-3 rounded-full shadow-lg">
                        <Quote size={20} fill="currentColor" />
                    </div>
                </div>

                {/* Cabecera de Texto */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-2">
                        {selectedTestimonial.name}
                    </h2>
                    <span className="inline-flex items-center gap-2 text-sky-600 font-semibold uppercase tracking-widest text-xs bg-sky-50 px-4 py-1.5 rounded-full">
                        <MapPin size={14} /> {selectedTestimonial.handle}
                    </span>
                </div>

                {/* Cuerpo del Testimonio */}
                <div className="max-w-2xl w-full space-y-6">
                    {selectedTestimonial.fullStory.map((paragraph, index) => (
                        <p 
                            key={index} 
                            className="text-slate-700 text-lg leading-relaxed text-center md:text-left italic"
                        >
                            {index === 0 ? `"${paragraph}` : paragraph}
                            {index === selectedTestimonial.fullStory.length - 1 ? `"` : ""}
                        </p>
                    ))}
                </div>

                {/* Firma o Cierre decorativo */}
                <div className="mt-10 pt-8 border-t border-slate-100 w-full text-center">
                    <p className="text-slate-400 text-sm font-medium">
                        Testimony shared with Purinapaq
                    </p>
                </div>
            </div>
        </div>
    </div>
)}
        </section>
    );
}