import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, projects } from '../../styles/projects.module.css'
import Img from 'gatsby-image';

export default function Projects({ data }) {
    console.log(data);
    const projs = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className={portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
            </div>
            <div className={projects}>
                {
                    projs.map((proj) => (
                        <Link to={"/projects/" + proj.frontmatter.slug} key={proj.id}>
                            <Img fluid={proj.frontmatter.thumb.childImageSharp.fluid} />
                            <h3>{proj.frontmatter.title}</h3>
                            <p>{proj.frontmatter.stack}</p>
                        </Link>
                    ))
                }
            </div>
            <p>Like what you see? Email me at {contact} for a quote</p>
        </Layout>
    )
}


export const query = graphql`
query ProjectPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
              stack
              title
              slug
              thumb {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
              }
            }
            id
        }
    }
    contact: site {
        siteMetadata {
            contact
        }
    }
}  
`;