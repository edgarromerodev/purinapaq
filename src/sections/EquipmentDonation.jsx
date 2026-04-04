import React from "react";
import { useInView } from "react-intersection-observer";
import { Truck, Heart, Info } from "lucide-react";

export default function EquipmentDonation() {
    // Hooks para las animaciones siguiendo tu estilo de los demás componentes
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refContent, inView: inViewContent } = useInView({ triggerOnce: true, threshold: 0.1 });

    const categories = [
        "Caña", "Caminante", "Muletas", "Muletas Canadienses", 
        "Silla con Inodoro", "Almohadón", "Ascensor Hoyer", 
        "Equipo de Rehabilitación", "Silla de Ruedas Manual", 
        "Silla de Ruedas Eléctrica", "Audífono", "Bastón Blanco", 
        "Máquina Braille", "Computadora", "Computadora Portátil", 
        "Tableta", "Celular"
    ];

    return (
        <section className="py-24 bg-sky-50 overflow-hidden">
            <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
                
                {/* Cabecera del Componente con Animación */}
                <div 
                    ref={refHeader}
                    className={`max-w-2xl mb-16 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase mb-6">
                        <Heart size={14} /> Donar Equipo
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 ">
                        Transforma una vida con lo que ya no usas
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Si tiene algún dispositivo de movilidad (sillas de ruedas, andadores) u otro dispositivo de asistencia acumulando polvo en el garaje, <strong>¡póngase en contacto con nosotros!</strong> Su donación rompe fronteras.
                    </p>
                </div>

                {/* Grid Principal con Animación */}
                <div 
                    ref={refContent}
                    className={`grid lg:grid-cols-3 gap-12 transition-all duration-1000 delay-200 ${
                        inViewContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}
                >
                    
                    {/* --- FORMULARIO (Ocupa 2 columnas) --- */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-sky-100">
                        <form className="space-y-10">
                            
                            {/* Sección 1: Información Personal */}
                            <div>
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                                    <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm">1</div>
                                    <h3 className="font-bold text-xl text-slate-800 text-sm">Información Personal</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nombre Completo *</label>
                                        <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Dirección</label>
                                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Ciudad *</label>
                                        <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Teléfono *</label>
                                        <input type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 outline-none transition-all" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Correo Electrónico *</label>
                                        <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 outline-none transition-all" />
                                    </div>
                                </div>
                            </div>

                            {/* Sección 2: Logística */}
                            <div>
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                                    <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm">2</div>
                                    <h3 className="font-bold text-xl text-slate-800 text-sm">Preferencia de Recogida</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Día Conveniente *</label>
                                        <input type="date" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Horario Sugerido</label>
                                        <input type="text" placeholder="Ej: Mañanas de 9:00 a 12:00" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Sección 3: Descripción del Equipo */}
                            <div>
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                                    <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm">3</div>
                                    <h3 className="font-bold text-xl text-slate-800 text-sm">¿Qué desea donar?</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {categories.map((item) => (
                                        <label key={item} className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl hover:bg-sky-50 cursor-pointer transition-colors group">
                                            <input type="checkbox" className="w-5 h-5 accent-sky-600" />
                                            <span className="text-xs font-medium text-slate-600 group-hover:text-sky-800">{item}</span>
                                        </label>
                                    ))}
                                    <div className="sm:col-span-2 md:col-span-3 space-y-2 mt-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Otro / Comentarios</label>
                                        <textarea rows="3" placeholder="Describa el estado del equipo..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-600 outline-none resize-none"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full py-4 bg-sky-700 hover:bg-slate-900 text-white rounded-2xl font-bold transition-all shadow-xl shadow-sky-700/20">
                                Enviar Solicitud de Donación
                            </button>
                        </form>
                    </div>

                    {/* --- TARJETA LATERAL DE INFO --- */}
                    <div className="space-y-6">
                        <div className="bg-sky-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <Truck className="mb-6 text-sky-300" size={40} />
                            <h4 className="text-2xl font-bold mb-4">¿Cómo funciona?</h4>
                            <ul className="space-y-4 text-sm text-sky-100/80">
                                <li className="flex gap-3">
                                    <span className="font-bold text-white">1.</span>
                                    Completa el formulario con los detalles del equipo.
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-white">2.</span>
                                    Nos pondremos en contacto para coordinar la logística.
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-white">3.</span>
                                    El equipo es revisado y entregado a quien más lo necesita.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-10 border border-sky-100 shadow-sm">
                            <Info className="mb-4 text-sky-600" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Nota Importante</h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic">
                                "Su donación ayuda a Purinapaq - Movilidad sin fronteras a transformar la vida de personas con discapacidad en todo el mundo."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}