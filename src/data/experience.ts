import {Experience} from "../models/experience";

const experienceList: Experience[] = [
    {
        jobTitle: "Analyst, Application Engineering",
        employmentType: "Full Time",
        companyName: "BlackRock",
        companyLocation: "Mumbai, India",
        currentlyWorking: true,
        startDate: "July 2020",
        description: [
            "In this role, I work as part of an Operations team. My primary tasks involve Web Development and automation for internal tooling.",
            "I lead the development effort in the refactor and rewrite of our main ticketing tool, increasing coverage from 0 to 70%, and cutting down on code smells by 90%",
            "Introduced multiple features in tools that saved over 700 man-hours annually."
        ],
        techStack: [
            "AngularJS",
            "Angular",
            "Java",
            "Spring",
            "Sybase",
        ],
    },
    {
        jobTitle: "Graduate Analyst",
        employmentType: "Internship",
        companyName: "BlackRock",
        companyLocation: "Mumbai, India",
        currentlyWorking: false,
        startDate: "January 2020",
        endDate: "July 2020",
        description: [
            "I worked on a project to add an attachment feature to the internal ticketing system used by the Operations team within BlackRock.",
            "The feature has been estimated to save around 200 man hours annually within the team",
        ],
        techStack: [
            "AngularJS",
            "Java",
        ],
    },
    {
        jobTitle: "Summer Intern - DCES",
        employmentType: "Internship",
        companyName: "Schneider Electric",
        companyLocation: "Bengaluru, India",
        currentlyWorking: false,
        startDate: "May 2019",
        endDate: "July 2019",
        description: [
            "I developed a POC model for shifting existing services to a bare-metal Kubernetes cluster.",
            "As part of a team, we worked to provide path-based routing and metrics collection.",
        ],
        techStack: [
            "Kubernetes",
            "Voyager",
            "Prometheus",
        ],
    },
    {
        jobTitle: "Summer Intern",
        employmentType: "Internship",
        companyName: "Hindustan Petroleum Corporation Limited",
        companyLocation: "Mumbai, India",
        currentlyWorking: false,
        startDate: "May 2018",
        endDate: "June 2018",
        description: [
            "I worked on a full-stack Java project that was a migration from an Excel file.",
            "This internship immensely helped me to develop my skills with Java and database design.",
        ],
        techStack: [
            "Java",
            "JSP",
            "MaterializeCSS",
            "MySQL",
        ],
    },
];

export default experienceList;
