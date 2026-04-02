import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // 🔹 Función para desplazamiento suave
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full text-slate-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-6">
                <div className="md:max-w-114">
                    <img
                        className="h-9 md:h-9.5 w-auto shrink-0"
                        src="/assets/logo.svg"
                        alt="Logo"
                        width={140}
                        height={40}
                        fetchPriority="high"
                    />
                    <p className="mt-6">
                        Lanza tu producto SaaS en tiempo récord con nuestra plataforma todo en uno, diseñada para la velocidad, flexibilidad y crecimiento. Ya seas un fundador independiente o un equipo en expansión, te brindamos todo lo que necesitas.
                    </p>
                </div>

                <div className="flex-1 flex items-start md:justify-end gap-20">
                    {/* 🔹 Enlaces de navegación con scroll suave */}
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Compañía</h2>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="hover:text-green-600 transition"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Contáctanos</h2>
                        <div className="space-y-2">
                            <p>+1-212-456-7890</p>
                            <p>contacto@ejemplo.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="pt-4 text-center pb-5">
                © {currentYear} <a href="https://prebuiltui.com" className="text-green-600 hover:underline">Edukuk</a>. Todos los derechos reservados.
            </p>
        </footer>
    );
}
