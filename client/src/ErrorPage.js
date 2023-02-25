//shown when an error occurs

import React from "react";
import { Link } from 'react-router-dom'


const ErrorPage = () => {
    return(
        <div className="app">
            <h3>
                You have not provided your details. Head back to the {" "}
                <Link to='/'>homepage</Link>
            </h3>
        </div>
    )
}

export default ErrorPage