import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next'; // Importamos el hook

export default function HeroSection() {
    const { t, i18n } = useTranslation(); // Extraemos t e i18n
    const navigate = useNavigate();

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/donation.webp" 
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
                            key={i18n.language} // IMPORTANTE: Reinicia el efecto al cambiar idioma
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(t('hero.title')) // Usamos la traducción aquí
                                    .pauseFor(1000)
                                    .callFunction(() => {
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

                    {/* Contenido inferior con animación */}
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                        <p className="text-lg md:text-xl mt-6 text-slate-100 leading-relaxed max-w-xl">
                            {t('hero.description')}
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                            <button 
                                onClick={() => navigate('/historia')} 
                                className="bg-sky-700 hover:bg-sky-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg text-lg"
                            >
                                {t('hero.button')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}