"use client"
import { useEffect, useState } from "react"
import NavItem from "./NavItem"

function NavBAR() {
  const [mobilemenu, setMobilemenu] = useState(false)
  const navitem = ["Home", "About", "Education", "Project", "Contact"]
  useEffect(() => {
    if (mobilemenu) {
      console.log(mobilemenu);
    }
  }, [mobilemenu])

  return (
    <div className="w-full relative h-20 z-10   flex border-b border-white   text-grey-100 ">
      <div className="w-6/12 sm:w-5/12 font-bold antialiased  text-2xl h-full  flex justify-center items-center">
        Nitesh Saini
      </div>
      <div className="w-6/12 sm:hidden  flex items-end justify-end">
        <div onClick={() => (mobilemenu ? setMobilemenu(false) : setMobilemenu(true))} className="  md:hidden  w-fit flex justify-center items-end flex-col p-4 cursor-pointer  h-full">
          <span className="w-6 mb-1 h-[2px] bg-black"></span>
          <span className="w-6  h-[2px] bg-black"></span>
          <span className="w-6 mt-1  h-[2px] bg-black"></span>
        </div>
        <div className={`w-full  transition-all ease-in-out    z-50   h-60 bg-neutral-600 rounded-lg  absolute -left-96  ${mobilemenu ? "  flex  flex-col justify-evenly items-center left-0 top-24" : " flex  flex-col justify-evenly items-center max-w-72  top-24"}`}>
          {navitem && navitem.map((val, index) => (<NavItem item={val} key={index} />))}
        </div>

      </div>
      <div className=" hidden  sm:w-7/12 sm:flex  justify-evenly   items-center h-full">
        {navitem && navitem.map((val, index) => (<NavItem item={val} key={index} />))}
      </div>



    </div >
  )
}

export default NavBAR
