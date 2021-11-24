import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

    const [isClicked, setIsClicked] = useState('home')

    function handleClick (e){
        setIsClicked(e.target.name)
    }

    return (
        <div style={{background: "#F8F8F8"}}>
            <nav className="container">
                
                <div className="logo">
                    <Link to="/" onClick={() => {setIsClicked('home')}}>
                        <h1>Living the simple life</h1>
                        <p>A BLOG EXPLORING MINIMALISM IN LIFE</p>
                    </Link>
                </div>
                <ul>
                    <li><Link to="/" onClick={handleClick} className={isClicked==='home' ? "active-link" : null} name="home">HOME</Link></li>
                    <li><Link to="/about" onClick={handleClick} className={isClicked==='about' ? "active-link" : null} name="about">ABOUT ME</Link></li>
                    <li><Link to="/recent-posts" onClick={handleClick} className={isClicked==='post' ? "active-link" : null} name="post">RECENT POSTS</Link></li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Header
