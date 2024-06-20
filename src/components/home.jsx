import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
                            Problem && <br />
                            Solution
                        </h1>
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