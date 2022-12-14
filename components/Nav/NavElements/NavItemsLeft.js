import Link from 'next/link'
import DropDown from './DropDown'

const NavItemsLeft = ({nav, col}) => {
    return (
        <ul className={`flex gap-4 lg:gap-8 ${col ? "flex-col" : ""}`}>
            {nav.map(item => (
                <li 
                    key={item.id} 
                    className='relative'
                >
                    {item.link && <Link href={item.link}>{item.name}</Link> }
                    {item.values && <DropDown item={item} />}
                </li>
            ))}
        </ul>
    )
}

export default NavItemsLeft