import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

//Particle:
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 


const About = () => {
        //Particle:
        const [ init, setInit ] = useState(false);

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
        <div className='lg:px-20 '>
              <Helmet>
                <title>
                    Portfolio | About
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


            <div className='w-full mx-auto'>       
            <div className='ml-8'>
           <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal', fontSize:'2rem' }}>
      
        <span style={{ color: 'gold', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['About me']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
            </h1>
                            </div>
                            <p className='font-Open text-white text-justify lg:ml-8 ml-2 mr-2 mt-4 lg:w-3/6 animate__animated animate__zoomIn'>Hi, I am Nazrul Islam, a passionate junior web developer with a keen interest in creating dynamic and user-friendly web applications. I have a solid foundation in HTML, CSS, Tailwind CSS, JavaScript, React, Firebase, Node.js, and MongoDB. I enjoy turning ideas into functional and visually appealing digital experiences. I'm always eager to learn new technologies and improve my skills. Feel free to check out my repositories and connect with me for collaboration opportunities!</p>
                            <div className='lg:flex gap-4 text-white font-Open ml-2 lg:ml-4 mt-4'>
    <div className="bg-gray-800 p-4 rounded-lg shadow-md animate__animated animate__lightSpeedInLeft">
        <h1 className="text-xl font-bold mb-2 text-green-400">Personal Information</h1>
        <table className="table-auto w-full text-left">
            <tbody>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Name:</td>
                    <td className="py-2">Nazrul Islam</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Date of Birth:</td>
                    <td className="py-2">01/05/1997</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Nationality:</td>
                    <td className="py-2">Bangladeshi</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Religion:</td>
                    <td className="py-2">Islam</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Marital Status:</td>
                    <td className="py-2">Unmarried</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                <td className="font-bold pr-4 py-2">Language:</td>
                    <td className="py-2">English, Hindi, Bangla</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="bg-gray-800 p-2 rounded-lg shadow-md animate__animated animate__lightSpeedInRight">
        <h1 className="text-xl font-bold mb-2 text-sky-400">Contact Information</h1>
        <table className="table-auto w-full text-left">
            <tbody>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2"> Permanent Address:</td>
                    <td className="py-2"> Mehendiganj, Barisal</td>
                  
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Present Address:</td>
                    <td className="py-2">Sutrapur, Dhaka</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Email:</td>
                    <td className="py-2">nazrulislam.cse28@gmail.com</td>
                </tr>
                <tr className="border-b-2 border-gray-600">
                    <td className="font-bold pr-4 py-2">Phone:</td>
                    <td className="py-2">+8801758752528</td>
                </tr>
                <tr>
                    <td className="font-bold pr-4 py-2">Facebook:</td>
                    <td className="py-2"><a href="https://www.facebook.com/profile.php?id=100007196595674" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><FaFacebook className='text-xl lg:ml-16' /></a></td>
                </tr>
                <tr>
                    <td className="font-bold pr-4 py-2">LinkedIn:</td>
                    <td className="py-2"><a href="https://www.linkedin.com/in/nazrul-islam-a6080730b" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><FaLinkedinIn className='text-xl lg:ml-16' /></a></td>
                </tr>
            </tbody>
        </table>
    </div>
                            </div>

            </div>
        </div>
    );
};

export default About;