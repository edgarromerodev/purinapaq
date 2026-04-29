import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  const navigate = useNavigate();


  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pb-20 lg:pb-28 overflow-hidden mt-18"
      role="region"
      aria-label="Welcome section"
    >
      {/* Imagen fondo */}
      <div className="absolute inset-0 z-0">
        <picture className="block w-full h-full">
          <source
            media="(max-width: 767px)"
            srcSet="/images/donation-mobile.webp"
          />

          <img
            src="/images/hero-desktop1.webp"
            alt="A young man receiving mobility assistance from Purinapaq"
            className="
              w-full h-full
              object-cover
              object-top
              md:object-top
              lg:object-[78%_top]
              xl:object-right-top
            "
            loading="lazy"
          />
        </picture>

        {/* Overlay Mobile */}
        <div className="absolute inset-0 bg-black/35 md:hidden"></div>

        {/* Overlay Desktop */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/95 via-black/20 to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-[1650px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-white max-w-2xl text-center lg:text-left">
            
            {/* Título */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[140px] md:min-h-0">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Restoring Mobility. Empowering Communities."
                    )
                    .pauseFor(1000)
                    .callFunction(() => {
                      const cursor = document.querySelector(
                        ".Typewriter__cursor"
                      );
                      if (cursor) cursor.style.display = "none";
                    })
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  cursor: "|",
                }}
              />
            </h1>

            {/* Párrafo */}
            <p className="text-lg md:text-xl mt-6 text-slate-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Purinapaq provides assistive devices to people with disabilities
              in underserved communities, fostering independence, dignity, and
              inclusion.
            </p>

            {/* Botones */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">
              {/* BOTÓN ACTUALIZADO A $50 */}
              <a
    href="#donar"
    className="bg-sky-700 hover:bg-sky-800 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl text-lg active:scale-95 flex items-center justify-center"
  >
    Donate Now
  </a>

              <button
                onClick={() => navigate("/mision-vision")}
                className="bg-white hover:bg-slate-100 text-sky-900 px-10 py-4 rounded-full font-bold transition-all shadow-xl text-lg active:scale-95"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Espacio derecho */}
          <div className="hidden lg:block lg:w-1/4"></div>
        </div>
      </div>
    </section>
  );
}