import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';
import Img from 'gatsby-image';

export default function Navbar() {

    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata;

    return (
        <nav id="home">

            <h1>{title}</h1>
            <div className="links">
                <li onClick={() => scrollTo('#home')} onKeyDown={() => scrollTo('#home')}>Home</li>
                <li onClick={() => scrollTo('#introduction')} onKeyDown={() => scrollTo('#introduction')}>About</li>
                <li onClick={() => scrollTo('#portfolio')} onKeyDown={() => scrollTo('#portfolio')}>Portfolios</li>
                <li onClick={() => scrollTo('#contact')} onKeyDown={() => scrollTo('#contact')}>Contact</li>
            </div>
        </nav>
    )
}
