import Marquee from "react-fast-marquee";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonialsData";
import SectionTitle from "../components/SectionTitle";

export default function Testimonials() {
    return (
        <>
            <SectionTitle
                text1="Testimonios"
                text2="Lo Que Dicen Nuestros Clientes"
                text3="Una muestra de la confianza que las marcas depositan en nosotros — cada proyecto refleja resultados reales y experiencias positivas."
            />

            <Marquee
                className="max-w-5xl mx-auto mt-11"
                gradient={true}
                speed={25}
            >
                <div className="flex items-center justify-center py-5">
                    {[...testimonialsData, ...testimonialsData].map(
                        (testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                            />
                        )
                    )}
                </div>
            </Marquee>

            <Marquee
                className="max-w-5xl mx-auto"
                gradient={true}
                speed={25}
                direction="right"
            >
                <div className="flex items-center justify-center py-5">
                    {[...testimonialsData, ...testimonialsData].map(
                        (testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                            />
                        )
                    )}
                </div>
            </Marquee>
        </>
    );
}
