import React from "react";
import { useInView } from "react-intersection-observer";
import { Truck, Heart, Info } from "lucide-react";

export default function EquipmentDonation() {
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refContent, inView: inViewContent } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Categories with Wheelchairs at the beginning
    const categories = [
        "Manual Wheelchair", "Power Wheelchair", "Walker", "Cane", 
        "Crutches", "Forearm Crutches", "Commode Chair", "Special Cushions", 
        "Hoyer Lift", "Rehab Equipment", "Hearing Aid", "White Cane", 
        "Braille Machine", "Computer", "Laptop", "Tablet", "Cell Phone"
    ];

    return (
        <section className="py-24 bg-sky-50 overflow-hidden text-slate-900">
            {/* Main container adapted to your global layout width */}
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* Header Section */}
                <div 
                    ref={refHeader}
                    className={`max-w-3xl mb-16 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold  mb-6">
                        <Heart size={16} fill="currentColor" /> Donate Equipment
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-6 ">
                        Transform a life with what you no longer use
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        If you have a mobility device or other assistive device gathering dust in your garage, <strong>get in touch with us!</strong> Your donation breaks borders.
                    </p>
                </div>

                <div 
                    ref={refContent}
                    className={`grid lg:grid-cols-3 gap-12 transition-all duration-1000 delay-200 ${
                        inViewContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}
                >
                    {/* DONATION FORM */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-sky-100">
                        <form className="space-y-10">
                            
                            {/* Step 1 */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">1</div>
                                    <h3 className="font-semibold text-2xl text-slate-800">Personal Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name *</label>
                                        <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Address</label>
                                        <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">City *</label>
                                        <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Phone *</label>
                                        <input type="tel" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address *</label>
                                        <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">2</div>
                                    <h3 className="font-semibold text-2xl text-slate-800">Pickup Preference</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Convenient Day *</label>
                                        <input type="date" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Suggested Time</label>
                                        <input type="text" placeholder="Ex: Mornings 9:00 to 12:00" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">3</div>
                                    <h3 className="font-semibold text-2xl text-slate-800">What would you like to donate?</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {categories.map((item) => (
                                        <label key={item} className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl hover:bg-sky-50 cursor-pointer transition-colors group">
                                            <input type="checkbox" className="w-5 h-5 accent-sky-600" />
                                            <span className="text-[15px] font-medium text-slate-600 group-hover:text-sky-800">{item}</span>
                                        </label>
                                    ))}
                                    <div className="sm:col-span-2 md:col-span-3 space-y-2 mt-4">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Other / Comments</label>
                                        <textarea rows="4" placeholder="Describe the equipment condition..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none resize-none"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full py-5 bg-sky-700 hover:bg-slate-900 text-white rounded-[1.5rem] font-bold text-lg transition-all shadow-xl shadow-sky-700/20 active:scale-[0.98]">
                                Send Donation Request
                            </button>
                        </form>
                    </div>

                    {/* SIDE CARDS */}
                    <div className="space-y-8">
                        <div className="bg-sky-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <Truck className="mb-6 text-sky-300" size={48} />
                            <h4 className="text-2xl font-semibold mb-6">How does it work?</h4>
                            <ul className="space-y-6 text-lg text-sky-100/90">
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-sm">1</span>
                                    Fill out the form with the equipment details.
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-sm">2</span>
                                    We will contact you to coordinate logistics.
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-sm">3</span>
                                    The equipment is inspected and delivered to those in need.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-10 border border-sky-100 shadow-sm">
                            <Info className="mb-4 text-sky-600" size={40} />
                            <h4 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Important Note</h4>
                            <p className="text-lg text-slate-500 leading-relaxed italic">
                                "Your donation helps Purinapaq - Mobility Without Borders transform the lives of people with disabilities worldwide."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}