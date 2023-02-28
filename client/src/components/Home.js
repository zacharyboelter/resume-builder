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
    const [companyInfo, setCompanyInfo] = useState([{ name: "", position: "" }])

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

    const handleAddCompany = (e) => {
        setCompanyInfo([...companyInfo, { name: "", position: "" }])
    }

    //removes selected item from the list
    const handleRemoveCompany = (index) => {
        const list = [...companyInfo]
        list.splice(index, 1)
        setCompanyInfo(list)
    }

    //updates selected item from the list
    const handleUpdateCompany = (e, index) => {
        const { name, value } = e.target
        const list = [...companyInfo]
        list[index, name] = value
        setCompanyInfo(list)
    }

    // 👇🏻 renders the Loading component when you submit the form
    if (loading) {
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
                <div className='nestedContainer#'>
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
                <label htmlFor="photo">Upload your headshot</label>
                <input
                    type="file"
                    name='photo'
                    required
                    id='photo'
                    accept='image/x-png,image/jpeg'
                    onChange={(e) => setHeadshot(e.target.files[0])}
                />

                <h3>Companies you have worked at</h3>

                {/* The code snippet maps through the elements within the companyInfo array and displays them on the webpage. The handleUpdateCompany function runs when a user updates the input field, then handleRemoveCompany removes an item from the list of elements, and the handleAddCompany adds a new input field. */}

                {companyInfo.map((company, index) => (
                    <div className='nestedContainer' key={index}>
                        <div className='companies'>
                            <label htmlFor="name">Company Name</label>
                            <input
                                type="text"
                                name='name'
                                required
                                onChange={(e) => handleUpdateCompany(e, index)}
                            />
                        </div>
                        <div className='companies'>
                            <label htmlFor="position">Position Title</label>
                            <input
                                type="text"
                                name='position'
                                required
                                onChange={(e) => handleUpdateCompany(e, index)}
                            />
                        </div>
                        <div className='btn_group'>
                            {companyInfo.length - 1 === index && companyInfo.length < 4 && (
                                <button id='addBtn' onClick={handleAddCompany}>
                                    Add
                                </button>
                            )}
                            {companyInfo.length > 1 && (
                                <button id='deleteBtn' onClick={handleRemoveCompany}>
                                    Del
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <button>CREATE RESUME</button>
            </form>
        </div>
    )
}

export default Home