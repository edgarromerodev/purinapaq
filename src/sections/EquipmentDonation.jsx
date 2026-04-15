import React from "react";
import { useInView } from "react-intersection-observer";
import { Truck, Heart, CheckCircle2, ClipboardCheck } from "lucide-react";

export default function EquipmentDonation() {
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refContent, inView: inViewContent } = useInView({ triggerOnce: true, threshold: 0.1 });

    const categories = [
        "Manual Wheelchair", "Power Wheelchair", "Walker", "Cane", 
        "Crutches", "Forearm Crutches", "Commode Chair", "Special Cushions", 
        "Hoyer Lift", "Rehab Equipment", "Hearing Aid", "White Cane", 
        "Braille Machine", "Computer", "Laptop", "Tablet", "Cell Phone"
    ];

    const requirements = [
        "Equipment is in safe and usable condition (or suitable for refurbishment)",
        "All essential parts are included",
        "The item is clean and ready for handling"
    ];

    return (
        <section className="py-24 bg-sky-50 overflow-hidden text-slate-900">
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* --- HEADER CON TEXTO DEL CLIENTE --- */}
                <div 
                    ref={refHeader}
                    className={`max-w-4xl mb-16 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6 ">
                        <Heart size={16} fill="currentColor" /> Equipment Donation
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-6 ">
                        Restoring independence and dignity.
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Thank you for your interest in supporting Purinapaq through the donation of mobility and assistive equipment. 
                        Your contribution plays a <strong>vital role in transforming lives.</strong>
                    </p>
                </div>

                <div 
                    ref={refContent}
                    className={`grid lg:grid-cols-3 gap-12 transition-all duration-1000 delay-200 ${
                        inViewContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}
                >
                    {/* --- FORMULARIO --- */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-sky-100">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">Submit Your Donation</h3>
                            <p className="text-slate-500">
                                Please complete the form below with details about the equipment. This helps our team assess the condition and suitability for refurbishment.
                            </p>
                        </div>

                        <form className="space-y-10">
                            {/* Step 1: Personal Info */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">1</div>
                                    <h3 className="font-semibold text-xl text-slate-800">Personal Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name *</label>
                                        <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address *</label>
                                        <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Phone *</label>
                                        <input type="tel" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">City/Location *</label>
                                        <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Equipment Detail */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">2</div>
                                    <h3 className="font-semibold text-xl text-slate-800">Equipment Details</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {categories.map((item) => (
                                        <label key={item} className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl hover:bg-sky-50 cursor-pointer transition-colors group">
                                            <input type="checkbox" className="w-5 h-5 accent-sky-600" />
                                            <span className="text-[14px] font-medium text-slate-600 group-hover:text-sky-800">{item}</span>
                                        </label>
                                    ))}
                                    <div className="sm:col-span-2 md:col-span-3 space-y-2 mt-4">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Description / Condition *</label>
                                        <textarea rows="4" required placeholder="Describe the equipment condition, age, and any missing parts..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none resize-none"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full py-5 bg-sky-700 hover:bg-slate-900 text-white rounded-[1.5rem] font-bold text-lg transition-all shadow-xl shadow-sky-700/20 active:scale-[0.98]">
                                Send Donation Request
                            </button>
                        </form>
                    </div>

                    {/* --- SIDEBAR CON TEXTO DEL CLIENTE --- */}
                    <div className="space-y-8">
                        {/* What Happens Next */}
                        <div className="bg-sky-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
                            <Truck className="mb-6 text-sky-300" size={40} />
                            <h4 className="text-2xl font-semibold mb-6">What Happens Next</h4>
                            <ul className="space-y-5">
                                <li className="flex gap-4 text-sky-100/90 leading-snug">
                                    <CheckCircle2 className="text-sky-400 flex-shrink-0" size={20} />
                                    <span>Our team will review your submission and contact you to confirm details.</span>
                                </li>
                                <li className="flex gap-4 text-sky-100/90 leading-snug">
                                    <CheckCircle2 className="text-sky-400 flex-shrink-0" size={20} />
                                    <span>We will coordinate a convenient time for pickup or provide instructions for drop-off.</span>
                                </li>
                                <li className="flex gap-4 text-sky-100/90 leading-snug">
                                    <CheckCircle2 className="text-sky-400 flex-shrink-0" size={20} />
                                    <span>A logistics contribution is requested to help cover transportation costs (fuel and handling).</span>
                                </li>
                            </ul>
                        </div>

                        {/* Before You Submit (Requirements) */}
                        <div className="bg-white rounded-[2.5rem] p-10 border border-sky-100 shadow-sm">
                            <ClipboardCheck className="mb-4 text-sky-600" size={40} />
                            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Before You Submit</h4>
                            <p className="text-slate-500 mb-6 text-sm">Please confirm the following to ensure we can accept your donation:</p>
                            <ul className="space-y-4">
                                {requirements.map((req, i) => (
                                    <li key={i} className="flex gap-3 items-start text-[15px] text-slate-600 leading-tight">
                                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Note */}
                        <div className="px-6">
                            <p className="text-sm text-slate-400 italic text-center">
                                Your support allows us to extend the life of valuable equipment and deliver it to communities where it makes a lasting difference.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}