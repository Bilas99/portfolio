import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.js";

function App() {
   const [ themeMode, setThemeMode ] = useState('light')
   const { pathname } = useLocation();
   
   const toggleTheme = () =>  {
      setThemeMode(`${themeMode === 'light' ? 'dark' : 'light'}`)
   }
   
   useEffect(() => {
      const theme = localStorage.getItem('theme');
      
      if(theme) {
         setThemeMode(theme);
      }
   }, []);

   
   useEffect(() => {
      console.log("Updated themeMode:", themeMode);
      localStorage.setItem('theme', themeMode);
      const html = document.querySelector('html');
      html.classList.remove('light', 'dark');
      html.classList.add(themeMode);
   }, [themeMode]);
   
   

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   
   return (
   <>
      <ThemeProvider value={{themeMode, toggleTheme}}>
         <Navbar/>
            <Outlet/>
         <Footer/>
      </ThemeProvider>
   </>
  )
}

export default App;