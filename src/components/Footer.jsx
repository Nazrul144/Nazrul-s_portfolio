import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade, Slide } from 'react-awesome-reveal';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    
                    
                <nav className="grid grid-flow-col gap-4 mt-8 text-xl">
                    <Link to='/about' className="link link-hover font-bold hover:text-red-400">About me</Link>
                    <Link to='/contact' className="link link-hover font-bold hover:text-red-400">Contact</Link>
                    <Link to='/' className="link link-hover font-bold hover:text-red-400 ">Home</Link>
                </nav>
                </nav>
                <div>
                    <h1 className="font-semibold animate__animated animate__fadeInRight">Crafting seamless digital experiences with expertise in responsive web design and intuitive UI/UX principles. <br /> Let's transform ideas into visually stunning and functional websites together. Thank you.</h1>
                </div>
              
                <nav>
                    <div className="grid grid-flow-col gap-6">
                        <a href="https://www.facebook.com/profile.php?id=100007196595674" target="_blank"><FaFacebook className="text-2xl" /></a>
                        <a href="https://x.com/Nazrul211002144" target="_blank"><FaTwitter  className="text-2xl"/></a>
                        <a href="https://www.linkedin.com/in/nazrul-islam-a6080730b" target="_blank"><FaLinkedinIn className="text-2xl" /></a>
                        <a href="https://github.com/Nazrul144" target="_blank"><FaGithub  className="text-2xl"/></a>
                        <a href="https://www.youtube.com/@GKWORLD-kw1zv" target="_blank"><FaYoutube className="text-2xl" /></a>
                    </div>
                </nav>
                
                <aside>
                    <p>Copyright © 2024 - All right reserved by me</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;