import React from "react";
import { useInView } from "react-intersection-observer";
// Importamos todos los iconos necesarios para evitar errores de definición
import { 
    Users, Heart, Star, Wrench, Globe, 
    CheckCircle2, Mail, Info, MapPin, Phone, MessageSquare 
} from "lucide-react";

export default function VolunteerSection() {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });
    // Ref adicional para la animación del formulario
    const { ref: refForm, inView: inViewForm } = useInView({ triggerOnce: true, threshold: 0.1 });

    const volunteerWays = [
        "Assisting in the collection and sorting of donated equipment",
        "Supporting refurbishment and workshop activities",
        "Helping with logistics, packing, and container shipments",
        "Participating in community outreach and events",
        "Professional skills: Administration, Healthcare, or Communications"
    ];

    return (
        <section id="voluntariado" className="py-28 bg-white overflow-hidden">
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* --- HEADER PRINCIPAL --- */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6 uppercase tracking-wider">
                        <Users size={16} fill="currentColor" /> Become a Volunteer
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                        The Heart of Our Mission
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        At Purinapaq – Mobility Without Borders, our volunteers make it possible to restore independence to individuals living with disabilities.
                    </p>
                </div>

                <div className="space-y-32">
                    
                    {/* --- BLOQUE 1: MAKE AN IMPACT --- */}
                    <div 
                        ref={ref1}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/volunteer-impact.webp" 
                                    alt="Volunteers working" 
                                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
                                    <Star className="mb-4 text-sky-300" size={32} />
                                    <p className="font-medium text-lg italic">
                                        "Volunteering is more than giving time—it’s about creating real change."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">Make a Lasting Impact</h3>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    By volunteering with Purinapaq, you become part of a meaningful mission that transforms lives. Whether you have a few hours or are looking for ongoing involvement, your contribution helps us reach more people.
                                </p>
                                <div className="flex items-center gap-4 p-5 bg-sky-50 rounded-2xl border border-sky-100">
                                    <Heart className="text-sky-600 shrink-0" size={28} />
                                    <p className="text-sky-800 font-medium">Your dedication helps us bring dignity and opportunity to those who need it most.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- BLOQUE 2: WAYS TO INVOLVE --- */}
                    <div 
                        ref={ref2}
                        className={`flex flex-col lg:flex-row-reverse items-center gap-16 transition-all duration-1000 ${
                            inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img 
                                    src="/images/volunteer-work.webp" 
                                    alt="Technical workshop" 
                                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                                />
                                <div className="absolute -top-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl hidden md:block shadow-xl border border-white/10">
                                    <Wrench className="text-sky-400 mb-2" size={32} />
                                    <p className="text-sm font-bold uppercase tracking-widest">Hands-on Support</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6">Ways to Get Involved</h3>
                            <ul className="space-y-4">
                                {volunteerWays.map((way, index) => (
                                    <li key={index} className="flex gap-4 items-start text-lg text-slate-600">
                                        <CheckCircle2 className="text-sky-600 mt-1 shrink-0" size={22} />
                                        <span>{way}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* --- BLOQUE 3: WHY VOLUNTEER --- */}
                    <div 
                        ref={ref3}
                        className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
                            inView3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <img 
                                    src="/images/volunteer-3.webp" 
                                    alt="Community" 
                                    className="rounded-3xl shadow-lg w-full h-80 object-cover"
                                />
                                <img 
                                    src="/images/volunteer-4.webp" 
                                    alt="Impact" 
                                    className="rounded-3xl shadow-lg w-full h-80 object-cover mt-8"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6 text-balance">
                                Join a Compassionate Community
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Gain valuable experience and see firsthand the impact of your efforts. Be the hands and heart that deliver mobility to the world.
                            </p>
                            <button className="px-10 py-5 bg-sky-700 hover:bg-slate-900 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-sky-700/20 active:scale-95 flex items-center gap-3">
                                <Globe size={20} /> Join Us Today
                            </button>
                        </div>
                    </div>

                    {/* --- NUEVO: FORMULARIO Y CONTACTO (Debajo de todo) --- */}
                    <div 
                        ref={refForm}
                        className={`grid lg:grid-cols-3 gap-12 pt-16 transition-all duration-1000 delay-200 ${
                            inViewForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                        }`}
                    >
                        {/* FORMULARIO */}
                        <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm">
                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">Get in Touch</h3>
                                <p className="text-slate-500">
                                    Please complete the form below. We’d love to hear from you and discover how you can join Purinapaq.
                                </p>
                            </div>

                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Your Name *</label>
                                        <input type="text" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">E-mail *</label>
                                        <input type="email" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Subject *</label>
                                        <input type="text" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Comment *</label>
                                        <textarea rows="4" required className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-sky-600 outline-none resize-none"></textarea>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input type="checkbox" required className="w-5 h-5 accent-sky-700 mt-1" />
                                        <span className="text-sm text-slate-600 leading-relaxed">
                                            Yes, I would like the opportunity to receive information from Purinapaq Mobility without borders. 
                                            <br /><span className="text-xs italic text-slate-400">* I understand that I may later withdraw my consent.</span>
                                        </span>
                                    </label>
                                </div>

                                <button type="submit" className="w-full py-5 bg-sky-700 hover:bg-slate-900 text-white rounded-[1.5rem] font-bold text-lg transition-all shadow-xl shadow-sky-700/20 active:scale-[0.98] flex items-center justify-center gap-3">
                                    <Mail size={20} /> Send Message
                                </button>
                            </form>
                        </div>

                        {/* INFORMACIÓN DE CONTACTO / LEGAL */}
                        <div className="space-y-8">
                            <div className="bg-sky-800 rounded-[2.5rem] p-10 text-white shadow-xl">
                                <Info className="mb-6 text-sky-300" size={40} />
                                <h4 className="text-xl font-bold mb-6">Purinapaq Mobility</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <MapPin className="text-sky-400 shrink-0" size={20} />
                                        <p className="text-sm text-sky-100">
                                            306-30 Elsinore Path<br />
                                            Etobicoke, ON M8V 3Z6
                                        </p>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <Phone className="text-sky-400 shrink-0" size={20} />
                                        <p className="text-sm text-sky-100">(416) 938 9311</p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-sky-700">
                                    <p className="text-xs text-sky-200/70 italic">
                                        Purinapaq Mobility without borders is a registered charity # 742640535RR0001
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-[2.5rem] p-10 border border-sky-100 shadow-sm">
                                <MessageSquare className="mb-4 text-sky-600" size={40} />
                                <h4 className="text-lg font-bold text-slate-900 mb-4">We'd love to hear from you!</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Feel free to get in touch with any questions or comments, or to discover how you can join Purinapaq - Mobility without borders in transforming the lives of People with disabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}