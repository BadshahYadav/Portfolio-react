import React, { useEffect, useRef, useState } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text, className = '' }) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = containerRef.current; 
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(false);
                    setTimeout(() => setIsVisible(true), 10);
                }
            },
            { threshold: 0.5 }
        );
    
        if (currentRef) observer.observe(currentRef);
    
        return () => {
            if (currentRef) observer.unobserve(currentRef); 
        };
    }, []);

    return (
        <span ref={containerRef} className={`${className} animated-text`}>
            {isVisible &&
                text.split('').map((char, idx) => (
                    <span
                        key={idx}
                        className="char"
                        style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
        </span>
    );
};

export default AnimatedText;