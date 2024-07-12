import React, { useState } from 'react';
import { FaArrowRight, FaFacebook, FaHtml5, FaLinkedinIn, FaNode, FaReact } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'

import problem1 from '../../public/logo/problem1.png'
import graphic from '../../public/logo/graphic.png'
import language from '../../public/logo/language.png'
import developer from '../../public/logo/developer.png'



import html from '../../public/logo/skills/html.png'
import firebase from '../../public/logo/skills/firebase.png'
import js from '../../public/logo/skills/js.png'
import mongodb from '../../public/logo/skills/mongodb.png'
import node from '../../public/logo/skills/node.png'
import react from '../../public/logo/skills/React.webp'
import tailwind from '../../public/logo/skills/tailwind.png'
import express from '../../public/logo/skills/express.png'


//Importing image for the website:
import house from '../../public/website image/house.jpg'
import furniture from '../../public/website image/furniture.jpg'
import hotel from '../../public/website image/hotel.jpg'
import { RiFirebaseFill, RiTailwindCssLine } from 'react-icons/ri';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('');

    const experience = () => {
        setActiveSection('experience');
    };

    const education = () => {
        setActiveSection('education');
    };
    const skills = () => {
        setActiveSection('skills');
    };
    const about = () => {
        setActiveSection('about');
    };

    //Typewriting Function:
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }

    return (
        <div>
            <div className='lg:flex gap-16 mt-8 lg:px-20'>
                <div className='lg:w-2/5'>
            <div className='ml-4'>
           <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal', fontSize:'2rem' }}>
      
        <span style={{ color: 'gold', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Why hire me?']}
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
                    <p className='font-Open text-white ml-4 mt-4 text-justify mr-2 animate__animated animate__fadeInDown '> As a junior web developer, I bring a fresh perspective and a strong foundation in modern web technologies. My passion for creating visually appealing and user-friendly interfaces ensures that every project I undertake is not only functional but also engaging. I am proficient in HTML, CSS, JavaScript, and frameworks like React, and I prioritize responsive design to deliver seamless experiences across all devices. Additionally, my commitment to continuous learning and staying updated with industry trends allows me to implement the latest best practices in UI/UX design. By hiring me, you will gain a dedicated and innovative developer who is eager to contribute to your team's success and grow alongside your projects.</p>
                 
                    <div className='lg:w-2/4 mx-auto mt-12 max-h-screen'>
                        <div className='text-center mb-2'>
                            <button onClick={experience} className='w-full p-2 bg-green-300 rounded-lg font-bold font-Open hover:bg-[tomato] duration-1000 ease-in-out hover:text-white border-none'>Experience</button>
                        </div>
                        <div className=' text-center mb-2'>
                            <button onClick={education} className='w-full p-2 bg-green-300 rounded-lg font-bold font-Open hover:bg-[tomato] duration-1000 ease-in-out hover:text-white border-none'>Education</button>
                        </div>
                        <div className=' text-center mb-2'>
                            <button onClick={skills} className='w-full p-2 bg-green-300 rounded-lg font-bold font-Open hover:bg-[tomato] duration-1000 ease-in-out hover:text-white border-none'>Skills</button>
                        </div>
                        <div className=' text-center mb-2'>
                            <button onClick={about} className='w-full p-2 bg-green-300 rounded-lg font-bold font-Open hover:bg-[tomato] duration-1000 ease-in-out hover:text-white border-none'>About me</button>
                        </div>
                    </div>
                </div>
                <div className='lg:w-3/5 '>
                    {activeSection === 'experience' && (
                        <>
                            <h1 className='text-3xl font-Open text-white font-bold mr-2 ml-2 lg:ml-8 mt-8 animate__animated animate__flipInX'>My Experience</h1>
                            <p className='font-Open text-white ml-2 mr-2 lg:ml-8 mt-4 text-justify mb-2 animate__animated animate__flipInX'>As a junior web developer, I have some experiences on this field. I also have other experiences that I have gained from my University. </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-900 text-white text-justify font-Open">
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__zoomIn">
                                  <div>
                                    <img className='h-40 w-40 mx-auto' src={developer} alt="image" />
                                  <h3 className="text-2xl font-bold text-purple-400">Front-End Development</h3>
                                  </div>
                                    <p className='mt-2'>
                                    I have sustainable experience on frontend web development and 
                                    creating responsive and visually appealing user interfaces using HTML, CSS, JavaScript, React, Node.js and MongoDb as well.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__zoomIn">
                                  <div>
                                    <img className='h-40 w-40 ml-16' src={problem1} alt="image" />
                                  <h3 className="text-2xl font-bold text-purple-400 text-center ml-14">Problem Solving</h3>
                                  </div>
                                    <p className='mt-2'>
                                    Currently, I am actively engaged in a problem-solving club where I tackle various types of challenges using the C programming language. And I have been doing it for 1 years.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__zoomIn">
                                  <div>
                                    <img className='h-30 w-40 ml-16' src={graphic} alt="image" />
                                  <h3 className="text-2xl font-bold text-purple-400 ml-14 ">Graphics Design</h3>
                                  </div>
                                    <p className='mt-2'>
                                    I specialize in logo design using Photoshop, ensuring each design reflects the unique essence of the brand while maintaining a high standard of aesthetic appeal and functionality
                                    </p>
                                </div>
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__zoomIn">
                                  <div>
                                    <img className='h-40 w-40 ml-16' src={language} alt="" />
                                  <h3 className="text-2xl font-bold text-purple-400 ml-4">International Language</h3>
                                  </div>
                                    <p className='mt-2'>
                                    I have received training in IELTS from the British Council of Bangladesh, enabling me to confidently communicate with people from different countries in English.
                                    </p>
                                </div>
                             
                              
                              
                            </div>
                        </>
                    )}

                    {activeSection === 'education' && (
                        <>
                            <h1 className='text-3xl font-Open text-white font-bold ml-2 lg:ml-8 mt-8 animate__animated animate__flipInX'>My Education</h1>
                            <p className='font-Open text-white ml-2 mr-2 lg:ml-8 mt-4 text-justify mb-2'>Here are my academic achievements and awards that highlight my educational journey.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-900 text-white text-justify font-Open">
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeInDown">
                                  <div>
                                     <div className="flex items-center mb-4">
                                    <span className="text-3xl font-bold text-green-300">2021</span>
                                    <FaArrowRight className="ml-2 text-green-300" />
                                    <span className="text-3xl font-bold text-green-300">2025</span>
                                    </div>
                                  <h3 className="text-2xl font-bold text-orange-400">BSC in CSE</h3>
                                  </div>
                                    <p className='mt-2'>
                                    I am currently pursuing a BSc in Computer Science and Engineering at Green University of Bangladesh.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeInDown">
                                  <div>
                                     <div className="flex items-center mb-4">
                                    <span className="text-3xl font-bold text-green-300">2012</span>
                                    <FaArrowRight className="ml-2 text-green-300" />
                                    <span className="text-3xl font-bold text-green-300">2016</span>
                                    </div>
                                  <h3 className="text-2xl font-bold text-orange-400">Diploma in Marine</h3>
                                  </div>
                                    <p className='mt-2'>
                                    I completed a Diploma in Marine Technology at Infra Polytechnic Institute, Barisal, from 2012 to 2017.
                                    </p>
                                </div>



                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeInLeft">
                                  <div>
                                     <div className="flex items-center mb-4">
                                    <span className="text-3xl font-bold text-green-300">2012</span>
                                    
                                    </div>
                                  <h3 className="text-2xl font-bold text-orange-400">Dakhil</h3>
                                  </div>
                                    <p className='mt-2'>
                                    I completed my Dakhil certification from Aligonj Islamia Senior Alim Madrasha in 2012.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeInRight">
                                  <div>
                                     <div className="flex items-center mb-4">
                                    <span className="text-3xl font-bold text-green-300">2018</span>
                                    </div>
                                  <h3 className="text-2xl font-bold text-orange-400">IELTS</h3>
                                  </div>
                                    <p className='mt-2'>
                                    I have received training in IELTS from the British Council of Bangladesh, enabling me to confidently communicate with people from different countries in English.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeInUp">
                                  <div>
                                     <div className="flex items-center mb-4">
                                    <span className="text-3xl font-bold text-green-300">2024</span>
                                    </div>
                                  <h3 className="text-2xl font-bold text-orange-400">Web Development</h3>
                                  </div>
                                    <p className='mt-2'>
                                    I have successfully completed an extensive course in Web Development under the guidance of Jhankar Mahbub at Programming Hero in 2024.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeInUp">
                                  <div>
                                     <div className="flex items-center mb-4">
                                    <span className="text-3xl font-bold text-green-300">2020</span>
                                    </div>
                                  <h3 className="text-2xl font-bold text-orange-400">Graphic Design</h3>
                                  </div>
                                    <p className='mt-2'>
                                    I successfully completed a comprehensive course in Graphic Design at Creative IT in 2020.
                                    </p>
                                </div>

                           

                            </div>
                        </>
                    )}
                    {
                        activeSection === 'skills' && (
                            <>
                             <h1 className='text-3xl font-Open text-white font-bold ml-2 lg:ml-8 mt-8 animate__animated animate__flipInX'>My Skills</h1>
                            <p className='font-Open text-white ml-2 mr-2 lg:ml-8 mt-4 text-justify mb-2'>I have developed a comprehensive skill set that spans advanced front-end development with:</p>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-gray-900 text-white text-justify font-Open">
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__rotateIn">
                                   <div>
                                    <img  src={html} alt="image" />
                                   </div>
                                </div>

                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__rotateIn">
                                    <div>
                                        <img src={tailwind} alt="" />
                                    </div>
                                </div>



                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__rotateIn">
                                 <div>
                                    <img  src={js} alt="image" />
                                 </div>
                                </div>

                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__rotateIn">
                                  <div>
                                    <img src={react} alt="image" />
                                  </div>
                                </div>

                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__rotateIn">
                                 <div>
                                    <img src={firebase} alt="image" />
                                 </div>
                                </div>
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__rotateIn">
                                  <div>
                                    <img src={node} alt="image" />
                                  </div>
                                </div>
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__rotateIn">
                                  <div>
                                    <img src={express} alt="image" />
                                  </div>
                                </div>
                                <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md animate__animated animate__rotateIn">
                                  <div>
                                    <img src={mongodb} alt="image" />
                                  </div>
                                </div>

                           

                            </div>
                            </>
                        )
                    }
                    {
                        activeSection === 'about' && (
                            <>
                            <h1 className='text-3xl font-Open text-white font-bold ml-2 lg:ml-8 mt-8 animate__animated animate__flipInX'>About me.</h1>
                            <p className='font-Open text-white text-justify lg:ml-8 ml-2 mr-2 mt-4 animate__animated animate__fadeInDown'>Hi, I am Nazrul Islam, a passionate junior web developer with a keen interest in creating dynamic and user-friendly web applications. I have a solid foundation in HTML, CSS, Tailwind CSS, JavaScript, React, Firebase, Node.js, and MongoDB. I enjoy turning ideas into functional and visually appealing digital experiences.</p>
                            <div className='lg:flex gap-4 text-white font-Open ml-2 lg:ml-4 mt-4'>
    <div className="bg-gray-800 p-4 rounded-lg shadow-md animate__animated animate__fadeInUp ">
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
    <div className="bg-gray-800 p-4 rounded-lg shadow-md animate__animated animate__fadeInDown">
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

                            </>
                        )
                    }
                </div>
            </div>
            {/*Add Project*/}
           <div className='text-center'>
           <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal', fontSize:'3rem' }}>
      
        <span style={{ color: 'gold', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Best Projects']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            
          />
        </span>
            </h1>
           </div>
            <div className='grid lg:grid-cols-3 gap-4 lg:px-20 mt-16'>
               
                {/*Project-1*/}
                    <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img
                        src={house}
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className=" ml-4 items-center text-center">
                        <h2 className="card-title font-bold text-xl"> <FaArrowRight className=" text-black" />Regal House</h2>
                    </div>
                    <div className='ml-4 font-Open mt-2'>
                        <h1 className='font-bold text-sky-500'># Core Features:</h1>
                        <li className='font-bold'>Authentication</li>
                        <li className='font-bold'>Routing</li>
                        <li className='font-bold'>Good Usability</li>
                    </div>
                    <div>
                        <h1 className='font-bold text-sky-500 ml-4'># Used Technologies:</h1>
                        <h1 className='flex gap-2 text-2xl ml-4 mt-4'><FaHtml5 /> <RiTailwindCssLine /> <TbBrandJavascript /> <FaReact /><RiFirebaseFill />
                        <FaNode /> <SiMongodb />
                        </h1>
                    </div>
                    <div className='mt-4'>
                        <span className='font-bold ml-4 text-sky-400'># Description:</span>
                        <p className='ml-4 text-justify mr-4 pb-2'>

                        Regal House streamlines property management with an intuitive platform for managing estates and apartments. Our tools simplify listing properties, handling bookings, and tenant interactions. Join us at Regal House to make property management effortless and efficient.
                        </p>
                        <div className='ml-4'>
                        <li ><a className='text-sky-400 font-bold' href="https://royal-house-assignment-9.web.app" target='_blank'>Live Link</a></li>
                        <li><a className='text-sky-400 font-bold' href="https://github.com/Nazrul144/royal-house-assignment-9" target='_blank'>Github Link</a></li>
                        </div>
                    </div>

                    </div>

                 {/*Project-2*/}

                 <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img
                        src={furniture}
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className=" ml-4 items-center text-center">
                        <h2 className="card-title font-bold text-xl"> <FaArrowRight className=" text-black" />CraftedEcoChic</h2>
                    </div>
                    <div className='ml-4 font-Open mt-2'>
                        <h1 className='font-bold text-sky-500'># Core Features:</h1>
                        <li className='font-bold'>Dark Mode (theme)</li>
                        <li className='font-bold'>Authentication</li>
                        <li className='font-bold'>Filtering Functionality</li>

                        


                    </div>
                    <div>
                        <h1 className='font-bold text-sky-500 ml-4'># Used Technologies:</h1>
                        <h1 className='flex gap-2 text-2xl ml-4 mt-4'><FaHtml5 /> <RiTailwindCssLine /> <TbBrandJavascript /> <FaReact /><RiFirebaseFill />
                        <FaNode /> <SiMongodb />
                        </h1>
                    </div>
                    <div className='mt-4'>
                        <span className='font-bold ml-4 text-sky-400'># Description:</span>
                        <p className='ml-4 text-justify mr-4 pb-2'>

                        CraftedEcoChic showcases eco-friendly products like chairs, tables, beds, and home décor, all made from sustainable materials. Our platform, built with HTML, CSS, Tailwind CSS, JavaScript, React, Firebase, and Slick Slider, offers a seamless browsing experience focused on environmental consciousness and craftsmanship.
                        </p>
                        <div className='ml-4'>
                        <li ><a className='text-sky-400 font-bold' href="https://assignment-10-b4b97.web.app" target='_blank'>Live Link</a></li>
                        <li><a className='text-sky-400 font-bold' href="https://github.com/Nazrul144/assignment-10-client-side?tab=readme-ov-file" target='_blank'>Github Link</a></li>
                        </div>
                    </div>

                    </div>
                 {/*Project-3*/}

                 <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img
                        src={hotel}
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className=" ml-4 items-center text-center">
                        <h2 className="card-title font-bold text-xl"> <FaArrowRight className=" text-black" />Holiday Hive</h2>
                    </div>
                    <div className='ml-4 font-Open mt-2'>
                        <h1 className='font-bold text-sky-500'># Core Features:</h1>
                        <li className='font-bold'>Authentication</li>
                        <li className='font-bold'>Filtering by price</li>
                        <li className='font-bold'>CRUD Operations </li>

    

                    </div>
                    <div>
                        <h1 className='font-bold text-sky-500 ml-4'># Used Technologies:</h1>
                        <h1 className='flex gap-2 text-2xl ml-4 mt-4'><FaHtml5 /> <RiTailwindCssLine /> <TbBrandJavascript /> <FaReact /><RiFirebaseFill />
                        <FaNode /> <SiMongodb />
                        </h1>
                    </div>
                    <div className='mt-4'>
                        <span className='font-bold ml-4 text-sky-400'># Description:</span>
                        <p className='ml-4 text-justify mr-4 pb-2'>

                        Holiday Hive streamlines holiday planning with a wide selection of accommodations, from luxurious resorts to cozy cottages. Our intuitive interface makes it easy to discover, plan, and book your ideal vacation.
                        </p>
                        <div className='ml-4'>
                        <li ><a className='text-sky-400 font-bold' href="https://hotel-booking-f7554.web.app/" target='_blank'>Live Link</a></li>
                        <li><a className='text-sky-400 font-bold' href="https://github.com/Nazrul144/hotel-booking-client-side?tab=readme-ov-file" target='_blank'>Github Link</a></li>
                        </div>
                    </div>

                    </div>

            </div>
        </div>
    );
};

export default Portfolio;
