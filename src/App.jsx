import { useState } from "react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "sr" ? "en" : "sr"));
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Styling */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      {/* Language Toggle Button */}
      <div className="absolute right-7 top-15 sm:fixed sm:top-4 sm:right-4">
        <motion.button
          onClick={toggleLanguage}
          className="relative flex items-center w-20 h-10 m-8 pl-1.5 bg-gray-800 rounded-full shadow-lg"
          whileTap={{ scale: 0.9 }}
        >
          {/* Sliding Circle */}
          <motion.div
            className="w-8 h-8 bg-cyan-500 rounded-full shadow-md"
            initial={{ x: language === "sr" ? 0 : 40 }}
            animate={{ x: language === "sr" ? -6 : 42 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          />
          
          {/* Language Text */}
          <span className="absolute left-2 text-sm font-semibold text-white">
            Sr
          </span>
          <span className="absolute right-2 text-sm font-semibold text-white">
            En
          </span>
        </motion.button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar language={language} />
        <Hero language={language} />
        <About language={language} />
        <Technologies language={language} />
        <Experience language={language} />
        <Projects language={language} />
        <Contact language={language} />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
