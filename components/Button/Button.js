import Link from 'next/link'

const Button = ({children, href, bgColor, textColor, width, border}) => {
    return (
        <Link 
            href={href}
            className={`${width} ${bgColor} ${textColor} ${border ? "border border-dark" : ""} text-center rounded-lg px-4 py-1.5 cursor-pointer`}
        >
            {children}
        </Link>
    )
}

export default Button