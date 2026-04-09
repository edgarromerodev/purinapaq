import React from "react";
import { useInView } from "react-intersection-observer";
import { Users, Handshake, Heart, CheckCircle2, Linkedin, Mail } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import DonationCTA from "./DonationCTA";

export default function TeamPartners() {
    const { ref: refTeam, inView: inViewTeam } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: refPartners, inView: inViewPartners } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refTogether, inView: inViewTogether } = useInView({ triggerOnce: true, threshold: 0.2 });

    const teamMembers = [
        { name: "José Orozco", role: "Founder Director", bio: "Visionary leader dedicated to global mobility rights.", img: "/images/team1.webp" },
        { name: "Melissa Anjema", role: "Legal Advisor - Fund Raiser - Equipment Procurer", bio: "Expert in international logistics and community aid.", img: "/images/team2.webp" },
        { name: "Loriedelle Addun", role: "Secretary - Equipment procurer", bio: "Ensuring every device meets the user's specific health needs.", img: "/images/team3.webp" },
        { name: "Raymond Farrell", role: "Logistic Coordinator - Fund Raiser - Equipment procurer", bio: "Coordinating shipments and technical refurbishing.", img: "/images/team4.webp" },
        { name: "Shaffin Haji", role: "Treasure - Outreach Coordinator, Publicist, Fund Raiser", bio: "Building the network of passion that drives our mission.", img: "/images/team5.webp" },
        { name: "Dana Clark", role: "Logistic Coordinator - Fund Raiser - Equipment procurer", bio: "Connecting organizations to expand our human impact.", img: "/images/team6.webp" },
    ];

    return (
        <>
            <section id="team" className="py-28 bg-white overflow-hidden" aria-labelledby="team-title">
                <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                    
                    <SectionTitle 
                        text1="Our" 
                        text2="Team & Partners" 
                    />

                    <p className="text-center text-slate-500 mt-6 text-lg max-w-3xl mx-auto">
                        At Purinapaq - Mobility Without Borders, our work is made possible through the dedication of a committed team and the strength of meaningful partnerships.
                    </p>

                    <div className="mt-24 space-y-32">
                        
                        {/* --- SECCIÓN: OUR TEAM (Texto + Grilla) --- */}
                        <div 
                            ref={refTeam}
                            className={`transition-all duration-1000 ${
                                inViewTeam ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                        >
                            {/* Bloque de texto solicitado por el cliente */}
                            <div className="max-w-4xl mx-auto text-center mb-20">
                                <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                    Our Team
                                </div>
                                <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                                    United by a Common Purpose
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg text-pretty">
                                    Our team is composed of passionate Board of Directors, volunteers, healthcare collaborators, 
                                    technicians, and community leaders who share a common purpose: to restore mobility and 
                                    dignity to people living with disabilities. From collecting and refurbishing equipment to 
                                    coordinating international shipments and community workshops, each member plays a vital role in delivering impact.
                                </p>
                                <p className="text-slate-700 font-medium italic mt-6 flex items-center justify-center gap-2">
                                    <CheckCircle2 className="text-sky-700" size={20} />
                                    "We are driven by compassion, guided by experience, and united by the belief that mobility is a fundamental human right."
                                </p>
                            </div>

                            {/* Grilla de 6 integrantes con color del cliente */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {teamMembers.map((member, index) => (
        <div 
            key={index}
            className="group flex flex-col items-center py-10 px-6 text-sm bg-white border border-slate-200 rounded-2xl hover:border-sky-600 hover:bg-sky-600 transition-all duration-300 shadow-sm hover:shadow-xl"
        >
            <div className="relative mb-4">
                <img 
                    className="w-40 h-40 rounded-full object-cover border-4 border-slate-100 group-hover:border-sky-400/50 transition-all" 
                    src={member.img} 
                    alt={`Photo of ${member.name}`} 
                    loading="lazy"
                />
            </div>
            <h2 className="text-slate-800 group-hover:text-white text-xl font-bold mt-2 transition-colors text-center">
                {member.name}
            </h2>
            <p className="text-sky-600 group-hover:text-white/90 font-medium transition-colors text-center px-4">
                {member.role}
            </p>
        </div>
    ))}
</div>
                        </div>

                        {/* --- SECCIÓN: OUR PARTNERS --- */}
                        <div 
                            ref={refPartners}
                            className={`flex flex-col lg:flex-row-reverse items-center gap-16 transition-all duration-1000 ${
                                inViewPartners ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                            }`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <img 
                                        src="/images/partners.webp" 
                                        alt="Strategic partnerships" 
                                        className="rounded-3xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl hidden md:block shadow-xl border border-white/10">
                                        <Handshake size={40} className="opacity-20 absolute right-4 top-4" />
                                        <p className="font-bold text-xl mb-1">Stronger Together</p>
                                        <p className="text-sm opacity-90">Strategic global partnerships.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                                    Our Partners
                                </div>
                                <h3 className="text-3xl font-semibold text-slate-900 mb-6">
                                    Meaningful Collaborations
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                    We collaborate with local organizations, healthcare providers, and social workers in Canada and abroad. These partnerships ensure that every device is delivered to the right person, properly fitted, and supported over time.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg font-medium text-slate-800 border-l-4 border-sky-700 pl-4 py-2 bg-slate-50">
                                    Creating sustainable solutions that go beyond a single donation through trusted relationships.
                                </p>
                            </div>
                        </div>

                        {/* --- SECCIÓN: WORKING TOGETHER --- */}
                        <div 
                            ref={refTogether}
                            className={`p-12 rounded-[40px] bg-sky-50 transition-all duration-1000 ${
                                inViewTogether ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                        >
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="flex justify-center mb-6 text-sky-700">
                                    <Heart size={48} fill="currentColor" className="opacity-20" />
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-6">Working Together</h3>
                                <p className="text-slate-600 text-xl leading-relaxed mb-8">
                                    Our impact is the result of collaboration. By working together with donors, partners, and communities, we are building a global network committed to accessibility, inclusion, and opportunity for all.
                                </p>
                                <div className="inline-block px-8 py-4 bg-white rounded-2xl shadow-sm border border-sky-100">
                                    <p className="text-sky-800 font-bold text-lg italic">
                                        "Your unused items can give mobility, dignity, and hope: give the gift of mobility."
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <DonationCTA />
        </>
    );
}