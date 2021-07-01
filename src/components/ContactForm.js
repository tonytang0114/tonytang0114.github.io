import React from 'react'
import { contact, contact_form, outer_contact } from '../styles/contact.module.css'
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby'



export default function ContactForm() {

    const data = useStaticQuery(graphql`
        query Banner3 {
            file(relativePath: {eq: "contact.png"}) {
                childImageSharp {
                    fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section id="contact" className={outer_contact}>
            <div className={contact}>
                <Img fluid={data.file.childImageSharp.fluid} />

                <div className={contact_form}>
                    <h1>Reach me via potential freelance opportunities!</h1>
                    <form
                        action="https://formspree.io/f/xrgrllez"
                        method="POST"
                    >
                        <input name="firstname" placeholder="Name" type="text" />
                        <input name="_replyto" placeholder="Email" type="email" />
                        <textarea name="message" placeholder="Enquires" rows="4" cols="50"></textarea>
                        <input type="submit" value="SEND MESSAGE" />
                    </form>
                </div>
            </div>
        </section>
    )
}
