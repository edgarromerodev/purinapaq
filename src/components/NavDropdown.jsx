import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavDropdown({ name, href, subLinks, handleScroll }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative group" ref={dropdownRef}>
            <div className="flex items-center gap-1">
                {/* El nombre ahora es un link que dispara el scroll */}
                <a
                    href={href}
                    onClick={(e) => handleScroll(e, href)}
                    className="hover:text-sky-700 transition-colors cursor-pointer text-slate-700 font-medium py-2 text-sm lg:text-base"
                >
                    {name}
                </a>
                {/* La flecha abre el menú desplegable */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className="p-1 hover:text-sky-700 transition-colors"
                >
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
            </div>

            {isOpen && (
                <ul 
                    role="menu"
                    className="absolute left-0 mt-2 w-64 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50"
                >
                    {subLinks.map((sub) => (
                        <li key={sub.name} role="none">
                            <Link
                                role="menuitem"
                                to={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                            >
                                {sub.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}