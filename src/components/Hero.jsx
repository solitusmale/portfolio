import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero1-min.png";
import { delay, motion } from "framer-motion";

const container = (delay) => ( {
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
}
)

const Hero = ({ language }) => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-light lg:mt-16">
                    Aleksa Veljković
                    </motion.h1>

                    <motion.span
                     variants={container(0.4)}
                     initial="hidden"
                     animate="visible"
                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Frontend Developer
                    </motion.span>

                    <motion.p 
                    variants={container(0.8)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT[language]}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                initial={{x:100, opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{duration: 1, delay: 1.2}} 
                src={profilePic} alt="profilePicture" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero