import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import AnimatedText from '../Intro/AnimatedText';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <AnimatedText text="Hello," className="hello" />
                <AnimatedText text="I'm Badshah" className="introText" />
                <AnimatedText text="Frontend Developer" className="introText" />
                <p className="introPara">
                    I'm a Frontend Developer with a passion for creating <br />
                    beautiful, responsive, and user-friendly web interfaces.<br />
                    I specialize in building modern web applications using <br />
                    technologies like HTML, CSS, JavaScript, and frameworks <br />
                    like React. I enjoy turning complex problems into simple,<br />
                    elegant solutions that provide a great user experience.
                </p>

                <Link
                    to="contactPage"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <button className="btn">
                        <img src={btnImg} alt="Hire Me" className="btnImg" /> 
                        <span className="btnText">Hire Me</span>
                    </button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
};

export default Intro;