import React from 'react'

const Button = ({children, bgColor, textColor, width, border}) => {
    return (
        <div className={`${width} ${bgColor} ${textColor} ${border ? "border border-dark" : ""} rounded-lg px-5 py-1.5 cursor-pointer`}>
            {children}
        </div>
    )
}

export default Button