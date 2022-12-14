import React from 'react'
import Button from '../../Button/Button'

const IntroText = ({intro}) => {
    return (
        <article className='flex flex-col gap-4 sm:gap-8 text-center lg:text-left'>
            <h2 className='text-3xl sm:text-6xl'>
                Make
                {" "}
                <span className='lg:block'>
                remote work
                </span>
            </h2>
            <p className='lg:w-9/12 text-base sm:text-lg text-neutral'>
                {intro.description}
            </p>
            <div className='self-center lg:self-start'>
                <Button
                    bgColor="bg-dark hover:bg-light"
                    textColor="text-white hover:text-dark"
                    border
                    width="w-fit"
                >
                    {intro.action}
                </Button>
            </div>
        </article>
    )
}

export default IntroText