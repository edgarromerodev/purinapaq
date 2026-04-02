import Typewriter from 'typewriter-effect';

export default function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
            {/* Imagen de fondo (Mantén tu código actual aquí) */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/hero-purinapaq.jpg" 
                    alt="Fondo Purinapaq" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="text-white max-w-2xl lg:text-left text-center">
                    
                    {/* TÍTULO CON TYPEWRITER */}
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[160px] md:min-h-0">
    <Typewriter
        onInit={(typewriter) => {
            typewriter
                .typeString('Llevar movilidad y esperanza a quienes más lo necesitan.')
                .pauseFor(1000) // Opcional: espera un segundo antes de ocultar
                .callFunction(() => {
                    // Esta línea oculta el cursor buscando la clase de la librería
                    const cursor = document.querySelector('.Typewriter__cursor');
                    if (cursor) {
                        cursor.style.display = 'none';
                    }
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

                    {/* Contenido inferior con animación de aparición suave */}
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                        <p className="text-lg md:text-xl mt-6 text-slate-100 leading-relaxed max-w-xl">
                            Ayudamos a personas con discapacidad en regiones vulnerables a recuperar su independencia a través de equipos de movilidad.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                            <button className="bg-sky-700 hover:bg-sky-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg text-lg">
                                Conoce nuestra historia
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}