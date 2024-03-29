import Image from "next/image";

// components

import particlesContainer from "../components/ParticlesContainer";

// farmer motion
import { motion } from "framer-motion";
import Scenes from './ComputersCanvas'

// variants
import { fadeIn } from "../variants";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "./ProjectsBtn";
import Avatar from "./Avatar";

const HomePageParticle = () => {
  return (
    <>
    
    <div className=" bg-primry/68  h-full ">
      {/* text */}
      <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
    
        <div className="text-center flex flex-col justify-center  xl:pt-40 xl:text-left h-full container mx-auto">
     
          {/* title */}
          {/* <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {" "}
            Transforming Ideas <br /> into{" "}
            <span className="text-accent ">Digital Reality</span>{" "}
          </motion.h1> */}
         
          {/* <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </motion.p> */}
          {/* btn */}
          <div className="flex justify-center xl:hidden  relative  z-10 ">
            {/* <ProjectsBtn /> */}

          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            {/* <ProjectsBtn /> */}
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full  absolute right-0 bottom-0 -z-10 ">
        {/* bg img */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
      xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 -z-10 "
        ></div>
        {/* particels */}
        
        <ParticlesContainer/>

        
       
        {/* Avtar Img */}
        <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{duration:1, ease:'easeInOut' }}
         className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
        lg:bottom-0  -right-[8%] md:right-[8%] ">
          <Avatar />
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default HomePageParticle;
