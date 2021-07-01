import React from "react"
import Navbar from '../components/Navbar'
import { header, btn, header_text, outer_header } from '../styles/home.module.css'
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";


export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <div className={outer_header}>
        <Navbar />
        <section className={header}>
          <div className={header_text}>
            <h2>Entrepreneur & Freelance Software Developer</h2>
            <br />
            <h3>Tipsme Mobile Apps Owner (&gt;2000 users)</h3>
            <p>4 years of fulltime job experience</p>
            <div className={btn}>
              My Portfolio Projects
            </div>
          </div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </section>
      </div>
      <Introduction data={data} />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "landing.png"}) {
      childImageSharp {
        fluid(quality: 100,) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;