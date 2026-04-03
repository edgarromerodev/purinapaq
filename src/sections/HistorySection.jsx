import React from "react";
import { useInView } from "react-intersection-observer";
import { History, Globe, Heart, Quote } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import DonationCTA from "./DonationCTA";

export default function HistorySection() {
    // Hooks para animaciones individuales por bloque
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>

        
        <section id="historia" className="py-28 bg-white overflow-hidden">
            <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
                
                <SectionTitle 
                    text1="Nuestra Trayectoria" 
                    text2="Historia de Purinapaq" 
                    text3="Desde 2007, transformando vidas a través de la movilidad y la dignidad humana."
                />

                <div className="mt-24 space-y-32">
                    
                    {/* --- BLOQUE 1: EL ORIGEN (Imagen Izquierda) --- */}
                    <div 
                        ref={ref1}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/jose-orozco.webp" 
                                    alt="José Orozco Fundador" 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
                                    <Quote className="mb-4 opacity-30" size={32} />
                                    <p className="italic font-medium">"Purinapaq nació de una experiencia personal que transformó mi visión del mundo."</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                                El Origen (2007)
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6 text-balance">
                                Fundada por la experiencia y el corazón de José Orozco.
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Purinapaq fue fundada en **2007 por José Orozco**, un inmigrante peruano en Canadá. La organización nació de su propia historia: a principios de los 90, José sufrió un accidente laboral que lo dejó en silla de ruedas por un largo periodo.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Esta vivencia le permitió conocer de cerca los desafíos de la discapacidad e inspirarse para ayudar a quienes enfrentan dificultades similares en su Perú natal y otros países, donde el acceso a equipos es casi imposible sin apoyo.
                            </p>
                        </div>
                    </div>

                    {/* --- BLOQUE 2: IMPACTO INTERNACIONAL (Imagen Derecha) --- */}
                    <div 
                        ref={ref2}
                        className={`flex flex-col lg:flex-row-reverse items-center gap-16 transition-all duration-1000 ${
                            inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/impacto-global.webp" 
                                    alt="Contenedores de ayuda" 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl hidden md:block shadow-xl text-center min-w-[200px]">
                                    <p className="text-4xl font-bold text-sky-400">+40</p>
                                    <p className="text-sm uppercase tracking-widest font-semibold">Contenedores Enviados</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                                Expansión y Logros
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                Un esfuerzo internacional con impacto social significativo.
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Lo que comenzó como una misión personal es hoy un movimiento global. Hemos enviado más de **40 contenedores completos** de equipos a diversos países, trabajando con organizaciones locales y talleres apoyados directamente por Purinapaq.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                También apoyamos localmente en Canadá a veteranos, personas de bajos ingresos y recién llegados que no tienen acceso a ayudas gubernamentales, asegurando que recuperen su independencia.
                            </p>
                        </div>
                    </div>

                    {/* --- BLOQUE 3: EL DON DE LA MOVILIDAD 2026 (Imagen Izquierda) --- */}
                    <div 
                        ref={ref3}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/iniciativa-2026.webp" 
                                    alt="Iniciativa 2026" 
                                    className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                />
                                <div className="absolute inset-0 bg-sky-900/10 rounded-3xl"></div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                Iniciativa 2026
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                "El Don de la Movilidad": Nuestra meta más ambiciosa.
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Para el 2026, hemos reunido equipo para llenar **tres contenedores de 40 pies**, incluyendo más de 750 sillas de ruedas y 400 dispositivos pediátricos para quienes están en listas de espera.
                            </p>
                            <div className="bg-sky-50 p-6 rounded-2xl border-l-4 border-sky-600 mb-6">
                                <p className="text-slate-700 font-medium leading-relaxed">
                                    "Cada dispositivo representa una vida transformada, una familia empoderada y un niño con libertad plena."
                                </p>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Les invitamos a unirse a nosotros para brindar el don de la movilidad a quienes más lo necesitan.
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