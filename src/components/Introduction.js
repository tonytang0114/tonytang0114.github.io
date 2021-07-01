import React from 'react'
import { outer_introduction, introduction } from '../styles/introduction.module.css'
import ContentCard from "../components/ContentCard";


export default function Introduction({ data }) {
    return (
        <div id="introduction" className={outer_introduction}>
            <section className={introduction}>
                <h2>My Software Engineer Journey</h2>
                <h3>Since beginning my journey as a mobile app entrepreneur, I've developed inhouse software solutions for a hedge fund company, an outstanding web application product thats sold around the world in MNC and collaborated with talented people to create digital products for both business and consumer use.
                    With immense experience of developing softwares, I am quite confident and experienced to create software for clients.
                </h3>
                <ContentCard />
            </section>
        </div>
    )
}
