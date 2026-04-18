import React from "react";
import { useInView } from "react-intersection-observer";
import { Quote, Award, Target, Heart } from "lucide-react";

export default function MeetTheDirector() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="director" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                <div 
                    ref={ref}
                    className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    {/* PARTE IZQUIERDA: VISUAL & HERO */}
                    <div className="w-full lg:w-5/12">
                        <div className="relative">
                            {/* Decoración geométrica de fondo */}
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            
                            <div className="relative group">
                                <img 
                                    src="/images/director.webp" 
                                    alt="José Orozco - Executive Director of Purinapaq" 
                                    className="rounded-[40px] shadow-2xl w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                
                                {/* Badge de Cargo */}
                                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-sky-100">
                                    <p className="text-sky-700 font-bold text-sm tracking-widest uppercase text-center">Founder & Executive Director</p>
                                </div>

                                {/* Cita destacada (Blockquote) */}
<div className="relative lg:absolute lg:-bottom-30 lg:left-1/2 lg:-translate-x-1/2 w-[95%] lg:w-[90%] bg-sky-700 text-white p-6 md:p-8 rounded-3xl shadow-2xl mt-6 lg:mt-0 mx-auto">
    <Quote className="text-sky-400 mb-4" size={32} fill="currentColor" />
    <p className="text-lg italic leading-relaxed font-medium">
        “Today, my life has greater meaning… My experience of living with a disability in Canada gave me the opportunity to help those facing a similar reality.”
    </p>
</div>
                            </div>
                        </div>
                    </div>

                    {/* PARTE DERECHA: NARRATIVA (TEXTO DEL CLIENTE) */}
                    <div className="w-full lg:w-7/12 mt-12 lg:mt-0">
                        <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                            Meet the Director
                        </div>
                        
                        <h2 className="text-4xl font-semibold text-slate-900 mb-2">José Orozco</h2>
                        <p className="text-xl text-sky-600 font-medium mb-10">Founder & Executive Director</p>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                José Orozco arrived in Canada in 1994, representing Peru at a Cultural International Festival. 
                                Two years later, a serious workplace accident changed his life, leaving him with a permanent 
                                physical disability. What followed was a long journey of physical, emotional, and professional 
                                recovery that profoundly reshaped his life’s purpose.
                            </p>

                            <p>
                                Through access to rehabilitation, education, and assistive technology in Canada, José was able 
                                to regain his independence and rebuild his path. This experience opened his eyes to the 
                                significant gap in access to resources for people with disabilities in developing countries.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                <div className="flex gap-4">
                                    <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                                        <Target className="text-sky-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">The Mission</h4>
                                        <p className="text-sm">Created in 2007 to restore mobility, dignity, and independence.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                                        <Award className="text-sky-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Global Impact</h4>
                                        <p className="text-sm">Over 40 containers shipped, impacting thousands of lives worldwide.</p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                In 2007, inspired by his personal journey and the support he received, he founded <strong>Purinapaq</strong>, 
                                which in Quechua means “let’s walk together.” The organization was created with a clear 
                                mission: to restore mobility, dignity, and independence through the provision of assistive devices.
                            </p>

                            <p>
                                José combines his professional background in technology with his passion for art and music, as 
                                founder of the musical group Rukanas, to promote inclusion, social awareness, and sustainable change.
                            </p>
                        </div>

                        {/* Footer de la biografía con la creencia profunda */}
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <div className="flex items-center gap-4">
                                <div className="bg-sky-700 p-2 rounded-full">
                                    <Heart className="text-white" size={20} fill="currentColor" />
                                </div>
                                <p className="text-slate-900 font-bold text-xl italic">
                                    "Mobility is a right, and when we walk together, we can transform lives."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}