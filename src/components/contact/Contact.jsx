import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import { FiX } from 'react-icons/fi';
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase.jsx";

const ContactForm = () => {
   const [loading, setLoading] = useState(false)
   const alertRef = useRef()
   
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const submitMessage = async (data) => {
      setLoading(true)
      await addDoc(collection(db, "contacts"), {...data, createdAt: serverTimestamp()});
      setLoading(false)
      alertRef.current?.classList.remove("hidden")
      setInterval(() => {
         clearAlertMsg()
      }, 3000)
      reset()
   }
   
   const clearAlertMsg = () => {
      if (!alertRef.current?.classList.contains('hidden')) {
         alertRef.current?.classList.add("hidden")
      }
   }
   
   const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { type: "spring" } },
   };

return (
   <div className="px-4 flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900">
      <form
         onSubmit={handleSubmit(submitMessage)}
         className="w-full max-w-sm p-6 pt-4 rounded-lg shadow-md bg-white dark:bg-slate-800"
      >
         <h2 className="mb-8 text-2xl text-center font-montserrat font-bold text-[#e3ba31] underline">
            Contact Me
         </h2>

         <div className="mb-4">
            <label className="flex items-center gap-1 text-sm font-montserrat font-bold mb-2 text-slate-800 dark:text-gray-300">
               Name
               <span className="text-red-500"> * </span>
            </label>
            <input
               type="text"
               {...register("name", { required: "Name is required" })}
               className="w-full px-3 py-2 font-montserrat font-medium dark:text-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
         </div>

         <div className="mb-4">
            <label className="flex items-center gap-1 text-sm font-montserrat font-bold mb-2 text-slate-800 dark:text-gray-300">
               Email
               <span className="text-red-500"> * </span>
            </label>
            <input
               type="email"
               {...register("email", {
                  required: "Email is required",
                  pattern: {
                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                     message: "Invalid email address",
                  },
               })}
               className="w-full px-3 py-2 font-montserrat font-medium dark:text-gray-200 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
         </div>

         <div className="mb-4">
            <label className="flex items-center gap-1 text-sm font-montserrat font-bold mb-2 text-slate-800 dark:text-gray-300">
               Message
               <span className="text-red-500"> * </span>
            </label>
            <textarea
               {...register("message", {
                  required: "Message is required",
                  minLength: {
                     value: 10,
                     message: "Message should be at least 10 characters",
                  },
               })}
               className="w-full px-3 py-2 font-montserrat font-medium dark:text-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
         </div>
         
         <button
            type="submit"
            className="w-full bg-[#1ac7ed] text-white font-montserrat font-bold py-2 px-4 rounded-md hover:opacity-80 transition duration-75 flex justify-center items-center"
         >
            {!loading && (<span className=""> Submit </span>)}
            {loading && (
               <>
                  <span className="inline-block w-5 h-5 mr-3 rounded-full border-2 border-gray-300 border-t-white animate-spin"></span>
                  <span> Submitting... </span>
               </>
            )}
         </button>
      </form>
      
      <div 
         ref={alertRef}
         className="fixed top-20 py-2 hidden flex justify-between items-center gap-4 px-2 bg-gray-white dark:bg-slate-800 text-sm text-green-700 font-montserrat font-bold rounded-md shadow-md"
      >
         Message Submitted Successfully!
         <span 
            onClick={clearAlertMsg}
         >
            <FiX/>
         </span>
      </div>
    </div>
  );
};

export default ContactForm;