import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import fileImg from '../../assets/file.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

import Resume from '../../Resume/April-Resume.pdf';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='aboutSkills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>
            <button
                    className="desktopMenuBtn"
                    onClick={() => {
                        window.open(Resume, "_blank");
                    }}
                    >
                    <img src={fileImg} alt="" className="desktopMenuImg" />
                    Resume
            </button>


            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>

            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='aboutSkills' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Resume</Link>
            </div>
        </nav>
    )
}

export default Navbar;