import Link from 'next/link'
import { NavDesktop, NavMobile } from './NavElements'

const Nav = ({nav, isShown, toggleMenu}) => {
    return (
        <nav className='flex justify-between items-center gap-12 text-base p-6 lg:px-10'>
            <Link href="#">
                <img
                    src="/images/logo.svg" 
                    alt="logo" 
                />
            </Link>
            <NavDesktop nav={nav} />
            <img 
                src={isShown ? "images/icon-close-menu.svg" : "images/icon-menu.svg"}
                alt="menu" 
                className='lg:hidden block fixed right-8 z-20' 
                onClick={toggleMenu}
            />
            <NavMobile nav={nav} isShown={isShown} />
        </nav>
    )
}

export default Nav