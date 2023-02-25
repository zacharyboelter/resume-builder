//renders the form field to enable users to enter the necessary information

import React, { useState } from 'react'
import Loading from './Loading'

const Home = () => {
    const [fullName, setFullName] = useState("")
    const [currentPosition, setCurrentPosition] = useState("")
    const [currentLength, setCurrentLength] = useState(1)
    const [currentTechnologies, setCurrentTechnologies] = useState('')
    const [headshot, setHeadshot] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log({
            fullName,
            currentPosition,
            currentLength,
            currentTechnologies,
            headshot
        })
        setLoading(true)
    }

    // 👇🏻 renders the Loading component when you submit the form
    if (Loading) {
        return <Loading />
    }
    return (
        <div className='app'>
            <h1>Resume Builder</h1>
            <p>Generate a resume with the help of ChatGPT in seconds</p>
            <form
                onSubmit={handleFormSubmit}
                method='POST'
                encType='multipart/form-data'
            >
                    <label htmlFor="fullName">Enter your full name</label>
                    <input 
                        type="text" 
                        required
                        name='fullName'
                        id='fullName'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <div className='nestedContainer'>
                        <div>
                            <label htmlFor="currentPosition">Current Position</label>
                            <input 
                                type="text" 
                                required
                                name='currentPosition'
                                id='currentPosition'
                                value={currentPosition}
                                onChange={(e) => setCurrentPosition(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="currentLength">How long? (years)</label>
                            <input 
                                type="text" 
                                required
                                name='currentLength'
                                id='currentLength'
                                value={currentLength}
                                onChange={(e) => setCurrentLength(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="currentTechnologies">Technologies Used</label>
                            <input 
                                type="text" 
                                required
                                name='currentTechnologies'
                                id='currentTechnologies'
                                value={currentTechnologies}
                                onChange={(e) => setCurrentTechnologies(e.target.value)}
                            />
                        </div>
                        
                    </div>
            </form>
        </div>
    )
}