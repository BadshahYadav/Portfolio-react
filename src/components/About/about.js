import React from 'react';
import './about.css';
import techStack from'../../assets/techStack.png';

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
                                From crafting dynamic web applications to navigating complex backend logic, 
                                each endeavor has been instrumental in honing my skills and nurturing my passion for innovation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side: Skills Section */}
                <div id="skills">
                <img src={techStack} alt="mySkills" className="mySkills"/>
                        </div>
            </div>    
        </section>
    );
}

export default About;
