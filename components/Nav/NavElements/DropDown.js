import Link from 'next/link'
import useToggler from '../../../hooks/useToggler'

const DropDown = ({item}) => {
    const [isShown, toggleShow] = useToggler(false)
    
    return (
        <> 
            <div 
                className='flex items-center gap-2'
                onClick={toggleShow}
            >
                <p className="hover:text-dark hover:cursor-pointer">
                    {item.name}
                </p>
                <img
                    src={`images/icon-arrow-${isShown ? "up" : "down"}.svg`}
                    alt="icon down"
                />
            </div>
            <ul className={`lg:absolute right-0 top-8 bg-white lg:shadow-2xl px-6 py-4 ${isShown ? "flex" : "hidden"} flex-col gap-4`}>
                {item.values.map(value => (
                    <li key={value.id}>     
                        <Link href="#">
                            <div className='flex gap-2 lg:text-sm'>
                                {value.icon && <img src={value.icon} alt="" className='w-4 h-4' />}
                                <p>{value.name}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
    }

export default DropDown