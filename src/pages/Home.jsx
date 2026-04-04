import BottomBanner from "../sections/BottomBanner";
import ContactForm from "../sections/ContactForm";
import DonationCTA from "../sections/DonationCTA";
import { FaqSection } from "../sections/FaqSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";

import StatsSection from "../sections/StatsSection";

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