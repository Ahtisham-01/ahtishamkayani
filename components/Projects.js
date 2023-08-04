import React from 'react'

const Projects = () => {
    return (

        <div className='max-w-[1280px] flex flex-col gap-4 mx-auto pt-20 px-4'>
            <p
                className="subheading"
            >
                Projects
            </p>
            <p
                className="text-base text-gray-700"
            >
                These projects exemplify my skills and expertise through real-world
                examples of my work. Each project is accompanied by a concise
                description, along with links to code repositories and live demos.
                They serve as a testament to my proficiency in tackling intricate
                challenges, adeptness with diverse technologies, and successful
                project management.
            </p>

            {/* <div class="max-w-sm bg-transparent p-1  bd rounded-lg  hover:shadow-2xl shadow-black">
                <a href="#">
                    <img class="rounded-t-lg" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/puzzleappdemo.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tighttext-white">Puzzle App</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The “Number Puzzle” practices number sequencing, counting, and recognizing numerals from 1 to 100. It also builds problem-solving and cognitive skills by teaching children to develop strategies to assemble each piece correctly, one at a time.</p>
                    <a href="https://puzzle-app-eight.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600">
                        Demo link
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div> */}
            <div className="container">
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>Puzzle App</h2>
                        <p>The “Number Puzzle” practices number sequencing, counting, and recognizing numerals from 1 to 100.</p>
                        <a href="https://puzzle-app-eight.vercel.app/">Demo link</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>3DShirt Customizer</h2>
                        <p>In this 3D shirt customizer project you can Customize your shirt according to your need.</p>
                        <a href="https://3-d-tshirt-customizer-eight.vercel.app/">Demo link</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>GeekFlare</h2>
                        <p>Your personal Ai assistant in which you can write your email , letter and whatever you want.</p>
                        <a href="https://geekflare-fe.vercel.app/">Demo link</a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Projects