import Link from 'next/link'
import React from 'react'

const CompanyList = ({intro}) => {
    return (
        <ul className='flex gap-8 self-center lg:self-start'>
            {intro.clients.map((client) => (
                <li key={client.id}>
                    <Link href={client.link}>
                        <img src={client.img} alt={client.altText} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CompanyList