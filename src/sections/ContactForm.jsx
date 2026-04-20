import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";
import { sendForm, PURINAPAQ_EMAILS } from "../utils/formConfig"; 

export default function ContactForm() {
    const { ref: refLeft, inView: inViewLeft } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: refRight, inView: inViewRight } = useInView({ triggerOnce: true, threshold: 0.1 });

    const [isSubmitting, setIsSubmitting] = useState(false);
    // Cambiamos showSuccessModal por status (null, 'success', 'error')
    const [status, setStatus] = useState(null);

    // Auto-cerrar la notificación después de 5 segundos
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const formData = new FormData(e.target);
        const subject = formData.get("subject") || "General Inquiry from Website";

        try {
            const result = await sendForm(formData, PURINAPAQ_EMAILS.CONTACT, subject);

            if (result.success) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="py-24 bg-sky-50 overflow-hidden relative">
            <div className="w-full max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    
                    {/* --- LADO IZQUIERDO: FORMULARIO --- */}
                    <div 
                        ref={refLeft}
                        className={`bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-sky-100 transition-all duration-1000 ${
                            inViewLeft ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Have questions?</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            We'd love to hear from you! Contact us to find out how you can join <span className="font-semibold text-sky-700">Purinapaq</span>.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1">Your name</label>
                                    <input type="text" name="name" placeholder="e.g. John Doe" required className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1">Email address</label>
                                    <input type="email" name="email" placeholder="email@example.com" required className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1">Subject</label>
                                <input type="text" name="subject" placeholder="How can we help you?" className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1">Message</label>
                                <textarea name="message" rows="4" placeholder="Write your message here..." required className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all resize-none" />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`group w-full py-4 ${isSubmitting ? 'bg-slate-400' : 'bg-sky-700 hover:bg-sky-800'} text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-700/25 active:scale-[0.98]`}
                            >
                                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                                    {/* --- LADO DERECHO: INFO DE CONTACTO --- */}
                    <div 
                        ref={refRight}
                        className={`bg-sky-900 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden text-white flex flex-col justify-between shadow-xl transition-all duration-1000 delay-200 ${
                            inViewRight ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-10">Connect with us</h3>
                            
                            <div className="space-y-10">
                                <address className="not-italic space-y-10">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 bg-white/10 group-hover:bg-sky-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-sky-300 transition-colors">
                                            <Mail size={24} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-sky-300 text-[11px] font-bold uppercase tracking-wider">Write to us</p>
                                            <a href={`mailto:${PURINAPAQ_EMAILS.CONTACT}`} className="text-lg font-medium hover:text-sky-300 transition-colors">{PURINAPAQ_EMAILS.CONTACT}</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 bg-white/10 group-hover:bg-sky-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-sky-400 transition-colors">
                                            <Phone size={24} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-sky-300 text-[11px] font-bold uppercase tracking-wider">Call us</p>
                                            <a href="tel:+14169389311" className="text-lg font-medium hover:text-sky-300 transition-colors">(416) 938 9311</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 bg-white/10 group-hover:bg-sky-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-sky-300 transition-colors">
                                            <MapPin size={24} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-sky-300 text-[11px] font-bold uppercase tracking-wider">Location</p>
                                            <p className="text-base opacity-90 leading-relaxed font-light">
                                                306-30 Elsinore Path<br />
                                                Etobicoke, ON M8V 3Z6, Canada
                                            </p>
                                        </div>
                                    </div>
                                </address>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                            <p className="text-xs text-sky-100/60 italic leading-relaxed">
                                Purinapaq is a registered charitable organization under number <span className="font-semibold">#742640535RR0001</span>
                            </p>
                        </div>
                    </div>




                   
                </div>
            </div>

            {/* NOTIFICACIÓN FLOTANTE (Igual al de Donaciones) */}
            {status && (
                <div 
                    className={`fixed top-10 right-10 z-[100] p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-5 duration-300 ${
                        status === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
                    }`}
                >
                    {status === "success" ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                    <div>
                        <p className="font-bold">{status === "success" ? "Request Sent!" : "Submission Error"}</p>
                        <p className="text-sm opacity-90">
                            {status === "success" 
                                ? "Your message has been received successfully." 
                                : "Something went wrong. Please try again later."}
                        </p>
                    </div>
                    <button onClick={() => setStatus(null)} className="ml-2 hover:opacity-70 transition-opacity">
                        <X size={18} />
                    </button>
                </div>
            )}
        </section>
    );
}