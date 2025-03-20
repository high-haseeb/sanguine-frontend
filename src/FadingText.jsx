import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textSequence = [
    { text: "We’re Sanguine.", duration: 3000 },
    { text: "A marketing agency committed to helping mission-led organisations keep the ball rolling.", duration: 5000 },
];

export default function FadingText() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % textSequence.length);
        }, textSequence[index].duration);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="flex justify-center items-center h-screen text-center">
            <AnimatePresence mode="wait">
                <motion.p
                    style={{ fontSize: '2em', textAlign: "left", lineHeight: "normal" }}
                    key={textSequence[index].text}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-semibold"
                >
                    {textSequence[index].text}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
