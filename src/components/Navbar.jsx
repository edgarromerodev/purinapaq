import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = openMobileMenu ? "hidden" : "auto";
    }, [openMobileMenu]);

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setOpenMobileMenu(false); 
        }
    };

    return (
<nav
    className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4  transition-all duration-300 ${
        openMobileMenu ? "bg-white" : "bg-white backdrop-blur-md shadow-sm"
    }`}
>
            <Link to="/">
                <img
                    className="h-9 md:h-11 w-auto shrink-0"
                    src="/images/logo-purinapaq.webp" 
                    alt="Purinapaq Logo"
                    width={140}
                    height={40}
                />
            </Link>

            {/* Menú de escritorio - Adaptado al azul del logo */}
            <div className="hidden items-center md:gap-8 lg:gap-9 font-medium md:flex lg:pl-20">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="hover:text-sky-700 transition-colors cursor-pointer text-slate-700"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Menú móvil */}
            <div
                className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/95 backdrop-blur-md md:hidden transition duration-300 ${
                    openMobileMenu ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="hover:text-sky-700 cursor-pointer"
                    >
                        {link.name}
                    </a>
                ))}

                <button className="hover:bg-slate-100 border border-sky-700 text-sky-700 px-6 py-2 rounded-md">
                    Solicitar Equipo
                </button>

                <button
                    className="aspect-square size-10 p-1 items-center justify-center bg-sky-700 hover:bg-sky-800 transition text-white rounded-md flex"
                    onClick={() => setOpenMobileMenu(false)}
                >
                    <XIcon />
                </button>
            </div>

            {/* Botones de Acción - Adaptados al estilo Purinapaq */}
            <div className="flex items-center gap-4">
                <button className="hidden md:block hover:bg-slate-50 transition px-4 py-2 border border-sky-700 text-sky-700 rounded-md font-semibold">
                    Solicitar Equipo
                </button>
                <a 
        href="https://www.canadahelps.org/en/charities/purinapaq-mobility-without-borders" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:block px-6 py-2 bg-sky-700 hover:bg-sky-800 transition text-white rounded-md font-bold shadow-md text-center"
        aria-label="Hacer una donación económica a Purinapaq (se abre en una nueva ventana)"
    >
        Donar Ahora
    </a>
                <button
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    className="md:hidden text-slate-800"
                >
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}