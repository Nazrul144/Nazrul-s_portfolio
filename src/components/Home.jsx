import React, { useState } from 'react';
import coverImage from '../../public/cover1.png'
import { FiDownload } from "react-icons/fi";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    const [showFullText, setShowFullText] = useState(false)

    const textToggle = ()=>{
        setShowFullText(!showFullText)
    }
    return (
        <div className='lg:px-20 px-2'>
            <div className=' flex flex-col-reverse lg:flex-row gap-12 mt-12 lg:mt-24'>
                <div className=' lg:w-3/6 font-Open'>
                    <h1 className='text-3xl font-bold text-white'>Hi, I am Nazrul Islam.</h1>
                    <p className='font-bold text-green-400 text-xl mt-2'>Junior Web Developer</p>
                    <p className='text-justify text-white'>
                    "Hi, I’m Nazrul Islam, a passionate junior web developer from Bangladesh. Crafting websites isn't just a job for me—it's my passion. I specialize in building seamless, user-friendly web applications using cutting-edge technologies such as HTML, CSS, Tailwind CSS, JavaScript, React, Firebase, Express, and MongoDB.
                   {
                    showFullText && (
                        <>
                         My love for coding stems from its ability to tackle complex problems and continuously expand my skills. I focus on creating visually appealing and functional web experiences that enhance user satisfaction and engagement.
                        In collaborative environments, I excel at aligning team efforts with project goals, delivering effective and innovative solutions. My contributions have consistently boosted website performance and user interaction.
                        I’m eager to explore new opportunities in web development and open to collaborations. Feel free to reach out to me at nazrulislam.cse28@gmail.com to discuss potential projects or opportunities."
                        </>
                    )
                   }
                    </p>
                    <button onClick={textToggle} className="px-4 text-white py-2 text-lg font-semibold dark:border-gray-800 hover:bg-[orange] duration-1000 ease-in-out hover:text-black border-[1px] rounded-lg border-green-400 p-2 mt-4">
                        {showFullText ? "See less" : "Read More"}
                    </button>
                </div>
                <div className=' lg:w-2/6'>
                    <img className='w-300 h-300' src={coverImage} alt="" />
                </div>
            </div>

            {/*CV Download button with social links*/}  
            <div className='flex items-center gap-8 lg:gap-16'>
                <div>
                   <button className='border-[1px] text-white rounded-lg border-green-400 p-2 bg-transparent font-bold mt-2 flex gap-2 items-center'>Download CV <FiDownload className='font-extrabold' /></button>
                </div>
                <div className='flex gap-4 text-xl text-white'>
                    <Link to='https://github.com/Nazrul144' target='_blank'><FaGithub /></Link>
                    <Link to='https://www.linkedin.com/in/nazrul-islam-a6080730b' target='_blank'><FaLinkedinIn /></Link>
                    <Link to='https://www.youtube.com/channel/UC2PSgQ5bDN65BFqpJ2VgUSA' target='_blank'><FaYoutube /></Link>
                    <Link to='https://www.facebook.com/profile.php?id=100007196595674' target='_blank'><FaFacebook /></Link>
                    <Link to='https://x.com/Nazrul211002144' target='_blank'><FaTwitter /></Link>
                </div>
            </div>  

            {/*Showing Stat*/}
            <div className="stats shadow flex flex-col md:flex-row justify-center gap-4 mt-8 bg-gray-800">
              
                <div className="stat place-items-center">
                    <div className="stat-value text-secondary">Junior</div>
                    <div className="stat-desc text-secondary text-xl">Web Developer</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-value text-secondary">18</div>
                    <div className="stat-desc text-secondary text-xl">Projects Completed</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-value text-secondary">6</div>
                    <div className="stat-desc text-secondary text-xl">Technologies Mastered</div>
                </div>
              
                <div className="stat place-items-center pb-2">
                    <div className="stat-value text-secondary">285</div>
                    <div className="stat-desc text-secondary text-xl">Total Commits</div>
                </div>

               
                </div>   
                  
        </div>
    );
};

export default Home;