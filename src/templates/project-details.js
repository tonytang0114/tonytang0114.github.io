import React from "react"
import Img from "gatsby-image"
import { details, featured, feature_img } from '../styles/project-details.module.css'
import { graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProjectDetails = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(data);
  const { html } = data.markdownRemark
  const { title, stack, slug } = data.markdownRemark.frontmatter
  let images = data.tipsme.edges;
  images.shift();
  // images = null;

  // if (slug == "tipsme") {
  //   images = data.tipsme.edges;
  // }
  // if (slug == "algoTrade") {
  //   images = data.tipsme.edges;
  // }
  if (slug === "cashflow") {
    images = data.cashflow.edges;
  }
  if (slug === "algoTrade") {
    images = data.algoTrade.edges;
  }



  return (

    <div className={details}>
      <h2>{title}</h2>
      <h3>{stack}</h3>
      {/* <div className={featured}>
        <Img fluid={featuredImg.childImageSharp.fluid} />
      </div> */}
      <div className={featured}>
        <Slider {...settings}>
          {
            images.map((image) => (
              <Img className={feature_img} fluid={image.node.fluid} key={image.node.id} />
            ))
          }
        </Slider>
      </div>
      <div className={html} dangerouslySetInnerHTML={{ __html: html }} />
    </div>

  )
}

export default ProjectDetails

export const query = graphql`
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      slug
    }
  }
  tipsme: allImageSharp(
    filter: {fluid: {originalName: {regex: "/tipsme/"}}}
    sort: {fields: fluid___originalName}
  ) {
    edges {
      node {
        fluid {
          ...GatsbyImageSharpFluid
        }
        id
      }
    }
  }

  algoTrade: allImageSharp(
    filter: {fluid: {originalName: {regex: "/algoTrade/"}}}
    sort: {fields: fluid___originalName}
  ) {
    edges {
      node {
        fluid {
          ...GatsbyImageSharpFluid
        }
        id
      }
    }
  }

  cashflow: allImageSharp(
    filter: {fluid: {originalName: {regex: "/cashflow/"}}}
    sort: {fields: fluid___originalName}
  ) {
    edges {
      node {
        fluid {
          ...GatsbyImageSharpFluid
        }
        id
      }
    }
  }
}

`