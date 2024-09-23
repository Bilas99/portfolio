import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdEmail, MdDownload } from "react-icons/md";
import coding from '../../assets/coding.png';
import resume from '../../assets/Resume.pdf';
import Typed from '../typed/Typed.jsx'
import Skills from "../skills/Skills.jsx";

const Home = () => {
   // variants define
   const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { type: "spring" } },
   };
   
   const typedData = [
      "&lt;Web Developer /&gt;",
      "&lt;FrontEnd Developer /&gt;",
      "&lt;Web Designer /&gt;",
   ]
   
return (
   <div className="w-full h-auto p-4 bg-gray-100 dark:bg-slate-900 text-slate-800 dark:text-gray-300">
      {/* Hero Section */}
      <div className="w-full h-auto md:h-screen flex flex-wrap justify-between items-center md:mx-auto md:w-11/12 lg:w-5/6">
         <div className="w-full md:w-[49%] md:h-80 flex items-center mt-24 mb-12 md:my-auto p-5 md:px-3">
            <div>
               <motion.p 
                  variants={fadeInUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  className="text-xl font-medium"
               >
                  Hi, I'm
               </motion.p>
               <motion.h1 
                  variants={fadeInUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  className="text-4xl md:text-5xl mt-1 mb-1.5 font-montserrat font-extrabold text-[#e3ba31]"
               >
                  Bilas Singha.
               </motion.h1>
               
               {/* Typing */}
               <motion.p 
                  variants={fadeInUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  className="text-md font-bold text-[#1ac7ed]"
               >
                  <Typed data={typedData}/>
               </motion.p>
               
               {/* Objectives */}
               <motion.p 
                  variants={fadeInUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  className="mt-2 mb-10 text-md font-medium text-justify"
               >
                  Driven by a love for coding and design, 
                  I focus on creating beautiful, interactive and 
                  responsive websites that blend form and function.
               </motion.p>
               
               {/* Buttons */}
               <div className="flex items-center gap-10">
                  {/* Email Button */}
                  <motion.button 
                     variants={ fadeInUp } 
                     initial="hidden" 
                     whileInView="visible"
                     whileHover={{scale: 0.9}}
                     className="py-1 px-2 bg-gray-200 dark:bg-slate-800 text-[#1ac7ed] font-medium rounded shadow hover:outline"
                  >
                     <Link 
                        to="mailto:bilassingha97@gmail.com"
                        className="flex items-center gap-2"
                     >
                        Email Me <MdEmail />
                     </Link>
                  </motion.button>
                  
                  {/* Resume Download */}
                  <motion.button 
                     variants={ fadeInUp }
                     initial="hidden" 
                     whileInView="visible"
                     whileHover={{scale: 0.9}}
                     className="py-1 px-2 bg-gray-200 dark:bg-slate-800 text-[#1ac7ed] font-medium rounded shadow hover:outline"
                  >
                     <a 
                        href={resume}
                        className="flex items-center gap-2"
                     >
                        Resume <MdDownload />
                     </a>
                  </motion.button>
               </div>
            </div>
         </div>
         
         {/* Coding Image */}
         <motion.div 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible"
            className="w-full h-auto md:w-[49%]"
         >
            <img src={coding} alt="coding" />
         </motion.div>
      </div>
      
      {/* Skills Section */}
      <Skills/>
      
      {/* Extra's */}
      <motion.div 
         variants={fadeInUp} 
         initial="hidden" 
         whileInView="visible" 
         className="w-full md:w-11/12 lg:w-5/6 md:mx-auto h-auto my-10 py-14 text-center"
      >
         <h2 className="text-xl md:text-2xl font-montserrat font-bold">
            Have any Idea's
         </h2>
         <h1 className="text-4xl md:text-5xl font-montserrat font-extrabold text-[#e3ba31]">
            Let's talk with me
         </h1>
      </motion.div>
   </div>
	)
}
   
export default Home;