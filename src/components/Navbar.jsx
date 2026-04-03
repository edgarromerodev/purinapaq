import { MenuIcon, XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Importamos hooks necesarios
import { navLinks } from "../data/navLinks";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const location = useLocation(); // Para saber en qué página estamos
    const navigate = useNavigate(); // Para redirigir al inicio

    const nosotrosSubLinks = [
        { name: "Sobre Nosotros", href: "#sobre-nosotros" },
        { name: "Misión y Visión", href: "/mision-vision" },      
        { name: "Equipo", href: "/equipo" },                
        { name: "Historia", href: "/historia" },   
             
    ];

    useEffect(() => {
        document.body.style.overflow = openMobileMenu ? "hidden" : "auto";
    }, [openMobileMenu]);

    const handleNavigation = (e, href) => {
        e.preventDefault();
        
        // Si el enlace es un ancla (#)
        if (href.startsWith("#")) {
            // Si NO estamos en el inicio, primero vamos al inicio
            if (location.pathname !== "/") {
                navigate("/");
                // Esperamos un poco a que cargue el inicio y luego scrolleamos
                setTimeout(() => {
                    const target = document.querySelector(href);
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                }, 100);
            } else {
                // Si ya estamos en el inicio, hacemos scroll normal
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
            {/* Logo siempre lleva al inicio */}
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
                                handleScroll={handleNavigation} // Usamos la nueva función
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

            {/* Menú móvil */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/95 backdrop-blur-md md:hidden transition duration-300 ${
                openMobileMenu ? "translate-x-0" : "-translate-x-full"
            }`}>
                {/* Botón Home/Inicio extra para claridad (Opcional pero recomendado) */}
                <Link to="/" onClick={() => setOpenMobileMenu(false)} className="hover:text-sky-700 font-bold text-xl">
                    Inicio
                </Link>

                {navLinks.map((link) => (
                    <React.Fragment key={link.name}>
                        {link.name !== "Inicio" && ( // Evitamos duplicar Inicio si ya lo pusimos arriba
                            <a
                                href={link.href}
                                onClick={(e) => handleNavigation(e, link.href)}
                                className="hover:text-sky-700 cursor-pointer font-bold text-xl"
                            >
                                {link.name}
                            </a>
                        )}
                        
                        {link.name === "Nosotros" && nosotrosSubLinks.map(sub => (
                            sub.href.startsWith("#") ? (
                                <a key={sub.name} href={sub.href} onClick={(e) => handleNavigation(e, sub.href)} className="text-slate-500 text-base pl-4 -mt-4">
                                    • {sub.name}
                                </a>
                            ) : (
                                <Link key={sub.name} to={sub.href} onClick={() => setOpenMobileMenu(false)} className="text-slate-500 text-base pl-4 -mt-4">
                                    • {sub.name}
                                </Link>
                            )
                        ))}
                    </React.Fragment>
                ))}

                <button className="aspect-square size-10 p-1 bg-sky-700 text-white rounded-md flex items-center justify-center" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon />
                </button>
            </div>

            {/* Botones de Acción */}
            <div className="flex items-center gap-4">
                <button className="hidden md:block px-4 py-2 border border-sky-700 text-sky-700 rounded-md font-semibold">
                    Solicitar Equipo
                </button>
                <a 
                    href="https://www.canadahelps.org/en/charities/purinapaq-mobility-without-borders" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden md:block px-6 py-2 bg-sky-700 hover:bg-sky-800 transition text-white rounded-md font-bold shadow-md text-center"
                >
                    Donar Ahora
                </a>

                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden text-slate-800">
                    <MenuIcon size={26} />
                </button>
            </div>
        </nav>
    );
}