import { MenuIcon, XIcon, Globe, ChevronDown} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { navLinks } from "../data/navLinks";
import NavDropdown from "./NavDropdown";

const LanguageDropdown = ({ changeLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button className="flex items-center gap-1 hover:text-sky-700 transition-colors cursor-pointer text-slate-700 font-medium py-2 uppercase">
                <Globe size={18} className="text-slate-500" />
                <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-0 w-32 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                    <button onClick={(e) => changeLanguage(e, 'en')} className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700">🇺🇸 English</button>
                    <button onClick={(e) => changeLanguage(e, 'es')} className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700">🇪🇸 Español</button>
                </div>
            )}
        </div>
    );
};

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const location = useLocation(); 
    const navigate = useNavigate(); 

    const nosotrosSubLinks = [
        { name: "Sobre Nosotros", href: "#sobre-nosotros" },
        { name: "Misión y Visión", href: "/mision-vision" },      
        { name: "Equipo", href: "/equipo" },                
        { name: "Historia", href: "/historia" },              
    ];

    // --- NUEVO: Opciones de Idioma ---
    const idiomaLinks = [
        { name: "🇺🇸 English", href: "en" },
        { name: "🇪🇸 Español", href: "es" },
    ];

    // Función para activar Google Translate
    const changeLanguage = (e, langCode) => {
        if (e) e.preventDefault();
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = langCode;
            select.dispatchEvent(new Event('change'));
        }
        setOpenMobileMenu(false);
    };

    useEffect(() => {
        document.body.style.overflow = openMobileMenu ? "hidden" : "auto";
    }, [openMobileMenu]);

    const handleNavigation = (e, href) => {
        e.preventDefault();
        if (href.startsWith("#")) {
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    const target = document.querySelector(href);
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                }, 100);
            } else {
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: "smooth" });
            }
        }
        setOpenMobileMenu(false); 
    };

    return (
        <nav className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 transition-all duration-300 ${
            openMobileMenu ? "bg-white" : "bg-white backdrop-blur-md shadow-sm"
        }`}>
            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <img className="h-9 md:h-11 w-auto" src="/images/logo-purinapaq.webp" alt="Purinapaq Logo" />
            </Link>

            {/* Menú de escritorio */}
            <div className="hidden items-center md:gap-8 lg:gap-9 font-medium md:flex lg:pl-20">
                {navLinks.map((link) => {
                    if (link.name === "Nosotros") {
                        return (
                            <NavDropdown 
                                key={link.name}
                                name={link.name} 
                                subLinks={nosotrosSubLinks} 
                                handleScroll={handleNavigation} 
                            />
                        );
                    }
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavigation(e, link.href)}
                            className="hover:text-sky-700 transition-colors cursor-pointer text-slate-700"
                        >
                            {link.name}
                        </a>
                    );
                })}

            </div>

            {/* Menú móvil (simplificado para evitar parpadeos) */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white md:hidden transition-transform duration-500 ${
                openMobileMenu ? "translate-y-0" : "-translate-y-full"
            }`}>
                <Link to="/" onClick={() => setOpenMobileMenu(false)} className="font-bold text-2xl text-slate-900">Inicio</Link>
                
                {/* Idiomas en móvil */}
                <div className="flex gap-4 py-4 border-b w-full justify-center">
                    <button onClick={(e) => changeLanguage(e, 'en')} className="text-sm font-bold bg-slate-100 px-4 py-2 rounded-full">🇺🇸 EN</button>
                    <button onClick={(e) => changeLanguage(e, 'es')} className="text-sm font-bold bg-slate-100 px-4 py-2 rounded-full">🇪🇸 ES</button>
                </div>

                {navLinks.map((link) => (
                    link.name !== "Inicio" && (
                        <a key={link.name} href={link.href} onClick={(e) => handleNavigation(e, link.href)} className="hover:text-sky-700 font-bold text-xl">
                            {link.name}
                        </a>
                    )
                ))}

                <button className="mt-8 aspect-square size-12 p-1 bg-slate-900 text-white rounded-full flex items-center justify-center" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon size={24} />
                </button>
            </div>

            {/* Botones de Acción */}
            <div className="flex items-center gap-4">
                <div className="hidden md:block mr-2">
        <LanguageDropdown changeLanguage={changeLanguage} />
    </div>
                <button onClick={()=> navigate("/donar-equipo")} className="hidden md:block px-4 py-2 border border-sky-700 text-sky-700 rounded-md font-semibold">
                    Donar Equipo
                </button>
                <a 
                    href="https://www.canadahelps.org/en/charities/purinapaq-mobility-without-borders" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-sky-700 hover:bg-sky-800 transition text-white rounded-md font-bold shadow-md text-center"
                >
                    Donar Ahora
                </a>

                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden text-slate-800 p-2">
                    {openMobileMenu ? <XIcon size={26} /> : <MenuIcon size={26} />}
                </button>
            </div>
        </nav>
    );
}