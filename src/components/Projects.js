import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import { portfolio, projects, project_imgs } from '../styles/projects.module.css'
import Img from 'gatsby-image';

export default function Projects() {
    const data = useStaticQuery(graphql`
        query Portfolio {
            projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                    frontmatter {
                        stack
                        title
                        slug
                        thumb {
                            childImageSharp {
                                fluid(maxWidth: 2080) {
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
    `)
    console.log(data);
    const projs = data.projects.nodes;

    return (
        <div id="portfolio">
            <div className={portfolio}>
                <h2>Portfolio</h2>
                <h3>My Projects & Softwares</h3>
            </div>
            <div className={projects}>
                {
                    projs.map((proj) => (
                        <Link to={"/projects/" + proj.frontmatter.slug} key={proj.id}>
                            <Img className={project_imgs} fluid={proj.frontmatter.thumb.childImageSharp.fluid} />
                            <h3>{proj.frontmatter.title}</h3>
                            <p>{proj.frontmatter.stack}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
