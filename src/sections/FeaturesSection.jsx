import SectionTitle from "../components/SectionTitle";

export default function FeaturesSection() {
    return (
        <>
            <SectionTitle
                text1="Características"
                text2="Resumen de Funciones"
                text3="Una colección visual de nuestras soluciones más recientes: cada proyecto diseñado con estrategia, creatividad y resultados medibles."
            />

            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                {/* --- 1 --- */}
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img
                        className="rounded-xl"
                        src="/assets/analisis.jpg"
                        alt="Análisis de Opiniones"
                        height={400}
                        width={400}
                    />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">
                        Análisis de Opiniones
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                        Analiza los comentarios de tus clientes para mejorar tus campañas y aumentar la satisfacción.
                    </p>
                </div>

                {/* --- 2 --- */}
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img
                        className="rounded-xl"
                        src="/assets/gestion.jpg"
                        alt="Gestión de Clientes"
                        height={400}
                        width={400}
                    />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">
                        Gestión de Clientes
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                        Administra fácilmente tus contactos, segmenta audiencias y crea relaciones más efectivas.
                    </p>
                </div>

                {/* --- 3 --- */}
                <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <img
                        className="rounded-xl"
                        src="/assets/reportes.jpg"
                        alt="Reportes Inteligentes"
                        height={400}
                        width={400}
                    />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">
                        Reportes Inteligentes
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                        Obtén informes claros sobre tus resultados de marketing para tomar decisiones más rápidas y efectivas.
                    </p>
                </div>
            </div>
        </>
    );
}
