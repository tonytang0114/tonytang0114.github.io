import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <div>
            <div className="layout">
                <Navbar />
                <div className="contents">
                    {children}
                </div>
                <footer>
                    <p>Copyright 2021 Web Warrior</p>
                </footer>
            </div>
        </div>
    )
}
