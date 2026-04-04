import React from "react";
import { useInView } from "react-intersection-observer";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import DonationCTA from "./DonationCTA";

export default function MissionVision() {
    const { ref: refMision, inView: inViewMision } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refVision, inView: inViewVision } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>

        
        <section className="py-28 bg-white overflow-hidden">
            <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
                
                {/* Título unificado para la sección */}
                <SectionTitle 
                    text1="Propósito y Metas" 
                    text2="Nuestra Misión y Visión" 
                    text3="En Purinapaq, trabajamos con un objetivo claro: transformar la realidad de la discapacidad a través de la movilidad."
                />

                <div className="mt-24 space-y-32">
                    
                    {/* --- SECCIÓN MISIÓN (Imagen Izquierda) --- */}
                    <div 
                        ref={refMision}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inViewMision ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        {/* Imagen */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/mision-purinapaq.webp" 
                                    alt="Nuestra Misión" 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-6 rounded-2xl hidden md:block shadow-xl">
                                    <Target size={40} className="opacity-20 absolute right-4 top-4" />
                                    <p className="font-bold text-xl mb-1">Impacto Directo</p>
                                    <p className="text-sm opacity-90">Recuperando la autonomía</p>
                                </div>
                            </div>
                        </div>

                        {/* Texto Misión */}
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                Nuestra Misión
                            </div>
                            <h3 className="text-3xl  font-semibold text-slate-900 mb-6">
                                Ayudar a recuperar la movilidad a quien más lo necesita.
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Adquirimos, reparamos y distribuimos sistemáticamente equipos de rehabilitación y asistencia para la movilidad destinados a personas con discapacidad.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium text-lg italic border-l-4 border-sky-700 pl-4">
                                "Ofrecemos a estas comunidades el conocimiento y las herramientas necesarias para ser independientes y autosuficientes."
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Adquisición", "Reparación", "Distribución", "Capacitación"].map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                                        <CheckCircle2 size={18} className="text-sky-700" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- SECCIÓN VISIÓN (Imagen Derecha) --- */}
                    <div 
                        ref={refVision}
                        className={`flex flex-col lg:flex-row-reverse items-center gap-16 transition-all duration-1000 ${
                            inViewVision ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}
                    >
                        {/* Imagen */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/vision-purinapaq.webp" 
                                    alt="Nuestra Visión" 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl hidden md:block shadow-xl">
                                    <Eye size={40} className="opacity-20 absolute right-4 top-4" />
                                    <p className="font-bold text-xl mb-1">Acceso Universal</p>
                                    <p className="text-sm opacity-90">Un mundo sin restricciones</p>
                                </div>
                            </div>
                        </div>

                        {/* Texto Visión */}
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                Nuestra Visión
                            </div>
                            <h3 className="text-3xl  font-semibold text-slate-900 mb-6">
                                Que la economía no sea una barrera para soñar.
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                Visualizamos un futuro donde todas las personas con discapacidad en regiones vulnerables tengan **fácil acceso al equipo de movilidad que necesitan**.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Creemos firmemente que todos tenemos derecho a vivir la vida que elegimos y a cumplir nuestros sueños sin restricciones debidas a nuestras condiciones físicas o circunstancias económicas.
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