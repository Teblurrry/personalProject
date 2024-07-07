import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HomeTest = () => {
    return (
        <div>
            {/* <h1>Home</h1> */}
            <section className="home">
                <div className="container flex">
                    <div className="left">
                        <div className="img">
                            <img src={require('./cat.jpg')} alt="Image Test"/>
                        </div>
                    </div>
                    <div className="right topMargin">
                        <h1>
                            About Me
                        </h1>
                        <p>I am a passionate and dedicated computer science enthusiast with a strong focus on software engineering and IT.</p>
                        <p>My coding practices emphasize clean, maintainable code, reflecting my commitment to high-quality software development.</p> 
                        <p>I continuously strive to expand my knowledge, always eager to embrace new technologies and methodologies. </p>
                        <p>Through my projects and coursework, I have honed my skills in full-stack development, particularly in React and Spring Boot.</p>     
                        <p>My goal is to leverage my technical expertise and enthusiasm to contribute effectively to innovative software solutions.</p>    
                        <div className="fa-div">
                            <a href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.outlook.com/"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                        <a href='https://outlook.com/'>
                            <button type="button" className="btn btn-primary">Contact Me</button>
                        </a>
                    </div>   
                </div>
            </section>
        </div>
    )
}

export default HomeTest;