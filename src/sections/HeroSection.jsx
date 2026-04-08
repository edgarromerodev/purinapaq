import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section 
            id="inicio" 
            className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pb-20 lg:pb-32 overflow-hidden"
            role="region"
            aria-label="Welcome section"
        >
            {/* Contenedor de Imagen de Fondo */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/donation.webp" 
                    alt="A young man receiving mobility assistance from Purinapaq" 
                    className="w-full h-full object-cover object-top" 
                    loading="lazy" 
                />
                
                {/* OVERLAY TÉCNICO */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/12 to-transparent"></div>
            </div>

            {/* CONTENEDOR MAESTRO
                - py-10: Asegura que el contenido nunca toque los bordes superior/inferior en laptops.
            */}
            <div className="relative z-10 w-full max-w-[1650px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-white max-w-2xl lg:text-left text-center">
                        
                        {/* TÍTULO ACCESIBLE */}
                        <h1 
                            id="hero-heading"
                            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight min-h-[140px] md:min-h-0"
                        >
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Restoring Mobility. Empowering Communities.")
                                        .pauseFor(1000)
                                        .callFunction(() => {
                                            const cursor = document.querySelector('.Typewriter__cursor');
                                            if (cursor) cursor.style.display = 'none';
                                        })
                                        .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 50,
                                    cursor: "|",
                                    wrapperClassName: "text-white",
                                }}
                            />
                        </h1>

                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                            <p className="text-lg md:text-xl mt-6 text-slate-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Purinapaq provides assistive devices to people with disabilities in underserved communities, fostering independence, dignity, and inclusion.
                            </p>
                            
                            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">
                                <a 
                                    href="https://www.canadahelps.org/en/charities/purinapaq-mobility-without-borders"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-sky-700 hover:bg-sky-800 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl text-lg inline-flex items-center active:scale-95"
                                    aria-label="Donate now to Purinapaq (opens in a new tab)"
                                >
                                    Donate Now
                                </a>

                                <button 
                                    onClick={() => navigate('/mision-vision')} 
                                    className="bg-white hover:bg-slate-100 text-sky-900 px-10 py-4 rounded-full font-bold transition-all shadow-xl text-lg active:scale-95"
                                    aria-label="Learn more about our mission and vision"
                                >
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Espacio para balancear el layout en Desktop */}
                    <div className="hidden lg:block lg:w-1/4"></div>
                </div>
            </div>

            {/* LECTOR DE PANTALLA */}
            <div className="sr-only">
                <h2>Purinapaq: Mobility Without Borders</h2>
                <p>Welcome to our homepage. We are dedicated to restoring mobility and empowering communities through assistive devices.</p>
            </div>
        </section>
    );
}