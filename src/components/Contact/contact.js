import './contact.css';
import githubIcon from '../../assets/github-logo.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">

                    <a href="https://github.com/BadshahYadav" target="_blank" rel="noreferrer" className='linkItem'>
                        <img src={githubIcon} alt="Facebook" className="link" />
                    </a>

                    <a href="https://x.com/_emperor_4k" target="_blank" rel="noreferrer" className='linkItem'>
                        <img src={twitterIcon} alt="Twitter" className="link" />
                    </a>

                    <a href="https://www.youtube.com/channel/UCV-qZ-U7p-55agOeZcT1Pmw" target="_blank" rel="noreferrer" className='linkItem'>
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                    </a>

                    <a href="https://www.instagram.com/_emperor_4k/" target="_blank" rel="noreferrer" className='linkItem'>
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </a>
                        
                        
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;