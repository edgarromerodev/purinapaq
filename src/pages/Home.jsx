import BottomBanner from "../sections/BottomBanner";
import ContactForm from "../sections/ContactForm";
import DonationCTA from "../sections/DonationCTA";
import { FaqSection } from "../sections/FaqSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import Pricing from "../sections/Pricing";
import StatsSection from "../sections/StatsSection";
import Testimonials from "../sections/Testimonials";


export default function Home() {
    return (
<main>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
             <DonationCTA/>
            <FaqSection />
            <ContactForm/>
        </main>
    );
}