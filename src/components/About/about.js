import React from 'react';
import './about.css';
// import techStack from'../../assets/techStack.png';
import html from '../../assets/html-5.png';
import css from '../../assets/css-3.png';
import JavaScript from '../../assets/js.png';
import reactjs from '../../assets/reactjs.png';
import nodejs from '../../assets/nodejs.png';
import mysql from '../../assets/mysql.png';
import cpp from '../../assets/cpp.png';
import python from '../../assets/python.png';

const About = () => {
    return (
        <section id="aboutSkills">{/* Updated ID */}
            <span className="skillTitle">About Me</span>

            <div id="parentDiv">
                {/* Left side: About Section */}
                <div id="about">
                    <div className="aboutBar">
                        <div className="aboutBarText">
                            <h2>More <span className='ab'>About Me</span></h2>
                            <p>
                                Hello! I'm Badshah Kumar, a passionate and dedicated Web Developer and competitive coder.
                                I specialize in turning code into meaningful and impactful applications.
                                Proficient in JavaScript, React, Node, and Express. Databases like MongoDB and MySQL are my playground,
                                where I organize data with precision.
                                Throughout my time in academia, I've had the opportunity to engage in several captivating projects.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side: Skills Section */}
                <div className="skill">
                    <div className="skillBar">
                        <div className="skillItem">
                            <img src={html} alt="html5" className="skillBarImg" />
                            <span className="skillName">HTML</span>
                        </div>
                        <div className="skillItem">
                            <img src={css} alt="css3" className="skillBarImg" />
                            <span className="skillName">CSS</span>
                        </div>
                        <div className="skillItem">
                            <img src={JavaScript} alt="javascript" className="skillBarImg" />
                            <span className="skillName">JavaScript</span>
                        </div>
                        <div className="skillItem">
                            <img src={reactjs} alt="react.js" className="skillBarImg" />
                            <span className="skillName">React</span>
                        </div>
                        <div className="skillItem">
                            <img src={nodejs} alt="node.js" className="skillBarImg" />
                            <span className="skillName">Node.js</span>
                        </div>
                        <div className="skillItem">
                            <img src={mysql} alt="mysql" className="skillBarImg" />
                            <span className="skillName">MySQL</span>
                        </div>
                        <div className="skillItem">
                            <img src={cpp} alt="cpp" className="skillBarImg" />
                            <span className="skillName">C++</span>
                        </div>
                        <div className="skillItem">
                            <img src={python} alt="python" className="skillBarImg" />
                            <span className="skillName">Python</span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default About;
