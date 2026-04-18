import { CreditCard, Send, Landmark, ExternalLink } from "lucide-react";
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
                {/* Banner Principal - Stripe */}
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase tracking-wide">
                            Donations
                        </h2>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
                            Your support is essential. At Purinapaq, we provide more than movement, we offer independence, dignity, and a more inclusive world where mobility is a right, not a privilege.
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
                        <p className="mt-8 text-sm text-sky-200 font-medium italic">
                            Donors receive official donation receipts for tax purposes.
                        </p>
                    </div>
                </div>

                {/* Métodos Alternativos - 3 Columnas con color de marca Sky-700 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    
                    {/* Opción 1: CanadaHelps (Color de marca Sky-700) */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col gap-6 shadow-sm hover:border-sky-300 transition-all duration-300 group">
                        <div className="bg-sky-100 p-4 rounded-full text-sky-700 self-start group-hover:bg-sky-700 group-hover:text-white transition-colors">
                            <CreditCard size={24} />
                        </div>
                        <div className="flex flex-col h-full">
                            <h4 className="text-xl font-bold text-slate-800 mb-2">Via CanadaHelps</h4>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                                Donate securely through Canada's most trusted platform for registered charities.
                            </p>
                            <a 
                                href="https://www.canadahelps.org/en/charities/purinapaq-mobility-without-borders/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-sky-700 text-white rounded-xl font-bold text-sm hover:bg-sky-800 transition-all shadow-lg shadow-sky-100 active:scale-[0.98]"
                            >
                                Donate on CanadaHelps <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>

            {/* Opción 2: E-Transfer (Tu favorita) */}
    <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col gap-6 shadow-sm hover:border-sky-300 transition-all duration-300 group">
        <div className="bg-sky-100 p-4 rounded-full text-sky-700 self-start group-hover:bg-sky-700 group-hover:text-white transition-colors">
            <Send size={24} />
        </div>
        <div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">E-Transfer</h4>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Send via online banking to:<br />
                <strong className="text-sky-800 text-base">donations@purinapaq.org</strong>
            </p>
            <div className="bg-sky-50 border border-sky-100 p-4 rounded-lg text-xs text-sky-900 leading-relaxed font-medium">
                <strong>Important:</strong> Include your email in the message to receive your tax receipt.
            </div>
        </div>
    </div>

    {/* Opción 3: By Check (Adaptada al diseño de la 2) */}
    <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col gap-6 shadow-sm hover:border-sky-300 transition-all duration-300 group">
        <div className="bg-sky-100 p-4 rounded-full text-sky-700 self-start group-hover:bg-sky-700 group-hover:text-white transition-colors">
            <Landmark size={24} />
        </div>
        <div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">By Check</h4>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                <strong className="text-slate-800">Payable to:</strong> Purinapaq<br />
                306-30 Elsinore Path, Etobicoke, ON, M8V 3Z6.
            </p>
            {/* Ahora usa el mismo estilo de caja azul que la opción 2 */}
            <div className="bg-sky-50 border border-sky-100 p-4 rounded-lg text-xs text-sky-900 leading-relaxed font-medium">
                <p className="text-[10px] text-sky-700/60 uppercase font-bold tracking-wider mb-1">
                    Registration Number
                </p>
                <p className="text-sm text-sky-900 font-mono font-bold">742640535RR0001</p>
            </div>
        </div>
    </div>
                </div>
            </div>

            {/* Accesibilidad y SEO oculto */}
            <div className="sr-only">
                <h3>Make a Difference</h3>
                <p>Support Purinapaq - Mobility Without Borders. We accept online donations via CanadaHelps, E-Transfers, and checks.</p>
            </div>
        </section>
    );
}