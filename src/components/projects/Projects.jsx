import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/Firebase.jsx';
import { motion } from 'framer-motion';
import gemini from "../../assets/IMG_20240920_203001.jpg";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch projects data from Firestore
   useEffect(() => {
      ( async () => {
         try {
            setLoading(true)
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsList = querySnapshot.docs.map((doc) => ({
               id: doc.id,
               ...doc.data(),
            }));
            if(projectsList.length < 1) setIsError(true)
            setProjects(projectsList);
         } catch (e) {
            setIsError(true)
         } finally {
         setLoading(false)
         }
      })();
  }, []);
  
   const handleReload = () => {
      window.navigation.reload()
   }
  
   const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { type: "spring" } },
   };

return (
   <div className="bg-gray-100 dark:bg-slate-900">
      <div className="w-full md:w-4/5 mx-auto py-20 px-4">
         <motion.h1  
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible" 
            className="text-2xl font-montserrat font-bold text-[#e3ba31] text-center underline"
         >
            My Projects
         </motion.h1>
         
         <div className="grid min-h-[500px] md:grid-cols-3 place-items-center gap-4 my-6">
            {/* Loop Projects */}
            { projects.map((project) => (
            <div key={project.id} className="w-full p-3 bg-gray-200 dark:bg-slate-800 shadow-md rounded-lg">
               <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 bg-cover rounded-lg"
               />
               <div className="mt-2 flex flex-col justify-between items-stretch">
                  <h2 className="text-xl font-montserrat font-extrabold text-[#1ac7ed]">
                     {project.title}
                  </h2>
                  <div className="mb-2 text-slate-800 dark:text-gray-300">
                     <h3 className="text-md text-[#9d8622] font-montserrat font-bold">
                        Tools:
                     </h3>
                     <p className="text-sm font-medium">
                        {project.tools}
                     </p>
                  </div>
                  <ul className="mb-0 flex items-center gap-4">
                     <li className="w-full font-medium text-center hover:scale-95 hover:opacity-90 duration-100">
                        <Link to={project.url}
                           target="_blank"
                           className="block py-1.5 bg-[#9d8622] text-slate-900 rounded-lg"
                        >
                           Preview
                        </Link>
                     </li>
                     <li className="hover:scale-95 duration-100">
                        <Link to={project.github}
                           target="_blank"
                           className="text-3xl dark:text-white"
                        >
                           <FaGithub />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>))}
            
            {/* when Loading */}
            { loading && (
               <div class="w-16 h-16 col-span-3 border-4 border-white border-t-black dark:border-black dark:border-t-white animate-spin rounded-full">
               </div> )
            }
            
            {/* when Error */}
            { isError && (
            <div>
               <div class="col-span-3 text-2xl text-center text-slate-700 dark:text-gray-400 font-extrabold">
                  Sorry! Error Fetching Projects.
               </div>
               <div 
                  onClick={handleReload} 
                  className="my-6 mx-auto w-max py-1 px-2 font-medium rounded shadow-md text-slate-700 bg-gray-200 dark:text-gray-400 dark:bg-slate-800"
               >
                  Relod
               </div>
            </div>
            )}
         </div>
      </div>
   </div>
  );
};

export default Projects;
