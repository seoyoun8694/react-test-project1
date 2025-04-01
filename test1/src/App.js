import { useState, useEffect } from "react";

import mainImage1 from "./asset/img/main_banner1.jpg";
import mainImage2 from "./asset/img/main_banner2.jpg";
import mainImage3 from "./asset/img/main_banner3.jpg";
import vnext from "./asset/img/vnext.png";
import vprev from "./asset/img/vprev.png";

import main_secImg1 from "./asset/img/main_sec1.jpg";
import main_secImg2 from "./asset/img/main_sec2.jpg";
import main_secImg3 from "./asset/img/main_sec3.jpg";

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
            <div className="main_fir">
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
                    <t1>LG CSN AM INSPIRE CAMP<br /></t1>
                    <t1>APPLICATION-MODERNIZATION</t1>
                    <hrr />
                    <t3>
                        IT 인프라, 플랫폼, 내부 아키텍처, 기존 기능을<br />
                        최신 기술 스택을 활용하여 새로운 비즈니스 가치를<br />
                        창출하도록 클라우드 네이티브 환경으로<br />
                        현대화하는 프로세스
                    </t3>
                </div>
            </div>

            <div className="main_sec">
                <t1 style={{ color: "rgb(15, 63, 15)" }}>
                    LG CSN AM INSPIRE CAMP를 소개합니다.</t1>
                <t2 style={{ color: "rgb(15, 63, 15)", padding: "30px" }}>
                    LG CNS의 SW, AM 노하우를 그대로 적용한<br />
                    주니어 개발자/클라우드 엔지니어 양성과정
                </t2>

                <div className="mina_sec_cardbox">
                    <div className="main_sec_cardImg" style={{ backgroundImage: `url(${main_secImg1})` }}>
                        <div className="main_sec_cardImgText">
                            <t3 style={{ padding: "10px 20px" }}>LG CNS Agile</t3>
                            <t4>
                                애플리케이션 현대화를 위한<br />
                                프로젝트 관리 및 협업 방법
                            </t4>
                        </div>
                        <div className="main_sec_cardImgText_hover">
                            <t3 style={{ padding: "10px 20px" }}>주요 내용</t3>
                            <t4>내용내용</t4>
                        </div>
                    </div>
                    <div className="main_sec_cardImg" style={{ backgroundImage: `url(${main_secImg2})` }}>
                        <div className="main_sec_cardImgText">
                            <t3 style={{ padding: "10px 20px" }}>Full Stack</t3>
                            <t4>
                                사용자 경험을 완성하는<br />
                                프로그래밍의 모든 것
                            </t4>
                        </div>
                        <div className="main_sec_cardImgText_hover">
                            <t3 style={{ padding: "10px 20px" }}>주요 내용</t3>
                            <t4>내용내용</t4>
                        </div>
                    </div>
                    <div className="main_sec_cardImg" style={{ backgroundImage: `url(${main_secImg3})` }}>
                        <div className="main_sec_cardImgText">
                            <t3 style={{ padding: "10px 20px" }}>Cloud Native</t3>
                            <t4>
                                애플리케이션 현대화 과정의<br />
                                필수 기술 학습
                            </t4>
                        </div>
                        <div className="main_sec_cardImgText_hover">
                            <t3 style={{ padding: "10px 20px" }}>주요 내용</t3>
                            <t4>내용내용</t4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;