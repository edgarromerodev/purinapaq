import { Link, useLocation, useNavigate } from "react-router-dom"; // Añadimos hooks de navegación
import { Mail, Phone, MapPin, Heart, Send } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const location = useLocation(); // Para saber dónde estamos
    const navigate = useNavigate(); // Para redirigir si es necesario

    // ESTA ES LA FUNCIÓN CLAVE (Similar a tu Navbar)
    const handleNavigation = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            
            if (location.pathname !== "/") {
                // Si no estamos en el Home, navegamos al home primero
                navigate("/");
                // Esperamos un poco a que cargue el home y luego hacemos scroll
                setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                }, 300);
            } else {
                // Si ya estamos en el Home, solo hacemos scroll
                const element = document.getElementById(targetId);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <footer className="w-full bg-slate-50 pt-20 text-slate-600 border-t border-slate-200">
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-200">
                    
                    {/* Columna 1: Branding e Impacto */}
                    <div className="flex flex-col">
                        <img
                            className="h-10 w-auto mb-6 self-start"
                            src="/images/logo-purinapaq.webp"
                            alt="Purinapaq - Mobility Without Borders"
                            loading="lazy"
                        />
                        <p className="text-sm leading-relaxed italic mb-6">
                            "To help those in need get moving..."
                        </p>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 inline-block shadow-sm">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Charity No.</p>
                            <p className="text-sm font-bold text-sky-800 tracking-tight">742640535RR0001</p>
                        </div>
                    </div>

                    {/* Columna 2: Footer Navigation */}
                    <nav aria-label="Footer Navigation">
                        <h2 className="font-semibold mb-6 text-slate-900 ">
                            Footer Navigation
                        </h2>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/privacy" className="hover:text-sky-700 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover:bg-sky-600 transition-colors"></span>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-sky-700 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover:bg-sky-600 transition-colors"></span>
                                    Terms
                                </Link>
                            </li>
                            {/* FAQ DINÁMICO */}
                            <li>
                                <a 
                                    href="#faq" 
                                    onClick={(e) => handleNavigation(e, "#faq")}
                                    className="hover:text-sky-700 transition-colors flex items-center gap-2 group cursor-pointer"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover:bg-sky-600 transition-colors"></span>
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Columna 3: Información de Contacto */}
                    <div>
                        <h2 className="font-semibold mb-6 text-slate-900">
                            Contact
                        </h2>
                        <address className="not-italic space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
                                <p>306-30 Elsinore Path, Etobicoke, Ontario, M8V 3Z6, Canada</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-sky-700 shrink-0" aria-hidden="true" />
                                <a href="tel:+14169389311" className="hover:text-sky-700 transition-colors">(416) 938-9311</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-sky-700 shrink-0" aria-hidden="true" />
                                <a href="mailto:info@purinapaq.org" className="hover:text-sky-700 transition-colors font-medium">
                                    info@purinapaq.org
                                </a>
                            </div>
                        </address>
                    </div>

                    {/* Columna 4: Subscription Signup */}
                    <div>
                        <h2 className="font-semibold mb-6 text-slate-900">
                            Subscription Signup
                        </h2>
                        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                            Stay updated with our latest news and impact reports.
                        </p>
                        <form className="relative group" aria-label="Newsletter signup">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all shadow-sm"
                                required
                            />
                            <button 
                                type="submit" 
                                aria-label="Subscribe"
                                className="absolute right-2 top-1.5 bg-sky-700 hover:bg-sky-800 text-white p-1.5 rounded-lg transition-colors active:scale-90"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Dev Credits */}
                <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium tracking-wide">
                    <p className="order-2 md:order-1 text-slate-400">
                        © {currentYear} Purinapaq | Mobility without borders. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-1.5 order-1 md:order-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                        <span className="text-slate-400 uppercase">Developed with</span>
                        <Heart size={12} className="text-red-500 fill-current animate-pulse" aria-hidden="true" />
                        <span className="text-slate-400 uppercase">for Purinapaq</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}