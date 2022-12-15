import React from 'react'
import Button from '../../Button/Button'

const links = [
    {
        id: 1,
        href: "/login",
        label: "Login",
        border: false,
    },
    {
        id: 2,
        href: "/register",
        label: "Register",
        border: true
    }
]

const NavItemsRight = ({col}) => {
    return (
        <div className={`flex gap-2 ${col ? "flex-col" : ""}`}>
            {links.map(link => (
                <Button 
                    key={link.id}
                    href={link.href} 
                    border={link.border} 
                >
                    {link.label}
                </Button>
            ))}
        </div>
    )
}

export default NavItemsRight