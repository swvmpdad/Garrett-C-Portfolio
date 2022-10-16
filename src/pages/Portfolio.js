import React from "react";

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
                                    <h3>Run Buddy</h3>
                                    <p>
                                        HTML/CSS
                                    </p>
                                    <a href="https://swvmpdad.github.io/run-buddy/">Deployed</a>
                                    <a href="">Git Repo</a>
                                </figure>
                            </div>
                        <div className="project" id="taskinator">
                            <figure className="project-name">
                                <h3>Taskinator</h3>
                                <p>
                                    JavaScript
                                </p>
                                <a href="https://swvmpdad.github.io/taskinator/">Deployed</a>
                                <a href="">Git Repo</a>
                            </figure>
                        </div>
                      
                        <div className="project" id="battle-robot">
                            <figure className="project-name">
                                <h3>Robot Gladiators</h3>
                                <p>
                                    JavaScript
                                </p>
                                <a href="https://swvmpdad.github.io/robot-gladiators/">Deployed</a>
                                <a href="">Git Repo</a>
                            </figure>
                        </div>
                        <div className="project" id="workin-hard">
                            <figure className="project-name">
                                <h3>Workin Hard</h3>
                                <p>
                                    JavaScript
                                </p>
                                <a href="https://swvmpdad.github.io/workin-hard/">Deployed</a>
                                <a href="">Git Repo</a>
                            </figure>
                        </div>
                        <div className="project" id="showbiz-baby">
                            <figure className="project-name">
                                <h3>Showbiz Baby</h3>
                                <p>
                                    HTML, JavaScript, Bulma, CSS
                                </p>
                                <a href="https://swvmpdad.github.io/showbiz-baby/">Deployed</a>
                                <a href="">Git Repo</a>
                            </figure>
                        </div>

                        <div className="project" id="social-strength">
                            <figure className="project-name">
                                <h3>Social Strength</h3>
                                <p>
                                    MySQL, JavaScript, Handlebars, Node.js
                                </p>
                                <a href="https://social-strength.herokuapp.com">Deployed</a>
                                <a href="">Git Repo</a>
                            </figure>
                        </div>
                    </section>
                    </section>
        </section>
    );
};

export default Portfolio;