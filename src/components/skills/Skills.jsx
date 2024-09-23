import HtmlLogo from '../../assets/html.svg';
import CssLogo from '../../assets/css.svg';
import JsLogo from '../../assets/js.svg';
import TailwindLogo from '../../assets/icons8-tailwind-css-240.png';
import BootstrapLogo from '../../assets/icons8-bootstrap-logo-240.png';
import SassLogo from '../../assets/sass.svg';
import NodejsLogo from '../../assets/nodejs.svg';
import ReactLogo from '../../assets/react.svg';
import ReduxLogo from '../../assets/redux.svg';
import ExpressLogo from '../../assets/express.svg';
import GitLogo from '../../assets/git.svg';
import PhpLogo from '../../assets/php.svg';
import PythonLogo from '../../assets/python.svg';
import DjangoLogo from '../../assets/django.svg';
import MySqlLogo from '../../assets/mysql.svg';
import MongoDBLogo from '../../assets/mongodb.svg';
import FirebaseLogo from '../../assets/firebase.svg';
import { HiBadgeCheck } from "react-icons/hi";
import { motion } from 'framer-motion';

function Skills() {

   const languages = [
      { name: "Html", icon: HtmlLogo },
      { name: "Css", icon: CssLogo },
      { name: "JavaScript", icon: JsLogo },
      { name: "Tailwind", icon: TailwindLogo },
      { name: "Bootstrap", icon: BootstrapLogo },
      { name: "Sass", icon: SassLogo },
      { name: "Nodejs", icon: NodejsLogo },
      { name: "React", icon: ReactLogo },
      { name: "Redux", icon: ReduxLogo },
      { name: "Express", icon: ExpressLogo },
      { name: "Git", icon: GitLogo },
      { name: "Php", icon: PhpLogo },
      { name: "Python", icon: PythonLogo },
      { name: "Django", icon: DjangoLogo },
      { name: "MySql", icon: MySqlLogo },
      { name: "MongoDB", icon: MongoDBLogo },
      { name: "Firebase", icon: FirebaseLogo },
      
   ]
   
return (
   <div className="w-auto h-auto my-10 rounded
      md:mx-auto md:w-11/12 lg:w-5/6"
   >
      <div className="text-2xl font-montserrat font-bold flex justify-center items-center text-[#e3ba31] underline">
         <HiBadgeCheck/>
         Skills
      </div>
      <div className="my-5 flex flex-wrap justify-center gap-3 items-center">
         {languages.map((lang) =>
            <motion.div
               key={lang.name}
               initial="hidden" 
               whileInView="visible"
               variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
               }}
               className="w-max h-max py-1.5 px-2 font-medium text-[#1ac7ed] rounded flex gap-2 justify-center items-center shadow bg-gray-200 dark:bg-slate-800"
            >
               <HiBadgeCheck/>
               <span className="text-slate-950 dark:text-gray-100">
                  {lang.name}
               </span>
               <img src={lang.icon} alt="" className="w-6 h-6"/>
            </motion.div>
         )}
      </div>
   </div>
   )
}
export default Skills;
