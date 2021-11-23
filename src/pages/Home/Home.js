import React from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Section from '../../Section/Section'
import SideBar from '../../SideBar/SideBar'

function Home() {
    return (
        <div className="container container-wrapper">
            <div className="section-wrapper">
                <SectionTitle />
                <Section />
            </div>
            <div className="sidebar-container">
                <SideBar />
                <SideBar type="recent-posts"/>
            </div>
        </div>
    )
}

export default Home
