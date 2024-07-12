import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';

const Service = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-900 text-white text-justify font-Open">
            <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                    <FaArrowRight className="ml-2 text-green-300" />
                    <h3 className="text-2xl font-bold mb-2 text-green-300 animate__animated animate__zoomInDown">Responsive Website Development:</h3>
                    
                </div>
                <p className='animate__animated animate__rotateIn'>
                I create websites that are fully responsive and optimized for various devices and screen sizes. I always ensure that the website provides a seamless user experience across desktops, tablets, and smartphones. My approach integrates the latest web technologies to deliver fast-loading, secure websites that meet the highest standards of performance and reliability. By prioritizing user-centric design principles, I ensure intuitive navigation and accessibility for all users, making the digital experience as enjoyable and efficient as possible. Whether it's a business website, an e-commerce platform, or a personal blog, my goal is to create a user-friendly environment that caters to the needs of the audience, providing an engaging and accessible online presence for my clients.
                </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-4">
          
                    <FaArrowRight className="ml-2 text-green-300" />
                    <h3 className="text-2xl font-bold text-green-300">Front-End Development:</h3>

                </div>
                <p className='animate__animated animate__rotateIn'>
                As a front-end developer, I am passionate about creating visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React. I adhere to best practices for UI/UX design, ensuring that every project I work on provides an engaging and satisfying user experience. My goal is to blend creativity with technical proficiency to deliver interfaces that are not only stunning in appearance but also intuitive and enjoyable to use. By focusing on both aesthetics and functionality, I strive to elevate user interaction and satisfaction to new heights. My commitment is to craft seamless digital experiences that resonate with users, making their interactions with web applications both memorable and efficient.
                </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-4">
                 
                    <FaArrowRight className="ml-2 text-white" />
                    <h3 className="text-2xl font-bold mb-2 text-green-300">Website Maintenance and Support:</h3>
                </div>
             
                <p className='animate__animated animate__flipInY'>
                I provide ongoing maintenance services to keep websites secure, updated, and functioning smoothly. This includes regular software updates, security checks, and performance optimizations to ensure that the website remains in peak condition. I actively monitor for potential threats and vulnerabilities, implementing timely patches and upgrades to safeguard against security breaches. Additionally, I offer prompt and efficient technical support to address client queries and issues. My goal is to respond swiftly to any concerns, providing effective solutions to ensure minimal downtime and a seamless user experience. By delivering these comprehensive services, I help my clients maintain a robust online presence, allowing them to focus on their core business objectives without worrying about website-related challenges.
                </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  
                    <FaArrowRight className="ml-2 text-white" />
                    <h3 className="text-2xl font-bold mb-2 text-green-300">SEO Optimization:</h3>
                </div>
               
                <p className=' animate__animated animate__lightSpeedInRight'>
                I provide comprehensive ongoing maintenance services to ensure websites remain secure, updated, and functioning smoothly. My services include regular updates to the website's software and plugins, monitoring for security vulnerabilities, and implementing necessary fixes to prevent any potential threats. Additionally, I perform routine performance optimizations to ensure fast load times and efficient operation. I also provide prompt and reliable technical support to address client queries and issues, ensuring that any concerns are resolved quickly and effectively. My goal is to deliver peace of mind to my clients, knowing their websites are in capable hands, and allowing them to focus on their core business activities.
                </p>
            </div>
        </div>
    );
};

export default Service;
