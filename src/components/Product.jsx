import React, { useEffect, useRef } from 'react';
import './Product.css';
import video from '../assets/images/ar2.mp4';

const Product = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25,
        };

        const handlePlayVideo = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handlePlayVideo, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const handleVideoClick = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) { 
            videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) { 
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) { 
            videoRef.current.msRequestFullscreen();
        }
    };

    return (
        <div className="product">
            
            <p>Experience the next generation of augmented reality with TechWave XR.</p>
            <video ref={videoRef} muted loop className="product-video" onClick={handleVideoClick}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
    
}

export default Product;
