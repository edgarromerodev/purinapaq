import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import { Target, Eye, History } from "lucide-react"; // O usa iconos similares

export default function AboutSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
        <section id="sobre-nosotros" className="py-20 bg-white overflow-hidden">
            <div 
                ref={ref}
                className={`w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto reveal-left ${inView ? "reveal-active" : ""}`}
            >
                
                {/* Título de la Sección */}
                <SectionTitle 
                    text1="Sobre Nosotros" 
                    text2="Movilidad Sin Fronteras" 
                    text3="Desde 2007, transformamos vidas entregando independencia y dignidad a través de equipos de movilidad en comunidades vulnerables."
                />

                {/* Bloques de Misión y Visión (Grid de 2 columnas) */}

                {/* 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-700 mb-6">
                            <Target size={28} />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-4">Nuestra Misión</h4>
                        <p className="text-slate-600 leading-relaxed">
                            Ayudar a quienes lo necesitan a recuperar su movilidad. Adquirimos, reparamos y distribuimos sistemáticamente equipos de rehabilitación y asistencia para personas con discapacidad, ofreciendo herramientas y conocimiento.
                        </p>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-700 mb-6">
                            <Eye size={28} />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-4">Nuestra Visión</h4>
                        <p className="text-slate-600 leading-relaxed">
                            Que todas las personas con discapacidad en regiones con dificultades económicas tengan fácil acceso al equipo de movilidad que necesitan, cumpliendo sus sueños sin restricciones.
                        </p>
                    </div>
                </div>
                
                */}


                {/* Sección de Historia (Imagen y Texto) */}
                <div className="mt-24 flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <img 
                                src="/images/fundador-jose.webp" 
                                alt="Fundación Purinapaq" 
                                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
                                <p className="italic font-medium">"Creemos que la movilidad es más que una necesidad física: es independencia, dignidad e inclusión."</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                            Nuestra Historia
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Fundada por la experiencia y el corazón.
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Purinapaq fue fundada en **2007 por José Orozco**, un inmigrante peruano en Canadá. Tras un accidente laboral en los 90 que lo dejó en silla de ruedas, José experimentó los desafíos de la discapacidad.
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Esta experiencia lo inspiró a ayudar a quienes enfrentan dificultades similares en Perú y otros países en desarrollo, donde el acceso a dispositivos básicos de movilidad suele ser imposible sin apoyo económico.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-sky-700 hover:bg-sky-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                <History size={20} />
                                Leer historia completa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}