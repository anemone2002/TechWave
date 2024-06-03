import React from 'react';
import './ProductPage.css';
import ProductImage from '../assets/images/prod2.webp';
import ProductImage1 from '../assets/images/prod3.webp';
import ProductImage2 from '../assets/images/prod4.webp';


// import ProductVideo from '../assets/videos/techwave-xr-demo.mp4';

const ProductPage = () => {
    
    return (
        
        <section className="product-section">
            <div className="product-details">
                <h1>TechWave XR</h1>
                <p className="description">Experience the next generation of augmented reality with TechWave XR. Explore immersive digital environments, interact with virtual objects, and unlock new possibilities with cutting-edge AR technology.</p>
                <div className="features">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Immersive Augmented Reality Experience</li>
                        <li>Interactive Virtual Objects</li>
                        <li>Real-time Environment Mapping</li>
                        <li>Gesture and Voice Recognition</li>
                        <li>Multi-platform Compatibility</li>
                    </ul>
                </div>
            </div>
            <div className="product-media">
                <img src={ProductImage} alt="TechWave XR" className="product-image" />
                <img src={ProductImage1} alt="TechWave XR" className="product-image" />
                <img src={ProductImage2} alt="TechWave XR" className="product-image" />
                {/* <video controls className="product-video">
                    <source src={ProductVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
            </div>
        </section>
    );
};

export default ProductPage;
