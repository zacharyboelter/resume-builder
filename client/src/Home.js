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
            fullname,
            currentPosistion,
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
    return
}