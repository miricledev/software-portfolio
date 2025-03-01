import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './navbar.css'

const Navbar = () => {
    const linkedIn = 'https://www.linkedin.com/in/rohi-kumar-717921244'
    const github = 'https://github.com/miricledev'
    return (
            <nav className='nav-bar'>
                <a href={github} target='_blank' ><FaGithubSquare className='github-logo' /></a>
                <p className='my-name'>Rohan Patrick Kumar</p>
                <a href={linkedIn} target='_blank' ><FaLinkedin className='linkedin-logo' /></a>
            </nav>
    )
}

export default Navbar