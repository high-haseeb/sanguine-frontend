import { useState } from "react";
import sectionsText from "./sectionsText";

const ServicesSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div data-scroll className="accordion-container">
            {sectionsText.map((sectionText, i) => (
                <div key={`section-${i}`} data-scroll className="accordion-section">
                    <div 
                        className="accordion-header" 
                        onClick={() => toggleSection(i)}
                    >
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={25} height={25} 
                                style={{ marginRight: "1rem", rotate: activeIndex === i ? "180deg" : "", transition: "rotate 0.1s ease-in-out"}} fill="white">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            {sectionText.title}</p>
                    </div>
                    <div className={`accordion-content ${activeIndex === i ? "open" : ""}`}>
                        <p>{sectionText.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { ServicesSection };
