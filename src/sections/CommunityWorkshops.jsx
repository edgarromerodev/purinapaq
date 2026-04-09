import React from "react";
import { useInView } from "react-intersection-observer";
import { 
  Users, 
  FileText, 
  Wrench, 
  CheckCircle, 
  RefreshCw, 
  ArrowRight 
} from "lucide-react";

export default function CommunityWorkshops() {
  const { ref: refHeader, inView: inViewHeader } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: refSteps, inView: inViewSteps } = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      icon: <FileText size={32} />,
      title: "1. Request Process",
      description: "Individuals submit a request form with medical recommendations. A social worker conducts a home visit to assess specific needs."
    },
    {
      icon: <Wrench size={32} />,
      title: "2. Reconditioning",
      description: "Our workshop adapts every device to meet the user's specific requirements, ensuring comfort, safety, and functionality."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "3. Delivery & Follow-Up",
      description: "We deliver the device, provide safety guidance, and perform ongoing maintenance to keep it in optimal condition."
    },
    {
      icon: <RefreshCw size={32} />,
      title: "4. Device Reuse",
      description: "When no longer needed, devices are returned, refurbished, and reassigned, ensuring maximum impact and sustainability."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden text-slate-900">
      <div className="max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto w-full">
        
        {/* Header Section */}
        <div 
          ref={refHeader}
          className={`max-w-4xl mb-20 transition-all duration-1000 ${
            inViewHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6">
            <Users size={16} /> Community Workshops
          </div>
          <h2 className="text-3xl font-semibold text-slate-900 mb-8 ">
            How our distribution process works
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            At Purinapaq - Mobility Without Borders, our workshops ensure that every device 
            is personally matched and adapted to the individual, restoring independence and dignity.
          </p>

          <div className="mt-10 p-6 bg-sky-50 rounded-[2rem] border border-sky-100 inline-block">
             <p className="text-sky-800 font-medium italic">
                "We establish formal agreements with local organizations to coordinate safe and effective distribution."
             </p>
          </div>
        </div>

        {/* Steps Process Grid */}
        <div 
          ref={refSteps}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            inViewSteps ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-slate-100 -translate-x-12 z-0">
                  <div className="absolute right-0 -top-1">
                    <ArrowRight className="text-slate-200" size={12} />
                  </div>
                </div>
              )}

              <div className="relative z-10 bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-500 h-full flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-3xl bg-sky-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-sky-600/20 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.description}
                </p>

                {/* Status Indicator (Checkmark) */}
                <div className="mt-auto pt-6">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                        <CheckCircle size={20} fill="currentColor" className="text-white" />
                        <CheckCircle size={20} className="absolute" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Impact Message */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-sky-700  mb-4">Maximum Impact</p>
            <p className="text-2xl font-semibold text-slate-800">
              Ensuring sustainability through refurbishing and reassignment.
            </p>
        </div>
      </div>
    </section>
  );
}