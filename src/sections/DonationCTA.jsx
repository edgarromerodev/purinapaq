import React, { useState } from "react";
import { CreditCard, Send, Landmark, ExternalLink, Heart, ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function DonationCTA() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // 1. Enlaces para pagos ÚNICOS (Originales)
    const STRIPE_LINKS = {
        50: "https://donate.stripe.com/fZu4gy5iv5pl9y6fjvbwk01",
        80: "https://donate.stripe.com/aFa14mh1ddVReSq1sFbwk02",
        100: "https://donate.stripe.com/eVq3cubGTeZVfWu3ANbwk03",
        200: "https://donate.stripe.com/00w5kC8uH5pl25E3ANbwk04",
        500: "https://donate.stripe.com/14A9AS12f051eSq1sFbwk05",
        1500: "https://donate.stripe.com/7sYfZgfX90517pY1sFbwk06"
    };

    // 2. Enlaces para pagos MENSUALES (Los nuevos que te dio el cliente)
    const STRIPE_RECURRING_LINKS = {
        50: "https://buy.stripe.com/aFa7sK9yLcRN4dMdbnbwk0f",
        80: "https://buy.stripe.com/fZu28q7qD9FB9y6gnzbwk0g",
        100: "https://buy.stripe.com/cNi14m12fbNJ5hQb3fbwk0h",
        200: "https://buy.stripe.com/8x2cN43anaJFaCa1sFbwk0i",
        500: "https://buy.stripe.com/7sYaEW3an9FBh0yefrbwk0j",
        1500: "https://buy.stripe.com/3cI9AS6mz8Bx25Eb3fbwk0k"
    };

    const [selectedAmount, setSelectedAmount] = useState(100);
    const [frequency, setFrequency] = useState("once"); 
    
    const amounts = [1500, 500, 200, 100, 80, 50];

    // 3. Lógica actualizada para detectar la frecuencia
    const getFinalLink = () => {
        // Seleccionamos el diccionario de links basado en la frecuencia
        const linksSource = frequency === "monthly" ? STRIPE_RECURRING_LINKS : STRIPE_LINKS;
        
        // Buscamos el link del monto seleccionado
        const directLink = linksSource[selectedAmount];
        
        if (directLink) {
            return directLink;
        }

        // Si el usuario pone un monto manual que no está en la lista, 
        // usamos el de 50 como respaldo (fallback)
        return linksSource[50];
    };

    return (
        <section id="donar" className="py-24 bg-slate-50 overflow-hidden">
            <div 
                ref={ref}
                className={`w-full max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto transition-all duration-1000 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 py-16 md:py-24 px-8 shadow-2xl">
                    <div className="absolute inset-0 z-0 opacity-30">
                        <img src="/images/donation.webp" alt="Donation" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-left text-white">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">Donations</h2>
                            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                                Your help gives one more person a chance to be seen and supported. 
                                As a non-profit organization, we appreciate your generosity. 
                            </p>
                            <div className="flex items-center gap-4 text-sky-400 font-medium italic">
                                <span>Official receipts provided for tax purposes.</span>
                            </div>
                        </div>

                        {/* TARJETA DE DONACIÓN */}
                        <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl text-slate-900 w-full max-w-md ml-auto">
                            <div className="flex items-center justify-center gap-2 mb-8 text-slate-700 font-bold">
                                <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-lg">
                                    <Heart size={18} className="fill-current" />
                                </div>
                                <span className="text-lg">Secure donation</span>
                            </div>

                            {/* Give once / Monthly */}
                            <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
                                <button onClick={() => setFrequency("once")} className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${frequency === "once" ? "bg-white shadow-sm text-sky-700 border border-sky-100" : "text-slate-500"}`}>
                                    Give once
                                </button>
                                <button onClick={() => setFrequency("monthly")} className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${frequency === "monthly" ? "bg-white shadow-sm text-rose-600 border border-rose-100" : "text-slate-500"}`}>
                                    <Heart size={14} className="fill-current text-rose-400" /> Monthly
                                </button>
                            </div>

                            {/* Botones de montos fijos */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {amounts.map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setSelectedAmount(amount)}
                                        className={`py-4 rounded-xl border-2 font-bold transition-all text-base ${
                                            selectedAmount === amount 
                                            ? "bg-white text-sky-700 border-sky-600 shadow-sm" 
                                            : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
                                        }`}
                                    >
                                        ${amount.toLocaleString()}
                                    </button>
                                ))}
                            </div>

                            {/* Input Manual */}
                            <div className="relative mb-6">
                                <div className="relative flex items-center border-2 border-slate-200 rounded-xl px-5 py-4 focus-within:border-sky-500 transition-all">
                                    <span className="text-2xl font-medium text-slate-800 mr-2">$</span>
                                    <input 
                                        type="number"
                                        value={selectedAmount}
                                        onChange={(e) => setSelectedAmount(Number(e.target.value))}
                                        className="w-full text-2xl font-medium text-slate-800 outline-none bg-transparent"
                                    />
                                    <div className="flex items-center gap-1 text-slate-400 font-medium">
                                        <span>CAD</span>
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                            </div>

                       

                            <a 
                                href={getFinalLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-5 bg-sky-700 text-white rounded-2xl font-bold text-xl hover:bg-sky-900 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center"
                            >
                                Donate ${selectedAmount} {frequency === "monthly" ? "/ mo" : ""}
                            </a>
                            
                            <p className="text-center text-[11px] text-slate-400 mt-6 uppercase tracking-widest font-semibold font-sans">
                                Powered by Stripe
                            </p>
                        </div>
                    </div>
                </div>

                {/* Métodos Alternativos (Sin cambios) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col gap-6 shadow-sm hover:border-sky-300 transition-all duration-300 group">
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

                    <div className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col gap-6 shadow-sm hover:border-sky-300 transition-all">
                        <div className="bg-sky-100 p-4 rounded-full text-sky-700 self-start"><Send size={24} /></div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">E-Transfer</h4>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                Send via online banking to:<br />
                                <strong className="text-sky-800 text-base">donations@purinapaq.org</strong>
                            </p>
                            <div className="bg-sky-50 border border-sky-100 p-4 rounded-lg text-xs text-sky-900 font-medium">
                                <strong>Important:</strong> Include your email in the message to receive your tax receipt.
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col gap-6 shadow-sm hover:border-sky-300 transition-all">
                        <div className="bg-sky-100 p-4 rounded-full text-sky-700 self-start"><Landmark size={24} /></div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">By Check</h4>
                            <p className="text-slate-600 text-sm mb-4">
                                <strong className="text-slate-800">Payable to:</strong> Purinapaq<br />
                                306-30 Elsinore Path, Etobicoke, ON, M8V 3Z6.
                            </p>
                            <div className="bg-sky-50 border border-sky-100 p-4 rounded-lg text-xs text-sky-900 font-medium">
                                <p className="text-[10px] text-sky-700/60 uppercase font-bold tracking-wider mb-1">Registration Number</p>
                                <p className="text-sm text-sky-900 font-mono font-bold">742640535RR0001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}