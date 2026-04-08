import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import { History } from "lucide-react"; 
import { useNavigate } from "react-router-dom";


export default function AboutSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const navigate = useNavigate();

    return (
        <section 
            id="about" 
            className="py-20 bg-white overflow-hidden"
            aria-labelledby="about-heading"
        >
            <div 
                ref={ref}
                className={`w-full max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto transition-all duration-1000 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
                
                {/* Título de la Sección - Manteniendo la estructura de SectionTitle */}
                <SectionTitle 
                    text1="About Us" 
                    text2="Purinapaq" 
                    text3="Mobility Without Borders"
                />

                <div className="mt-24 flex flex-col lg:flex-row items-center gap-16">
                    {/* COLUMNA IZQUIERDA: IMAGEN CON ACCESIBILIDAD */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <img 
                                src="/images/fundador-jose.webp" 
                                alt="Founder José Orozco in a wheelchair, illustrating the lived experience behind Purinapaq" 
                                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                                loading="lazy"
                            />
                            {/* Quote Box - Se mantiene con tus clases de diseño */}
                            <div 
                                className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl"
                                role="complementary"
                            >
                                <p className="italic font-medium">
                                    "A commitment to dignity and inclusion, both at home and abroad."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: CONTENIDO (Texto original en inglés) */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-bold mb-6">
                            OUR MISSION
                        </div>
                        
                        <h3 id="about-heading" className="text-3xl md:text-3xl font-semibold text-slate-900 mb-6">
                            Transforming lives through mobility
                        </h3>
                        
                        <div className="space-y-6">
                            <p className="text-slate-600 leading-relaxed">
                                <strong>Purinapaq - Mobility Without Borders</strong> is a Canadian registered charity dedicated to transforming lives by recovering, refurbishing, and redistributing mobility and assistive devices to people with disabilities in developing countries and underserved communities across Canada.
                            </p>
                            
                            <p className="text-slate-600 leading-relaxed">
                                Founded in <strong>2007 by José Orozco</strong>, a Peruvian immigrant to Canada, Purinapaq was born from lived experience. After a workplace accident, José gained firsthand insight into the barriers faced by people with disabilities, turning a personal commitment into an international humanitarian initiative.
                            </p>

                            <p className="text-slate-600 leading-relaxed">
                                Since <strong>January 2021</strong>, we have delivered 22 containers of aid, ensuring equipment is properly maintained through community-based workshops, supporting both international partners and low-income individuals in Canada.
                            </p>
                        </div>
                        
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => navigate("/history")} 
                                className="bg-sky-700 hover:bg-sky-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95"
                                aria-label="Learn more about our full history"
                            >
                                <History size={20} />
                                View Our History
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO & Lector de Pantalla (Estructura de datos invisible) */}
            <div className="sr-only">
                <p>Purinapaq is a Canadian charity founded by José Orozco in 2007. We focus on independence, dignity, and inclusion by providing mobility aids to veterans and vulnerable communities.</p>
            </div>
        </section>
    );
}