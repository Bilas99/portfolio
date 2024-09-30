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
            setProjects(projectsList.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0)))
         } catch (e) {
            setIsError(true)
         } finally {
         setLoading(false)
         }
      })();
  }, []);
  
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
            <div 
               key={project.id} 
               className="w-full min-h-[420px] p-3 relative bg-gray-200 dark:bg-slate-800 shadow-md rounded-lg overflow-hidden"
            >
               <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 bg-cover rounded-lg"
               />
               <div className="mt-2 min-h-[136px] flex flex-col justify-between items-center">
                  {/* texts section */}
                  <div className="w-full h-auto">   
                     <h2 className="text-xl font-montserrat font-extrabold text-[#1ac7ed]">
                        {project.title}
                     </h2>
                     <div className="mb-2 text-slate-800 dark:text-gray-300">
                        <h3 className="text-md text-[#9d8622] font-montserrat font-bold">
                           Tools:
                        </h3>
                        <p className="text-sm line-clamp-2 font-medium">
                           {project.tools}
                        </p>
                     </div>
                  </div>
                  
                  {/* buttons section */}
                  <div className="w-full h-auto">
                     <ul className="mb-0 flex items-center gap-4">
                        <li className="w-full font-medium text-center hover:scale-95 hover:opacity-90 duration-100">
                           <Link to={project.url}
                              target={project.target || "_self"}
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
               </div>
               
               {/* new badge */}
               { project.new && (
                  <div className="w-20 py-1 text-sm font-bold text-center bg-[#e3ba31] absolute top-2 -left-6 -rotate-45 -skew-y-6">
                     New
                  </div> )
               }
            </div>))}
            
            {/* when Loading */}
            { loading && (
               <div class="w-16 h-16 col-span-3 border-4 border-gray-300 border-t-black dark:border-slate-800 dark:border-t-white animate-spin rounded-full">
               </div> )
            }
            
            {/* when Error */}
            { isError && (
            <div className="col-span-3 bg-amber-100 text-center">
               <div className="text-slate-700 dark:text-gray-400">
                  <h1 className="text-2xl font-extrabold">
                     Sorry! Error Fetching Projects.
                  </h1>
                  <h2 className="text-lg font-medium">
                     Please try again!
                  </h2>
               </div>
               <div 
                  onClick={() => window.location.reload()} 
                  className="my-6 mx-auto w-max py-1 px-2 font-medium rounded shadow-md text-[#1ac7ed] bg-gray-200 dark:bg-slate-800"
               >
                  Reload
               </div>
            </div>
            )}
         </div>
      </div>
   </div>
  );
};

export default Projects;