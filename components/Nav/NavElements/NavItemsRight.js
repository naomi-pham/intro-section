import Link from 'next/link'
import React from 'react'
import Button from '../../Button/Button'

const NavItemsRight = ({col}) => {
    return (
        <ul className={`flex gap-2 ${col ? "flex-col" : ""}`}>
            <li>
                <Link href="/login">
                    <Button width="w-full" value="Login" />
                </Link>
            </li>
            <li>
                <Link href="/register">
                    <Button width="w-full" value="Register" border />
                </Link>
            </li>
        </ul>
    )
}

export default NavItemsRight