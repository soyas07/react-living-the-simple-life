import React from 'react'
import './SideBar.css'
import about from '../assets/about-me.jpg'
import SectionData from '../Section/SectionData'

function SideBar( {type} ) {

    // list recent posts sidebar data
    const listPost = SectionData.map((list, index) => (
        <React.Fragment key={list.id}>
            <img className="side-img" src={list.img} alt="" />
            <p className="side-title">{list.title}</p>
            {(index === SectionData.length - 1) ? null : <hr />}
        </React.Fragment>
    ))

    if (type === "recent-posts"){
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar-about-wrapper">
                    <div className="sidebar-about">
                        <h1>RECENT POSTS</h1>
                        {listPost}
                    </div>
                </div>
            </div>
        )
    }
    else 
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar-about-wrapper">
                    <div className="sidebar-about">
                        <h1>ABOUT ME</h1>
                        <img src={about} alt="" />
                        <p>I find life better, and I'm happier, when things are nice and simple.</p>
                    </div>
                </div>
            </div>
        )
}

export default SideBar
