import React from "react";
import { useInView } from "react-intersection-observer";
import { 
  Heart, 
  ShieldCheck, 
  Wrench, 
  Truck, 
  Users, 
  TrendingUp,
  HandHeart
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import DonationCTA from "./DonationCTA";

export default function DonationsPage() {
    const { ref: refIntro, inView: inViewIntro } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refImpact, inView: inViewImpact } = useInView({ triggerOnce: true, threshold: 0.2 });

    const benefits = [
        { icon: <Wrench size={24} />, text: "Collect and refurbish mobility and assistive equipment" },
        { icon: <Truck size={24} />, text: "Support transportation and logistics for local and international shipments" },
        { icon: <Users size={24} />, text: "Operate community workshops and distribution programs" },
        { icon: <TrendingUp size={24} />, text: "Expand our reach to communities with the greatest need" }
    ];

    return (
        <main className="bg-white">
            {/* --- SECCIÓN 1: INTRODUCCIÓN Y MISIÓN --- */}
            <section className="pt-32 pb-20 overflow-hidden">
                <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                    <SectionTitle 
                        text1="Your support is essential" 
                        text2="Donations" 
                    />

                    <div 
                        ref={refIntro}
                        className={`mt-16 flex flex-col lg:flex-row gap-16 items-center transition-all duration-1000 ${
                            inViewIntro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold  bg-rose-50 text-rose-700">
                                <Heart size={16} fill="currentColor" /> Thank You for giving generously
                            </div>
                            <h3 className="text-3xl font-semibold text-slate-900 leading-tight">
                                Making mobility a right, not a privilege.
                            </h3>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    At Purinapaq - Mobility Without Borders, we are deeply committed to supporting individuals 
                                    living with disabilities in underserved communities. Every dollar contributed and every piece 
                                    of equipment donated is handled with <strong>care, responsibility, and purpose.</strong>
                                </p>
                                <p>
                                    The impact of your support is truly transformative. When someone receives a mobility device, they gain more than movement.
                                    They gain <strong>independence, dignity, and new opportunities.</strong>
                                </p>
                            </div>
                        </div>

                        {/* --- IMAGEN CON TAMAÑO CORREGIDO (IGUAL A HISTORIA) --- */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative">
                                <img 
                                    src="/images/impact-donation.webp" 
                                    alt="Impact of donations" 
                                    loading="lazy"
                                    className="rounded-3xl shadow-2xl w-full h-[498px] object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-sky-700 text-white p-8 rounded-2xl hidden xl:block max-w-xs shadow-xl">
                                    <p className="italic font-medium text-sm">
                                        "Together, we build a more inclusive world where mobility is accessible to all."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 2: CÓMO AYUDA TU DONACIÓN --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-2xl font-semibold text-slate-900 mb-4">Make a Difference</h4>
                                <p className="text-slate-600 text-lg">Your financial contribution allows us to:</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map((item, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col gap-4 group hover:shadow-md transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <p className="font-medium text-slate-700 leading-snug">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div 
                            ref={refImpact}
                            className={`space-y-10 transition-all duration-1000 ${
                                inViewImpact ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                            }`}
                        >
                            <div className="p-10 bg-white rounded-[2.5rem] border-l-8 border-sky-600 shadow-sm">
                                <div className="flex items-center gap-3 text-sky-700 font-bold  text-sm mb-4">
                                    <ShieldCheck size={20} /> Transparency & Impact
                                </div>
                                <h4 className="text-2xl font-semibold text-slate-900 mb-4">Accountability you can trust</h4>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    Donors receive <strong>official donation receipts for tax purposes</strong>. Whenever possible, we share updates, photos, and reports that demonstrate the impact of your generosity.
                                </p>
                                <div className="flex items-center gap-4 p-4 bg-sky-50 rounded-2xl text-sky-800 text-sm font-medium">
                                    <HandHeart size={24} className="flex-shrink-0" />
                                    Your support ensures essential resources reach individuals with limited or no access.
                                </div>
                            </div>

                            <div className="text-center lg:text-left px-4">
                                <p className="text-2xl font-semibold text-slate-800">Join Our Mission</p>
                                <p className="text-slate-500 mt-2 italic">By supporting Purinapaq, you are helping build a world where mobility is not a privilege, but a right.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DonationCTA />

            <div className="sr-only">
                <h2>Detailed Donation Information</h2>
                <p>Support Purinapaq - Mobility Without Borders.</p>
            </div>
        </main>
    );
}