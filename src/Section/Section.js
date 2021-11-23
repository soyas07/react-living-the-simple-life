import React from 'react'
import './Section.css'
import SectionData from './SectionData'
import AboutData from './AboutData'

function Section( {type} ) {

    // list every section data
    const listData = SectionData.map(list => (
        <React.Fragment key={list.id}>
            <div className="section-content-wrapper">
                <div className="section-title-left">
                    <img className="title-img section-img" src={list.img} alt="" />
                    <p className="txt-comment-date">{list.date} | {list.comments} comments</p> 
                </div>
                <div className="section-title-right">   
                    <h1 className="txt-header">{list.title}</h1>
                
                    <p className="txt-content">{list.desc}</p>
                    <p className="txt-continue"><a href="#">CONTINUE READING</a></p>
                </div>
            </div>
        </React.Fragment>
    ))

    // list about section data
    const listAbout = AboutData.map(list => (
        <React.Fragment key={list.id}>
            <h1 className="txt-header" style={{color: "#1792D2"}} >{list.title}</h1>
            <p className="txt-content">{list.desc_1}</p>
            <p className="txt-content">{list.desc_2}</p>
        </React.Fragment>
    ))

    if (type === "about") {
        return (
            <>
                {listAbout}
            </>
        )
    }else 
        return (
            <>
                {listData}
            </>
        )
}

export default Section
