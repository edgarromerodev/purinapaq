import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link} from "react-router-dom";

export default function NavDropdown({ name, subLinks, handleScroll }) {
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

    const handleSubClick = (e, href) => {
        if (href.startsWith("#")) {
            handleScroll(e, href);
            setIsOpen(false);
        } else {
            setIsOpen(false);
        }
    };

    return (
        <div className="relative group" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 hover:text-sky-700 transition-colors cursor-pointer text-slate-700 font-medium py-2"
            >
                {name}
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                    {subLinks.map((sub) => (
                        <li key={sub.name}>
                            {sub.href.startsWith("#") ? (
                                <a
                                    href={sub.href}
                                    onClick={(e) => handleSubClick(e, sub.href)}
                                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                                >
                                    {sub.name}
                                </a>
                            ) : (
                                <Link
                                    to={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                                >
                                    {sub.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}