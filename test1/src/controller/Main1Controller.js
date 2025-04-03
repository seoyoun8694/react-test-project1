import { useState, useEffect } from "react";

const useMain1Controller = (images) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, [images]);

    const getSectionStyle = (index) => ({
        width: index === currentIndex ? "35px" : "8px",
        backgroundColor: index === currentIndex ? "white" : "transparent",
        border: index === currentIndex ? "none" : "1px solid white",
    });

    return {
        currentIndex,
        nextImage,
        prevImage,
        getSectionStyle,
    };
};

export default useMain1Controller;