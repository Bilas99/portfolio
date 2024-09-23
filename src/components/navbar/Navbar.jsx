import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiInfo, FiFolder, FiMail } from 'react-icons/fi';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import MobileNav from "./MobileNav.jsx";
import useTheme from "../../contexts/ThemeContext.js";

const Navbar = () => {
   
   const [menuToggle, setMenuToggle] = useState(false)
   const { themeMode, toggleTheme } = useTheme()
   
   const toggleMenu = () => {
      setMenuToggle(prev => !prev)
   }
   
   const navigations = [
   	{ name: 'Home', to: '/', icon: <FiHome/> },
   	{ name: 'About Me', to: '/about', icon: <FiInfo/> },
   	{ name: 'Projects', to: '/projects', icon: <FiFolder/> },
   	{ name: 'Contact', to: '/contact', icon: <FiMail/> },
   ]
   
   useEffect(() => {
      const body = document.body
      body.className = ''
      if(menuToggle) {
         body.classList.add('overflow-hidden')
      }
   }, [menuToggle])
   
   return (
   <>
      <div className="w-full h-14 px-4 md:px-10 flex justify-between items-center backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 fixed top-0 select-none z-50">
         <div className="w-auto h-auto">
            <NavLink 
               to='/'
               className="text-2xl font-montserrat text-purple-500 md:text-3xl font-bold select-none"
               onClick={() => setMenuToggle(false) }
            >
               Developer
            </NavLink>
         </div>
         
         <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <ul className="w-max hidden md:flex justify-between items-center gap-3">
               { navigations.map((nav, index) => (
                  <li key={nav.name}
                     className="w-auto h-auto"
                  >
                     <NavLink 
                        to={nav.to}
                        className={({ isActive }) => `w-auto flex items-center gap-2 py-0.5 px-2 rounded-md hover:text-purple-500
                        dark:hover:text-purple-500 cursor-pointer ${isActive ? 'font-medium text-purple-500' : 'font-normal text-slate-800 dark:text-gray-200'}`}
                     >
                        {nav.icon} {nav.name}
                     </NavLink>
                  </li>
               ))}
            </ul>
            
            {/* Theme Toggle Buttons */}
            { themeMode !== 'dark' && 
               <div className="w-8 h-8 text-xl text-[#e3ba31] flex justify-center items-center rounded-full hover:bg-gray-200 select-none"
                  onClick={ toggleTheme }
               >
                  <MdLightMode/>
               </div>
            }
            { themeMode === 'dark' && 
               <div className="w-8 h-8 text-xl text-gray-500 flex justify-center items-center rounded-full hover:bg-slate-900 select-none"
                  onClick={ toggleTheme }
               >
                  <MdDarkMode/>
               </div>
            }
            
            {/* Mobile Menu Toggle Buttons */}
            { !menuToggle && 
               <div className="w-8 h-8 text-2xl text-gray-500 flex justify-center items-center select-none md:hidden"
                  onClick={ toggleMenu }
               >
                  <FiMenu/>
               </div>
            }
            { menuToggle && 
               <div className="w-8 h-8 text-2xl text-gray-500 flex justify-center items-center select-none md:hidden"
                  onClick={ toggleMenu }
               >
                  <FiX/>
               </div>
            }
         </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileNav
         navigations= { navigations }
         menuToggle= { menuToggle }
         toggleMenu= { toggleMenu }
      />
      
      {/* Mobile Menu Toggle Screen */}
      <div className={`w-screen h-screen fixed top-14 z-30
         bg-white/30 dark:bg-slate-900/30 md:hidden
         ${menuToggle ? 'right-0' : '-right-full'}`}   
         onClick={toggleMenu}
      ></div>
   </>
   )
}

export default Navbar;