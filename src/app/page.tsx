
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Image from "next/image";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Card from "@/components/Card";
export default function Home() {

  const cards = [
    {
      title: "Frontend"
    },

    {
      title: "Backend"
    },

    {
      title: "DevOps"
    }
  ]

  return (
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
      <div className="h-fit w-full bg-zinc-900    max-h-fit fex flex-col justify-center border-t-2 border-neutral-600 rounded-tl-3xl rounded-tr-3xl items-center">
        <p className="text-center text-5xl font-bold mt-14 text-neutral-300 antialiased " >About Me</p>
        <div className="p-11 text-wrap flex flex-col text-center gap-4 text-base">
          <p> I'm a passionate programmer with a solid foundation in <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-green-300 to-lime-800 antialiased"> web development </span>.
          </p>
          <p> I recently completed my BCA and specialized in core web technologies  .
          </p>
          <p>And now!, I am self-learned the MERN stack and Python, I'm always eager to learn new technologies. .
          </p>
          <p className="text-2xl font-medium">   What sets me apart ?
          </p>
          <p className="  sm:mx-24">I quickly learn new skills and apply them to solve real-world problems. I'm curious about the latest tech trends and excited to keep growing as a developer.
          </p></div>
      </div >
      <div className="h-fit min-h-[500px]  max-h-fit bg-zinc-500 border-t-2 border-neutral-600 rounded-tl-3xl rounded-tr-3xl relative">
        <div className="w-full text-2xl sm:text-4xl  font-medium flex justify-center antialiased text-zinc-300 ">
          <p className=" mt-16">Expertise in</p>
        </div>
        <div className="w-full h-full gap-5 py-5  flex justify-evenly  flex-wrap  ">

          {cards.map((val, index) => (<Card title={val.title} key={index} />))}

        </div>
      </div>

    </>
  );
}
