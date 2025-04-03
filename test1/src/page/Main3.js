import React, { useState } from 'react';
import "../css/Main3C.css";
import roadmapData from "../data/roadmapData";

const Roadmap = ({ roadmap }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="container">
            <div className="main_thir_roadmapbox" onClick={toggleDetails}>
                <t2>{roadmap.title}<br /></t2>
                {roadmap.courses.map((course, index) => (
                    <div key={index}>
                        <t3>{course.title}</t3>
                        {course.subCourses.map((subCourse, subIndex) => (
                            <div key={subIndex}>
                                <t4>{subCourse.subtitle}</t4>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {showDetails && (
                <div className="main_thir_roadmapbox_details">
                    {roadmap.courses.map((course, index) => (
                        <div key={index}>
                            {course.subCourses.map((subCourse, subIndex) => (
                                <div key={subIndex}>
                                    <t3 style={{ color: "rgb(15, 63, 15)" }}>{subCourse.subtitle}</t3>
                                    <t4 style={{ color: "rgb(15, 63, 15)" }}>
                                        <ul>
                                            {subCourse.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>{detail}</li>
                                            ))}
                                        </ul>
                                    </t4>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
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