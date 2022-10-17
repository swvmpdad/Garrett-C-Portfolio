import React from "react";

const About = () => {
    return (
        <section id="about-me" className="container">
                <div className="flex-row section-title">
                <h2>About Me</h2>
                </div>
                <div className="flex-row about-me">
                    <div id="profile-photo" className="col-3"></div>
                    <div className="col-9">
                    <p>I am a 34 year old dad from Southeast Texas.
                        I have spent most of my life being fascinated with computers and technology.
                        As a lifelong musician and self-proclaimed "computer nerd" I strive for perfection in my work. 
                        I love video games, sports (especially baseball), and cooking. 
                        I'm an avid reader and would rather sit with a lengthy sci-fi novel than watch television.
                    </p>
                    </div>
                </div>
            </section>
    );
};

export default About;