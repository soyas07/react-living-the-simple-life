import React from 'react'
import './SectionTitle.css'
import life from '../assets/life.jpg'
import about from '../assets/about-me.jpg'

function SectionTitle( {type} ) {
    if (type === "about"){
        return (
            <div className="section-title-wrapper">
                <img className="title-img" src={about} alt="" />
                <h1 className="txt-header">My name is John and living the simple life saved my life</h1>
                <p className="txt-content"> <b>I used to be a pack rat</b>. I had so many things that I thought that I loved, but the truth was I couldn't even appreciate any of it because there was too much.  </p>
                <p className="txt-content">Things were terrible. I had a job that I hated, a home that I didn't want to live in, and I couldn't hold a relationship.</p>

            </div>
        )
    }else 
        return (
            <div className="section-title-wrapper">
                <img className="title-img" src={life} alt="" />
                <p className="txt-comment-date">July 23, 2021 | 3 comments</p>
                <h1 className="txt-header">Finding simplicity in life</h1>
                <p className="txt-content"> <b>Life can get complicated really quickly</b>, but it doesn't have to be! There are many ways to simplify your life, <a href="#">a few of which we've explored in the past.</a> This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living. </p>
                <p className="txt-continue"><a href="#">CONTINUE READING</a></p>
                <hr />
            </div>
        )
}

export default SectionTitle
