import React from 'react'
import NavItemsLeft from './NavItemsLeft'
import NavItemsRight from './NavItemsRight'

const NavMobile = ({nav, isShown}) => {
    return (
        <div className={`lg:hidden ${isShown ? "w-7/12" : "w-0"} transition-all duration-700 fixed right-0 top-0 bottom-0 bg-white`}>
            <div className='flex flex-col gap-8 px-8 mt-20'>
                <NavItemsLeft nav={nav.navLeft} col />
                <NavItemsRight col />
            </div>
        </div>
    )
}

export default NavMobile