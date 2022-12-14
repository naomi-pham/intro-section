import { CompanyList, IntroImage, IntroText } from './IntroElements'

const Intro = ({intro}) => {
    return (
        <section className='flex flex-col-reverse lg:flex-row justify-between my-6 lg:px-28'>
            <div className="flex flex-col gap-10 justify-between mx-4 mt-8 lg:mt-28 ">
                <IntroText intro={intro} />
                <CompanyList intro={intro} />
            </div>
            <IntroImage intro={intro} />
        </section>
    )
}

export default Intro