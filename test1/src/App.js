import { useState, useEffect } from "react";

import mainImage1 from "./asset/img/main1.jpg";
import mainImage2 from "./asset/img/main2.jpg";
import mainImage3 from "./asset/img/main3.jpg";
import vnext from "./asset/img/vnext.png";
import vprev from "./asset/img/vprev.png";

import './Main.css';

const images = [mainImage1, mainImage2, mainImage3];

function App() {
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
    }, []);

    const getSectionStyle = (index) => {
        if (index === currentIndex) {
            return { width: '35px', backgroundColor: 'white' };
        } else {
            return { width: '8px', border: '1px solid white' };
        }
    };
    return (
        <div className="main_div">
            <div className="main_img_div" style={{ backgroundImage: `url(${images[currentIndex]})` }} />
            <div className="main_img_bar">
                <img src={vprev} alt="Previous" className="vprev" onClick={prevImage} />
                {images.map((_, index) => (
                    <span
                        key={index}
                        className="main_img_section"
                        style={getSectionStyle(index)}
                    />
                ))}
                <img src={vnext} alt="Next" className="vnext" onClick={nextImage} />
            </div>
            <div className="main_img_textbox">
                <div className="main_img_text">
                    <t1>LG CSN AM INSPIRE CAMP</t1>
                    <br />
                    <t1>APPLICATION-MODERNIZATION</t1>
                    <br />
                    <br />
                    <br /><br />
                    <t2>
                        IT 인프라, 플랫폼, 내부 아키텍처, 기존 기능을<br />
                        최신 기술 스택을 활용하여 새로운 비즈니스 가치를<br />
                        창출하도록 클라우드 네이티브 환경으로<br />
                        현대화하는 프로세스
                    </t2>
                </div>

            </div>
        </div>
    );
}

export default App;