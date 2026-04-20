import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ClipboardList, Accessibility, FileText, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Importamos la configuración centralizada
import { sendForm, PURINAPAQ_EMAILS } from "../utils/formConfig";

export default function DeviceRequestForm() {
    const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: refContent, inView: inViewContent } = useInView({ triggerOnce: true, threshold: 0.1 });

    // ESTADOS PARA EL ENVÍO Y NOTIFICACIONES
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const mobilityDevices = [
        "Manual Wheelchair", "Power Wheelchair", "Walker", "Cane", 
        "Axillary Crutches", "Forearm Crutches", "Commode Chair", "Special Cushion/Mattress", 
        "Patient Lift", "Rehab Equipment", "Hearing Aid", "White Cane", 
        "Braille Machine", "Computer", "Laptop", "Tablet", "Cell Phone"
    ];

    // FUNCIÓN DE ENVÍO
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const formData = new FormData(event.target);

        try {
            const result = await sendForm(
                formData, 
                PURINAPAQ_EMAILS.REQUEST, 
                "Nueva Solicitud de Equipo - Purinapaq Web"
            );

            if (result.success) {
                setStatus("success");
                event.target.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus(null), 5000);
        }
    };

    return (
        <section className="py-24 bg-sky-50 overflow-hidden text-slate-900">
            <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
                
                {/* NOTIFICACIÓN FLOTANTE (Igual al de Donaciones) */}
                {status && (
                    <div className={`fixed top-10 right-10 z-50 p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-5 duration-300 ${
                        status === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
                    }`}>
                        {status === "success" ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                        <div>
                            <p className="font-bold">{status === "success" ? "Request Sent!" : "Submission Error"}</p>
                            <p className="text-sm opacity-90">
                                {status === "success" 
                                    ? "Your application has been received successfully." 
                                    : "Something went wrong. Please try again later."}
                            </p>
                        </div>
                    </div>
                )}

                {/* Header */}
                <div ref={refHeader} className={`max-w-4xl mb-16 transition-all duration-1000 ${inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold uppercase mb-6">
                        <ClipboardList size={16} /> Device Request
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-6 ">
                        Request a Mobility or Assistive Device
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        At Purinapaq, we are committed to improving the quality of life of individuals living with disabilities by providing access to mobility and assistive devices.
                    </p>
                </div>

                <div ref={refContent} className={`grid lg:grid-cols-3 gap-12 transition-all duration-1000 delay-200 ${inViewContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
                    
                    {/* REQUEST FORM */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-sky-100">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            
                            {/* 1. Beneficiary Data */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">1</div>
                                    <h3 className="font-semibold text-2xl text-slate-800">Beneficiary Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Surnames *</label>
                                        <input type="text" name="beneficiary_surnames" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">First Name (s) *</label>
                                        <input type="text" name="beneficiary_names" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Date of Birth</label>
                                        <input type="date" name="birth_date" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">ID Number / Document</label>
                                        <input type="text" name="id_document" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Address</label>
                                        <input type="text" name="address" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">City *</label>
                                        <input type="text" name="city" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Phone *</label>
                                        <input type="tel" name="phone" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address *</label>
                                        <input type="email" name="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
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
                                        <textarea name="diagnosis" rows="2" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none resize-none"></textarea>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Disability Level</label>
                                        <select name="disability_level" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none appearance-none bg-white">
                                            <option value="Mild">Mild</option>
                                            <option value="Moderate">Moderate</option>
                                            <option value="Severe">Severe</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 flex items-center gap-6 p-2">
                                        <span className="text-sm font-bold text-slate-700">Medical treatment or physiotherapy?</span>
                                        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="on_treatment" value="Yes" className="accent-sky-600" /> Yes</label>
                                        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="on_treatment" value="No" className="accent-sky-600" /> No</label>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Device Identification */}
                            <div>
                                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg">3</div>
                                    <h3 className="font-semibold text-2xl text-slate-800">Device Selection & Specs</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                    {mobilityDevices.map((item) => (
                                        <label key={item} className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl hover:bg-sky-50 cursor-pointer transition-colors group">
                                            <input type="checkbox" name="requested_devices[]" value={item} className="w-5 h-5 accent-sky-600" />
                                            <span className="text-[14px] font-medium text-slate-600 group-hover:text-sky-800">{item}</span>
                                        </label>
                                    ))}
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Height (cm)</label>
                                        <input type="number" name="spec_height" className="w-full p-3 border border-slate-200 rounded-xl outline-none" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Weight (kg)</label>
                                        <input type="number" name="spec_weight" className="w-full p-3 border border-slate-200 rounded-xl outline-none" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Seat Width (cm)</label>
                                        <input type="number" name="spec_seat_width" className="w-full p-3 border border-slate-200 rounded-xl outline-none" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Hip Circ. (cm)</label>
                                        <input type="number" name="spec_hip_circ" className="w-full p-3 border border-slate-200 rounded-xl outline-none" />
                                    </div>
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
                                        <input type="text" name="entity_contact" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Additional Comments</label>
                                        <textarea name="comments" rows="3" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-600 outline-none resize-none"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100 flex items-start gap-4">
                                <input type="checkbox" name="accept_terms" required className="mt-1 w-5 h-5 accent-sky-600" />
                                <p className="text-sm font-medium text-slate-700">
                                    Yes, I request to be considered as a beneficiary for a mobility, rehabilitation, and/or assistive device.
                                </p>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`w-full py-5 text-white rounded-[1.5rem] font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${
                                    isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-sky-700 hover:bg-slate-900 shadow-sky-700/20 active:scale-[0.98]"
                                }`}
                            >
                                {isSubmitting ? (
                                    <><Loader2 className="animate-spin" /> Submitting...</>
                                ) : (
                                    "Submit Request Application"
                                )}
                            </button>
                        </form>
                    </div>

                    {/* SIDEBAR CARDS */}
                    <div className="space-y-8">
                        <div className="bg-sky-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
                            <FileText className="mb-6 text-sky-300" size={48} />
                            <h4 className="text-2xl font-semibold mb-6">Offline Application</h4>
                            <p className="text-sky-100/80 mb-8 text-lg">
                                You can also download, complete, and send the PDF form to our office.
                            </p>
                            <a href="/forms/device-request.pdf" download className="inline-flex items-center justify-center w-full py-4 mb-8 bg-white text-sky-800 rounded-2xl font-bold text-base transition-all hover:bg-sky-50 shadow-lg gap-2">
                                <FileText size={20} /> Download PDF Form
                            </a>
                        </div>
                        
                        <div className="bg-white rounded-[2.5rem] p-10 border border-sky-100 shadow-sm text-center">
                            <Accessibility className="mb-4 text-sky-600 mx-auto" size={40} />
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