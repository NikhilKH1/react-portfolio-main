import * as motion from "motion/react-client"
import { HERO_CONTENT } from "../constants"
import profilepic from "../assets/Nikhil2.jpeg"
import { FaDownload } from 'react-icons/fa';


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const DownloadButton = () => {
    return (
    <div style={styles.container}>
      <a href="/NikhilKHResume.pdf" download="Nikhil Kundalli Harish - Resume.pdf">
        <button style={styles.button}>
          <FaDownload style={styles.icon} />
          <span style={styles.text}>Download Resume</span>
        </button>
      </a>
    </div>
    );
};

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 24px',
      backgroundColor: 'linear-gradient(145deg,rgb(16, 246, 100),rgb(27, 199, 251))',
      border:'none',
      borderRadius: '15px',
      color: 'rgb(153, 128, 156)',
      fontSize: '16px',
      cursor: 'pointer',
      textDecoration: 'none',
      boxShadow: '0 4px 20px rgba(170, 100, 224, 0.32)', // Glowing effect
      transition: 'all 0.1s ease-in-out',
       outline: 'none',
    },
    icon: {
      marginRight: '10px',
      fontSize: '20px',     
    },
    text: {
      fontSize: '16px',
    },
  };

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl ">
                            Nikhil Kundalli Harish
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-400 via-slate-500 
                    to-purple-700 bg-clip-text text-4xl tracking-tight text-transparent">
                            Software Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}
                        </motion.p>

                            <DownloadButton />
                        

                    </div>
                </div>
                <div className="w-full ml-1c lg:w-1/2 lp:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="rounded-2xl" src={profilepic} alt="Rohith Danti" style={{
                                width: "500px",
                                height: "500px",
                                objectFit: "cover",
                                borderRadius: "20px"
                            }} />



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;