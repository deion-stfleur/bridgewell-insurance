import React, { useEffect, useRef } from 'react';
import MattImg from '../assets/Matt.png';

function ParallaxImage() {
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current || !containerRef.current) return;

            const container = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if section is in view
            if (container.top < windowHeight && container.bottom > 0) {
                // Calculate how far we've scrolled into the section
                const scrollPercentage = (windowHeight - container.top) / (windowHeight + container.height);
                // Limit the percentage between 0 and 1
                const limitedPercentage = Math.max(0, Math.min(1, scrollPercentage));
                // Calculate parallax amount (6.5158 is from your example)
                const parallaxAmount = 6.5158 * limitedPercentage;
                
                // Apply transform
                imageRef.current.style.transform = `translate3d(0px, ${parallaxAmount}%, 0px) scale3d(1, 1, 1)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={containerRef} className="section-3-img-container">
            <img 
                ref={imageRef}
                className="matt-img" 
                src={MattImg} 
                alt="Matt" 
            />
        </div>
    );
}

export default ParallaxImage; 