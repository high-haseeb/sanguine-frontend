import { TypeAnimation } from 'react-type-animation';
import './App.css';
import ContactForm from './ContactForm';
import Footer from './Footer';
import MyCanvas from './Canvas';
import './locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
import Logos from './Logos';
import { useEffect, useRef, useState } from 'react';
import sectionsText from './sectionsText';
import { Testimonials } from './Testimonials';
import FadingText from './FadingText';

function App() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");
    const scrollRef = useRef(null);
    const scrollInstance = useRef(null);

    useEffect(() => {
        scrollInstance.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        });

        return () => {
            if (scrollInstance.current) {
                scrollInstance.current.destroy();
            }
        };
    }, []);

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    return (
        <div id="app">
            <div className="scrollmain" ref={scrollRef}>
                <div className="navbar">
                    <img className="logo" src={'logo.png'} alt="Logo" />
                </div>

                <div className="section-1">
                    <MyCanvas />
                    <div className="section-1-heading" >
                        {/* <TypeAnimation
                            sequence={[
                                'We’re Sanguine.',
                                1000,
                                'A marketing agency committed to helping mission-led organisations keep the ball rolling.',
                                5000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={1}
                        /> */}
                        <FadingText />
                    </div>
                </div>

                <div className="section-2-bg" id="home">
                    <h1 data-scroll data-scroll-speed="2" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        Established in 2024 by an internationally award-winning marketing team, Sanguine provides consultancy to mission-led business leaders and charities, helping them to achieve their mission faster and easier.
                    </h1>
                    <div data-scroll className="services-card-container">
                        {
                            sectionsText.map((sectionText, i) => <div key={`section-${i}}`} data-scroll className="services-card"><p>{sectionText.title}</p></div>)
                        }
                    </div>
                </div>
                <Testimonials />

                <div className="section-3">
                    <Logos />
                </div>

                <div className="section-3">
                    <ContactForm  />
                </div>

                <Footer/>
            </div>
        </div>
    );
}

export default App;
