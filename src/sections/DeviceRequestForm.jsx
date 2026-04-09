import React from "react";
import { useInView } from "react-intersection-observer";
import { ClipboardList,  Accessibility, FileText } from "lucide-react";

export default function DeviceRequestForm() {
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refContent, inView: inViewContent } = useInView({ triggerOnce: true, threshold: 0.1 });

    const mobilityDevices = [
        "Manual Wheelchair", "Power Wheelchair", "Walker", "Cane", 
        "Axillary Crutches", "Forearm Crutches", "Commode Chair", "Special Cushion/Mattress", 
        "Patient Lift", "Rehab Equipment", "Hearing Aid", "White Cane", 
        "Braille Machine", "Computer", "Laptop", "Tablet", "Cell Phone"
    ];

    return (
        <section className="py-24 bg-sky-50 overflow-hidden text-slate-900">
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* Header */}
                <div 
                    ref={refHeader}
                    className={`max-w-4xl mb-16 transition-all duration-1000 ${
                        inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold uppercase mb-6">
                        <ClipboardList size={16} /> Device Request
                    </div>
                    <h2 className="text-3xlfont-semibold text-slate-900 mb-6 ">
                        Request a Mobility or Assistive Device
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        At Purinapaq, we are committed to improving the quality of life of individuals living with disabilities by providing access to mobility and assistive devices. If you or someone you support requires a device, please complete the form below.
                    </p>
                </div>

                <div 
                    ref={refContent}
                    className={`grid lg:grid-cols-3 gap-12 transition-all duration-1000 delay-200 ${
                        inViewContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}
                >
                    {/* REQUEST FORM */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-sky-100">
                        <form className="space-y-12">
                            
                            {/* 1. Beneficiary Data */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">1</div>
                                    <h3 className="font-semibold text-2xl text-slate-800">Beneficiary Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Surnames *</label>
                                        <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">First Name (s) *</label>
                                        <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Date of Birth</label>
                                        <input type="date" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">ID Number / Document</label>
                                        <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Address</label>
                                        <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">City *</label>
                                        <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Province / State</label>
                                        <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Country</label>
                                        <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
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

                            {/* 2. Diagnostic Info */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">2</div>
                                    <h3 className="font-semibold text-2xl text-slate-800">Diagnostic Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">General Diagnosis *</label>
                                        <textarea rows="2" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none resize-none"></textarea>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Diagnosis Classification (ICD-10)</label>
                                        <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Disability Level</label>
                                        <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none appearance-none">
                                            <option>Mild</option>
                                            <option>Moderate</option>
                                            <option>Severe</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 flex items-center gap-6 p-2">
                                        <span className="text-sm font-bold text-slate-700">Are you receiving medical treatment or physiotherapy?</span>
                                        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="treatment" className="accent-sky-600" /> Yes</label>
                                        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="treatment" className="accent-sky-600" /> No</label>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Device Identification */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">3</div>
                                    <h3 className="font-semibold text-2xl text-slate-800">Device Selection & Specs</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-6 italic">Select the device(s) you require:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                    {mobilityDevices.map((item) => (
                                        <label key={item} className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl hover:bg-sky-50 cursor-pointer transition-colors group">
                                            <input type="checkbox" className="w-5 h-5 accent-sky-600" />
                                            <span className="text-[14px] font-medium text-slate-600 group-hover:text-sky-800">{item}</span>
                                        </label>
                                    ))}
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Height (cm)</label>
                                        <input type="number" className="w-full p-3 border border-slate-200 rounded-xl outline-none" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Weight (kg)</label>
                                        <input type="number" className="w-full p-3 border border-slate-200 rounded-xl outline-none" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Hip Circ. (cm)</label>
                                        <input type="number" className="w-full p-3 border border-slate-200 rounded-xl outline-none" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Seat Width (cm)</label>
                                        <input type="number" className="w-full p-3 border border-slate-200 rounded-xl outline-none" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Seat Width (in)</label>
                                        <input type="number" className="w-full p-3 border border-slate-200 rounded-xl outline-none" />
                                    </div>
                                </div>
                                <div className="mt-6 space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Last institution that donated a device to you:</label>
                                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                </div>
                            </div>

                            {/* 4. Entity / Institution Info */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">4</div>
                                    <h3 className="font-semibold text-2xl text-slate-800">Contact Entity / Institution</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Entity or Contact Person Name</label>
                                        <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Phone</label>
                                        <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                                        <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Additional Comments</label>
                                        <textarea rows="3" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none resize-none"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100 flex items-start gap-4">
                                <input type="checkbox" required className="mt-1 w-5 h-5 accent-sky-600" />
                                <p className="text-sm font-medium text-slate-700">
                                    Yes, I request to be considered as a beneficiary for a mobility, rehabilitation, and/or assistive device.
                                </p>
                            </div>

                            <button type="submit" className="w-full py-5 bg-sky-700 hover:bg-slate-900 text-white rounded-[1.5rem] font-bold text-lg transition-all shadow-xl shadow-sky-700/20 active:scale-[0.98]">
                                Submit Request Application
                            </button>
                        </form>
                    </div>

                    {/* SIDEBAR CARDS */}
                    <div className="space-y-8">
                        <div className="bg-sky-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <FileText className="mb-6 text-sky-300" size={48} />
                            <h4 className="text-2xl font-semibold mb-6">Offline Application</h4>
                            <p className="text-sky-100/80 mb-8 text-lg">
                                You can also download, complete, and send the PDF form to our office.
                            </p>
                            <div className="space-y-6 text-sm">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="font-bold text-sky-300 uppercase text-[10px] mb-1">Email to:</p>
                                    <p className="text-lg">request@purinapaq.org</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="font-bold text-sky-300 uppercase text-[10px] mb-1">Mail to Office:</p>
                                    <p className="text-sm leading-relaxed">
                                        Purinapaq | Mobility without borders<br />
                                        306-30 Elsinore Path<br />
                                        Etobicoke, ON M8V 3Z6
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-10 border border-sky-100 shadow-sm">
                            <Accessibility className="mb-4 text-sky-600" size={40} />
                            <h4 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Support Matching</h4>
                            <p className="text-lg text-slate-500 leading-relaxed italic">
                                "This process helps us ensure that each device is matched to the specific physical needs and measurements of the individual."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}