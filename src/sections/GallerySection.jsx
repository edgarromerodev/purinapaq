import React from "react";
import { ImageIcon } from "lucide-react";

export default function GallerySection() {
    const galleryItems = [
        { title: "Local Support", description: "Direct assistance to families in our immediate community.", image: "/images/gallery1.webp" },
        { title: "Mobility First", description: "Delivering customized wheelchairs for specific physical needs.", image: "/images/gallery2.webp" },
        { title: "Expert Training", description: "Specialized workshops for our local volunteers and staff.", image: "/images/gallery3.webp" },
        { title: "Global Vision", description: "Extending our reach to ensure mobility has no borders.", image: "/images/gallery4.webp" },
        { title: "Future Leaders", description: "Engaging youth in community service and social impact.", image: "/images/gallery13.webp" },
        { title: "Technical Care", description: "Maintenance and repair of donated mobility equipment.", image: "/images/gallery14.webp" },
        { title: "Heart of Service", description: "The human connection behind every equipment delivery.", image: "/images/gallery7.webp" },
        { title: "United Effort", description: "Collaborating with local authorities for better logistics.", image: "/images/gallery8.webp" },
        { title: "Safe Mobility", description: "Ensuring every device meets safety and comfort standards.", image: "/images/gallery9.webp" },
        { title: "Community Joy", description: "Celebrating the independence gained through mobility.", image: "/images/gallery10.webp" },
        { title: "Donor Impact", description: "Transparency in how every donation changes a life.", image: "/images/gallery11.webp" },
        { title: "New Horizons", description: "Expanding our programs to new regions every year.", image: "/images/gallery12.webp" },
    ];

    // Función para dividir el array en grupos de 4
    const rows = [];
    for (let i = 0; i < galleryItems.length; i += 4) {
        rows.push(galleryItems.slice(i, i + 4));
    }

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
                
                {/* --- HEADER --- */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6 ">
                        <ImageIcon size={16} /> Our Gallery
                    </div>
                    <h2 className="text-3xl  font-semibold text-slate-900 mb-4">
                        Moments of Impact
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        A visual journey of our mission to provide mobility without borders and the lives we've touched together.
                    </p>
                </div>

                {/* --- CONTENEDOR DE FILAS --- */}
                <div className="flex flex-col gap-8">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col md:flex-row items-center gap-4 h-[400px] md:h-[450px] w-full mx-auto">
                            {row.map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="relative group flex-grow transition-all duration-700 ease-in-out w-full md:w-24 h-full overflow-hidden rounded-[2.5rem] hover:md:w-[60%] border border-slate-100 shadow-md"
                                >
                                    {/* Imagen de Fondo */}
                                    <img 
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={item.image}
                                        alt={item.title} 
                                        loading="lazy"
                                    />
                                    
                                    {/* Overlay de color Purinapaq */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                        <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-sky-100 text-xs md:text-sm max-w-xs leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Título Vertical (Cerrado) */}
                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:rotate-180 md:[writing-mode:vertical-lr] group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                        <span className="text-white/80 font-bold tracking-widest text-[11px] uppercase whitespace-nowrap drop-shadow-md">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}