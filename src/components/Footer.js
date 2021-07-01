import React from 'react'
import { footer_about, footer_contact } from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Footer() {
    return (
        <footer>
            <div className={footer_about}>
                <div className="about">
                    <h1>About</h1>
                    <p>Tony Tang <i>Professional Software developer & Freelancer</i> is confident in collaborating with clients to develop digital products for both business and customer uses.
                        Please contact me to quote if you are interested in my work. Thanks</p>
                </div>
                <div className="quick_links">
                    <h1>Quick Links</h1>
                    <ul className="footer-links">
                        <li onClick={() => scrollTo('#introduction')} onKeyDown={() => scrollTo('#introduction')}>About Me</li>
                        <li onClick={() => scrollTo('#contact')} onKeyDown={() => scrollTo('#contact')}>Contact Me</li>
                        <li onClick={() => scrollTo('#portfolio')} onKeyDown={() => scrollTo('#portfolio')}>Projects</li>
                        {/* <li onClick={() => scrollTo('#home')} onKeyDown={() => scrollTo('#home')}>Sitemap</li> */}
                    </ul>
                </div>
            </div>
            <div className={footer_contact}>
                {/* <p>Copyright © 2017 All Rights Reserved by Scanfcode.</p> */}
                <ul className="social-icons">
                    <li><a className="github" href="https://github.com/tonytang0114" aria-label="Github"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                    <li><a className="facebook" href="https://www.facebook.com/tony.tang.3386/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                    <li><a className="instagram" href="https://www.instagram.com/tonytanggg/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                    <li><a className="linkedin" href="https://hk.linkedin.com/in/wing-fung-tang" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                </ul>
                <p>Copyright © 2021 All Rights Reserved by Tony Tang.</p>
            </div>
        </footer>
    )
}
