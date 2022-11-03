import React from "react";
import github from "./github.png";

const Portfolio = () => {
    return (
        <section>
                <div className="section-title">
                <h2>My Projects</h2>
                </div>
                <section id="my-projects" className="my-projects">
                    <section className="projects">
                        <div className="project" id="run-buddy">
                            <figure className="project-name">                                   
                                <p>
                                    HTML/CSS
                                </p>
                                <a target="blank" href="https://swvmpdad.github.io/run-buddy/"><h3>Run Buddy</h3></a>
                                <a target="blank" href="https://github.com/swvmpdad/run-buddy"><img src={github} height="32px" width="32px" alt="GitHub logo"></img></a>
                            </figure>
                        </div>
                        <div className="project" id="taskinator">
                            <figure className="project-name">                                
                                <p>
                                    JavaScript
                                </p>
                                <a target="blank" href="https://swvmpdad.github.io/taskinator/"><h3>Taskinator</h3></a>
                                <a target="blank" href="https://github.com/swvmpdad/taskinator"><img src={github} height="32px" width="32px" alt="GitHub logo"></img></a>
                            </figure>
                        </div>
                        <div className="project" id="battle-robot">
                            <figure className="project-name"> 
                                <p>
                                    JavaScript
                                </p>
                                <a target="blank" href="https://swvmpdad.github.io/robot-gladiators/"><h3>Robot Gladiators</h3></a>
                                <a target="blank" href="https://github.com/swvmpdad/robot-gladiators"><img src={github} height="32px" width="32px" alt="GitHub logo"></img></a>
                            </figure>
                        </div>
                        <div className="project" id="crustulum-bucket">
                            <figure className="project-name">                               
                                <p>
                                    MERN, GraphQL, Mongoose, JWT, React
                                </p>
                                <a target="blank" href="https://crustulum-bucket.herokuapp.com"><h3>Crustulum Bucket</h3></a>
                                <a target="blank" href="https://github.com/swvmpdad/Crustulum-Bucket"><img src={github} height="32px" width="32px" alt="GitHub logo"></img></a>
                            </figure>
                        </div>
                        <div className="project" id="showbiz-baby">
                            <figure className="project-name">                               
                                <p>
                                    HTML, JavaScript, Bulma, CSS
                                </p>
                                <a target="blank" href="https://swvmpdad.github.io/showbiz-baby/"><h3>Showbiz Baby</h3></a>
                                <a target="blank" href="https://github.com/swvmpdad/run-buddy"><img src={github} height="32px" width="32px" alt="GitHub logo"></img></a>
                            </figure>
                        </div>
                        <div className="project" id="social-strength">
                            <figure className="project-name">
                                <p>
                                    MySQL, JavaScript, Handlebars, Node.js
                                </p>
                                <a target="blank" href="https://social-strength.herokuapp.com"><h3>Social Strength</h3></a>
                                <a target="blank" href="https://github.com/swvmpdad/social-strength"><img src={github} height="32px" width="32px" alt="GitHub logo"></img></a>
                            </figure>
                        </div>
                    </section>
                </section>
        </section>
    );
};

export default Portfolio;