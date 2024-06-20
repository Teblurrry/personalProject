import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="box">
                        <Link to='/home'><img src={require('./download.jpeg')} alt="Image Test" /></Link>
                        <div className="fa-div">
                            <a href="https://github.com"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                        <h4 className='sen'>Thanks for visiting my website</h4>
                    </div>
                </div>
                
                <div className="box">
                    <h2>Quick Links:</h2>
                    <ul className='links'>
                        <a href="/home"><li>Home</li></a>
                        <a href='/contact'><li>Contact</li></a>
                    </ul>
                </div>
                <div className="legal container">
                    <p>Copyright @2024. All rights reserved.</p>
                    <label htmlFor="">
                        Design & Developed by <span>Terry</span>
                    </label>
                </div>
            </footer>
        </>
    )
}

export default Footer