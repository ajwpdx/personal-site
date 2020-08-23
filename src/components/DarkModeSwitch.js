import React from 'react'

const DarkModeSwitch = (props) => {

    const {   
        darkMode,
        setDarkMode
    } = props

    const handleClick = (e) => {
        setDarkMode(!darkMode)
    }

    return (
        <div className='dark-mode'>
            <label className="switch">
                <input type="checkbox" onClick={handleClick}/>
                <span className="slider"></span>
            </label>

        </div>
    )
}

export default DarkModeSwitch
