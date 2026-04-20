import React, { useState, useEffect } from "react"; // Añadimos useState y useEffect
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Heart, Send, CheckCircle2, AlertCircle, X, Loader2 } from "lucide-react";
import { sendForm, PURINAPAQ_EMAILS } from "../utils/formConfig"; 

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const location = useLocation();
    const navigate = useNavigate();

    // --- ESTADOS PARA LA NOTIFICACIÓN ---
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    // Auto-cerrar la notificación después de 5 segundos
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleNavigation = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                }, 300);
            } else {
                const element = document.getElementById(targetId);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    // --- LÓGICA DE ENVÍO DE SUSCRIPCIÓN ---
    const handleSubscription = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const formData = new FormData(e.target);
        
        try {
            // Usamos el email de contacto o uno específico de NEWSLETTER si lo tienes en tu config
            const result = await sendForm(formData, PURINAPAQ_EMAILS.CONTACT, "New Newsletter Subscription");

            if (result.success) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Subscription error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="w-full bg-slate-50 pt-20 text-slate-600 border-t border-slate-200 relative">
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-200">
                    
                    {/* Columna 1: Branding (Igual) */}
                    <div className="flex flex-col">
                        <img className="h-10 w-auto mb-6 self-start" src="/images/logo-purinapaq.webp" alt="Purinapaq" loading="lazy" />
                        <p className="text-sm leading-relaxed italic mb-6">"To help those in need get moving..."</p>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 inline-block shadow-sm">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Charity No.</p>
                            <p className="text-sm font-bold text-sky-800 tracking-tight">742640535RR0001</p>
                        </div>
                    </div>

                    {/* Columna 2: Navigation (Igual) */}
                    <nav aria-label="Footer Navigation">
                        <h2 className="font-semibold mb-6 text-slate-900">Footer Navigation</h2>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/privacy" className="hover:text-sky-700 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover:bg-sky-600 transition-colors"></span>Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-sky-700 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover:bg-sky-600 transition-colors"></span>Terms</Link></li>
                            <li><a href="#faq" onClick={(e) => handleNavigation(e, "#faq")} className="hover:text-sky-700 transition-colors flex items-center gap-2 group cursor-pointer"><span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover:bg-sky-600 transition-colors"></span>FAQs</a></li>
                        </ul>
                    </nav>

                    {/* Columna 3: Contact (Igual) */}
                    <div>
                        <h2 className="font-semibold mb-6 text-slate-900">Contact</h2>
                        <address className="not-italic space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-sky-700 shrink-0 mt-0.5" />
                                <p>306-30 Elsinore Path, Etobicoke, ON, Canada</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-sky-700 shrink-0" />
                                <a href="tel:+14169389311" className="hover:text-sky-700 transition-colors">(416) 938-9311</a>
                            </div>
                        </address>
                    </div>

                    {/* Columna 4: Subscription Signup INTEGRADO */}
                    <div>
                        <h2 className="font-semibold mb-6 text-slate-900">Subscription Signup</h2>
                        <p className="text-xs text-slate-500 mb-4 leading-relaxed">Stay updated with our latest news and impact reports.</p>
                        
                        <form onSubmit={handleSubscription} className="relative group" aria-label="Newsletter signup">
                            <input 
                                type="email" 
                                name="email" // Importante para FormData
                                placeholder="Your email address" 
                                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all shadow-sm"
                                required
                                disabled={isSubmitting}
                            />
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                aria-label="Subscribe"
                                className="absolute right-2 top-1.5 bg-sky-700 hover:bg-sky-800 text-white p-1.5 rounded-lg transition-colors active:scale-90 flex items-center justify-center min-w-[32px]"
                            >
                                {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar (Igual) */}
                <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium tracking-wide">
                    <p className="text-slate-400">© {currentYear} Purinapaq. All rights reserved.</p>
                    <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                        <span className="text-slate-400 uppercase">Developed with</span>
                        <Heart size={12} className="text-red-500 fill-current animate-pulse" />
                        <span className="text-slate-400 uppercase">for Purinapaq</span>
                    </div>
                </div>
            </div>

            {/* NOTIFICACIÓN FLOTANTE (ESTILO DONACIONES/CONTACTO) */}
            {status && (
                <div className={`fixed bottom-10 right-10 z-[100] p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-300 ${
                    status === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
                }`}>
                    {status === "success" ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                    <div>
                        <p className="font-bold">{status === "success" ? "Subscribed!" : "Error"}</p>
                        <p className="text-sm opacity-90">
                            {status === "success" 
                                ? "Thank you for joining our newsletter." 
                                : "Could not process subscription. Try again."}
                        </p>
                    </div>
                    <button onClick={() => setStatus(null)} className="ml-2 hover:opacity-70 transition-opacity">
                        <X size={18} />
                    </button>
                </div>
            )}
        </footer>
    );
}