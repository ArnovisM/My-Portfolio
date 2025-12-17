import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        name: "Enterprise RPA Bots",
        description: "Business process automations with UiPath",
        status: "Online",
        tech: "UiPath",
        repoLink: null
    },
    {
        id: 2,
        name: "VibeCine",
        description: "A modern, responsive web application that recommends movies based on your current mood. Built with React, TypeScript, and Vite, powered by The Movie Database (TMDB) API.",
        status: "Online",
        tech: "React",
        repoLink: "https://github.com/ArnovisM/vibecine"
    },
    {
        id: 3,
        name: "Gulfood Data Scraper",
        description: "Automated data extraction bot using Python",
        status: "Online",
        tech: "Python",
        repoLink: "https://github.com/ArnovisM/web_scrapper_gulfood"
    },
    {
        id: 4,
        name: "Portfolio Website",
        description: "Interactive 3D Minecraft-themed portfolio website built with React",
        status: "Online",
        tech: "React",
        repoLink: "https://github.com/ArnovisM/My-Portfolio"
    },

    {
        id: 5,
        name: "Excel to XML converter",
        description: "This tool allows you to easily convert your Excel shipping manifests into XML format. It supports converting multiple files at once and saving them to a custom location.",
        status: "Online",
        tech: "Python",
        repoLink: "https://github.com/ArnovisM/excel-to-xml"
    },

    {
        id: 6,
        name: "WPM Speed Test",
        description: "This a WPM speed tester created in python using tkinter",
        status: "Online",
        tech: "Python",
        repoLink: "https://github.com/ArnovisM/WPM-speed-test"
    },

    {
        id: 7,
        name: "Automatic Movie Selection",
        description: "personal automation that take a the best rated movie of some genres and send it to my email in order for me to watch it",
        status: "Online",
        tech: "Python",
        repoLink: "https://github.com/ArnovisM/Movie-Selection-Automatically"
    }
];

function Projects() {
    return (
        <div className="screen-container projects-screen">
            <Link to="/" className="back-button">
                <ArrowLeft size={24} />
            </Link>

            <h1 className="page-title">Projects</h1>
            <div className="server-list-container">
                {projectsData.map(project => (
                    <a
                        key={project.id}
                        href={project.repoLink || "#"}
                        target={project.repoLink ? "_blank" : "_self"}
                        rel={project.repoLink ? "noopener noreferrer" : ""}
                        className="server-entry-link"
                        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                        onClick={(e) => !project.repoLink && e.preventDefault()}
                    >
                        <div className="server-entry">
                            <div className="server-icon">{project.tech[0]}</div>
                            <div className="server-info">
                                <div className="server-name">{project.name}</div>
                                <div className="server-motd">{project.description}</div>
                            </div>
                            <div className="server-status">
                                <div className="connection-bars">
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                </div>
                                <div className="player-count">
                                    20/20
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;
