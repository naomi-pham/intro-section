import React from 'react'

const Button = ({value, bgColor, textColor, width, border}) => {
    return (
        <button className={`${width} ${bgColor} ${textColor} ${border ? "border border-dark" : ""} rounded-lg px-4 py-1.5`}>
            {value}
        </button>
    )
}

export default Button