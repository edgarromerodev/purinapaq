import { CreditCard, Send, Landmark } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next"; // 1. Importar

export default function DonationCTA() {
    const { t } = useTranslation(); // 2. Inicializar
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="donar" className="py-20 bg-slate-50 overflow-hidden">
            <div 
                ref={ref}
                className={`w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto reveal-left ${inView ? "reveal-active" : ""}`}
            >
                {/* Banner Principal */}
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 py-16 md:py-24 px-8 text-center shadow-2xl">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img 
                            src="/images/donation.webp" 
                            alt="Apoyo Purinapaq" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {t('cta.title')}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
                            {t('cta.description')}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href="https://www.canadahelps.org/en/charities/purinapaq-mobility-without-borders" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={t('cta.aria_label')}
                                className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                <CreditCard size={22} />
                                {t('cta.btn_credit_card')}
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-sky-200 font-medium">
                            {t('cta.tax_note')}
                        </p>
                    </div>
                </div>

                {/* Métodos Alternativos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    {/* E-Transfer */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-sky-100 p-4 rounded-full text-sky-700 shrink-0">
                            <Send size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">{t('cta.etransfer.title')}</h4>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                {t('cta.etransfer.instruction')} <br />
                                <strong className="text-sky-800">donations@purinapaq.org</strong>
                            </p>
                            <div className="bg-sky-50 border border-sky-100 p-4 rounded-lg text-xs text-sky-900 leading-relaxed">
                                {t('cta.etransfer.important_note')}
                            </div>
                        </div>
                    </div>

                    {/* Por Cheque */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-sky-100 p-4 rounded-full text-sky-700 shrink-0">
                            <Landmark size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">{t('cta.check.title')}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                <strong>{t('cta.check.payable_to')}</strong> Purinapaq - Movilidad sin fronteras<br />
                                {t('cta.check.address')}
                            </p>
                            <p className="mt-4 text-xs text-slate-500 italic">
                                {t('cta.check.charity_reg')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}