import { MenuIcon, XIcon, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: "Home", href: "#inicio" },
        { 
            name: "About Us", 
            href: "#features", 
            hasSubmenu: true, 
            subLinks: [
                { name: "Vision & Mission", href: "/mision-vision" },
                { name: "Our Story", href: "/history" },
                { name: "Team & Partners", href: "/team-partners" },
                { name: "Meet the Director", href: "/director" },
            ] 
        },
        { 
            name: "Impact", 
            href: "#stats", 
            hasSubmenu: true, 
            subLinks: [
                { name: "Request Equipment", href: "/request-equipment" },
                { name: "Community Workshops", href: "/workshops" },
                { name: "Global Impact Initiatives", href: "/global-impact" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Gallery", href: "/gallery" },
            ]
        },
        { 
            name: "Get Involved", 
            href: "#donar",
            hasSubmenu: true, 
            subLinks: [
                { name: "Donate", href: "/donate" },
                { name: "Donate equipment", href: "/equipment-donations" },
                { name: "Volunteer", href: "/volunteer" },
                { name: "Partner With Us - Sponsor", href: "/sponsor" },
            ]
        },
        { name: "News & Stories", href: "/news" },
        { name: "Contact", href: "#contacto" },
    ];

    // Bloquear scroll cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = openMobileMenu ? "hidden" : "auto";
    }, [openMobileMenu]);

    // Lógica para ocultar/mostrar al hacer scroll (como en tu navbar de Kemi)
    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

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
        } else {
            navigate(href);
        }
        setOpenMobileMenu(false);
        setActiveMobileSubmenu(null);
    };

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                // MODIFICACIÓN: Si el menú móvil está abierto, forzamos translate-y-0
                (isVisible || openMobileMenu) ? "translate-y-0" : "-translate-y-full"
            } ${openMobileMenu ? "bg-white h-screen" : "bg-white/90 backdrop-blur-md shadow-sm"}`}
        >
           
            <nav className="max-w-[1650px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-4">
                
                {/* Logo */}
                <Link 
                    to="/" 
                    className="z-[60] flex-shrink-0"
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setOpenMobileMenu(false); }}
                >
                    <img 
                        className="h-10 md:h-11 w-auto object-contain" 
                        src="/images/logo-purinapaq.webp" 
                        alt="Purinapaq Logo" 
                    />
                </Link>

                <div className="hidden items-center md:flex md:gap-4 lg:gap-6 xl:gap-10 font-medium">
                    {navLinks.map((link) => (
                        link.hasSubmenu ? (
                            <NavDropdown 
                                key={link.name} 
                                name={link.name} 
                                href={link.href}
                                subLinks={link.subLinks} 
                                handleScroll={handleNavigation} 
                            />
                        ) : (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleNavigation(e, link.href)} 
                                className="hover:text-sky-700 transition-colors text-slate-700 md:text-[13px] lg:text-[14px] xl:text-base whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                </div>

                {/* Botón de Acción y Menú Hamburguesa */}
                <div className="flex items-center gap-3 z-[60] flex-shrink-0">
                    <button 
                        onClick={() => navigate("/equipment-donations")} 
                        className="hidden md:block px-5 py-2.5 bg-sky-700 hover:bg-sky-800 transition text-white rounded-md font-bold shadow-md md:text-xs lg:text-sm xl:text-base"
                    >
                        Donate Equipment
                    </button>

                    <button 
                        onClick={() => setOpenMobileMenu(!openMobileMenu)} 
                        className="md:hidden p-2 text-slate-800"
                        aria-label="Toggle menu"
                    >
                        {openMobileMenu ? <XIcon size={28} /> : <MenuIcon size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Ocupa todo el ancho independientemente del contenedor superior */}
            <div className={`fixed inset-0 flex flex-col items-center justify-start pt-24 gap-2 bg-white md:hidden transition-all duration-500 z-50 overflow-y-auto ${
                openMobileMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
            }`}>
                {navLinks.map((link) => (
                    <div key={link.name} className="w-full px-10 border-b border-slate-50">
                        {link.hasSubmenu ? (
                            <div className="flex flex-col items-center py-4">
                                <div className="flex items-center gap-2">
                                    <a 
                                        href={link.href} 
                                        onClick={(e) => handleNavigation(e, link.href)} 
                                        className="text-xl font-bold text-slate-800"
                                    >
                                        {link.name}
                                    </a>
                                    <button 
                                        onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.name ? null : link.name)}
                                        className="p-1"
                                    >
                                        <ChevronDown 
                                            size={24} 
                                            className={`transition-transform duration-300 ${activeMobileSubmenu === link.name ? "rotate-180" : ""}`} 
                                        />
                                    </button>
                                </div>
                                <div className={`flex flex-col items-center gap-4 overflow-hidden transition-all duration-300 ${
                                    activeMobileSubmenu === link.name ? "max-h-96 mt-5 mb-2" : "max-h-0"
                                }`}>
                                    {link.subLinks.map((sub) => (
                                        <a 
                                            key={sub.name} 
                                            href={sub.href} 
                                            onClick={(e) => handleNavigation(e, sub.href)} 
                                            className="text-lg text-slate-500 font-medium hover:text-sky-700"
                                        >
                                            {sub.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center py-4">
                                <a 
                                    href={link.href} 
                                    onClick={(e) => handleNavigation(e, link.href)} 
                                    className="text-xl font-bold text-slate-800"
                                >
                                    {link.name}
                                </a>
                            </div>
                        )}
                    </div>
                ))}
                
                {/* Botón de donación dentro del menú móvil */}
                <div className="mt-6 w-full px-10 pb-10">
                    <button 
                        onClick={() => { navigate("/equipment-donations"); setOpenMobileMenu(false); }} 
                        className="w-full py-4 bg-sky-700 text-white rounded-xl font-bold text-lg shadow-lg"
                    >
                        Donate Equipment
                    </button>
                </div>
            </div>
        </header>
    );
}