import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Esto fuerza al navegador a ir al inicio (0,0)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Movimiento suave
        });
    }, [pathname]); // Se ejecuta cada vez que la ruta (URL) cambie

    return null;
}