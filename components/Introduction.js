import React from 'react'

const Introduction = () => {
    return (
        <div className='w-full max-w-[1280px] mx-auto p-4 z-55'>
            <div className='w-full flex-col flex gap-4 md:flex-row  justify-between z-55'>
                <div className='flex flex-col gap-4 z-55'>
                    <h1 className='uppercase heading'>Introduction</h1>
                    <span className='subheading' >Overview</span>
                    <p className='paragraph'>Passionate and versatile developer skilled in crafting innovative, user-friendly applications</p>
                    <p className='paragraph'> Dedicated to continuous learning and growth, leveraging industry knowledge to deliver exceptional results</p>
                    <p className='paragraph'> Committed to building visually stunning apps that seamlessly blend form and function for an exceptional user experience</p>
                </div>
                <div>

                    <div className='flex flex-col  gap-4 maincont justify-center items-center' >
                        <img className='w-[40px] h-[40px] animate' src="/images/web.png" />
                        <p >Web Developer</p></div>

                </div>
            </div>

        </div>
    )
}

export default Introduction