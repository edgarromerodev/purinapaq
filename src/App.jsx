import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MissionVision from "./sections/MissionVision";
import ScrollToTop from "./components/ScrollToTop";
import HistorySection from "./sections/HistorySection";
import EquipmentDonation from "./sections/EquipmentDonation";
import TeamPartners from "./sections/TeamPartners";
import MeetTheDirector from "./sections/MeetTheDirector";
import DeviceRequestForm from "./sections/DeviceRequestForm";
import CommunityWorkshops from "./sections/CommunityWorkshops";
import GlobalImpactSection from "./sections/GlobalImpactSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import DonationsPage from "./sections/DonationsPage";
import VolunteerSection from "./sections/VolunteerSection";
import SponsorSection from "./sections/SponsorSection";
import NewsStories from "./sections/NewsStories";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import TermsConditions from "./sections/TermsConditions";
import GallerySection from "./sections/GallerySection";


export default function App() {

    return (
        <>
        <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mision-vision" element={<MissionVision />} />
                <Route path="/history" element={<HistorySection />} />
                <Route path="/team-partners" element={<TeamPartners />} />
                <Route path="/director" element={<MeetTheDirector />} />
                <Route path="/request-equipment" element={<DeviceRequestForm/>} />
                <Route path="/workshops" element={<CommunityWorkshops/>} />
                <Route path="/global-impact" element={<GlobalImpactSection/>} />
                <Route path="/testimonials" element={<TestimonialsSection/>} />
                <Route path="/gallery" element={<GallerySection/>} />
                  <Route path="/donate" element={<DonationsPage/>} />
                <Route path="/equipment-donations" element={<EquipmentDonation />} />
                <Route path="/volunteer" element={<VolunteerSection />} />
                <Route path="/sponsor" element={<SponsorSection />} />
                <Route path="/news" element={<NewsStories/>} />
                <Route path="/privacy" element={<PrivacyPolicy/>} />
                <Route path="/terms" element={<TermsConditions/>} />
            </Routes>
            <Footer />
        </>
    );
}