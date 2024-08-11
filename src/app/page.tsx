
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Image from "next/image";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
export default function Home() {



  return (
<<<<<<< HEAD
    <>
      <AuroraBackground >
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative w-full flex flex-1 gap-3 items-center justify-center px-9"
        >
          <div className="relative flex flex-col sm:w-3/6   gap-4 items-center justify-center px-4" >
            <div className="text-3xl md:text-5xl  w-full bg-clip-text    bg-gradient-to-b from-neutral-200 to-neutral-500 font-bold text-left dark:text-white ">
              <p className="text-transparent  text-center sm:text-left flex-nowrap antialiased"> Hi, I'm Nitesh Saini</p>
            </div>
            <div className="text-base text-center w-full sm:text-left font-semibold antialiased text-neutral-300 sm:text-xl  py-4">
              A Passionate Web Developer Crafting Solutions for the Future.
            </div> <div className="absolute -bottom-40 sm:mt-8 sm:static">
              <Modal  >
                <ModalTrigger className=" outline outline-neutral-400  antialiased flex justify-center group/modal-btn">
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    Explore  My
                  </span>
                  <div className="-translate-x-40  group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500  antialiased z-20">
                    Jourey
                  </div>
                </ModalTrigger>
              </Modal>
            </div>
          </div>
          <div className="relative hidden max-h-[500px] bg-clip-content sm:h-[500px] min-h-[300px]    sm:flex flex-col  sm:w-3/6 gap-4 items-center justify-center px-4">
            <Image src={`/download.svg`} alt="Developer" fill priority quality={100} className=" mt-9 bg-blend-screen" />
          </div>

        </motion.div>
      </AuroraBackground >
      <div className="h-fit md:h-screen max-h-screen bg-zinc-900 relative">
        <div className="w-full text-2xl sm:text-4xl bg-rose-400 font-medium flex justify-center antialiased text-zinc-300 ">
          <p className=" mt-16">Expertise in</p>
        </div>
        <div className="w-full h-full  bg-slate-300 flex justify-center items-start flex-wrap  ">

          <div className="  w-[300px]  h-[300px]">
            Frontend
          </div>


          <div className=" w-[300px]  bg-lime-300 h-[300px]">
            Backend
          </div>


          <div className="w-[300px]  bg-amber-400 h-[300px]">
            DevOps
          </div>
        </div>
      </div>
=======
   <>
    <AuroraBackground >
     <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full flex flex-1 gap-3 items-center justify-center px-9"
      >
        <div className="relative flex flex-col sm:w-3/6   gap-4 items-center justify-center px-4" >
          <div className="text-3xl md:text-5xl  w-full bg-clip-text    bg-gradient-to-b from-neutral-200 to-neutral-500 font-bold text-left dark:text-white ">
         <p className="text-transparent  text-center sm:text-left flex-nowrap antialiased"> Hi, I'm Nitesh Saini</p> 
          </div>
          <div className="text-base text-center sm:text-left  font-semibold antialiased text-neutral-300 sm:text-xl md:text-2xl  py-4">
          A MERN Stack Developer Exploring the Next Level with Next.js
          
          </div> <div>
          <Modal  >
            <ModalTrigger className=" outline outline-neutral-400  antialiased flex justify-center group/modal-btn">
              <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Explore  My 
              </span>
              <div className="-translate-x-40  group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500  antialiased z-20">
            Jourey
              </div>
            </ModalTrigger>
          </Modal>
          </div>
        </div>
        <div className="relative hidden max-h-[500px] bg-clip-content sm:h-[500px] min-h-[300px]    sm:flex flex-col  sm:w-3/6 gap-4 items-center justify-center px-4">
        <Image src={`/download.svg`} alt="Developer" fill priority quality={100} className=" mt-9 bg-blend-screen"/>
        </div>

      </motion.div>
    </AuroraBackground >
    <div className="h-screen max-h-screen bg-neutral-900 relative"> this is about section</div>
>>>>>>> 54c65fdca368016924c25be95c2c0b76d553ca1e
    </>
  );
}
