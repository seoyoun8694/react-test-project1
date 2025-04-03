const roadmapData = [
    {
        title: "1단계 기본역량",
        courses: [
            {
                title: "Course 1",
                details: ["Introduce Camp & Digital Insight"],
                specialLecture: "특강 (Digital Insight 1) - 클라우드 & AI 트렌드",
            },
            {
                title: "Course 2",
                details: ["풀스택(Full-Stack) AI 서비스 개발"],
                specialLecture: "특강 (Digital Insight 2) - 서비스 개발을 위한 DevOps Tools",
                subDetails: [
                    "AI 서비스 개발을 위한 FrontEnd",
                    "AI 서비스 개발을 위한 BackEnd I & II",
                    "코드 퀄리티 플랫폼 기반의 GenAI를 활용한 REST API 개발",
                    "미니 PJT 1 (JavaScript, React.js, Java, Spring Boot, MySQL, GenAI)",
                ],
            },
        ],
    },
    {
        title: "2단계 심화역량",
        courses: [
            {
                title: "Course 3",
                details: ["AM(Application Modernization)기술 - MSA, Cloud, Agile"],
                subDetails: [
                    "AM(Application Modernization) 기반의 MSA 기술 I & II",
                    "미니 PJT 2 (AWS, NCP, Docker, Kubernetes, CI/CD, Prometheus, Grafana)",
                ],
                specialLecture: "특강 (Digital Insight 3) 오프라인 시작 / 25.06.30",
                specialLectureDetails: ["LG CNS 현직 전문가와 함께하는 AM Agile 특강"],
            },
            {
                title: "해커톤",
                details: ["아이디어톤 기반 도메인별 AI 활용 서비스 개발을 위한 시나리오 제작"],
            },
        ],
    },
    {
        title: "3단계 실무역량",
        courses: [
            {
                title: "최종 프로젝트",
                details: ["프로젝트 워크샵"],
                subDetails: [
                    "AM 기반의 최종 프로젝트 (w/LG CNS 멘토)",
                    "취업 특강",
                    "프로젝트 발표회",
                ],
            },
        ],
    },
];

export default roadmapData;