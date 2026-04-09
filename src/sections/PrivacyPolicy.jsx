import React from "react";
import { useInView } from "react-intersection-observer";
import { 
    ShieldCheck, Lock, Eye, FileText, 
    UserCheck, Share2, Mail, Info 
} from "lucide-react";

export default function PrivacyPolicy() {
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: refContent, inView: inViewContent } = useInView({ triggerOnce: true, threshold: 0.1 });

    const sections = [
        {
            icon: <FileText className="text-sky-600" size={24} />,
            title: "1. Collection of Personal Information",
            content: "We may collect personal information that you voluntarily provide, including full name, email, phone number, mailing address, donation/payment details, and information submitted through our equipment or volunteer forms."
        },
        {
            icon: <Eye className="text-sky-600" size={24} />,
            title: "2. Use of Personal Information",
            content: "Information is used for processing donations, issuing tax receipts, communicating with volunteers and partners, coordinating equipment deliveries, and maintaining internal records to improve our services."
        },
        {
            icon: <UserCheck className="text-sky-600" size={24} />,
            title: "3. Consent",
            content: "By providing information to Purinapaq, you consent to its collection and use as outlined here. You may withdraw your consent at any time, subject to legal or contractual restrictions."
        },
        {
            icon: <Share2 className="text-sky-600" size={24} />,
            title: "4. Disclosure of Information",
            content: "Purinapaq does not sell, rent, or trade your data. Disclosure only occurs with authorized service providers (like payment processors) or when required by law."
        },
        {
            icon: <Lock className="text-sky-600" size={24} />,
            title: "5. Data Security",
            content: "We implement administrative, technical, and physical safeguards to protect your personal information against loss, theft, unauthorized access, or misuse."
        },
        {
            icon: <ShieldCheck className="text-sky-600" size={24} />,
            title: "6. Access and Correction",
            content: "You have the right to request access to your personal information and to request corrections to ensure your data is accurate and up to date."
        }
    ];

    return (
        <section 
            id="privacy-policy" 
            className="py-24 bg-slate-50 overflow-hidden"
            aria-labelledby="privacy-title"
        >
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* --- HEADER --- */}
                <header 
                    ref={refHeader}
                    className={`max-w-3xl mb-20 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6">
                        <Lock size={16} aria-hidden="true" /> Legal Information
                    </div>
                    <h2 id="privacy-title" className="text-3xl  font-semibold text-slate-900 mb-8">
                        Privacy Policy
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Purinapaq – Mobility Without Borders is committed to protecting your personal information in accordance with Canadian privacy laws, including <strong>PIPEDA</strong>.
                    </p>
                </header>

                {/* --- GRID DE CONTENIDO --- */}
                <div 
                    ref={refContent}
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
                        inViewContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                    }`}
                >
                    {sections.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-5 bg-sky-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                {item.content}
                            </p>
                        </div>
                    ))}

                    {/* TARJETA DE CONTACTO ESPECIAL */}
                    <div className="lg:col-span-3 mt-8 bg-sky-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
                        <div className="flex items-center gap-6">
                            <div className="bg-white/10 p-4 rounded-2xl">
                                <Mail size={32} className="text-sky-300" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">7. Contact Us</h3>
                                <p className="text-sky-100/80">For questions regarding your privacy or personal information.</p>
                            </div>
                        </div>
                        <a 
                            href="mailto:info@purinapaq.org" 
                            className="px-8 py-4 bg-white text-sky-900 rounded-2xl font-bold hover:bg-sky-50 transition-colors flex items-center gap-2"
                        >
                            info@purinapaq.org
                        </a>
                    </div>
                </div>

                {/* FOOTER DE PRIVACIDAD (SEO) */}
                <footer className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 text-slate-400 text-sm italic">
                        <Info size={14} /> 
                        Last updated: April 2026. Purinapaq - Mobility Without Borders.
                    </div>
                </footer>
            </div>

            {/* Lectores de Pantalla */}
            <div className="sr-only">
                <p>This privacy policy explains how Purinapaq collects, uses, and safeguards your data according to Canadian PIPEDA regulations.</p>
            </div>
        </section>
    );
}