import logo from "../assets/image2.png";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaGoogleScholar } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-14" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-between gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/nikhil-k-harish/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/NikhilKH1" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://scholar.google.com/citations?user=6TB8FIcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <FaGoogleScholar />
                </a>
                <a href="mailto:harish.n@northeastern.edu" target="_blank" rel="noopener noreferrer">
                    <MdEmail />
                </a>

            </div>
        </nav>
    );
};
export default Navbar;