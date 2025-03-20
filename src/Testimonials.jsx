import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    { 
        text: "“We challenged Sanguine to create a nationwide leukaemia awareness campaign that was uplifting and memorable, yet sensitive to existing patients. They struck the perfect balance and exceeded our expectations.”",
        logo: "/Logos/LUK logo white.png",
    },
    { 
        text: "“We asked Sanguine to take full control of our brand, presentations and website to get us off the ground. Their strategy and creative execution gave us full confidence for our launch.”",
        logo: "/Logos/PATtech logo white.png",
    },
    { 
        text: "“Sanguine was instrumental in shaping Avenella in its earliest stages, helping us think both big picture and tactically. They guided us in honing our vision, our ‘why,’ and our target customers - giving us the clarity we needed to build...",
        logo: "/Logos/Avenella logo.png",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const visibleTestimonials = testimonials.slice(index, index + 3);

    const nextTestimonial = () => {
        setIndex((prev) => (prev + 1) % (testimonials.length - 2));
    };

    const prevTestimonial = () => {
        setIndex((prev) => (prev - 1 + testimonials.length - 2) % (testimonials.length - 2));
    };

    return (
        <div data-scroll className="t-section">
            <div className="t-header">Business leaders trust Sanguine to deliver for them</div>
            <div className="t-card-container">
                {/*<div onClick={prevTestimonial} className="t-button">
                    <img src="icons/arrow.png" width={100} height={100} style={{objectFit: "contain", width: "4rem"}} />
                </div>*/}
                <div className="t-carousel">
                    <AnimatePresence mode="popLayout">
                        {visibleTestimonials.map((testimonial, i) => (
                            <motion.div
                                key={`t-card-${index + i}`}
                                className="t-card"
                                initial={{ opacity: 1, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="t-text">{testimonial.text}</p>
                                <img width={150} src={testimonial.logo} className="t-logo" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                {/*<div onClick={nextTestimonial} className="t-button">
                    <img src="icons/arrow.png" width={100} height={100} style={{objectFit: "contain", rotate: "180deg", width: "4rem"}} />
                </div> */}
            </div>
        </div>
    );
};

export { Testimonials };
