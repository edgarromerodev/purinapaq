import { MenuIcon, XIcon, Globe, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import NavDropdown from "./NavDropdown";

const LanguageDropdown = ({ onLanguageChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button className="flex items-center gap-1 hover:text-sky-700 transition-colors cursor-pointer text-slate-700 font-medium py-2 uppercase">
                <Globe size={18} className="text-slate-500" />
                <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-0 w-32 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                    <button onClick={() => onLanguageChange('en')} className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700">🇺🇸 English</button>
                    <button onClick={() => onLanguageChange('es')} className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700">🇪🇸 Español</button>
                </div>
            )}
        </div>
    );
};

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openNosotrosMobile, setOpenNosotrosMobile] = useState(false); // Estado para el acordeón móvil
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: t('nav.home'), href: "#inicio" },
        { name: t('nav.about'), href: "#nosotros", hasSubmenu: true },
        { name: t('nav.impact'), href: "#impacto" },
        { name: t('nav.donations'), href: "#donar" },
        { name: t('nav.contact'), href: "#contacto" },
    ];

    const nosotrosSubLinks = [
        { name: t('nav.about_sub.about'), href: "#sobre-nosotros" },
        { name: t('nav.about_sub.mission'), href: "/mision-vision" },
        { name: t('nav.about_sub.team'), href: "/equipo" },
        { name: t('nav.about_sub.history'), href: "/history" },
    ];

    useEffect(() => {
        document.body.style.overflow = openMobileMenu ? "hidden" : "auto";
        if (!openMobileMenu) setOpenNosotrosMobile(false); // Resetear acordeón al cerrar
    }, [openMobileMenu]);

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        setOpenMobileMenu(false);
    };

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
        } else {
            navigate(href);
        }
        setOpenMobileMenu(false);
    };

    return (
        <nav className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 transition-all duration-300 bg-white ${
            openMobileMenu ? "shadow-none" : "backdrop-blur-md shadow-sm"
        }`}>
            {/* Logo */}
            <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setOpenMobileMenu(false); }} className="z-[60]">
                <img className="h-9 md:h-11 w-auto" src="/images/logo-purinapaq.webp" alt="Purinapaq Logo" />
            </Link>

            {/* Menú de escritorio */}
            <div className="hidden items-center md:gap-8 lg:gap-9 font-medium md:flex lg:pl-20">
                {navLinks.map((link) => (
                    link.hasSubmenu ? (
                        <NavDropdown key={link.name} name={link.name} subLinks={nosotrosSubLinks} handleScroll={handleNavigation} />
                    ) : (
                        <a key={link.name} href={link.href} onClick={(e) => handleNavigation(e, link.href)} className="hover:text-sky-700 transition-colors text-slate-700">
                            {link.name}
                        </a>
                    )
                ))}
            </div>

            {/* Menú móvil (Overlay) */}
            <div className={`fixed inset-0 flex flex-col items-center justify-start pt-24 gap-4 bg-white md:hidden transition-all duration-500 z-50 overflow-y-auto ${
                openMobileMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
            }`}>
                {/* Idiomas en móvil */}
                <div className="flex gap-4 mb-4">
                    <button onClick={() => changeLanguage('en')} className="text-sm font-bold bg-slate-100 px-5 py-2 rounded-full">🇺🇸 EN</button>
                    <button onClick={() => changeLanguage('es')} className="text-sm font-bold bg-slate-100 px-5 py-2 rounded-full">🇪🇸 ES</button>
                </div>

                {navLinks.map((link) => (
                    <div key={link.name} className="w-full px-10">
                        {link.hasSubmenu ? (
                            <div className="flex flex-col items-center">
                                <button 
                                    onClick={() => setOpenNosotrosMobile(!openNosotrosMobile)}
                                    className="flex items-center gap-2 text-2xl font-bold text-slate-800 hover:text-sky-700"
                                >
                                    {link.name}
                                    <ChevronDown size={24} className={`transition-transform duration-300 ${openNosotrosMobile ? "rotate-180" : ""}`} />
                                </button>
                                
                                {/* Submenú móvil (Acordeón) */}
                                <div className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${openNosotrosMobile ? "max-h-60 mt-4 mb-2" : "max-h-0"}`}>
                                    {nosotrosSubLinks.map((sub) => (
                                        <a 
                                            key={sub.name} 
                                            href={sub.href} 
                                            onClick={(e) => handleNavigation(e, sub.href)}
                                            className="text-lg text-slate-500 font-medium hover:text-sky-600"
                                        >
                                            {sub.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center">
                                <a href={link.href} onClick={(e) => handleNavigation(e, link.href)} className="text-2xl font-bold text-slate-800 hover:text-sky-700">
                                    {link.name}
                                </a>
                            </div>
                        )}
                    </div>
                ))}
                
                <button onClick={() => { navigate("/donar-equipo"); setOpenMobileMenu(false); }} className="mt-6 px-10 py-3 bg-sky-50 border-2 border-sky-700 text-sky-700 rounded-xl font-bold">
                    {t('nav.btn_donate_gear')}
                </button>
            </div>

            {/* Botones de Acción y Toggle Móvil */}
            <div className="flex items-center gap-3 z-[60]">
                <div className="hidden md:block">
                    <LanguageDropdown onLanguageChange={changeLanguage} />
                </div>
                
                <button onClick={() => navigate("/donar-equipo")} className="hidden md:block px-4 py-2 border border-sky-700 text-sky-700 rounded-md font-semibold hover:bg-sky-50 transition-colors">
                    {t('nav.btn_donate_gear')}
                </button>

                <a
                    href="https://www.canadahelps.org/en/charities/purinapaq-mobility-without-borders"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 md:px-6 py-2 bg-sky-700 hover:bg-sky-800 transition text-white rounded-md font-bold shadow-md text-sm md:text-base"
                >
                    {t('nav.btn_donate_now')}
                </a>

                <button 
                    onClick={() => setOpenMobileMenu(!openMobileMenu)} 
                    className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    {openMobileMenu ? <XIcon size={28} /> : <MenuIcon size={28} />}
                </button>
            </div>
        </nav>
    );
}