import { NavLink } from "react-router-dom";

const MobileNav = ({ 
   navigations, 
   menuToggle,
   toggleMenu }) => {
   
   return (
      <div className={`w-48 h-max p-4 fixed top-16 back-blur bg-slate-900 select-none z-40
         rounded-lg duration-75 ${menuToggle ? 'right-4' : '-right-full'} md:hidden
      `}>
         <ul className="w-full flex flex-col justify-between items-center gap-2 ">
            { navigations.map((nav) => (
               <li key={nav.name}
                  className="w-full text-center"
                  onClick={ toggleMenu }
               >
                  <NavLink 
                     to={nav.to}
                     preventScrollReset={true}
                     className={({ isActive }) => `w-full flex items-center gap-5 py-2 px-5 text-md rounded-md hover:text-purple-400 
                     hover:bg-slate-800 cursor-pointer ${isActive ? 'font-medium text-purple-500 bg-slate-800' : 'font-normal text-gray-100'}`}
                  >
                     {nav.icon} {nav.name}
                  </NavLink>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default MobileNav;