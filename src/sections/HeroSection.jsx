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
<div className="absolute inset-0 z-0">

    <picture>
        <source 
            media="(max-width: 767px)" 
            srcSet="/images/donation-mobile.webp" 
        />

        <img 
            src="/images/donation.webp" 
            alt="A young man receiving mobility assistance from Purinapaq" 
            className="w-full h-full object-cover object-top" 
            loading="lazy" 
        />
    </picture>
    

    <div className='absolute inset-0 bg-gradient-to-r  
    from-black/100 via-black/8  to-transparent '></div>

</div>

            <div className="relative z-10 w-full max-w-[1650px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-white max-w-2xl lg:text-left text-center">
                        
                        {/* TÍTULO ACCESIBLE */}
                        <h1 
                            id="hero-heading"
                            className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight min-h-[140px] md:min-h-0"
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

<div className="mt-10 flex flex-col items-center lg:items-start gap-6">
    
    {/* TARJETA DE STRIPE */}
    <div className="animate-in fade-in zoom-in duration-700 delay-1000">
        <stripe-buy-button
            buy-button-id="buy_btn_1TIu7aCZmNSjYL4FIWzXOcRe"
            publishable-key="pk_live_51TIAo3CZmNSjYL4FFbJZuqSWIdym5nanxGcu4vA8HehPAWNs4Tbp6GpOLF3SVBcjHEw6oL0aFKJhHBQLSAtytcCr00M6V4oqYK"
        >
        </stripe-buy-button>
    </div>

    {/* BOTÓN SECUNDARIO ESTILO STRIPE */}
    <button 
        onClick={() => navigate('/mision-vision')} 
        className="group relative flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-white border-2 border-white px-10 py-3 rounded-sm font-bold transition-all duration-300 text-lg active:scale-95 overflow-hidden"
        aria-label="Learn more about our mission and vision"
    >
        <span className="relative z-10">Learn more</span>
        
        {/* Icono de flecha que resalta */}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>

        {/* Efecto de subrayado animado al hacer hover */}
        <span className="absolute bottom-2 left-10 right-14 h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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