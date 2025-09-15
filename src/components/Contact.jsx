import { CONTACT } from "../constants";
import * as motion from "motion/react-client"
const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: -100}}
            transition= {{duration: 0.5 }}
            className="my-20 text-center text-4xl">Get in Touch</motion.h1>
             
            <div className="text-center tracking-tighter">
                <div>{CONTACT.address}</div>
                <a href="mailto:harish.n@northeastern.edu" className="border-b"> {CONTACT.email}</a>
                <div><a href={CONTACT.linkedin} className="border-b"> LinkedIn</a>  |   <a href={CONTACT.github} className="border-b"> Github</a></div>
            </div>
        </div>
        

    );
};

export default Contact;