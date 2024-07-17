// About.js

import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import your CSS file for additional styling

const About = () => {
    return (
        <div className="intro-container">
            <div className="intro-content">
                <h1>Welcome to Uppu, Your Very Own Language Translator</h1>
                <p className="intro-text">
                    This application allows you to translate text from one language to another quickly and easily.
                    Choose the source and target languages, enter your text, and click Translate to get started.
                </p>
                <p className="intro-text">
                    Powered by the MyMemory Translation API, it supports a wide range of languages to meet your translation needs.
                </p>
                <p className="intro-text">
                    Get started now and experience seamless translation right at your fingertips!
                </p>
                <div className="button-container">
                    <Link to="/login" className="btn btn-outline-primary">Log In</Link>
                    <Link to="/signup" className="btn btn-outline-primary">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default About;

