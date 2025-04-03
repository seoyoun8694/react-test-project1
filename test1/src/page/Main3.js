import "../css/Main3C.css";
import roadmapData from "../data/roadmapData.js"

const Roadmap = ({ roadmap }) => {
    return (
        <div className="main_thir_loadmapbox">
            <t2>{roadmap.title}<br /></t2>
            <div className="main_thir_loadmap">
                {roadmap.courses.map((course, index) => (
                    <div key={index}>
                        <t3>{course.title}<br /></t3>
                        {course.details.map((detail, idx) => (
                            <t3 key={idx}>{detail}</t3>
                        ))}
                        {course.specialLecture && <t4>{course.specialLecture}</t4>}
                        {course.specialLectureDetails && course.specialLectureDetails.map((detail, idx) => (
                            <t4 key={idx}>{detail}</t4>
                        ))}
                        {course.subDetails && course.subDetails.map((detail, idx) => (
                            <t4 key={idx}>{detail}</t4>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

function Main3() {
    return (
        <div className="main_thir">
            <t1>과정 로드맵</t1>
            {roadmapData.map((roadmap, index) => (
                <Roadmap key={index} roadmap={roadmap} />
            ))}
        </div>
    );
}

export default Main3;