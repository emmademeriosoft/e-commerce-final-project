import React from 'react'

const MainTitle = ({ title, tagLine }) => {
    return (
        <div className="main_title text-center">
            <h2 className="text-uppercase fw-6">
                {title}
            </h2>
            <p>{tagLine}</p>
        </div>
    )
}

export default MainTitle
