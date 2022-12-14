import React from 'react'

const Button = ({children, bgColor, textColor, width, border}) => {
    return (
        <button className={`${width} ${bgColor} ${textColor} ${border ? "border border-dark" : ""} rounded-lg px-3 py-1`}>
            {children}
        </button>
    )
}

export default Button