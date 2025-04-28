import React from 'react';
import './works.css';
import GitHub from '../../assets/github-logo.png';
import Folder from '../../assets/project1.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Porjects</h2>
            <span className="worksDesc">This section contains collection of my personal and professional work, 
            highlighting my skills in web development, UI/UX design, and modern technologies.
            Each project reflects my problem-solving ability, creativity, and attention to clean, responsive design principles.</span>

    <div className="worksImgs">

        <div className='project'>
            <h2 className='projectTitle'><span className='pTitle'>Helping-</span>NGO</h2>
            <p className='para'>
                We ensure animals receive proper care by identifying their needs like food, shelter, and medical attention. 
                Resources such as funding, supplies, and trained personnel are allocated effectively. Safety protocols are 
                established to protect both animals and rescuers, while legal requirements are strictly followed. Additionally, 
                we plan for follow-up care, including medical support and adoption services, to guarantee ongoing well-being.
            </p>
    
            <div className="linkContainer">
                <a href="https://github.com/BadshahYadav/HelpingNGO" target="_blank" rel="noreferrer" className='linkItem'>
                    <img src={GitHub} alt="GitHub" className="link" />
                    <span className='linkText'>Source Code</span>
                </a>
                
                <a href="https://badshahyadav.github.io/HelpingNGO/" target="_blank" rel="noreferrer" className='linkItem'>
                    <img src={Folder} alt="Folder" className="link" />
                    <span className='linkText'>Live Project</span>
                </a>
            </div>
        </div>

        <div className='project'>
            <h2 className='projectTitle'><span className='pTitle'>Apna-</span>Sangeet</h2>
            <p className='para'>
            This Music Player App is designed to seamlessly access and play locally downloaded songs on your device. 
            It provides a smooth, efficient, and user-friendly interface focused on offline music playback. 
            With simple controls and reliable performance, it offers an enjoyable listening experience without the 
            need for internet connectivity.Most important thing is that it is my first andriod App. I hope you find it valuable and convenient.
            </p>
    
            <div className="linkContainer">
                <a href="https://github.com/BadshahYadav/Apna-Sangeet" target="_blank" rel="noreferrer" className='linkItem'>
                    <img src={GitHub} alt="GitHub" className="link" />
                    <span className='linkText'>Source Code</span>
                </a>
                
                <a href="https://github.com/BadshahYadav/Apna-Sangeet" target="_blank" rel="noreferrer" className='linkItem'>
                    <img src={Folder} alt="Folder" className="link" />
                    <span className='linkText'>Live Project</span>
                </a>
            </div>
        </div>

        <div className='project'>
            <h2 className='projectTitle'><span className='pTitle'>Quiz-</span>App</h2>
            <p className='para'>
            The Quiz-App is an interactive web application built using React.js that allows users to test their knowledge 
            across various topics. It dynamically presents multiple-choice questions, captures user answers, and provides 
            instant feedback and scoring.The app focuses on delivering a smooth, responsive, and user-friendly experience, 
            making learning and self-assessment both fun and engaging.
            </p>
    
            <div className="linkContainer">
                <a href="https://github.com/BadshahYadav/Quiz-App" target="_blank" rel="noreferrer" className='linkItem'>
                    <img src={GitHub} alt="GitHub" className="link" />
                    <span className='linkText'>Source Code</span>
                </a>
                
                <a href="https://badshahyadav.github.io/Quiz-App/" target="_blank" rel="noreferrer" className='linkItem'>
                    <img src={Folder} alt="Folder" className="link" />
                    <span className='linkText'>Live Project</span>
                </a>
            </div>
        </div>

        <div className='project'>
            <h2 className='projectTitle'><span className='pTitle'>Portfolio-</span>react</h2>
            <p className='para'>
            This portfolio website is a personal showcase of my work, skills, and experience as a web developer. 
            Built with a focus on modern design, responsiveness, and performance, it highlights my projects, technical expertise, 
            and professional background. The site aims to provide visitors with a clear understanding of my capabilities and passion 
            for creating high-quality web applications.
            </p>
    
            <div className="linkContainer">
                <a href="https://github.com/BadshahYadav/Portfolio-react" target="_blank" rel="noreferrer" className='linkItem'>
                    <img src={GitHub} alt="GitHub" className="link" />
                    <span className='linkText'>Source Code</span>
                </a>
                
                <a href="https://badshahyadav.github.io/Portfolio-react/" target="_blank" rel="noreferrer" className='linkItem'>
                    <img src={Folder} alt="Folder" className="link" />
                    <span className='linkText'>Live Project</span>
                </a>
            </div>
        </div>


    </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;