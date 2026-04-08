import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { useInView } from "react-intersection-observer";

const faqsData = [
    {
        question: "How many people need wheelchairs and cannot afford them?",
        answer: "It is estimated that at least 100 million people worldwide need a wheelchair but cannot afford one. In developing countries, this figure can reach up to 10% of the population."
    },
    {
        question: "Where does the mobility equipment come from?",
        answer: "We receive equipment and parts from hospitals, long-term care centers, businesses, and individuals committed to the community."
    },
    {
        question: "Is the equipment maintained before being delivered?",
        answer: "Yes. We perform complete mechanical and electrical maintenance, including part replacements. All devices are rigorously inspected and tested before shipment."
    },
    {
        question: "What is the cost of refurbishing a chair?",
        answer: "Refurbishing a manual chair costs approximately $50 USD, while an electric one ranges between $300 and $600 USD. This is a fraction of the cost of a new chair ($5,000+ USD)."
    },
    {
        question: "Are the chairs suitable for difficult terrain?",
        answer: "Yes, they are designed with extra-resistant tires, sealed bearings, and specialized seating to withstand the extreme conditions in developing countries."
    },
    {
        question: "How can I get involved in the cause?",
        answer: "You can help as a volunteer in collection, transportation, and repair, through tax-deductible donations, or via corporate sponsorship."
    }
];

export const FaqSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-24 bg-white overflow-hidden">
            <div 
                ref={ref}
                className={`w-full max-w-[1450px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto transition-all duration-1000 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                
                <SectionTitle 
                    text1="Common Questions"  
                    text2="Frequently Asked"  
                    text3="Queries"  
                />

                <div className="mt-16 max-w-4xl mx-auto">
                    {faqsData.map((faq, index) => (
                        <div 
                            className="mb-4 border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300" 
                            key={index}
                        >
                            <button 
                                className={`flex items-center justify-between w-full p-6 text-left transition-colors ${
                                    openIndex === index ? "bg-slate-50" : "bg-white hover:bg-slate-50"
                                }`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3 className={`text-lg font-semibold pr-4 ${
                                    openIndex === index ? "text-sky-700" : "text-slate-800"
                                }`}>
                                    {faq.question}
                                </h3>
                                <ChevronDown 
                                    size={20} 
                                    className={`${
                                        openIndex === index ? "rotate-180 text-sky-700" : "text-slate-400"
                                    } transition-transform duration-500 shrink-0`} 
                                />
                            </button>

                            <div 
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-labelledby={`faq-question-${index}`}
                                className={`transition-all duration-500 ease-in-out ${
                                    openIndex === index 
                                        ? "max-h-[500px] opacity-100" 
                                        : "max-h-0 opacity-0"
                                } overflow-hidden`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50 border-t border-slate-100 text-base">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SEO & Accesibilidad */}
            <div className="sr-only">
                <h2>Purinapaq FAQ - Mobility Assistance</h2>
                <p>Find answers about our wheelchair refurbishment process, donation costs, and how to volunteer for mobility causes in Canada and abroad.</p>
            </div>
        </section>
    );
};