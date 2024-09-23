import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profile from "../../assets/profile.png";
import { CiLocationArrow1 } from "react-icons/ci";

const About = () => {
   
   const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { type: "spring" } },
   };
   
return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900">
      <div className="my-32 md:my-0 w-full md:w-11/12 lg:w-5/6 mx-auto px-4 flex flex-col md:flex-row items-center">
        
         {/* My Profile */}
         <motion.div 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible"
            className=" md:w-1/2 mb-8 md:mb-0"
         >
            <img 
               src={profile} 
               alt="my profile"
               className="w-72 h-72 rounded-3xl"
            />
         </motion.div>
        
        {/* About Me */}
         <div className="md:w-1/2 md:pl-10">
            <motion.h1 
               variants={fadeInUp} 
               initial="hidden" 
               whileInView="visible" 
               className="text-2xl font-montserrat font-bold text-[#e3ba31] underline"
            >
               About Me
            </motion.h1>
            
            <motion.p 
               variants={fadeInUp} 
               initial="hidden" 
               whileInView="visible" 
               className="my-10 text-md font-medium text-justify text-slate-800 dark:text-gray-300"
            >
               I'm <span className="font-bold">Bilas Singha</span>, a <span className="font-bold text-purple-500">Frontend Developer </span> 
               with a passion for building interactive, responsive websites. 
               I specialize in writing clean, efficient code that enhances both design and functionality. 
               Driven by my love for coding and problem-solving, I thrive on delivering user-friendly 
               solutions and enjoy collaborating on projects that challenge creative boundaries.
            </motion.p>
            
            <motion.button 
               variants={ fadeInUp } 
               initial="hidden" 
               whileInView="visible"
               whileHover={{scale: 0.9}}
               className="py-1 px-2 bg-gray-200 dark:bg-slate-800 text-[#1ac7ed] font-medium rounded shadow hover:outline"
            >
               <Link to='/contact' className="flex items-center gap-2">
                  Contact Me <CiLocationArrow1/>
               </Link>
            </motion.button>
        </div>
      </div>
   </div>
  );
};

export default About;
