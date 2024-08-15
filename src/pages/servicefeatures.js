import React from 'react';
import './ServiceFeatures.css';

const ServiceFeatures = () => {
    return (
        <div className="service-features">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
           
            <h1>WHY CHOOSE US?</h1>
            <div className="feature">
                <div className="feature-image">
                    <img src="https://framerusercontent.com/images/7ZysOmPU0hMzEvBjqZjp43Y3b2g.png?scale-down-to=512" alt="Free Pick Up & Drop" />
                </div>
                <div className="feature-text">
                    <h3>FREE PICK UP & DROP</h3>
                    <p>
                        With our door-to-door Free Pickup and Drop service, getting your car serviced has never been easier.
                        Imagine never having to rearrange your busy schedule or deal with the hassle of driving to the service center.
                        Our professional team will come to your location, pick up your car, and return it once the service is complete.
                    </p>
                </div>
            </div>
            <div className="feature">
                <div className="feature-text">
                    <h3>PREMIUM SERVICE</h3>
                    <p>
                        From the moment you contact us to the completion of the service, expect nothing but the highest standards of professionalism,
                        expertise, and attention to detail. Our commitment to excellence extends beyond the service itself; it's about providing you
                        with a seamless and unforgettable experience with Premium Service.
                    </p>
                </div>
                <div className="feature-image">
                    <img src="https://framerusercontent.com/images/wfL54lg7lgePs4zMQjMwZ28vP0.png?scale-down-to=512" alt="Premium Service" />
                </div>
            </div>
            <div className="feature">
                <div className="feature-image">
                    <img src="https://framerusercontent.com/images/uukoIUdXgsWajTWlsBratK1tAA.png?scale-down-to=512" alt="Live Photos of Your Ongoing Service" />
                </div>
                <div className="feature-text">
                    <h3>LIVE PHOTOS OF YOUR ONGOING SERVICE</h3>
                    <p>
                        We offer you real-time visual updates of your vehicle being serviced. Whether it's an oil change, tire rotation, or a comprehensive repair,
                        you can stay connected and informed every step of the way. Our technicians will capture and share photos of the work being done, giving you peace
                        of mind and transparency like never before. Experience the power of Live Photos™ and witness the quality and care your car receives, right from
                        your fingertips. We redefine the standard of trust and transparency in automotive service, ensuring that you're always in the know and confident
                        in the care your vehicle receives.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeatures;
