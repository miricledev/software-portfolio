import React, { useEffect, useState } from 'react'
import { projects } from '../projects'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

import './projects.css'

const Projects = () => {

    const projectArray = [...projects];

    const [count, setCount] = useState(0)
    const [progress, setProgress] = useState(0)

    const timeInterval = 5000
    const stepper = 100
    const stepTime = timeInterval / stepper

    useEffect(() => {

        setProgress(0)
        const interval = window.setInterval(() => updateProjectShown(), timeInterval)
        const progressUpdater = window.setInterval(() => updateProgress(), stepTime)

        return () => {
            window.clearInterval(interval)
            window.clearInterval(progressUpdater)
        }
    }, [count])

    const decrement = () => {
        setCount(prevCount => (prevCount-1 >= 0 ? prevCount - 1 : projectArray.length - 1))
    }

    const increment = () => {
        setCount(prevCount => (prevCount < projectArray.length-1 ? prevCount + 1 : 0))
    }

    const updateProjectShown = () => {
        setCount(prevCount => (prevCount < projectArray.length-1 ? prevCount + 1 : 0))
        setProgress(0)
    }

    const updateProgress = () => {
        setProgress(prev => (prev + (100 / stepper)));
    }


    return (
        <div className='projects'>
            {count + 1}

            <div className='card-header'>
                <div className='featured-projects'>
                    Featured Projects
                </div>
                <div>
                    <button className='detail-button'>Read more</button>
                </div>
            </div>

            <div className='card-body'>
                <div className='left-arrow' onClick={decrement}>
                    <IoIosArrowDropleftCircle className='arrow' />
                </div>
                <div className='project-details'>
                    <img src={projectArray[count].photo} className='project-image' alt='image' />
                    <div className='detail-labels'>
                        <p>{projectArray[count].title}</p>
                        <p style={{color: 'grey'}}>{projectArray[count].type}</p>
                    </div>
                </div>
                <div className='right-arrow' onClick={increment}>
                    <IoIosArrowDroprightCircle className='arrow' />
                </div>
            </div>

            <div className='card-footer'>
                <div className='progress-bar-container'>
                    <div className='progress-bar' style={{width: `${progress}%`}}></div>
                </div>
                <div>
                    <FaGithubSquare className='github-logo-footer' />
                </div>
            </div>
        </div>
    )
    }

export default Projects