import Link from 'next/link'
import React from 'react'
import Button from '../../Button/Button'

const NavItemsRight = ({col}) => {
    return (
        <ul className={`flex gap-2 ${col ? "flex-col" : ""}`}>
            <li>
                <Button width="w-full">
                    <Link href="/login">Login</Link>
                </Button>
            </li>
            <li>
                <Button width="w-full" border>
                    <Link href="/login">Register</Link>
                </Button>
            </li>
        </ul>
    )
}

export default NavItemsRight