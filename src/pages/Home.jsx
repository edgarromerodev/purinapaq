
import ContactForm from "../sections/ContactForm";
import DonationCTA from "../sections/DonationCTA";
import { FaqSection } from "../sections/FaqSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";

import StatsSection from "../sections/StatsSection";
import Testimonials from "../sections/Testimonials";
import TestimonialsSection from "../sections/TestimonialsSection";

export default function Home() {
    return (
<main>
            <HeroSection />
            
            <FeaturesSection />
            <StatsSection />
             <DonationCTA/>
            <FaqSection />
             <Testimonials/>
            <ContactForm/>
        </main>
    );
}