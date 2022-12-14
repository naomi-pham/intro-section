import React from 'react'

const IntroImage = ({intro}) => {
    return (
        <picture className='flex justify-center lg:justify-end -z-10'>
            <source media="(min-width: 1024px)" srcSet={intro.heroImage.desktop} width="85%" />
            <source media="(min-width: 640px)" srcSet={intro.heroImage.mobile} />
            <img src={intro.heroImage.mobile} alt={intro.heroImage.altText} />
        </picture>
    )
}

export default IntroImage