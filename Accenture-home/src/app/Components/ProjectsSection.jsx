"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView, useAnimation } from "framer-motion";
import ProjectTag from "./ProjectTag";



const projectsData = [
    {
        id: 1,
        title: "Accenture Life Trends 2024",
        description: "The visible and invisible mediators between people and their world are changing.Harmony between tech and business showing tensions,and society is flux.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://www.accenture.com/us-en/insights/song/accenture-life-trends-2024",
        previewUrl: "https://www.accenture.com/content/dam/accenture/final/accenture-com/document-2/Accenture-Life-Trends-2024-Report.pdf",
    },
    {
        id: 2,
        title: "Accenture Pulse of Change",
        description: "With the rise of generative AI and other emerging technologies,change is essential for organizations for the future. ",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://www.accenture.com/us-en/about/company/pulse-of-change",
        previewUrl: "https://www.accenture.com/us-en/about/accenture-research-index",
    },
    {
        id: 3,
        title: "RESEARCH REPORT",
        description: "The importance of accessing highly skilled talent is amplified as multinational companies navigate intensifying disruptions on a global scale.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://www.accenture.com/us-en/insights/consulting/refocus-talent-lens",
        previewUrl: "https://www.accenture.com/content/dam/accenture/final/accenture-com/document-2/Accenture-Focus-Your-Talent-Lens-Abundance-Awaits-Final.pdf#zoom=40",
    },
    {
        id: 4,
        title: "The Cyber-Resilient CEO",
        description: "How confident CEOs are taking charge of cybersecurity, lack confidence in their organization’s ability to avert or minimize such attacks.",
        image: "/images/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://www.accenture.com/us-en/insights/security/cyber-resilient-ceo",
        previewUrl: "",
    },
    {
        id: 5,
        title: "Five practices to thrive on the Cloud",
        description: "By focusing solely on migration services that cloud offers,companies forego the opportunity to maximize the value of their cloud investments.",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://www.accenture.com/us-en/insights/consulting/maximizing-cloud",
        previewUrl: "https://www.accenture.com/content/dam/accenture/final/markets/europe/imagery/Accenture-S-and-C-Maximizing-Your-Cloud-Advantage-Jan22.pdf#zoom=40",
    },
    {
        id: 6,
        title: "A life-centric approach to growth",
        description: "Customers lives - and the global forces that shape them - have never been more unpredictable. For companies, that creates a crisis of relevance.",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "https://www.accenture.com/us-en/insights/song/life-centric-approach-to-growth",
        previewUrl: "https://www.accenture.com/content/dam/accenture/final/capabilities/song/communicate/imagery/SongLifeCentric_Infographic_FrontDoor.pdf#zoom=40",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.2, delay: index * 0.2 }}
                        whileHover={{ x: 50 }} 
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>

        </section>
    );
};

export default ProjectsSection;
