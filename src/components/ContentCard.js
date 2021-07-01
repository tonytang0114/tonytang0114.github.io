import React from 'react'
import { container, card, box, content } from '../styles/contentcard.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

export default function ContentCard() {

  const introPictures = useStaticQuery(graphql`
    query IntroPictures {
        intro1: file(relativePath: {eq: "entrepreneur.png"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro2: file(relativePath: {eq: "developer.png"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro3: file(relativePath: {eq: "market.png"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  console.log(introPictures);
  return (
    <div className={container}>
      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h3>Entrepreneur</h3>
            <Img fluid={introPictures.intro1.childImageSharp.fluid} />
            <p>Actively developing Tipsme Mobile Application that reaches 2000 users in iOS Store and ranks top 10 from April 2021 to May 2021</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h3>Developer</h3>
            <Img fluid={introPictures.intro2.childImageSharp.fluid} />
            <p>Specializations: .NET C#, Flutter(Dart), Python, Javascript, SQL</p>
            <p>Concepts: System design(Database, server and client),  Algorithm & data structures, CI/CD, Design patterns, API security standards</p>
            <p>Framework: .NET Core 3.1+, Flutter, Angular, ReactJS, Flutter, Microsoft SQL Server, MySQL, Selenium </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
      <div className={card}>
        <div className={box}>
          <div className={content}>
            <h3>Algo Trader</h3>
            <Img fluid={introPictures.intro3.childImageSharp.fluid} />
            <p>Actively trading HSI futures by utilizing alternative data by Interactive Brokers API</p>
            <p>Concepts: Backtesting, Live Market Data Retrieval, Event Processing System, Order Management, Record Saving</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  )
}
