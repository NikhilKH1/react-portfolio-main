import * as motion from "motion/react-client"
import aboutImg from "../assets/imageabout.png"
import { ABOUT_TEXT } from "../constants";
const About = () => {
    return (
        
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-neutral-400 text-center text-4xl">
                About
                <span className="text-white"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{opacity: 1, x: 0.7}}
                initial={{opacity: 0, x: -100}}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                            <img className="rounded-2xl" src={aboutImg} alt="about"
                                style={{
                                    width: "500px",
                                    height: "500px",
                                    objectFit: "cover",
                                    borderRadius: "20px"
                                }} />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity: 1, x: 0.7}}
                initial={{opacity: 0, x: 100}}
                transition={{ duration: 0.5 }}
                className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {ABOUT_TEXT.map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;