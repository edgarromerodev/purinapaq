import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MissionVision from "./sections/MissionVision";
import ScrollToTop from "./components/ScrollToTop";
import HistorySection from "./sections/HistorySection";
import EquipmentDonation from "./sections/EquipmentDonation";


export default function App() {

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