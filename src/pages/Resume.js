import React from "react";
import Resume from "../components/Resume";

const ResumePage = () => {
    const skills = [
        "CSS",
        "HTML5",
        "JavaScript",
        "React",
        "OOP",
        "Node.js",
        "Express.js",
        "MongoDB",
        "NoSQL",
        "MySQL",
        "APIs",
        "jQuery",
        "Bootstrap",
        "Git",
        "GitHub",
        "Heroku"
    ]
    return (
        <section>
            <div className="section-title">
                <h2>My Resume and Skills</h2>
            </div>
            <div id="resume" className="row text-center mt-3">
                <Resume /><br />
                <p className="mt-3">I am proficient in the following areas:</p><br />
                <ul>
                    {skills.map((skill) => {
                            return (
                                <li>{skill}</li>
                            );
                        }
                    )}
                </ul>
            </div>
        </section>
    );
};

export default ResumePage;