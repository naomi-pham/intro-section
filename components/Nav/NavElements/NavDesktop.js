import NavItemsLeft from './NavItemsLeft'
import NavItemsRight from './NavItemsRight'

const NavDesktop = ({nav}) => {
    return (
        <div className="hidden lg:flex flex-auto justify-between items-center">
            <NavItemsLeft nav={nav.navLeft} />
            <NavItemsRight />
        </div>
    )
}

export default NavDesktop