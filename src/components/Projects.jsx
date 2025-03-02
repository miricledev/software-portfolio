import React, { useEffect, useState } from 'react'
import { projects } from '../projects'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

import './projects.css'

const Projects = () => {

    const [count, setCount] = useState(0)
    const [progress, setProgress] = useState(0)
    const [projectFilter, setProjectFilter] = useState(null)
    const [projectArray, setProjectArray] = useState([...projects])

    const timeInterval = 5000
    const stepper = 100
    const stepTime = timeInterval / stepper

    useEffect(() => {
        setCount(0)
        setProjectArray(projectFilter != null ? projects.filter(project => project.complete == projectFilter) : [...projects])

    }, [projectFilter])

    useEffect(() => {

        setProgress(0)
        const interval = window.setInterval(() => updateProjectShown(), timeInterval)
        const progressUpdater = window.setInterval(() => updateProgress(), stepTime)

        return () => {
            window.clearInterval(interval)
            window.clearInterval(progressUpdater)
        }
    }, [count, projectArray])

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
            {projectFilter}
            <div className='card-header'>
                <div className='featured-projects'>
                    Featured Projects
                </div>
                <div className='filter-buttons'>
                    <button onClick={() => setProjectFilter(true)} className='detail-button'>Completed</button>
                    <button onClick={() => setProjectFilter(false)} className='detail-button'>In progress</button>
                    <button onClick={() => setProjectFilter(null)} className='detail-button'>Clear filter</button>
                    {projectFilter != null && (<p>Filter: {projectFilter!= null ? (projectFilter ? 'Completed' : 'In progress') : 'None'}</p>)}
                </div>
            </div>

            <div className='card-body'>
                <div className='left-arrow' onClick={decrement}>
                    <IoIosArrowDropleftCircle className='arrow' />
                </div>
                <div className='project-details'>
                    <img src={projectArray[count].photo} className='project-image' alt='image' />

                </div>
                <div className='right-arrow' onClick={increment}>
                    <IoIosArrowDroprightCircle className='arrow' />
                </div>
            </div>

            <div className='card-footer'>
                <div className='detail-labels'>
                    <p>{projectArray[count].title}</p>
                    <p style={{color: 'grey'}}>{projectArray[count].type}</p>
                </div>
                <div className='progress-bar-container'>
                    <div className='progress-bar' style={{width: `${progress}%`}}></div>
                </div>
                <div className='github-dates'>
                    <a href={projectArray[count].github} target='_blank' ><FaGithubSquare className='github-logo-footer' /></a>
                    <p>{projectArray[count].complete ? 'Completed: ' : ''}{projectArray[count].date_completed}</p>
                </div>
            </div>
        </div>
    )
    }

export default Projects