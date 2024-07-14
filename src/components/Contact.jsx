import React, {  useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { IoCallOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

//Particle:
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_a5654uh', 'template_je41myo', form.current, {
            publicKey: 'EyGO7y0039nyztZLQ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
             
                Swal.fire({
                title: "Message has been sent successfully!",
                icon: "success"
              });
            
           
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

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
        <div className='lg:px-20'>
           <Helmet>
                <title>
                    Portfolio | Contact
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


            <div className='lg:flex gap-4 mt-16 mb-16'>
                <div className='bg-gray-700 lg:w-6/12 rounded-lg flex justify-center items-center'>
                    <form className='lg:bg-gray-600 shadow-2xl lg:p-12 rounded-lg animate__animated animate__zoomIn' ref={form} onSubmit={sendEmail}>
                    <h1 className='text-2xl text-green-400 font-Open font-bold'>Let's work together</h1>    
                    <label className='text-white font-bold font-Open'>Name</label> <br />
                    <input className='w-full p-2 rounded-lg' type="text" name="user_name" required /> <br />
                    <label className='text-white font-bold font-Open'>Email</label> <br />
                    <input className='w-full p-2 rounded-lg' type="email" name="user_email" required /> <br />
                    <label className='text-white font-bold font-Open'>Message</label> <br />
                    <textarea className='rounded-lg  font-bold font-Open' name="message" id="" cols="30" rows="5"></textarea> <br />
                    <input className='cursor-pointer bg-green-400 p-2 rounded-lg mb-8 ' type="submit" value="Send message" />
                    </form>
                </div>
                <div className='lg:w-6/12 mt-4 lg:mt-0 bg-gray-700 rounded-lg flex items-center justify-center'>
                    <div>
                        {/*Phone*/}
                        <div className='flex items-center gap-2 text-white text-2xl animate__animated animate__flipInX'>
                            <div><h1><IoCallOutline className='text-2xl text-green-400' /></h1></div>
                            <div>+8801758752528</div>
                        </div>
                         {/*Email*/}
                        <div className='flex items-center gap-2 text-white text-2xl animate__animated animate__flipInX'>
                            <div><h1><MdEmail className='text-2xl text-green-400'/></h1></div>
                            <div>nazrulislam.cse28@gmail.com</div>
                        </div>
                         {/*LinkedIn*/}
                        <div className='flex items-center gap-2 text-white text-2xl animate__animated animate__flipInX'>
                            <div><h1><FaGithub className='text-2xl text-green-400'/></h1></div>
                            <div><a className='text-sky-400' href="https://github.com/Nazrul144" target='_blank'>Github Link</a></div>
                        </div>
                         {/*LinkedIn*/}
                        <div className='flex items-center gap-2 text-white text-2xl animate__animated animate__flipInX'>
                            <div><h1><FaLinkedinIn className='text-2xl text-green-400'/></h1></div>
                            <div><a className='text-sky-400' href="https://www.linkedin.com/in/nazrul-islam-a6080730b" target='_blank'>LinkedIn</a></div>
                        </div>
                         {/*Facebook*/}
                        <div className='flex items-center gap-2 text-white text-2xl animate__animated animate__flipInX'>
                            <div><h1><FaFacebook className='text-2xl text-green-400'/></h1></div>
                            <div><a className='text-sky-400' href="https://www.facebook.com/profile.php?id=100007196595674" target='_blank'>Facebook</a></div>
                        </div>
                    
                  
                    </div>
                </div>
            </div>    

           
            
        </div>
    );
};

export default Contact;