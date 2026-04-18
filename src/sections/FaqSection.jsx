import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { useInView } from "react-intersection-observer";

const faqsData = [
    {
        question: "What does Purinapaq mean?",
        answer: "Our name is derived from the Inca language, native to Peru. Pronounced 'pooree-naapac', the Incan verb for walk is 'puri' and 'napaq' is loosely translated to 'let us go'. This term has been used for centuries by the Incan communities of South America which symbolizes partnership both physically and spiritually with our families, communities and our planet. Puri Napaq represents the path we follow together in our journey of life."
    },
    {
        question: "What does Purinapaq – Mobility Without Borders do?",
        answer: "We are a Canadian registered charity dedicated to restoring mobility, independence, and dignity to people with disabilities in underserved communities in Canada and developing countries. We refurbish and donate assistive devices such as wheelchairs, mobility scooters, walkers, and orthopedic equipment."
    },
    {
        question: "How can I donate mobility equipment?",
        answer: "You can donate wheelchairs, walkers, scooters, crutches, and other assistive devices. Fill out our online donation form, and our team will contact you to arrange pickup or delivery of your equipment."
    },
    {
        question: "Is there a cost to pick up donated equipment?",
        answer: "Yes. To help cover transportation and logistical expenses (including vehicle use and fuel), we kindly request a contribution for equipment pickup. This amount will be included in your official donation receipt and may be used for tax purposes."
    },
    {
        question: "Where are donated items delivered?",
        answer: "Refurbished equipment is distributed to people with disabilities and vulnerable communities, both locally in Canada and internationally, through our distribution programs. Whenever possible, we share photos and reports of the shipment and impact with our donors."
    },
    {
        question: "What types of devices do you accept?",
        answer: (
            <div className="space-y-2">
                <p>We accept a wide range of devices including:</p>
                <ul className="list-disc ml-5 space-y-1">
                    <li>Manual and powered wheelchairs</li>
                    <li>Battery-powered mobility scooters</li>
                    <li>Aluminum and wheeled walkers</li>
                    <li>Crutches, canes, and other orthopedic devices</li>
                    <li>Pediatric mobility devices & Bathroom/hygiene equipment</li>
                    <li>Solar panels, batteries, and medical supplies</li>
                </ul>
                <p className="text-sm italic mt-2">All items must be safe for use or suitable for refurbishment.</p>
            </div>
        )
    },
    {
        question: "Is Purinapaq a registered organization, and can I claim a tax deduction?",
        answer: "Yes. Purinapaq is a registered Canadian charity. All donations, including contributions for transportation, will receive an official receipt that can be used for tax deduction purposes according to applicable regulations."
    },
    {
        question: "How can I track the impact of my donation?",
        answer: "When we send containers or equipment to beneficiary communities, we provide photos and reports documenting the collection, transport, and delivery process. This way, donors can see the tangible difference their contributions make in the lives of recipients."
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
                            className={`mb-4 border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                                openIndex === index ? "border-sky-200 shadow-md" : "border-slate-200"
                            }`} 
                            key={index}
                        >
                            <button 
                                className={`flex items-center justify-between w-full p-6 text-left transition-colors ${
                                    openIndex === index ? "bg-sky-50/50" : "bg-white hover:bg-slate-50"
                                }`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3 className={`text-lg font-semibold pr-4 ${
                                    openIndex === index ? "text-sky-800" : "text-slate-800"
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
                                        ? "max-h-[800px] opacity-100" 
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

            {/* SEO & Accesibilidad mejorada para Purinapaq */}
            <div className="sr-only">
                <h2>Purinapaq FAQ - Mobility Without Borders</h2>
                <p>Learn about our mission, the meaning of our name, how to donate wheelchairs and mobility equipment in Canada, and tax deduction information.</p>
            </div>
        </section>
    );
};