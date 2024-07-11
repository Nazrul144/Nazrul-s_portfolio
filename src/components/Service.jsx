import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Service = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-900 text-white text-justify font-Open">
            <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-green-300">01</span>
                    <FaArrowRight className="ml-2 text-green-300" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-300">Responsive Website Development:</h3>
                <p>
                I create websites that are fully responsive and optimized for various devices and screen sizes and I always make sure that the website provides a seamless user experience across desktops, tablets, and smartphones.
                My approach integrates the latest web technologies to deliver fast-loading and secure websites. I prioritize user-centric design principles to ensure intuitive navigation and accessibility for all users."
                </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-green-300">02</span>
                    <FaArrowRight className="ml-2 text-green-300" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-300">Front-End Development:</h3>
                <p>
               As a front-end developer, I am pretty fond of developing visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React. Implement best practices for UI/UX design to enhance user interaction and satisfaction.
               So, as a front-end developer, my goal is to blend creativity with technical proficiency to deliver interfaces that not only look stunning but also elevate user interaction and satisfaction to new heights.
                </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-green-300">03</span>
                    <FaArrowRight className="ml-2 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-300">Website Maintenance and Support:</h3>
                <p>
                I provide ongoing maintenance services to keep websites secure, updated, and functioning smoothly. I also Provide technical support to address client queries and issues promptly.
                </p>
            </div>
            <div className="flex flex-col items-start p-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-green-300">04</span>
                    <FaArrowRight className="ml-2 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-300">SEO Optimization:</h3>
                <p>Implement basic SEO practices to enhance website visibility and improve search engine rankings, ensuring clients' websites reach their target audience effectively and achieve business goals.</p>
            </div>
        </div>
    );
};

export default Service;
