

import React from "react";
import { useInView } from "react-intersection-observer";


import { Infos } from "./constants/Info";
import BallCanvas from "./BallCanvas";


const Technologies = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once when in view
        threshold: 0.5, // Adjust this value based on when you want the animation to start
    });
    return (


        <div className="flex  gap-2 flex-col flex-wrap w-full max-w-[1280px] mx-auto p-4">
            <p
                className="heading"
            >
                TECHNOLOGIES I USE
            </p>
            <p
                className="subheading"
            >
                Technologies
            </p>

            <div className="w-full flex gap-1 flex-wrap " >
                {Infos.technologies.map((tech) => {
                    return (
                        <div
                            key={tech.name} >
                            <div className="flex w-[80px] h-[80px] p-2 flex-wrap items-center justify-center">

                                <BallCanvas icon={tech.icon} />
                                <p className="techheading">{tech.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Technologies;
