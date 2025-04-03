import mainImage1 from "../asset/img/main_banner1.jpg";
import mainImage2 from "../asset/img/main_banner2.jpg";
import mainImage3 from "../asset/img/main_banner3.jpg";
import vnext from "../asset/img/vnext.png";
import vprev from "../asset/img/vprev.png";

import "../App.css";
import "../css/Main1C.css";
import useMain1Controller from "../controller/Main1Controller.js";

const images = [mainImage1, mainImage2, mainImage3];

function Main1() {
    const { currentIndex, nextImage, prevImage, getSectionStyle } = useMain1Controller(images);

    return (
        <div className="main_fir">
            <div className="main_img_div" style={{ backgroundImage: `url(${images[currentIndex]})` }} />
            <div className="main_img_bar">
                <img src={vprev} alt="Previous" className="vprev" onClick={prevImage} />
                {images.map((_, index) => (
                    <span key={index} className="main_img_section" style={getSectionStyle(index)} />
                ))}
                <img src={vnext} alt="Next" className="vnext" onClick={nextImage} />
            </div>
            <div className="main_img_textbox">
                <t1>LG CSN AM INSPIRE CAMP</t1>
                <t1>APPLICATION-MODERNIZATION</t1>
                <hrr />
                <t3>
                    IT 인프라, 플랫폼, 내부 아키텍처, 기존 기능을<br />
                    최신 기술 스택을 활용하여 새로운 비즈니스 가치를 창출하도록<br />
                    클라우드 네이티브 환경으로 현대화하는 프로세스<br />
                </t3>
            </div>
        </div>
    );
}

export default Main1;