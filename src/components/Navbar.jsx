import { useState } from "react"
import {close,logo,menu} from "../assets"
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="navbar w-full flex justify-between py-6">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]"/>

      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`text-white font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">

        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={()=>setToggle((prev)=>!prev)}/>
          <div className={`${toggle ? "flex": "hidden"} absolute top-20 right-0 mx-4 my-2 p-3 min-w-[140px] bg-black-gradient rounded-xl sidebar`}>

            <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav,index)=>(
            <li key={nav.id} className={`text-white font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1 ? 'mb-0' : 'mb-4'}`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
            </ul>

          </div>
      </div>
    </nav>
  )
}
export default Navbar