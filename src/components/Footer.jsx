import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    // Mapeamos los links usando las llaves del JSON
    const navLinks = [
        { name: t('nav.home'), href: "#inicio" },
        { name: t('nav.about'), href: "#nosotros" },
        { name: t('nav.impact'), href: "#impacto" },
        { name: t('nav.donations'), href: "#donar" },
        { name: t('nav.contact'), href: "#contacto" },
    ];

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-slate-50 pt-16 text-slate-600">
            <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-slate-200 pb-12">
                
                {/* Columna 1: Logo e Info Legal */}
                <div className="md:max-w-sm">
                    <img
                        className="h-10 w-auto mb-6"
                        src="/images/logo-purinapaq.webp"
                        alt="Purinapaq Logo"
                    />
                    <p className="text-sm leading-relaxed italic mb-4">
                        {t('footer.slogan')}
                    </p>
                    <div className="text-xs space-y-1 text-slate-500 uppercase tracking-wider">
                        <p className="font-semibold">{t('footer.charity_label')}</p>
                        <p>742640535RR0001</p>
                    </div>
                </div>

                {/* Columna 2: Navegación */}
                <div>
                    <h2 className="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">
                        {t('footer.nav_title')}
                    </h2>
                    <ul className="space-y-3 text-sm">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="hover:text-sky-700 transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Columna 3: Contacto Directo */}
                <div>
                    <h2 className="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">
                        {t('footer.contact_title')}
                    </h2>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-sky-700 shrink-0" />
                            <p>{t('footer.address')}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-sky-700 shrink-0" />
                            <p>(416) 938-9311</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-sky-700 shrink-0" />
                            <a href="mailto:info@purinapaq.org" className="hover:text-sky-700 transition-colors font-medium">
                                info@purinapaq.org
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright y Créditos */}
            <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>
                    {t('footer.rights', { year: currentYear })}
                </p>
                <div className="flex items-center gap-1">
                    <span>{t('footer.dev_by')}</span>
                    <Heart size={14} className="text-red-500 fill-current" />
                    <span>{t('footer.dev_for')}</span>
                </div>
            </div>
        </footer>
    );
}