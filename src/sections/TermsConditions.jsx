import React from "react";
import { useInView } from "react-intersection-observer";
import { 
    Gavel, MousePointer2, HeartHandshake, Box, 
    Copyright, AlertTriangle, ExternalLink, RefreshCw 
} from "lucide-react";

export default function TermsConditions() {
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: refContent, inView: inViewContent } = useInView({ triggerOnce: true, threshold: 0.1 });

    const terms = [
        {
            icon: <MousePointer2 className="text-sky-600" size={24} />,
            title: "1. Use of Website",
            content: "This website is intended for informational and charitable purposes. Users agree not to use the site for unlawful, harmful, or fraudulent activities."
        },
        {
            icon: <HeartHandshake className="text-sky-600" size={24} />,
            title: "2. Donations",
            content: "All donations are voluntary and non-refundable. Official donation receipts will be issued in accordance with Canada Revenue Agency (CRA) regulations for registered charities."
        },
        {
            icon: <Box className="text-sky-600" size={24} />,
            title: "3. Equipment Donations and Requests",
            content: "Submission of equipment donation or request forms does not guarantee acceptance, approval, or availability. All submissions are subject to review based on program criteria."
        },
        {
            icon: <Copyright className="text-sky-600" size={24} />,
            title: "4. Intellectual Property",
            content: "All content on this website, including text, images, and logos, is the property of Purinapaq unless otherwise stated. Unauthorized use or reproduction is prohibited."
        },
        {
            icon: <AlertTriangle className="text-sky-600" size={24} />,
            title: "5. Limitation of Liability",
            content: "Purinapaq shall not be liable for any direct, indirect, or incidental damages arising from the use of this website or reliance on its published content."
        },
        {
            icon: <ExternalLink className="text-sky-600" size={24} />,
            title: "6. External Links",
            content: "This website may contain links to third-party sites. Purinapaq is not responsible for the content or privacy practices of such external websites."
        }
    ];

    return (
        <section 
            id="terms-conditions" 
            className="py-24 bg-slate-50 overflow-hidden"
            aria-labelledby="terms-title"
        >
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* --- HEADER (IGUAL A PRIVACY) --- */}
                <header 
                    ref={refHeader}
                    className={`max-w-3xl mb-20 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6">
                        <Gavel size={16} aria-hidden="true" /> Legal Information
                    </div>
                    <h2 id="terms-title" className="text-3xl font-semibold text-slate-900 mb-8">
                        Terms and Conditions
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        By accessing and using the website of <strong>Purinapaq – Mobility Without Borders</strong>, you agree to comply with the following Terms and Conditions.
                    </p>
                </header>

                {/* --- GRID DE CONTENIDO --- */}
                <div 
                    ref={refContent}
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
                        inViewContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                    }`}
                >
                    {terms.map((item, idx) => (
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

                    {/* TARJETA DE MODIFICACIONES (IGUAL A CONTACT US DE PRIVACY) */}
                    <div className="lg:col-span-3 mt-8 bg-sky-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
                        <div className="flex items-center gap-6">
                            <div className="bg-white/10 p-4 rounded-2xl">
                                <RefreshCw size={32} className="text-sky-300" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">7. Modifications</h3>
                                <p className="text-sky-100/80 max-w-xl">
                                    We reserve the right to update or modify these Terms and Conditions at any time without prior notice.
                                </p>
                            </div>
                        </div>
                        <div className="px-8 py-4 bg-white text-sky-900 rounded-2xl font-bold italic shadow-lg">
                            Last Updated: April 2026
                        </div>
                    </div>
                </div>

                {/* FOOTER DE TÉRMINOS */}
                <footer className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 text-slate-400 text-sm italic">
                        <Copyright size={14} /> 
                        2026 Purinapaq - Mobility Without Borders. All rights reserved.
                    </div>
                </footer>
            </div>

            {/* Lectores de Pantalla */}
            <div className="sr-only">
                <p>Terms and Conditions for Purinapaq. This section covers website use, donations, and legal liability.</p>
            </div>
        </section>
    );
}