import "../App.css";
import "../css/Main2C.css";
import cardData from"../data/carddata.js";

const Card = ({ card }) => {
    return (
        <div className="main_sec_cardImg" style={{ backgroundImage: `url(${card.img})` }}>
            <div className="text-group">
                <t3>{card.title}</t3>
                <p>{card.desc}</p>
            </div>
            <div className="text-group text-hover">
                <t3>주요 내용</t3>
                {card.hover.map((text, idx) => (
                    <p key={idx}>{text}</p>
                ))}
            </div>
        </div>
    );
};

const Main2 = () => {
    return (
        <div className="main_sec">
            <t1 className="highlight-text">LG CSN AM INSPIRE CAMP 를 소개합니다.</t1>
            <t2 style={{ color: "rgb(15, 63, 15)", padding: "30px" }}>
                LG CNS의 SW, AM 노하우를 그대로 적용한<br />
                주니어 개발자/클라우드 엔지니어 양성과정
            </t2>

            <hrr style={{ backgroundColor: "rgb(15, 63, 15,0.3)" }} />

            <div className="mina_sec_cardbox">
                {cardData.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </div>
    );
};

export default Main2;