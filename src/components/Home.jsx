import React, { useState } from 'react';
import coverImage from '../../public/cover1.png'
import image1 from '../../public/logo/skills/cover11.png'
import { FiDownload } from "react-icons/fi";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf'
import { MotionAnimate } from 'react-motion-animate'
import { Fade, Slide } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';



//Particle:
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";



const Home = () => {
    const [showFullText, setShowFullText] = useState(false)

    const textToggle = () => {
        setShowFullText(!showFullText)
    }

    //Particle:
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    //Particle End


    return (
        <div className='lg:px-20 px-2'>
            <Helmet>
                <title>
                    Portfolio | Home
                </title>
            </Helmet>

            {/*Particle Start*/}
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "gray",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {/*Particle End*/}

            <div className=' flex flex-col-reverse lg:flex-row gap-12 mt-12 lg:mt-24'>
                <div className=' lg:w-3/6 font-Open'>
                    <Slide delay>
                        <h1 className='text-3xl font-bold text-white '>Hi, I am Nazrul Islam.</h1>
                    </Slide>

                    <p className='font-bold text-green-400 text-xl mt-2 animate__animated animate__fadeInRight'>Junior Web Developer</p>


                    <Fade cascade damping={0.5}>
                        <p className='text-justify text-white animate__animated animate__fadeInDown'>

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
                    </Fade>

                    <button onClick={textToggle} className="px-4 animate__animated animate__zoomIn text-white py-2 text-lg font-semibold dark:border-gray-800 hover:bg-[orange] duration-1000 ease-in-out hover:text-black border-[1px] rounded-lg border-green-400 p-2 mt-4">
                        {showFullText ? "See less" : "Read More"}
                    </button>
                </div>

                <div className='lg:w-2/6 relative'>
                    <img className=' w-150 h-150 lg:w-300 lg:h-300 opacity-80 rounded-full' src={coverImage} alt="image" />
                    <div className='absolute inset-0 border-4 border-dashed border-gray-800 rounded-full animate-spin'></div>
                </div>


            </div>

            {/*CV Download button with social links*/}
            <div className='flex items-center gap-8 lg:gap-16'>
                <div>
                    <button className='border-[1px] text-white rounded-lg border-green-400 p-2 bg-transparent font-bold mt-2 flex gap-2 items-center animate__animated animate__lightSpeedInLeft'>
                        <a className='flex items-center gap-2' href={resume} download='resume'>Download CV <FiDownload className='font-extrabold' /></a>
                    </button>
                </div>
                <div className='flex gap-4 text-xl text-white animate__animated animate__lightSpeedInRight'>
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
                    <div className="stat-value text-secondary">8</div>
                    <div className="stat-desc text-secondary text-xl">Technologies Mastered</div>
                </div>

                <div className="stat place-items-center pb-2">
                    <div className="stat-value text-secondary">345</div>
                    <div className="stat-desc text-secondary text-xl">Total Commits</div>
                </div>

            </div>

        </div>
    );
};

export default Home;