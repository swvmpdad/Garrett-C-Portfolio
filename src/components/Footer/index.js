import React from "react";
import github from './github.png';
import linkedin from './linkedin.png';
import stackoverflow from './stack-overflow.png';

const Footer = () => {
    return (
        <div>
            
            <p>
                <a target="blank" href="https://github.com/swvmpdad">
                    <img src={github} height="32px" width="32px" alt="GitHub logo"></img>
                </a>
                <a target="blank" href="https://www.linkedin.com/in/wgarrettcamp">
                    <img src={linkedin} height="32px" width="32px" alt="linkedin logo"></img>
                </a>
                <a target="blank" href="https://stackoverflow.com/users/19117554/garrett-campbell">
                    <img src={stackoverflow} height="32px" width="32px" alt="stack overflow logo"></img>
                </a>
            </p>
        </div>
    );
};

export default Footer;