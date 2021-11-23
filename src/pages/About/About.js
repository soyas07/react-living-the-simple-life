import React from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle'
import SideBar from '../../SideBar/SideBar'
import '../../SideBar/SideBar.css'
import Section from '../../Section/Section'

function About() {
    return (
        <div className="container container-wrapper">
            <div className="section-wrapper">
                <SectionTitle type="about"/>
                <Section type="about" />
            </div>
            <div className="sidebar-container">
                <SideBar type="recent-posts"/>
                
            </div>
        </div>
    )
}

export default About
