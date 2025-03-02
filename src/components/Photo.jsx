import React, { useState } from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './projects.css'

const Photo = () => {

    const [count, setCount] = useState(0)

    const photos = ['1 (1).jpg', '1 (2).jpg', '1 (3).jpg', '1 (4).jpg', '1 (5).jpg', '1 (6).jpg', 'pfp.PNG']

    const decrement = () => {
        setCount(prevCount => (prevCount-1 >= 0 ? prevCount - 1 : photos.length - 1))
    }

    const increment = () => {
        setCount(prevCount => (prevCount < photos.length-1 ? prevCount + 1 : 0))
    }

    return (
        <div
        className='photo'       
        style={{
            backgroundImage: `url('${photos[count]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top 60%',
        }}>
            <div className='card-body'>
                <div onClick={decrement}>
                    <IoIosArrowDropleftCircle className='arrow' />
                </div>
                <div onClick={increment}>
                    <IoIosArrowDroprightCircle className='arrow' />
                </div>
            </div>
        </div>
    )
}

export default Photo