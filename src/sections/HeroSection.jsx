export default function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
            {/* Imagen de fondo con Overlay para legibilidad */}
<div className="absolute inset-0 z-0">
                <img 
                    src="/images/hero-purinapaq.jpg" 
                    alt="Fondo Purinapaq" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
            </div>

            {/* Contenido Principal */}
            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-12">
                
                {/* Texto del Hero */}
                <div className="text-white max-w-2xl lg:text-left text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Llevar movilidad y esperanza a quienes más lo necesitan.
                    </h1>
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
        </section>
    );
}