
"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
import Card from "@/components/Card";
import Link from "next/link";
export default function Home() {

  // You can customize the email address, subject, and body here
  const email = "saininitesh582@gmail.com"; // Your email address
  const subject = "Inquiry from Portfolio"; // Default subject line
  const body = "Hello, I have a question about..."; // Default email body
  const cards = [
    {
      title: "CodeRun",
      repoName: "remotecode",
      extratext: "Cloud IDE for Python, and JavaScript programming languages for remote development. ",
      live: "https://coderun.vercel.app/",
      image: "/coderun.png"
    },

    {
      title: "Ai Response Extension",
      repoName: "Chrome-Extension",
      extratext: "A ai response extension for chrome which help to write response to user quickly." ,
      live: "/",
      image: "/airesponse.png"
    },

    {
      title: "Food-Explorer",
      repoName: "food-explorer",
      extratext: "food explorer where you can search any product to know there ingredients and nutrients."
      , live: "/"
    }
  ]

  return (
    <>

      <motion.div id="Home"
        initial={{ opacity: 0.0, y: 40 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full bg-gradient-to-b from-zinc-800 to-zinc-900  h-screen flex flex-1 gap-3 items-center justify-center px-9"
      >
        <div className="relative flex flex-col sm:w-3/6   gap-4 items-center justify-center px-4" >
          <div className="text-3xl md:text-5xl  w-full bg-clip-text    bg-gradient-to-b from-neutral-200 to-neutral-500 font-bold text-left  ">
            <p className=" text-white md:text-transparent text-center sm:text-left flex-nowrap antialiased"> Hi, I&#39;m Nitesh Saini</p>
          </div>
          <div className="text-base text-center w-full sm:text-left font-semibold antialiased text-neutral-300 sm:text-xl  py-4">
            A Passionate Web Developer Crafting Solutions for the Future.
          </div> <div className="absolute -bottom-40 sm:mt-8 sm:static">
            <Modal  >
              <ModalTrigger className=" outline outline-neutral-400  antialiased flex justify-center group/modal-btn">
                <span onClick={() => {
                  const element = document.getElementById("About");
                  if (element) {
                    // Calculate the offset to scroll the section into the center of the viewport
                    const offset = element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2);
                    window.scrollTo({
                      top: offset,
                      behavior: "smooth",
                    });
                  }
                }} className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                  Explore  My
                </span>
                <div onClick={() => {
                  const element = document.getElementById("About");
                  if (element) {
                    // Calculate the offset to scroll the section into the center of the viewport
                    const offset = element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2);
                    window.scrollTo({
                      top: offset,
                      behavior: "smooth",
                    });
                  }
                }}
                  className="-translate-x-40  group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500  antialiased z-20">
                  Journey
                </div>
              </ModalTrigger>
            </Modal>
          </div>
        </div>
        <div className="relative hidden max-h-[500px] bg-clip-content sm:h-[500px] min-h-[300px]    sm:flex flex-col  sm:w-3/6 gap-4 items-center justify-center px-4">
          <Image src={`/download.svg`} alt="Developer" fill priority quality={10} className=" mt-9 bg-blend-screen pointer-events-none" />
        </div>

      </motion.div>

      <div id="About" className="h-fit w-full  bg-gradient-to-b from-zinc-800 to-zinc-900    max-h-fit fex flex-col justify-center border-t-2 border-neutral-600 rounded-tl-3xl rounded-tr-3xl items-center">
        <p className="text-center text-5xl font-bold mt-14 text-neutral-300 antialiased " >About Me</p>
        <div className="p-11 text-wrap flex flex-col text-center gap-4 text-base">
          <p> I&#39;m a passionate programmer with a solid foundation in <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-b from-green-300 to-lime-800 antialiased"> web development </span>.
          </p>
          <p> I recently completed my BCA and specialized in core web technologies  .
          </p>
          <p>And now!, I&#39;m self-learned the MERN stack and Python, I&#39;m always eager to learn new technologies. .
          </p>
          <p className="text-2xl font-medium">   What sets me apart ?
          </p>
          <p className="  sm:mx-24">I quickly learn new skills and apply them to solve real-world problems. I&#39;m curious about the latest tech trends and excited to keep growing as a developer.
          </p></div>
      </div >
      <div id="Education" className="h-fit min-h-[500px]  max-h-full bg-gradient-to-b from-zinc-800 to-zinc-900 border-t-2 border-neutral-600 flex flex-col items-center rounded-tl-3xl rounded-tr-3xl relative">
        <p className=" text-5xl font-bold mt-14 text-neutral-300 antialiased"> Education </p>
        <div className="w-full flex flex-col p-7 sm:flex-row gap-9 justify-evenly items-center">
          <div className="w-full sm:w-1/2 border-2 hover:shadow-2xl hover:shadow-neutral-600 transition-shadow duration-300  hover:border-neutral-500 h-[200px] sm:h-[250px] max-w-[500px] p-4  rounded-xl border-neutral-600 flex flex-col justify-center  items-center "  >
            <p className="text-xl sm:text-2xl text-center text-yellow-600 font-semibold antialiased">Higher Secondary School</p>
            <p className=" font-normal"> in 2021</p>
            <p >Grade: 95% (RBSE)</p>
          </div>
          <div className="w-full sm:w-1/2 border-2 hover:shadow-2xl hover:shadow-neutral-600 transition-shadow duration-300 h-[200px] hover:border-neutral-500 sm:h-[250px] max-w-[500px] p-4  rounded-xl border-neutral-600 flex flex-col justify-center  items-center "  >
            <p className="text-xl text-center text-yellow-600  font-semibold antialiased">Bachelor of Computer Application</p>
            <p className=" font-normal"> in 2021-2024</p>
            <p >Grade: 8.9 cgpa</p>
          </div>
        </div>
      </div>
      <div id="Project" className="h-fit min-h-[500px]  max-h-fit bg-gradient-to-b from-zinc-800 to-zinc-900 border-t-2 border-neutral-600 rounded-tl-3xl rounded-tr-3xl relative">
        <div className="w-full   flex justify-center   ">
          <h1 className=" text-5xl font-bold mt-14 text-neutral-300 antialiased">Project</h1>
        </div>
        <div className="w-full h-full gap-5 py-7  flex justify-evenly  flex-wrap  ">

          {cards.map((val, index) => (<Card title={val.title} repoName={val.repoName} image={val.image!} live={`${val.live}`} extratext={val.extratext} key={index} />))}

        </div>
      </div>
      <div id="Contact" className="h-fit  min-h-[500px]   max-h-fit bg-gradient-to-b from-zinc-800 to-zinc-900 border-t-2 border-neutral-600 flex flex-col gap-8 items-center rounded-tl-3xl rounded-tr-3xl relative">
        <p className=" text-5xl font-bold mt-14 text-neutral-300 antialiased"> Contact Me </p>
        <p className="text-base font-semibold text-wrap px-4 text-center text-neutral-300 antialiased" >Below are the details to reach out to me!</p>
        <div className="w-full h-fit  max-h-fit py-9  gap-5 flex  flex-col sm:flex-row flex-wrap justify-evenly px-4 items-center">
          <div className="w-full h-fit py-4 max-w-[400px] min-w-[250px] sm:w-[300px] sm:h-[200px] flex justify-center flex-col  ">
            <h1 className="text-center text-yellow-600 font-semibold text-xl">Contact No.</h1>
            <p onClick={
              () => { navigator.clipboard.writeText('9461705384').then(() => { alert('Copied!'); }) }} className="text-xl text-center cursor-pointer "> +91 9461705384 </p>
          </div>
          <div className="w-full h-fit py-4 max-w-[400px] min-w-[250px] sm:w-[300px] sm:h-[200px]  flex flex-col justify-center items-center ">
            <p className="text-center text-yellow-600 font-semibold text-xl">Send Me Email</p>
            <p
              onClick={
                () => { navigator.clipboard.writeText('saininitesh582@gmail.com').then(() => { alert('Copied!'); }) }} className="text-xl text-center cursor-pointer">saininitesh582@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="h-fit  min-h-[200px]    max-h-fit bg-gradient-to-b from-zinc-800 to-zinc-900 border-t-2 border-neutral-600 flex flex-col justify-center gap-8 items-center rounded-tl-3xl rounded-tr-3xl relative">
        <p className="absolute -top-11 left-5 text-5xl sm:text-7xl sm:-top-16  md:text-9xl md:-top-28  text-neutral-600 font-bold">Nitesh Saini</p>
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full    justify-center">
          <p className="text-2xl  w-fit font-bold antialiased text-wrap "> Have a Question ?
          </p>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="w-fit rounded-3xl font-bold bg-neutral-600 px-4 py-2 hover:bg-yellow-600 transition duration-200 hover:text-black"
          >
            Click here
          </a>

        </div>

        <div className="flex justify-center items-center gap-1">
          <p className="pr-5">Find me on</p>
          <div className="bg-yellow-400 w-fit rounded-2xl hover:scale-105">
            <Link href={"https://www.instagram.com/nitesh_s.a.i.n.i/"} >
              <Image src={'/instlogo.png'} width={50} height={50} priority quality={100} alt="sorry" />
            </Link>
          </div>
          <div className="bg-yellow-400 w-fit rounded-2xl hover:scale-105">
            <Link href={"https://www.linkedin.com/in/nitesh-saini-dev"} >
              <Image src={'/linklogo.svg'} width={45} height={45} priority quality={100} alt="sorry" />
            </Link>
          </div>
          <div className="bg-yellow-400 w-fit rounded-2xl hover:scale-105">
            <Link href={"https://www.twitter.com"} >
              <Image src={'/twitterlogo.svg'} width={45} height={45} priority quality={100} alt="sorry" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
