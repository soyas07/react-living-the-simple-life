import React from 'react'
import Section from '../../Section/Section'
import SideBar from '../../SideBar/SideBar'

function RecentPosts() {
    return (
        <div className="container container-wrapper">
            <div className="section-wrapper">
                <Section />
            </div>
            <div className="sidebar-container">
                <SideBar />
                <SideBar type="recent-posts"/>
            </div>
        </div>
    )
}

export default RecentPosts
