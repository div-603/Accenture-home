import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";

const EmailSection = () => {
    const imageStyle = {
        backgroundImage: "url('https://i.imgur.com/example-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "300px",
        height: "300px",
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center h-screen"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute -top-16"></div>
            <div className="z-10">
                <div className="content">
                    <div style={imageStyle} alt="360° Value"></div>
                    <div className="card-container text-center">
                        <h1 className="text-8xl font-bold text-white mb-10">360 ° VALUE</h1>
                        <div className="card">
                            <h1 style={{ fontFamily: 'Times New Roman', fontSize: '2em' }}>
                                Every day, we embrace change and create value for all<br></br>our stakeholders in every part of the world.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
