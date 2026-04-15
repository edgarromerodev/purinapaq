import { CreditCard, Send, Landmark } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function DonationCTA() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="donar" className="py-24 bg-slate-50 overflow-hidden">
            <div 
                ref={ref}
                className={`w-full max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto transition-all duration-1000 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                {/* Banner Principal - Resumen del texto del cliente */}
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 py-16 md:py-24 px-8 text-center shadow-2xl">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img 
                            src="/images/donation.webp" 
                            alt="Your support transforms lives through mobility" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            DONATIONS
                        </h2>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
                            Your support is essential. At Purinapaq, we provide more than movement—we offer independence, dignity, and a more inclusive world where mobility is a right, not a privilege.
                        </p>
                        
                        <div className="flex flex-col items-center justify-center gap-6 bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 max-w-md mx-auto">
                            <h4 className="text-white font-semibold text-sm ">
                                Credit Card or Digital Wallet
                            </h4>
                            <stripe-buy-button
                                buy-button-id="buy_btn_1TIu7aCZmNSjYL4FIWzXOcRe"
                                publishable-key="pk_live_51TIAo3CZmNSjYL4FFbJZuqSWIdym5nanxGcu4vA8HehPAWNs4Tbp6GpOLF3SVBcjHEw6oL0aFKJhHBQLSAtytcCr00M6V4oqYK"
                            >
                            </stripe-buy-button>
                        </div>
                        <p className="mt-8 text-sm text-sky-200 font-medium">
                            Donors receive official donation receipts for tax purposes.
                        </p>
                    </div>
                </div>

                {/* Métodos Alternativos - Información estática en inglés */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    
                    {/* E-Transfer */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-6 items-start shadow-sm">
                        <div className="bg-sky-100 p-4 rounded-full text-sky-700 shrink-0">
                            <Send size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">E-Transfer</h4>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                Send your donation via online banking to:<br />
                                <strong className="text-sky-800 text-base">donations@purinapaq.org</strong>
                            </p>
                            <div className="bg-sky-50 border border-sky-100 p-4 rounded-lg text-xs text-sky-900 leading-relaxed">
                                <strong>Important:</strong> Include your name, address, and email in the message to receive your tax receipt (5-7 business days).
                            </div>
                        </div>
                    </div>

                    {/* Por Cheque */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-6 items-start shadow-sm">
                        <div className="bg-sky-100 p-4 rounded-full text-sky-700 shrink-0">
                            <Landmark size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">By Check</h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                <strong className="text-slate-800">Payable to:</strong> Purinapaq - Movilidad sin fronteras<br />
                                306-30 Elsinore Path, Etobicoke, Ontario, M8V 3Z6, CANADA.
                            </p>
                            <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                                    Charity Reg. No. 742640535RR0001
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Accesibilidad y SEO */}
            <div className="sr-only">
                <h3>Make a Difference</h3>
                <p>Support Purinapaq - Mobility Without Borders. We accept online donations via CanadaHelps, E-Transfers, and checks.</p>
            </div>
        </section>
    );
}