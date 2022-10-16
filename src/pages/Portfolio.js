import React from "react";

const Portfolio = () => {
    return (
        <section id="my-projects" className="my-projects">
                <div className="section-title">
                <h2>My Projects</h2>
                </div>
                    <section className="projects">
                        <a href="https://swvmpdad.github.io/run-buddy/">
                            <div className="project" id="run-buddy">
                                
                                <figure className="project-name">
                                    <h3>Run Buddy</h3>
                                    <p>
                                        HTML/CSS
                                    </p>
                                </figure>
                            </div>
                        </a>
                      <a href="https://swvmpdad.github.io/taskinator/">
                        <div className="project" id="taskinator">
                            <figure className="project-name">
                                <h3>Taskinator</h3>
                                <p>
                                    JavaScript
                                </p>
                            </figure>
                        </div>
                      </a>
                      <a href="https://swvmpdad.github.io/robot-gladiators/">
                        <div className="project" id="battle-robot">
                            <figure className="project-name">
                                <h3>Robot Gladiators</h3>
                                <p>
                                    JavaScript
                                </p>
                            </figure>
                        </div>
                      </a>
                      <a href="https://swvmpdad.github.io/workin-hard/">
                        <div className="project" id="workin-hard">
                            <figure className="project-name">
                                <h3>Workin Hard</h3>
                                <p>
                                    JavaScript
                                </p>
                            </figure>
                        </div>
                      </a>
                      <a href="https://swvmpdad.github.io/showbiz-baby/">
                        <div className="project" id="showbiz-baby">
                            <figure className="project-name">
                                <h3>Showbiz Baby</h3>
                                <p>
                                    HTML, JavaScript, Bulma, CSS
                                </p>
                            </figure>
                        </div>
                      </a>
                      <a href="https://social-strength.herokuapp.com">
                        <div className="project" id="social-strength">
                            <figure className="project-name">
                                <h3>Social Strength</h3>
                                <p>
                                    MySQL, JavaScript, Handlebars, Node.js
                                </p>
                            </figure>
                        </div>
                      </a>
                    </section>
        </section>
    );
};

export default Portfolio;