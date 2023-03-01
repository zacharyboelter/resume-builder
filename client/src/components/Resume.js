// displays the AI-generated resume to the user

import React from "react"
import ErrorPage from './ErrorPage'


const Resume = ({ result }) => {
    if (JSON.stringify(result) === '{}') {
        return <ErrorPage />
    }

    const handlePrint = () => alert('Print Successful.')
    return (
        <div>
            <button onClick={handlePrint}>Print Page</button>
            <main className="conatiner">
                <p>Howdy!</p>
            </main>
        </div>
    )
}

export default Resume


