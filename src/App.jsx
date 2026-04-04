import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MissionVision from "./sections/MissionVision";
import ScrollToTop from "./components/ScrollToTop";
import HistorySection from "./sections/HistorySection";
import EquipmentDonation from "./sections/EquipmentDonation";
import { useEffect } from "react";



export default function App() {
    useEffect(() => {
        const interval = setInterval(() => {
            const select = document.querySelector('.goog-te-combo');
            if (select) {
                if (select.value !== 'en') {
                    select.value = 'en';
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                }
                // Si ya está en inglés, dejamos de procesar
                if (select.value === 'en') clearInterval(interval);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
        <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mision-vision" element={<MissionVision />} />
                <Route path="/historia" element={<HistorySection />} />
                <Route path="/donar-equipo" element={<EquipmentDonation />} />
            </Routes>
            <Footer />
        </>
    );
}