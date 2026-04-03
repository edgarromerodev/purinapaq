import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MissionVision from "./sections/MissionVision";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mision-vision" element={<MissionVision />} />
            </Routes>
            <Footer />
        </>
    );
}