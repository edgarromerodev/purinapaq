import React from "react";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  const { ref: refLeft, inView: inViewLeft } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refRight, inView: inViewRight } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contacto"
      className="py-24 bg-sky-50 overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="w-full max-w-[1650px] px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* FORMULARIO */}
          <div
            ref={refLeft}
            className={`bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-sky-100 transition-all duration-1000 ${
              inViewLeft
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2
              id="contact-title"
              className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight"
            >
              Have questions?
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed">
              We'd love to hear from you! Contact us to find out how you can
              join{" "}
              <span className="font-semibold text-sky-700">Purinapaq</span>.
            </p>

            <form
              action="mailto:edgarromerocuc94@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-5"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1"
                  >
                    Your name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1"
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="email@example.com"
                    required
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 ml-1"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-600/5 transition-all resize-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  value="Yes"
                  required
                  className="mt-1 w-5 h-5 cursor-pointer accent-sky-700 rounded border-slate-300 transition-all"
                />

                <label
                  htmlFor="consent"
                  className="text-[11px] text-slate-500 leading-snug cursor-pointer select-none"
                >
                  I wish to receive information from Purinapaq. I understand
                  that I can withdraw my consent at any time.
                </label>
              </div>

              <button
                type="submit"
                className="group w-full py-4 bg-sky-700 hover:bg-sky-800 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-700/25 active:scale-[0.98]"
              >
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  aria-hidden="true"
                />
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACTO */}
          <div
            ref={refRight}
            className={`bg-sky-900 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden text-white flex flex-col justify-between shadow-xl transition-all duration-1000 delay-200 ${
              inViewRight
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl -mr-40 -mt-40"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-10">Connect with us</h3>

              <address className="not-italic space-y-10">

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-sky-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-sky-300 transition-colors">
                    <Mail size={24} />
                  </div>

                  <div>
                    <p className="text-sky-300 text-[11px] font-bold uppercase tracking-wider">
                      Write to us
                    </p>

                    <a
                      href="mailto:info@purinapaq.org"
                      className="text-lg font-medium hover:text-sky-300 transition-colors"
                    >
                      info@purinapaq.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-sky-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-sky-400 transition-colors">
                    <Phone size={24} />
                  </div>

                  <div>
                    <p className="text-sky-300 text-[11px] font-bold uppercase tracking-wider">
                      Call us
                    </p>

                    <a
                      href="tel:+14169389311"
                      className="text-lg font-medium hover:text-sky-300 transition-colors"
                    >
                      (416) 938 9311
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-sky-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-sky-300 transition-colors">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <p className="text-sky-300 text-[11px] font-bold uppercase tracking-wider">
                      Location
                    </p>

                    <p className="text-base opacity-90 leading-relaxed font-light">
                      306-30 Elsinore Path
                      <br />
                      Etobicoke, ON M8V 3Z6, Canada
                    </p>
                  </div>
                </div>

              </address>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <p className="text-xs text-sky-100/60 italic leading-relaxed">
                Purinapaq is a registered charitable organization under number{" "}
                <span className="font-semibold">#742640535RR0001</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="sr-only">
        <h2>Contact Purinapaq - Mobility Without Borders</h2>
        <p>
          Reach out to our Etobicoke office for wheelchair donations, volunteer
          opportunities, and mobility assistance programs in Canada and Peru.
        </p>
      </div>
    </section>
  );
}