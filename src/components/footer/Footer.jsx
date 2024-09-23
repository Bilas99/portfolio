import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
   const socialMedia = [
      {icon: <FaFacebook />, url: "https://www.facebook.com/bilas.singha.754"},
      {icon: <FaInstagram />, url: "https://www.instagram.com/bilas_143/"},
      {icon: <FaGithub />, url: "https://github.com/Bilas99/"},
      {icon: <FaLinkedin />, url: "https://www.linkedin.com/in/bilas-singha-18967b2a8"},
   ]
   
   const navigations = [
   	{ name: 'Home', to: '/' },
   	{ name: 'About Me', to: '/about' },
   	{ name: 'Projects', to: '/projects' },
   	{ name: 'Contact', to: '/contact' },
   ]
   
   const date = new Date();
   
return (
   <div className="w-full h-auto px-4 py-5 bg-[#224146]">
      <div className="md:w-11/12 lg:w-5/6 mx-auto flex flex-wrap justify-between">
         
         {/* Social Media */}
         <div className="w-full md:w-1/2 my-4">
            <h1 className="text-xl font-montserrat font-extrabold text-white">
               Connect with me
            </h1>
            <div className="w-56 h-max py-2 flex items-center gap-4">
               {
                  socialMedia.map((social) => 
                     <div key={social.icon} 
                        className="w-8 h-8 flex justify-center items-center bg-[#9d8622] hover:scale-95 shadow-md rounded-full"
                     >
                        <Link to={social.url} 
                           target="_blank"
                           className="text-lg text-gray-100"
                        >
                           {social.icon} 
                        </Link>
                     </div>
                  )
               }
            </div>
         </div>
         
         {/* Quick Links */}
         <div className="w-full md:w-1/2 my-4">
            <h1 className="text-xl font-montserrat font-extrabold text-white">
               Quick Links
            </h1>
            <div className="w-full h-max py-2 flex items-center gap-4">
               {
                  navigations.map((nav) => 
                     <div key={nav.name} 
                        className="w-max h-auto"
                     >
                        <NavLink 
                           to={nav.to}
                           className={({ isActive }) => `w-auto gap-2 hover:underline hover:text-[#9d8622]
                           dark:hover:text-[#9d8622] cursor-pointer ${isActive ? 'font-medium text-[#9d8622]' : 'font-normal text-white'}`}
                        >
                           {nav.name}
                        </NavLink>
                     </div>
                  )
               }
            </div>
         </div>
      </div>
      
      {/* Copyright section */}
      <div className="md:w-11/12 lg:w-5/6 mx-auto">
         <p className="text-center text-xs font-medium text-[#d1dee9]">
            Copyright &copy; {date.getFullYear()} FrontEnd Developer Ltd. All Rights Reserved.
         </p>
      </div>
      
   </div>
  );
};

export default Footer;
